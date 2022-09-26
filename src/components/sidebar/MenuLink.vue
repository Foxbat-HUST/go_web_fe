<template>
    <b-link @click="go()">
        <span @mouseover="">
            <i class="bi" :class="[{'active': isActive}, icon, iconSize]"></i>
        </span>
    </b-link>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const props = defineProps({
    iconSize: { type: String },
    icon: { type: String },
    to: { type: String, required: true }
})
const route = useRoute()
const router = useRouter()

const isActive = computed(() => {
    return route.path.startsWith(props.to)
})

const go = () => {
    router.push(props.to)
}

</script>
<style lang="scss" scoped>
.active {
    color: var(--bs-link-hover-color);
}
</style>