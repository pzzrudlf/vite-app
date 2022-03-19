import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
// import store from './store'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
// app.use(store)
// app.use(ElementPlus)
app.mount('#app')