import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

import mainPanel from '@/src/main-panel/main-panel'
import 'element-ui/lib/theme-chalk/index.css'

new Vue({
	el: '#root',
	components: { mainPanel },
	template: '<main-panel />'
})