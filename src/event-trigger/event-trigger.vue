<template>
    <div>
        <div :class="['event-trigger__item']">
            <el-badge :value="eventNum" class="item" >
                <el-button size="small" @click="goForward">任务</el-button>
            </el-badge>
            <span>
                {{ tips }}
            </span>
        </div>
        <div :class="['event-trigger__item']">
            <el-button-group>
                <el-button type="success" @click="resolveEvent1">触发其中一个事件完成按钮</el-button>
                <el-button  type="danger" @click="rejectEvent1">触发退回按钮</el-button>
            </el-button-group>
        </div>
        <div :class="['event-trigger__item']">
            <el-button-group>
                <el-button type="success" @click="resolveEvent2">触发其中两个事件完成按钮</el-button>
                <el-button  type="danger" @click="rejectEvent2">触发退回按钮</el-button>
            </el-button-group>
        </div>
    </div>
</template>

<script>
	export default {
		name: "event-trigger",
		data() {
			return {
				eventNum: 0,
            }
		},
        computed: {
	        tips() {
	        	return this.eventNum ? ` 您有${ this.eventNum }个任务待完成` : '暂时没有任务安排'
            }
        },
        methods: {
	        goForward() {
	        	alert('有任务提示时,点击提示会直接跳到目标操作页面')
	        	window.location.pathname = '/page-b.html'
            },
	        resolveEvent(arr) {
	        	// 这里用于完成某个事件
                alert(`${arr.join(',')}发送触发完成状态`)
            },
            rejectEvent(arr) {
	        	// 这里用于退回某个事件
	            alert(`${arr.join(',')}发送触发退回状态`)
            },
	        resolveEvent1() {
	        	this.resolveEvent(['事件一'])
            },
            resolveEvent2() {
	        	this.resolveEvent(['事件二', '事件三'])
            },
	        rejectEvent1() {
	        	this.rejectEvent(['事件一'])
            },
	        rejectEvent2() {
	        	this.rejectEvent(['事件二', '事件三'])
            }
        },
		created() {
			alert('获取对应的待完成事件列表 (或者开启 web socket 实时监听更新)')
            this.eventNum = 3
		}
	}
</script>

<style lang="scss" scoped>
.event-trigger__item {
    padding: 1rem 2rem;
}
</style>