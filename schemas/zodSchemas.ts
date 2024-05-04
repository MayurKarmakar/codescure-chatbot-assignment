import z from "zod";
// import dayjs, { type Dayjs } from 'dayjs';

export const messageSchema = z.object({
  text: z.string(),
  from: z.enum(["bot", "user"]),
  // date: z.instanceof(dayjs as unknown as typeof Dayjs),
  timestamp: z.number(),
});

export const messagesSchema = z.array(messageSchema);

export type Message = z.infer<typeof messageSchema>;
