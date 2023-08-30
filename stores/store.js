import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({ blocks: null }),
  actions: {
    async getData(pathname) {
      const baseURL = useRuntimeConfig();
      const url = new URL(baseURL.public.apiBase);
      url.searchParams.append("path", pathname);

      this.blocks = await fetch(url).then((response) => {
        if (response.ok) return response.json();
        else return null;
      });
    },
  },
});
