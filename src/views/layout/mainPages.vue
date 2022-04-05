<template>
    <div>
        <app-header></app-header>
        <router-view class="container py-4" :key="$route.fullPath" ></router-view>
    </div>
</template>

<script>
import AppHeader from '@/components/appHeader.vue'
export default {
    components:{
        AppHeader
    }
}
</script>