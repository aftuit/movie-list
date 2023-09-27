
import { createApp } from 'vue'
import App from '@/components/App/App.vue'
import uiComponents from './ui-components'
import components from './components'
import "./components/index.css"
const app = createApp(App)

uiComponents.map(component => app.component(component.name, component));
components.map(component => app.component(component.name, component));

app.mount('#app')


