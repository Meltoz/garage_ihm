import {z} from "zod";

export const CarSchema = z.object({
    id: z.number().min(0),
    name: z.string(),
})

export const CarListSchema = z.array(CarSchema);

export type Car = z.infer<typeof CarSchema>;
export type CarList = z.infer<typeof CarListSchema>;