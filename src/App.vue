<script setup>
import { ref } from 'vue';

import LoadingOverlay from './components/LoadingOverlay.vue';

import FullScreen from './components/partials/FullScreen.vue';

import { IsLoading } from './util/loading';

import SideBar from './components/SideBar.vue';

const isExpanded = ref(false);

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <SideBar v-model="isExpanded" />

    <FullScreen v-if="IsLoading">
      <LoadingOverlay :is-loading="IsLoading" />
    </FullScreen>

    <router-view v-slot="{ Component }" @click="isExpanded = false">
      <transition name="smooth-slide-fade" mode="out-in" appear>
        <component v-if="Component" :is="Component" class="flex-grow" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.smooth-slide-fade-enter-active,
.smooth-slide-fade-leave-active {
  transition: all 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.smooth-slide-fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.smooth-slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
