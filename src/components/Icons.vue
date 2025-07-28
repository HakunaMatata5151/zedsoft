<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faUser,
    faFolder,
    faUsers,
    faLock,
    faLightbulb,
    faCircleInfo,
    faPlus,
    faBars,
    faXmark,
    faAngleDown,
    faFile,
    faEye,
} from '@fortawesome/free-solid-svg-icons';

library.add(
    faUser,
    faFolder,
    faUsers,
    faLock,
    faLightbulb,
    faCircleInfo,
    faPlus,
    faBars,
    faXmark,
    faAngleDown,
    faFile,
    faEye,
);

</script>

<script setup>

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <FontAwesomeIcon :icon="`fa-solid ${props.icon}`" />
</template>
