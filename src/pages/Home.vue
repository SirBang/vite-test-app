<script setup>

import Table from "../components/Table.vue"
import ModalContent from "../components/ModalContent.vue";
import { ref,computed} from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  msg: String,
})

const router = useRouter();
const inputTitleValue = ref('');
const inputBrandValue = ref('');
const brand_sort = ref(false);
const title_sort = ref(false);

const BrandSort = () => {
    brand_sort.value = !brand_sort.value;
};
const TitleSort = () => {
    title_sort.value = !title_sort.value;
};

const titleSortIcon = computed(() => {
  return title_sort.value ? 'up-a-z' : 'down-z-a';
});
const brandSortIcon = computed(() => {
  return brand_sort.value ? 'up-a-z' : 'down-z-a';
});

const handleInputTitleChange = () => {
  // Handle the input change
  if(inputTitleValue.value !=="")
  router?.push({ path: '/products/search', query: { q:inputTitleValue.value.trim() } });
  else
  router?.push({ path: '/products', query: { limit:10, skip:0} });
};
const handleInputBrandChange = () => {
  // Handle the input change
  if(inputBrandValue.value !=="")
  router?.push({ path: '/products/search', query: { q:inputBrandValue.value.trim() } });
  else
  router?.push({ path: '/products', query: { limit:10, skip:0} });
};
</script>

<template>
  <div>
    <h1 class="text-3xl mb-11">Products Information</h1>
    <div class="flex w-full">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label @click="TitleSort" class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-title">
            <i :class="`fa-solid fa-arrow-${titleSortIcon}`"></i>
            Title
          </label>
        </div>
        <div class="md:w-2/3">
          <input placeholder="Enter Title" v-model="inputTitleValue" @input="handleInputTitleChange"
             class="appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
             id="inline-title" type="text">
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label @click="BrandSort"
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-brand">
            <i :class="`fa-solid fa-arrow-${brandSortIcon}`"></i>
            Brand
          </label>
        </div>
        <div class="md:w-2/3">
          <input placeholder="Enter Brand" v-model="inputBrandValue" @input="handleInputBrandChange"
             class=" appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-brand" type="text">
        </div>
      </div>
    </div>
    
    <ModalContent/>
    <Table :brand_sort="brand_sort" :title_sort="title_sort"/>
  </div>
</template>