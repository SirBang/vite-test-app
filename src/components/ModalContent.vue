<script setup lang="ts">
import { useStore } from 'vuex';
import {computed } from "vue";

const store = useStore();
const productData = computed(() => store?.getters?.getData);
const modalFlg = computed(() => store?.getters?.getModal);

const emit = defineEmits<{
  (e: 'confirm'): void
}>()

</script>
<template>
  
  <div>
    <!-- First modal -->
    <vue-final-modal v-model="modalFlg" classes="modal-container" content-class="modal-content"  @click="store.dispatch('updateModal', false);">
      <button class="modal__close" @click="store.dispatch('updateModal', false);">
        <mdi-close></mdi-close>
      </button>
      <span class="modal__title">Hello, vue-final-modal</span>
      <div class="modal__content">
        <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
              <img class="p-8 rounded-t-lg" :src="productData?.images[0]" alt="product image" />
          </a>
          <div class="px-5 pb-5">
              <a href="#">
                  <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{{productData?.title}}</h5>
              </a>
              <p>{{productData?.description}}</p>
              <div class="flex items-center mt-2.5 mb-5">
                  <div class="flex items-center space-x-1 rtl:space-x-reverse">
                      <svg  v-for="rating in Math.round(productData.rating)" :key="rating" 
                              class="w-4 h-4 text-yellow-300" 
                              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                              fill="currentColor" viewBox="0 0 22 20">
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                      </svg>
                  </div>
                  <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{{productData?.rating}}</span>
              </div>
              <div class="flex items-center justify-between">
                  <span class="text-3xl font-bold text-gray-900 dark:text-white">${{productData?.price}}</span>
                  <a @click="store.dispatch('updateModal', false);"
                     class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
              </div>
          </div>
        </div>
      </div>
    </vue-final-modal>
  </div>
</template>

<style scoped>
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  max-height: 90%;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  margin: 0 2rem 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__content {
  flex-grow: 1;
  overflow-y: auto;
}
.modal__action {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  padding: 1rem 0 0;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>

<style scoped>
.dark-mode div::v-deep .modal-content {
  border-color: #2d3748;
  background-color: #1a202c;
}
</style>