import Vue from 'vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

import indexLogin from '@/src/index-login/index-login'
import 'element-ui/lib/theme-chalk/index.css'

new Vue({
	el: '#root',
	components: { indexLogin },
	template: '<index-login />'
})