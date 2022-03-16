<template>
    <div class="footer">
        <button @click="changepage">changepage</button>
    </div>
</template>
<script setup lang="ts">

const emit = defineEmits(['paging'])
const changepage = (changepage:any) => {
    emit('paging', changepage)
}

</script>
<style lang="less" scoped>

</style>