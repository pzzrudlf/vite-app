<template>
    <div>
        <header class="header">
            <slot name="header"></slot>
        </header>
        <main class="main">
            <div v-for="(item, index) in data">
                <slot name="default" :data="item" :index="index"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
type names = {
    name: string,
    age: number
}
const data = reactive<names[]>([
    {
        name: 'dedecms',
        age: 12
    },
    {
        name: 'pzzrudlf',
        age: 33
    }
])
</script>
<style scoped lang="less">
.header {
    background: red;
}
.main {
    background: lightslategrey;
}
.footer {
    background: lightgreen;
}
</style>