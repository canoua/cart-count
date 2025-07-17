import './assets/base.css'
import routes from './routes'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.use(routes)
app.mount('#app')

