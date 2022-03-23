<template>
    <router-link replace to="/a">a</router-link>
    <router-link replace :to="{name:'A'}">a</router-link>
    <router-link replace :to="{name: 'Home'}">home</router-link>
    <!-- 这种方式页面会刷新一下 -->
    <a href="/a">a</a> 
    <!-- 编程式导航: js跳转 -->
    <button @click="toPage('/a')">a</button>

    <button @click="next()">next</button>

    <button @click="prev()">prev</button>
    <hr>
    <router-view></router-view>
    <Modal v-model:modelValue="flag" v-model:tt="tt"></Modal>  
    <HelloWorldVue></HelloWorldVue>
    <Layout></Layout>

    <tr v-for="(book, index) in books">
        <td>{{ book.id }}</td>
        <td>{{ book.name }}</td>
    </tr>

</template>
<script setup lang="ts">
import Layout from './layouts/index.vue'
import HelloWorldVue from './components/HelloWorld.vue'
import Modal from './components/Modal/index.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

let flag = ref<string>('bingo')
let tt = ref<number>(99)

let books = ref([
    {
        id: 1,
        name: '居里夫人传'
    },
    {
        id: 2,
        name: '人生的智慧'
    },
    {
        id: 3,
        name: '美丽人生'
    }
])

const router = useRouter()
const toPage = (url: string) => {
    // router.push(url)
    router.push({
        path: url,
        query: {
            name: '鲸鱼',
            price: 3449999,
            id: 12
        }
    })

    // router.push({
    //     name: Name
    // })

    // router.replace({
    //     path: url
    // })
}
const next = () => {
    router.go(1)
}
const prev = () => {
    router.back()
}
</script>
<style lang="less">
html, body, #app{
    height: 100%;
    overflow: hidden;
}
</style>