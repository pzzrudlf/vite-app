<template>
    <HelloWorldVue></HelloWorldVue>
    <Layout></Layout>
</template>
<script setup lang="ts">
import Layout from './layouts/index.vue'
import HelloWorldVue from './components/HelloWorld.vue'

</script>
<style lang="less">
html, body, #app{
    height: 100%;
    overflow: hidden;
}
</style>