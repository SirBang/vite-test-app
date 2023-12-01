<script setup>
import Home from './pages/Home.vue'
import Sidebar from './Layout/Sidebar.vue';
import Topbar from "./Layout/Topbar.vue"

</script>

<template>
  <div class="flex flex-row">
    <div class="">
      <Sidebar/>
    </div>
    <div class="flex flex-col w-full">
      <Topbar/>
      <Home/>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.home-layout{
  display: flex;
  flex-direction: column;
  width: 100%;
}
.main-layout{
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
