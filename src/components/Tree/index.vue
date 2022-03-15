<template>
    <div class="tree">
        <div @click.stop="clickItem(item)" :key="index" v-for="(item, index) in data">
            {{ item.name }}
            <div v-if="item?.children?.length">
                <TreeItem @on-click="clickItem" :data="item.children"></TreeItem>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

// import TreeItem from './index.vue'

type TreeList = {
    name: string,
    icon?: string,
    children?: TreeList[] | []
}

type Props = {
    data?: TreeList[]
}
defineProps<Props>()

const emit = defineEmits(['on-click'])
const clickItem = (item: TreeList) => {
    emit('on-click', item)
}

</script>
<script lang="ts">
export default {
    name: 'TreeItem'
}
</script>
<style scoped lang="less">
.tree {
    margin-left: 20px;
}
</style>