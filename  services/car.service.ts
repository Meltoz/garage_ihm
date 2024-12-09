// services/car.service.ts
import { $fetch } from 'ofetch';
import type { CarList } from '../models/car.schema';

export const createCarService = (config: ReturnType<typeof useRuntimeConfig>) => ({
    async getAllCars(): Promise<CarList> {
        return (await $fetch('/api/users', {
            baseURL: config.public.apiBaseUrl,
        })).data;
    },

    async createCar(car: { name: string; fuelType: string }): Promise<void> {
        await $fetch('/api/users', {
            method: 'POST',
            baseURL: config.public.apiBaseUrl,
            body: JSON.stringify(car),
        });
    },

    async deleteCar(id: number): Promise<void> {
        await $fetch(`/api/users/${id}`, {
            method: 'DELETE',
            baseURL: config.public.apiBaseUrl,
        });
    },
});