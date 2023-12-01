<template>
  <div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header" class="px-6 py-4">{{ header }}</th>
        </tr>
      </thead>
      <tbody v-if="items.length>0">
        <tr v-for="item in displayedItems" :key="item.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <td 
            :class="header === 'Title' ? 'text-blue-500' : ''" 
            v-for="(header, index) in headers" 
            :key="header" 
            class="px-6 py-4"
            @click="header === 'Title' ? showItem(item.id) : null"
          >
            {{item[header.toLowerCase()]}}
          </td>
        </tr>
      </tbody>
    </table>
    <nav class="flex justify-center">
      <ul class="inline-flex -space-x-px text-sm">
        <li>
          <a href="#" @click="previousPage()" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
        </li>
        <li v-for="page in totalPages" :key="page">
          <a href="#" @click="goToPage(page)" :class="{ 'bg-blue-600 text-slate-50': page === currentPage }" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{ page }}</a>
        </li>
        <li>
          <a href="#" @click="nextPage()" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
        </li>
      </ul>
    </nav>
  </div>
 
</template>

<script>
import { fetchHelper } from '../helper/fetchHelper';
export default {
  props:['openModal'],
  data() {
    return {
      headers: ["Id","Title", "Category", "Brand", "Price", "Stock", "Rating"],
      items: [],
      isLoading: false,
      error: null,
      currentPage: 1,
      itemsPerPage: 10,
      total:0
    };
  },
  computed: {
    totalPages() {
      const page = Math.ceil(this.total/this.itemsPerPage)
      return page<0||!page?1:page;
    },
    displayedItems() {
      return this.items;
    },
  },
  mounted() {
    this.updateQuery();
  },
  watch: {
  '$route'(to, from) {
      this.fetchData(to);
    }
  },
  methods: {
    fetchData(route){
      fetchHelper(route.fullPath, {
            method: 'GET',
          })
            .then(data => {
              // Handle the successful response
              if(data.products){
                this.items = data.products;
                this.total = data.total;
                this.itemsPerPage = data.limit;
              }else{
                this.$store.dispatch('setData', data);
                this.$store.dispatch('updateModal', true);
              }
              
            })
            .catch(error => {
              // Handle any errors
              console.error('Fetch error:', error);
              this.error = 'Error fetching data. Please try again later.';
              this.isLoading = false;
            });
    },  
    updateQuery() {
      this.isLoading = true;
      const start = (this.currentPage - 1) * this.itemsPerPage;
      this.$router?.push({ path: '/products', query: { limit:this.itemsPerPage, skip:start} });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updateQuery();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.updateQuery();
      }
    },
    goToPage(page) {
      this.currentPage = page;
      this.updateQuery();
    },
    showItem(id){
      this.$router?.push({ path: '/products/'+id});
    }
  },
};
</script>
