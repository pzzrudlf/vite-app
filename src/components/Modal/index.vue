<template>
    <div class="modal">
        <div class="modal-header" @click="handleClick">header我的header是大大地帮</div>
        <div class="modal-main">
            <div v-if="props.modelValue">{{props.modelValue}}</div>
            <div v-if="props.tt">{{ props.tt }}</div>
        </div>
    </div> 
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

type Props = {
    modelValue: string,
    tt: number
}

const props = defineProps<Props>()
const emits = defineEmits(['update:modelValue', 'update:tt'])

const handleClick = ()=>{
    emits('update:modelValue', 'pingpong')
    emits('update:tt', 8888)
}
</script>
<style scoped lang="less">
.modal{
    background-color: bisque;
}
</style>