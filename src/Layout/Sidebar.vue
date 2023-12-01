<template>
    <aside id="default-sidebar" class="h-screen transition-transform -translate-x-full sm:translate-x-0 pl-0 p-7" aria-label="Sidebar">
        <div class="h-full overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <h1 class="text-2xl mb-11 ml-6 text-blue-700 font-bold">Sales.</h1>
            <ul class="space-y-2 font-medium">
            <li v-for="menuItem in menuItems" :key="menuItem.id" class="border-l-4 hover:border-l-5 hover:border-blue-500">
                <a href="#" class="flex items-center text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group p-5 pl-7">
                    <i :class="[menuItem.icon, menuItem.title === 'Dashboard' ? 'text-blue-500' : '']"></i>
                    <span class="flex-1 ms-3 whitespace-nowrap" :class="{ 'text-blue-500': menuItem.title === 'Dashboard' }">{{ menuItem.title }}</span>
                </a>
            </li>
            </ul>
        </div>
    </aside>
</template>
<script>

    export default {
        data() {
            return {
            menuItems: [
                { id: 1, title: 'Dashboard', path: '/' ,icon:"fas fa-home"},
                { id: 2, title: 'Lab Test', path: '/about',icon:"fa-solid fa-vials"},
                { id: 3, title: 'Appointment', path: '/contact',icon:"fa-solid fa-calendar-check" },
                { id: 3, title: 'Medicine Order', path: '/contact',icon:"fa-solid fa-notes-medical"},
                { id: 3, title: 'Message', path: '/contact',icon:"fa-solid fa-message"},
                { id: 3, title: 'Payment', path: '/contact',icon:"fa-solid fa-wallet"},
                { id: 3, title: 'Settings', path: '/contact',icon:"fa fa-cog"}
            ]
            };
        }
    };
</script>

