<script setup>
import Icons from './Icons.vue';

import router from '../router';

const props = defineProps({
    modelValue: Boolean
});

const emit = defineEmits(['update:modelValue']);

function toggleSidebar() {
    emit('update:modelValue', !props.modelValue);
}
</script>

<template>
    <div :class="[
        ' min-h-screen h-full  bg-white text-blue-700 font-bold text-xl flex flex-col items-center gap-7 pt-16 py-4 space-y-6 fixed top-0 left-0 transition-all duration-300 shadow-2xl shadow-black/60 z-50',
        props.modelValue ? 'w-68  px-4' : 'w-28 '
    ]">
        <div @click="toggleSidebar"
            class="transform hover:scale-110 transition-transform duration-300 cursor-pointer font-bold">
            <img src="../assets/logo.png" />
        </div>
        <div @click="router.push('/')"
            :class="['transform hover:scale-110 transition-transform duration-300 cursor-pointer flex  justify-between items-center', props.modelValue && 'w-50']">
            <img src="../assets/menu.png" width="30" height="30" />
            <span v-show="props.modelValue" class=" grow ml-8">Dashboard</span>
        </div>
        <div
            :class="['transform hover:scale-110 transition-transform duration-300 cursor-pointer flex justify-between items-center', props.modelValue && 'w-50']">
            <Icons class="text-2xl" :icon="'fa-folder'" />
            <span v-show="props.modelValue" class=" grow ml-8">Records</span>
        </div>
        <div
            :class="['transform hover:scale-110 transition-transform duration-300 cursor-pointer flex justify-between items-center', props.modelValue && 'w-50']">
            <Icons class="text-2xl" :icon="'fa-user'" />
            <span v-show="props.modelValue" class=" grow ml-8">My Account</span>
        </div>
        <div
            :class="['transform hover:scale-110 transition-transform duration-300 cursor-pointer flex justify-between items-center', props.modelValue && 'w-50']">
            <Icons class="text-2xl" :icon="'fa-users'" />
            <span v-show="props.modelValue" class=" grow ml-8">Users</span>
        </div>
        <div
            :class="['transform hover:scale-110 transition-transform duration-300 cursor-pointer flex justify-between items-center', props.modelValue && 'w-50']">
            <Icons class="text-2xl" :icon="'fa-lock'" />
            <span v-show="props.modelValue" class=" grow ml-8">Security</span>
        </div>
        <div
            :class="['transform hover:scale-110 transition-transform duration-300 cursor-pointer flex justify-between items-center', props.modelValue && 'w-50']">
            <Icons class="text-2xl" :icon="'fa-lightbulb'" />
            <span v-show="props.modelValue" class=" grow ml-8">Change Theme</span>
        </div>
        <div
            :class="['transform hover:scale-110 transition-transform duration-300 cursor-pointer flex justify-between items-center', props.modelValue && 'w-50']">
            <Icons class="text-2xl" :icon="'fa-circle-info'" />
            <span v-show="props.modelValue" class=" grow ml-8">Info</span>
        </div>
    </div>
</template>
