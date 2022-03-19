import { defineStore } from 'pinia'

const login = ():Promise<{
    age: number
}>=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve({
                age: 88
            })
        }, 2000)
    })
}

export const useUserStore = defineStore('user', {
    state: ()=>{
        return {
            name: '小满',
            age: 0
        }
    },
    // computed 修改state的值, 有缓存的
    getters: {
        newName(state):string {
            return `$-${this.name}`+`${state.age}`
        },
        getAge: (state)=>{
            return state.age
        }
    },
    //既可以同步也可以异步，提交state
    actions: {
        setName() {
            this.name = '这是通过actioin修改state值'
        },
        async setAge(value:number) {
            console.log(value)
            const res = await login()
            this.age = res.age
            this.setName()
        },
        
    }
})