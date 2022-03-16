<template>
    <div class="layout">
        <Menu ref="menus" :title="'我想穿裤子'" :data="list" @on-click="handleData" @on-change-data="changeData"></Menu>
        <div class="layout-right"><Header></Header>
        <Content></Content>
        </div>
    </div>
</template>
<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'
import { reactive, ref } from 'vue';
const menus = ref(null)
const list = reactive<number[]>([111, 222, 333])
const handleData = (data:number[], flag:boolean)=>{
    console.log('layout-index', data, flag)
}
const changeData = (data: number[], flag: boolean) => {
    console.log('data from menu component is ', data, flag)
    console.log(menus.value)
}

//父组件获取子组件的实例，进而获取子组件实例的属性
</script>
<style lang="less" scoped>
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;
    &-right{
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>