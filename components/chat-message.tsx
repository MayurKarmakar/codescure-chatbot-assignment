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
    <div className="flex h-auto w-full hover:bg-[#282c30] py-2 px-5 items-start">
      <div className="flex flex-row w-full h-auto gap-2 items-start dark:text-gray-300 shrink-0">
        <div className="h-[36px] w-[38px]">
          <Image
            src={userLogo}
            alt="user"
            className="object-fill rounded-md !h-[36px] !w-[38px]"
            height={35}
            width={58}
          />
        </div>
        <div className="flex flex-col h-auto items-start justify-start">
          <div className="flex flex-row w-full items-end gap-2">
            <p className="text-[15px] font-bold text-gray-300">{userName}</p>
            <p className="text-[12px] font-light text-gray-400">
              {formatDate(message.date, "Do MMM [at] h:mm:ssA", false)}
            </p>
          </div>
          <p className="text-[15px] select-text selection:bg-gray-500 selection:text-white break-words tracking-normal text-[rgba(209, 210, 211, 1)]">
            {message.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export { ChatMessage };

