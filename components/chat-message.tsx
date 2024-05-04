import BotImage from "@/assets/images/bot.jpg";
import UserImage from "@/assets/images/random-user.jpg";
import { Message } from "@/schemas/zodSchemas";
import { formatDate } from "@/utils/helpers";
import Image, { StaticImageData } from "next/image";

type ChatMessageProps = {
  message: Message;
};

function ChatMessage({ message }: ChatMessageProps) {
  let userLogo: StaticImageData = UserImage;
  let userName = "User";

  if (message.from === "bot") {
    userLogo = BotImage;
    userName = "Bot";
  }

  return (
    <div className="flex h-auto w-full hover:bg-[#282c30] py-2 px-4 md:px-5 items-start">
      <div className="flex flex-row w-full gap-4 dark:text-gray-300 shrink-0">
        <Image
          src={userLogo}
          alt="user"
          className="object-fill rounded-md !h-[36px] !w-[38px]"
          height={35}
          width={58}
        />
        <div className="flex flex-col h-auto items-start justify-start">
          <div className="flex flex-row w-full items-center gap-2">
            <p className="text-[13px] md:text-[15px] font-bold text-gray-300">
              {userName}
            </p>
            <p className="text-[11px] md:text-[12px] font-light text-gray-400">
              {formatDate(message.timestamp, "Do MMM [at] h:mm:ssA", false)}
            </p>
          </div>
          <pre>
            <p className="text-[13px] md:text-[15px] text-ellipsis overflow-hidden select-text selection:bg-gray-500 selection:text-white text-wrap tracking-normal text-[rgba(209, 210, 211, 1)]">
              {message.text}
            </p>
          </pre>
        </div>
      </div>
    </div>
  );
}

export { ChatMessage };
