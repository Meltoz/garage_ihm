import { z } from "zod";
import { CarSchema } from "./car";

export const AnnouncementSchema = z.object({
  id: z.number().min(0),
  title: z.string(),
  content: z.string(),
  car: CarSchema,
});

export const AnnouncementListSchema = z.array(AnnouncementSchema);

export type Announcement = z.infer<typeof AnnouncementSchema>;
export type AnnouncementList = z.infer<typeof AnnouncementListSchema>;
