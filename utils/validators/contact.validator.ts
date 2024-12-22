import {z} from "zod";

export const ContactSchema = z.object({
    email: z.string().email().trim().min(3),
    subject: z.string().trim().min(5, 'Le sujet doit faire au moins 5 caractères').max(50),
    message: z.string().trim().min(5, 'Le message doit faire au moins 5 caractères')
});

export type ContactData = z.infer<typeof ContactSchema>;
export type ContactErrors = Partial<Record<keyof ContactData, string>>;