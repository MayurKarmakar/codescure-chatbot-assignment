"use client";

import { useChatMessage } from "@/hooks/use-chatmessage";
import { ChatHeader } from "./chat-header";
import { ChatInput } from "./chat-input";
import { ChatMessages } from "./chat-messages";

import { Message } from "@/schemas/zodSchemas";
import { generateRandomSentence } from "@/utils/helpers";
import dayjs from "dayjs";
import { useEffect, useRef } from "react";

function Chatbox() {
  const messageDivRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useChatMessage();

  useEffect(() => {
    setTimeout(() => {
      messageDivRef.current?.scrollTo({
        top: 10000000,
        behavior: "smooth",
      });
    }, 100);
  }, [messages]);

  async function handleNewMessage(message: Message) {
    const botMessage: Message = {
      text: generateRandomSentence(),
      timestamp: dayjs().unix(),
      from: "bot",
    };
    setMessages([...messages, message, botMessage]);
  }
  return (
    <div className="flex flex-col h-full md:border md:border-[#3c3e42] md:rounded-md">
      <ChatHeader
        onNewSession={() => {
          setMessages([]);
        }}
      />
      <ChatMessages messages={messages} ref={messageDivRef} />
      <ChatInput onMessage={handleNewMessage} />
    </div>
  );
}

export { Chatbox };

