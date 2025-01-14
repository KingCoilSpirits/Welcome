import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {
	Quasar,
	QBtn,
	QCard,
	QDialog,
	QInput,
	QList,
	QPage,
	QLayout,
	QCardSection,
	QCardActions,
	QIcon,
	QTooltip,
	QSpinner,
	QSelect,
	QSeparator,
	QItem,
	QItemSection,
	QItemLabel,
	QOptionGroup,
	QTable,
	QExpansionItem, QPageContainer, QSlideTransition,
} from 'quasar'
import 'quasar/dist/quasar.css'
import '@mdi/font/css/materialdesignicons.min.css'
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Quasar, {
	components: {
		QBtn,
		QCard,
		QDialog,
		QInput,
		QItem,
		QItemSection,
		QItemLabel,
		QList,
		QCardSection,
		QCardActions,
		QIcon,
		QOptionGroup,
		QPage,
		QPageContainer,
		QSlideTransition,
		QLayout,
		QSelect,
		QSeparator,
		QTooltip,
		QSpinner,
		QTable,
		QExpansionItem,
	}
})
app.mount('#app')
