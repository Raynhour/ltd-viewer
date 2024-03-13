import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { useQueryClient } from './plugins/queryClient'

const app = createApp(App)

app
    .use(router)
    .use(vuetify)

useQueryClient(app)

app.mount('#app')
