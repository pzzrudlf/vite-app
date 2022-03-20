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
  //1.
  userStore.age++
  //2.
  userStore.$patch({
    name: '鲸鱼',
    age: 33
  })
  //3.常用
  userStore.$patch((state)=>{
    state.age = 6777
    state.name = 'dedecms'
  })
  //4.不常用（因为要修改所有的值，所以不常用）
  userStore.$state = {
    name: 'macos',
    age: 9998876
  }
}
const handleAction = () => {
  //5.通过actions修改state值
  userStore.setName()
  userStore.setAge(45)

}

// userStore.$reset()

userStore.$subscribe((args, state)=>{
  console.log(args)
  console.log(state)
}, {
  detached: true
})

userStore.$onAction((args)=>{
  console.log(args)
  args.after(()=>{
    console.log('ssss')
  })
}, true)
</script>


<style scoped lang="less">
.hello {
  display: flex;
}
</style>