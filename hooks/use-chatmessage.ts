"use client";
import { Message, messagesSchema } from "@/schemas/zodSchemas";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

function getStoredMessages(): Message[] {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("messages");
    if (saved) {
      let json: unknown;
      try {
        json = JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }

      const validated = messagesSchema.safeParse(json);

      if (!validated.success) {
        throw new Error("validation failed for serialized messages");
      }

      return validated.data;
    }
  }
  return [];
}

function useChatMessage(): [Message[], Dispatch<SetStateAction<Message[]>>] {
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
