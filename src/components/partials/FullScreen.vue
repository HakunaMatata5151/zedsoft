<template>
    <div @click="$emit('close-fullscreen')" class="fixed inset-0 z-[999] bg-black/75 backdrop-blur-[5px] animate-blur">
        <div class="flex justify-center items-center w-full h-full">
            <slot />
        </div>
    </div>
</template>

<style scoped>
@keyframes blur {
    from {
        backdrop-filter: blur(0px);
    }

    to {
        backdrop-filter: blur(5px);
    }
}
</style>
