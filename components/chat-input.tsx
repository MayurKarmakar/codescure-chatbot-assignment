import { useState } from "react";
import { ArrowRightButton } from "./arrow-button";
import { Message } from "@/schemas/zodSchemas";
import dayjs from "dayjs";

type ChatInputProps = {
  onMessage: (message: Message) => void;
};

function ChatInput({ onMessage }: ChatInputProps) {
  const [message, setMessage] = useState("");
  const [rowCount, setRowCount] = useState(3);

  function handleNewMessage() {
    if (!message) return;
    onMessage({
      date: dayjs(),
      from: "user",
      text: message,
    });

    setMessage("");
  }

  function handleIncreaseRowCount() {
    if (rowCount < 10) {
      setRowCount((prevCount) => prevCount + 1);
    }
  }

  function handleDecreaseRowCount() {
    if (rowCount >= 3) {
      setRowCount((prevCount) => prevCount - 1);
    }
  }

  return (
    <div className="dark:border-[#565856] border rounded-md p-3 dark:bg-[#222529] focus:border-[#818385] m-3">
      <textarea
        value={message}
        className="w-full bg-inherit dark:text-[#c7c8c9] focus:outline-none placeholder-[#7a7c7e] overflow-hidden"
        onChange={(e) => setMessage(e.target.value)}
        rows={rowCount}
        placeholder="Message"
        onKeyDown={(e) => {
          if (e.code === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleNewMessage();
            return;
          }
          if (e.code === "Enter" && e.shiftKey) {
            handleIncreaseRowCount();
            return;
          }

          if (
            (e.code === "Backspace" && e.shiftKey) ||
            e.code === "Backspace"
          ) {
            handleDecreaseRowCount();
            return;
          }
        }}
      />
      <div className="flex w-full">
        <button
          onClick={handleNewMessage}
          className="h-[28px] w-9 dark:text-gray-300 bg-[#007a5a] border-[#66af9c] hover:bg-[#148567] rounded-md p-1 ml-auto"
        >
          <ArrowRightButton />
        </button>
      </div>
    </div>
  );
}

export { ChatInput };
