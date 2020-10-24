import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import controlPanel from '@/src/control-panel/control-panel'

new Vue({
	el: '#root',
	components: { controlPanel },
	template: '<control-panel />'
})