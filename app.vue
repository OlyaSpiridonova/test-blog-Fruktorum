<template>
  <NuxtLayout :name="default">
    <section v-if="store.blocks" v-for="block in store.blocks.body">
      <component
        :is="Component(block.type)"
        :id="block.id"
        :data="block.data"
      />
    </section>
  </NuxtLayout>
</template>

<script setup>
import { useStore } from "@/stores/store";

const route = useRoute();
const store = useStore();

watch(route, () => store.getData(route.href), {
  deep: true,
  immediate: true,
});

const metaTitle = computed(() =>
  store.blocks ? store.blocks.meta.title : "Default title"
);
const metaDescription = computed(() =>
  store.blocks ? store.blocks.meta.description : "Default description"
);

useSeoMeta({
  title: () => metaTitle.value,
  description: () => metaDescription.value,
});

const article_intro_block = resolveComponent("ArticleIntroBlock");
const text_block = resolveComponent("TextBlock");
const image_block = resolveComponent("ImageBlock");
const slider_block = resolveComponent("SliderBlock");
const subscribe_form_block = resolveComponent("SubscribeFormBlock");
const article_list_block = resolveComponent("ArticleListBlock");
const cta_form_block = resolveComponent("CtaFormBlock");

function Component(str) {
  switch (str) {
    case "article_list_block":
      return article_list_block;
      break;
    case "image_block":
      return image_block;
      break;
    case "text_block":
      return text_block;
      break;
    case "subscribe_form_block":
      return subscribe_form_block;
      break;
    case "slider_block":
      return slider_block;
      break;
    case "article_intro_block":
      return article_intro_block;
      break;
    case "cta_form_block":
      return cta_form_block;
      break;
    default:
      break;
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Open+Sans:wght@400;600;700;800&display=swap");
* {
  max-width: 1340px;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  @media (max-width: 1200px) {
    max-width: 960px;
  }
  @media (max-width: 959px) {
    max-width: 780px;
  }
}
html {
  margin: 0 auto;
}
</style>
