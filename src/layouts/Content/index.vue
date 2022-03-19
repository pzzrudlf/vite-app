<template>
    <div class="content">
        <!-- <div class="content-items" v-for="item in 100">{{item}}</div> -->
        <div class="tab">
            <div @click="switchTab(item)" :key="index" v-for="(item, index) in data">{{ item.name }}</div>
        </div>
        <component :is="cur.comName"></component>   
        <Dialog>
            <template #[slotName]>
                <div>我被插入到header部分</div>
            </template>    
            <template v-slot:default="{ data, index }">
                <div>{{ data.name }}======{{ data.age }}======{{ index }}</div>
            </template>
            <template v-slot:footer>
                <div>我被插入到footer部分</div>
            </template>
        </Dialog>
        <el-input class="ipt"></el-input>
        <Suspense>
            <template #default>
                <Aa></Aa>
            </template>
            <template #fallback>
                <div>正在加载中...</div>
            </template>
        </Suspense>
        <Aa></Aa>
    </div>
</template>
<script setup lang="ts">
import { markRaw, reactive, ref, defineAsyncComponent } from 'vue';
import A from './A.vue'
import B from './B.vue'
import Dialog from '../../components/Dialog/index.vue'
// import Aa from '../../components/A/index.vue'

//异步组件
const Aa = defineAsyncComponent(()=>import('../../components/A/index.vue'))

type Tabs = {
    name: string,
    comName: any
}
type Com = Pick<Tabs, 'comName'>

const slotName = ref<string>('header')//动态插槽

const data = reactive<Tabs[]>([
    {
        name: 'A组件',
        comName: markRaw(A)
    },
    {
        name: 'B组件',
        comName: markRaw(B)
    }
])

let cur = reactive<Com>({
    comName: data[0].comName
})
const switchTab = (item: Tabs) => {
    cur.comName = item.comName
}
</script>
<!-- <script lang="ts">
export default {
    components: {
        A,B
    }
}
</script> -->
<style lang="less" scoped>
.content{
    flex: 1;
    margin: 20px;
    overflow: auto;
    &-items{
        padding: 20px;
    }
    .ipt {
        :deep(input) {
            background-color: gray;
        }
    }
}

</style>