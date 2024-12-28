import { $fetch } from "ofetch";
import { useRuntimeConfig } from "#app";

export const useFetchCustom = async (url: string, options = {}) => {
  const config = useRuntimeConfig();
  const response = await $fetch(url, {
    baseURL: config.public.apiBaseUrl,
    ...options,
  });
  return response;
};
