<template>
    <Modal v-model:modelValue="flag" v-model:tt="tt"></Modal>  
    <HelloWorldVue></HelloWorldVue>
    <Layout></Layout>
    <router-link to="/a"></router-link>
    <hr>
    <router-view></router-view>
</template>
<script setup lang="ts">
import Layout from './layouts/index.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import Modal from './components/Modal/index.vue'
import { ref } from 'vue'

let flag = ref<string>('bingo')
let tt = ref<number>(99)

</script>
<style lang="less">
html, body, #app{
    height: 100%;
    overflow: hidden;
}
</style>