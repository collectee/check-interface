<template>
    <div :class="['event-create__wrap']">
        <div>
            <h3>事件安排配置(可以配置自己作为发起人或者下属作为发起人)</h3>
        </div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="事件类型名称">
                <el-input v-model="form.eventClass"></el-input>
            </el-form-item>
            <el-form-item label="事件类型编码">
                <el-input v-model="form.eventClassCode"></el-input>
            </el-form-item>
            <el-form-item label="事件名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="紧急类型">
                <el-switch v-model="form.timeClass"></el-switch>
            </el-form-item>
            <el-form-item label="发送者">
                <el-input v-model="form.fromUserId"></el-input>
            </el-form-item>
            <el-form-item label="接收者">
                <el-input v-model="form.toUserId"></el-input>
            </el-form-item>
            <el-form-item label="目标页面编码">
                <el-input type="textarea" v-model="form.routeCode"></el-input>
            </el-form-item>
            <el-form-item label="详情">
                <el-input type="textarea" v-model="form.detail_0"></el-input>
            </el-form-item>
            <el-form-item>
                .............
                一些需求内可以用于用户自定义生成事件的其他配置
                .............
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import network from '../../network/index'
	export default {
		name: "control-panel",
		data() {
			return {
				form: {
					name: '',
                    eventClass: '',
					eventClassCode: '',
					timeClass: 0,
					fromUserId: '',
                    toUserId: '',
					routeCode: '',
                    detail_0: ''
				}
			}
		},
		methods: {
			onSubmit() {
				this.form.timeClass = this.form.timeClass ? 1 : 0
				network.createEvent(this.form).then(res => {
					alert('成功:'+JSON.stringify(res))
                })
			}
		}
	}
</script>

<style lang="scss" scoped>
.event-create__wrap {
    width: 60%;
}
</style>