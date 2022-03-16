<template>
    <div class="menu">
        <Tree @on-click="getItem" :data="TreeData"></Tree>
    </div>
    <!-- <div class="menu">
        menu -- {{ title }}
        <div :key="index" v-for="(item, index) in data">{{ item }}</div>
    </div> -->
    <!-- <div>
        <button @click="clickTap(data)">子组件向父组件传递数据</button>
    </div> -->
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import Tree from '../../components/Tree/index.vue'

const list = reactive<number[]>([444,555,666])
const flag = ref(false)
type Props = {
    title?: string,
    data?: number[]
}
withDefaults(defineProps<Props>(), {
    title: '菜单默认值',
    data: ()=> [777,888,999], //复杂数据类型通过函数返回值的形式
})

const emit = defineEmits(['on-click', 'on-change-data'])
const clickTap = (data: number[]):void => {
    emit('on-click', data, false)
    emit('on-change-data', data, true)
}

defineExpose({
    list,
    flag
})




type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}

const TreeData = reactive<TreeList[]>([
    {
        name: 'no-1',
        children: [
            {
                name: 'no-1-1'
            },
            {
                name: 'no-1-2'
            }
        ]
    },
    {
        name: 'no-2',
        children: [
            {
                name: 'no-2-1'
            }
        ]
    },
    {
        name: 'no-3'
    }
])

const getItem = (item: TreeList) => {
    console.log(item, 9999999999999)
}
</script>
<style lang="less" scoped>
.menu{
    width: 200px;
    border-radius: 2px solid #ccc;
}
</style>