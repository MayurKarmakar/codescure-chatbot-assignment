import { Chatbox } from "@/components/chatbox";
import dynamic from "next/dynamic";

function Home() {
  return <Chatbox />;
}
export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
