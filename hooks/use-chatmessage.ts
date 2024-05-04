"use client";
import { Message, messagesSchema } from "@/schemas/zodSchemas";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UseChatMessage = [Message[], Dispatch<SetStateAction<Message[]>>];

function getStoredMessages(): Message[] {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("messages");
    if (saved) {
      let json: unknown;
      try {
        json = JSON.parse(saved);
      } catch (e) {
        console.log("error stored messages:: ", e);
      }

      const validated = messagesSchema.safeParse(json);
      if (!validated.success) {
        console.warn("validation failed for serialized messages");
        return [];
      }

      return validated.data;
    }
  }
  return [];
}

function useChatMessage(): UseChatMessage {
  const [messages, setMessages] = useState<Message[]>(() => {
    return getStoredMessages();
  });

  useEffect(() => {
    if (typeof window !== "undefined")
      localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  return [messages, setMessages];
}

export { useChatMessage };
