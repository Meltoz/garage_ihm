import {z} from "zod";

export const CarSchema = z.object({
    fuelType: z.string(),
    brand: z.string(),
    model: z.string(),
    door: z.number().optional(),
    gearbox: z.string(),
    kilometers: z.number(),
    price: z.number(),
    year: z.number(),
});

export type Car = z.infer<typeof CarSchema>;