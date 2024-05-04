import WelcomeLogo from "@/assets/images/file.webp";
import Image from "next/image";
function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center dark:text-[#d1d2d3] py-2 md:py-4 gap-0 md:gap-5 px-2 sm:px-0">
      <div className="flex flex-col md:flex-row h-full md:w-full my-2 md:my-4 justify-center items-center gap-1 md:gap-2">
        <Image
          src={WelcomeLogo}
          alt="welcome-logo"
          className="h-[75px] w-[75px] md:h-[100px] md:w-[100px]"
        />
        <div className="flex flex-col h-full items-center justify-center">
          <h1 className="text-[20px] md:text-[28px] text-center">
            Welcome to Codescure Chatbot
          </h1>
          <h1 className="text-[20px] md:text-[28px] text-center">
            How can I help you today?
          </h1>
        </div>
      </div>
      <p className="text-[15px] text-center">
        Our chat assistant empowers you with the knowledge and support you need,
        right when you need it.
      </p>
    </div>
  );
}

export default WelcomeMessage;
