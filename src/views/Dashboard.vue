<script setup>
import router from '../router'
</script>

<template>
    <div class="ml-32 pt-18 px-4 md:px-22">
        <h1 class="flex items-center gap-2 text-4xl text-blue-700 font-bold"><img src="../assets/menu.png" width="50"
                height="50" /> Dashboard
        </h1>
        <div class="flex flex-col gap-12 mt-12">
            <h3 class=" text-3xl font-bold">Summaries</h3>
            <div class="flex gap-8 flex-wrap max-w-[90rem]">
                <button class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                     hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    Total Records
                </button>

                <button class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                     hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    Records Pending
                </button>

                <button class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                     hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    Processes Pending
                </button>

                <button class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                     hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    Submitted Today
                </button>

                <button class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                     hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    Submitted This Month
                </button>
            </div>
        </div>
        <div class="flex flex-col gap-12 mt-22">
            <h3 class=" text-3xl font-bold">Quick Menu</h3>
            <div class="flex gap-8 flex-wrap max-w-[90rem]">
                <button @click="router.push('/add-record')" class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                     hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    Add New Record
                </button>

                <button class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                    hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    View Past Records
                </button>

                <button class="min-w-[350px] cursor-pointer max-w-[28rem] bg-white border border-gray-400 py-4.5 rounded-lg text-start pl-3 shadow-[3px_3px_4px_rgba(0,0,0,.35)]
                    hover:bg-blue-700 hover:text-white transition-colors duration-300">
                    Processe New Records
                </button>
            </div>
        </div>
    </div>
</template>


<style scoped></style>
