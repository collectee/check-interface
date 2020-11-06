<template>
    <div>
        <div :class="['event-list__wrap']">
            <div>
                <h3>我的安排事项</h3>
            </div>
            <div>
                <el-form :inline="true" :model="applyInfoSelect" class="demo-form-inline">
                    <el-form-item label="事件类型名称">
                        <el-input v-model="applyInfoSelect.eventClass" placeholder="事件名称"></el-input>
                    </el-form-item>
                    <el-form-item label="事件类型编码">
                        <el-input v-model="applyInfoSelect.eventClassCode" placeholder="事件执行编码"></el-input>
                    </el-form-item>
                    <el-form-item label="事件名称">
                        <el-input v-model="applyInfoSelect.name" placeholder="用户名"></el-input>
                    </el-form-item>
                    <!--<el-form-item label="执行编码">-->
                        <!--<el-input v-model="applyInfoSelect.impNumber" placeholder="事件执行编码"></el-input>-->
                    <!--</el-form-item>-->
                    <el-form-item label="接收人">
                        <el-input v-model="applyInfoSelect.userId" placeholder="事件执行编码"></el-input>
                    </el-form-item>
                    <el-form-item label="创建时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.createDate"></el-input>
                    </el-form-item>
                    <el-form-item label="发送时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.sendDate"></el-input>
                    </el-form-item>
                    <el-form-item label="接收时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.receiveDate"></el-input>
                    </el-form-item>
                    <el-form-item label="完成时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.processedDate"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急类型">
                        <el-select v-model="applyInfoSelect.timeClass" placeholder="类型">
                            <el-option label="正常" value="0"></el-option>
                            <el-option label="紧急" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="接收状态">
                        <el-select v-model="applyInfoSelect.receiveStatus">
                            <el-option label="未接收" value="0"></el-option>
                            <el-option label="已接收" value="1"></el-option>
                            <el-option label="退回" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="完成状态">
                        <el-select v-model="applyInfoSelect.handleStatus">
                            <el-option label="待完成" value="0"></el-option>
                            <el-option label="已完成" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit(applyInfoSelect)">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table
                    :data="applyInfoData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="事件名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="impNumber"
                        label="事件执行编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="eventClass"
                        label="事件类型(类型编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="org"
                        label="组织(组织编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="post"
                        label="岗位(岗位编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="user"
                        label="待办人(用户名)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="timeClass"
                        label="时限类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="routeCode"
                        label="目标页面编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="detail_0"
                        label="任务详情"
                        width="180">
                </el-table-column>
            </el-table>
        </div>
        <div :class="['event-list__wrap']">
            <div>
                <h3>我的待办事项(或者配合web socket更新列表)</h3>
            </div>
            <div>
                <el-form :inline="true" :model="receiveInfoSelect" class="demo-form-inline">
                    <el-form-item label="事件类型名称">
                        <el-input v-model="receiveInfoSelect.eventClass" placeholder="事件名称"></el-input>
                    </el-form-item>
                    <el-form-item label="事件类型编码">
                        <el-input v-model="receiveInfoSelect.eventClassCode" placeholder="事件执行编码"></el-input>
                    </el-form-item>
                    <el-form-item label="事件名称">
                        <el-input v-model="receiveInfoSelect.name" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="执行编码">
                        <el-input v-model="receiveInfoSelect.impNumber" placeholder="事件执行编码"></el-input>
                    </el-form-item>
                    <el-form-item label="发起人">
                        <el-input v-model="receiveInfoSelect.userId" placeholder="事件执行编码"></el-input>
                    </el-form-item>
                    <el-form-item label="创建时间">
                        <el-input :type="'date'" v-model="receiveInfoSelect.createDate"></el-input>
                    </el-form-item>
                    <el-form-item label="发送时间">
                        <el-input :type="'date'" v-model="receiveInfoSelect.sendDate"></el-input>
                    </el-form-item>
                    <el-form-item label="接收时间">
                        <el-input :type="'date'" v-model="receiveInfoSelect.receiveDate"></el-input>
                    </el-form-item>
                    <el-form-item label="完成时间">
                        <el-input :type="'date'" v-model="receiveInfoSelect.processedDate"></el-input>
                    </el-form-item>
                    <el-form-item label="紧急类型">
                        <el-select v-model="receiveInfoSelect.timeClass" placeholder="类型">
                            <el-option label="正常" value="0"></el-option>
                            <el-option label="紧急" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="接收状态">
                        <el-select v-model="receiveInfoSelect.receiveStatus">
                            <el-option label="未接收" value="0"></el-option>
                            <el-option label="已接收" value="1"></el-option>
                            <el-option label="退回" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="完成状态">
                        <el-select v-model="receiveInfoSelect.handleStatus">
                            <el-option label="待完成" value="0"></el-option>
                            <el-option label="已完成" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit(receiveInfoSelect, false)">查询</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <el-table
                    :data="receiveInfoData"
                    style="width: 100%">
                <el-table-column
                        prop="name"
                        label="事件名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="impNumber"
                        label="事件执行编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="eventClass"
                        label="事件类型(类型编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="org"
                        label="组织(组织编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="post"
                        label="岗位(岗位编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="user"
                        label="待办人(用户名)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="timeClass"
                        label="时限类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="detail_0"
                        label="任务详情"
                        width="180">
                </el-table-column>
                <el-table-column label="跳转目标页面">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="goForward(scope.row)">
                            跳转
                        </el-button>
                        <el-button size="mini" @click="received(scope.row.id)">接收</el-button>
                        <el-button size="mini" @click="withdraw(scope.row.id)">退回</el-button>
                        <el-button size="mini" @click="completed(scope.row.id)">完成</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    import network from '../../network/index'
	export default {
		name: "event-list",
		data() {
			return {
				self: 1,
				applyInfoData: [],
				applyInfoSelect: {
					eventClass: 'default'
                },
                receiveInfoData: [],
				receiveInfoSelect: {
					eventClass: 'default'
                }
			}
		},
		methods: {
			copyProp(source, arr) {
				const copy = {}
				arr.forEach(n => source[n] && (copy[n] = source[n]))
                return copy
            },
			transform(arr, to = true) {
				arr.map(n => {
                    n.user = to ? n.toUser.name : n.fromUser.name
                    n.post = to ? n.toUser.post : n.fromUser.post
                    n.org = to ? n.toUser.org : n.fromUser.org
					return n
                })
            },
			async onSubmit(data, to = true) {
                const reqData = this.copyProp(data, [
                    'name',
                    'eventClass',
                    'eventClassCode',
                    'createStatus',
                    'receiveStatus',
                    'handleStatus',
                    'createDate',
	                'sendDate',
	                'receiveDate',
	                'processedDate',
                    'routeCode',
                    'detail_0'
                ])

                if (to && data.userId) {
					reqData.toUserId = data.userId
                    reqData.fromUserId = this.self
                } else if(data.userId) {
					reqData.fromUserId = data.userId
                    reqData.toUserId = this.self
                }
				const checkOut = {}
				let classRes = null
				if (reqData.eventClass !== 'default') {
					checkOut.eventClass = reqData.eventClass
					classRes = await network.selectClass(checkOut)
                }
                if (classRes && reqData.eventClass && classRes.data.result.code !== reqData.eventClassCode) {
					alert('事件类型与事件编码不一致')
					return false
                }
                console.log(reqData)
                const res = await network.selectEvent(reqData)
                const tableData = this.transform(res.data.results)
                to ? (this.applyInfoData = tableData) : (this.receiveInfoData = tableData)
            },
			goForward(row) {
				// 利用目标页面编码跳转至目标页面
                console.log(row.routeCode)
                window.location.pathname = `/${row.routeCode}.html`
			},
			async received(id) {
				const res = await network.receive({
                    Id: id,
                    receiveStatus: 1
                })
                alert(res.msg)
            },
			async withdraw(id) {
				const res = await network.receive({
                    Id: id,
                    receiveStatus: 0
                })
				alert(res.msg)
            },
			async completed(id) {
				const res = await network.handle({
					Id: id,
					handleStatus: 0
				})
				alert(res.msg)
            }
		}
	}
</script>

<style lang="scss" scoped>
.event-list__wrap {
    padding-right: 1rem;
}
</style>