interface ChatHeaderProps {
  onNewSession: VoidFunction;
}

function ChatHeader({ onNewSession }: ChatHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row h-auto items-center justify-center border-b-2 border-[#3c3e42] px-5 dark:text-gray-300 text-lg py-3 gap-5">
      <p className="text-[18px] font-[700] leading-[1.33334] tracking-normal">
        # Codescure Chatbot Assignment
      </p>
      <button
        onClick={onNewSession}
        className="md:ml-auto text-sm bg-gray-700 border-gray-700 hover:bg-gray-600 rounded-md px-3 dark:text-white p-2"
      >
        New Session
      </button>
    </div>
  );
}

export { ChatHeader };
