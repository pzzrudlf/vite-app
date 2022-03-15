<template>
  <div class="hello">我是Hello, world组件----{{ name }}======={{age}}</div>
  <button @click="handleClick">handleClick</button>
  <button @click="handleAction">handleAction</button>
</template>
<script setup lang="ts">
import { useUserStore } from '../store/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { name, age } = storeToRefs(userStore)

const handleClick = () => {
  userStore.$patch({
    name: '鲸鱼',
    age: 33
  })
  userStore.age++
  userStore.$patch((state)=>{
    state.age = 6777
    state.name = 'dedecms'
  })
  userStore.$state = {
    name: 'macos',
    age: 9998876
  }
}
const handleAction = () => {
  userStore.setName()
  userStore.setAge(45)
}

userStore.$subscribe((args, state)=>{
  console.log(args)
  console.log(state)
})

userStore.$onAction((args)=>{
  console.log(args)
})
</script>


<style scoped lang="less">
.hello {
  display: flex;
}
</style>