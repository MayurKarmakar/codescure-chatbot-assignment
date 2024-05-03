import WelcomeLogo from "@/assets/images/file.png";
import Image from "next/image";
function WelcomeMessage() {
  return (
    <div className="flex flex-col h-48 items-center dark:text-[#d1d2d3] py-4">
      <div className="flex flex-row h-full w-full  my-4 justify-center items-center gap-2">
        <Image src={WelcomeLogo} alt="welcome-logo" width={100} height={100} />
        <div className="flex flex-col h-full items-center justify-center">
          <h1 className="text-[28px]">Welcome to Codescure Chatbot</h1>
          <h1 className="text-[28px]">How can I help you today?</h1>
        </div>
      </div>
      <p className="text-[15px]">
        Our chat assistant empowers you with the knowledge and support you need,
        right when you need it.
      </p>
    </div>
  );
}

export default WelcomeMessage;
