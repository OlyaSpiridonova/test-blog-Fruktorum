import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({ blocks: null }),
  actions: {
    async getData(pathname) {
      const baseURL = useRuntimeConfig();
      const url = new URL(baseURL.public.apiBase);
      url.searchParams.append("path", pathname);

      const response = await fetch(url);
      const respData = await response.json();
      if (!response.ok) {
        const error = new Error(respData.message || "Failed to send request");
        throw error;
      }
      this.blocks = respData;
    },
  },
});
