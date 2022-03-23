<template>
    <div class="popup" v-if="visible">
        <div class="popup-content">
            <div class="popup-header">head</div>
            <div class="popup-body">body</div>
            <div class="popup-footer">footer</div>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { defineProps, withDefaults, defineEmits } from 'vue'

type Props = {
    visible:boolean
}

withDefaults(defineProps<Props>(), {
    visible: false
})

const emits = defineEmits(['on-cancel', 'on-close'])

</script>
    
<style>
</style>