<template>
        <div class="home">home</div>
        <button @click="openPopup">Popup</button>
        <Popup :visible="popupVisible"></Popup>
</template>
    
<script setup lang='ts'>
    import Popup from '../components/Popup/index.vue'
    import { ref } from 'vue'
    let popupVisible = ref(false)
    const openPopup = ()=>{
        popupVisible.value = true
    }
</script>
    
<style>
    
</style>