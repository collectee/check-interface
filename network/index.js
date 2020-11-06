import axios from 'axios'

const server = {
	xiaoLe: '/xl'
}

const info = {
	selectEvent: {
		url: '/select/event',
		method: 'get',
		headers: {
			contentType: 'application/json'
		}
	},
	createEvent: {
		url: '/create/event',
		method: 'post',
		headers: {
			contentType: 'application/json'
		}
	},
	selectClass: {
		url: '/select/class',
		method: 'get',
		headers: {
			contentType: 'application/json'
		}
	},
	receive: {
		url: '/update/receivestatus',
		method: 'post',
		headers: {
			contentType: 'application/json'
		}
	},
	send: {
		url: '/update/sendstatus',
		method: 'post',
		headers: {
			contentType: 'application/json'
		}
	},
	handle: {
		url: '/update/handlestatus',
		method: 'post',
		headers: {
			contentType: 'application/json'
		}
	}
}

// const ajaxFactory = function(route, info) {
// 	const key = Object.keys(info)
// 	const list = {}
// 	key.forEach(n => {
// 		list[n] = function(body) {
// 			const req = {
// 				...info[n],
// 				data: body
// 			}
// 			req.url = `${route}${req.url}`
// 			return axios(req)
// 		}
// 	})
// 	return list
// }

axios.interceptors.request.use(request => {
	console.log('Starting Request', JSON.stringify(request, null, 2))
	return request
})

axios.interceptors.response.use(response => {
	// console.log('Response:', JSON.stringify(response, null, 2))
	return response
})

const ajaxSingle = function (route, info) {
	return function (body) {
		const req = {
			...info
		}
		info.method === 'get' ? (req.params = body) : (req.data = body)
		// req.data = body
		req.url = `${route}${req.url}`
		return axios(req)
	}
}

export default {
	selectEvent: ajaxSingle(server.xiaoLe, info.selectEvent),
	createEvent: ajaxSingle(server.xiaoLe, info.createEvent),
	selectClass: ajaxSingle(server.xiaoLe, info.selectClass),
	receive: ajaxSingle(server.xiaoLe, info.receive),
	send: ajaxSingle(server.xiaoLe, info.send),
	handle: ajaxSingle(server.xiaoLe, info.handle)
}