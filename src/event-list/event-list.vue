<template>
    <div>
        <div :class="['event-list__wrap']">
            <div>
                <h3>我的安排事项</h3>
            </div>
            <div>
                <el-form :inline="true" :model="apply" class="demo-form-inline">
                    <el-form-item label="事件名称">
                        <el-input v-model="applyInfoSelect.name" placeholder="事件名称"></el-input>
                    </el-form-item>
                    <el-form-item label="事件执行编码">
                        <el-input v-model="applyInfoSelect.combineCode" placeholder="事件执行编码"></el-input>
                    </el-form-item>
                    <el-form-item label="待办人">
                        <el-input v-model="applyInfoSelect.user" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="创建时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.createTime"></el-input>
                    </el-form-item>
                    <el-form-item label="更新时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.updateTime"></el-input>
                    </el-form-item>
                    <el-form-item label="时限类型">
                        <el-select v-model="receiveInfoSelect.type" placeholder="类型">
                            <el-option label="正常" value="0"></el-option>
                            <el-option label="紧急" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="接收状态">
                        <el-select v-model="applyInfoSelect.type">
                            <el-option label="未接收" value="0"></el-option>
                            <el-option label="已接收" value="1"></el-option>
                            <el-option label="退回" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="完成状态">
                        <el-select v-model="applyInfoSelect.type">
                            <el-option label="待完成" value="0"></el-option>
                            <el-option label="已完成" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
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
                        prop="dept"
                        label="组织(组织编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="job"
                        label="岗位(岗位编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="targetUser"
                        label="待办人(用户名)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="timeClass"
                        label="时限类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="siteCode"
                        label="目标页面编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="detail"
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
                    <el-form-item label="事件名称">
                        <el-input v-model="receiveInfoSelect.name" placeholder="事件名称"></el-input>
                    </el-form-item>
                    <el-form-item label="事件执行编码">
                        <el-input v-model="receiveInfoSelect.combineCode" placeholder="事件执行编码"></el-input>
                    </el-form-item>
                    <el-form-item label="发起人">
                        <el-input v-model="receiveInfoSelect.user" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="时限类型">
                        <el-select v-model="receiveInfoSelect.type" placeholder="类型">
                            <el-option label="正常" value="0"></el-option>
                            <el-option label="紧急" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="创建时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.createTime"></el-input>
                    </el-form-item>
                    <el-form-item label="更新时间">
                        <el-input :type="'date'" v-model="applyInfoSelect.updateTime"></el-input>
                    </el-form-item>
                    <el-form-item label="接收状态">
                        <el-select v-model="applyInfoSelect.type">
                            <el-option label="未接收" value="0"></el-option>
                            <el-option label="已接收" value="1"></el-option>
                            <el-option label="退回" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="完成状态">
                        <el-select v-model="receiveInfoSelect.completeStatus">
                            <el-option label="已完成" value="1"></el-option>
                            <el-option label="未完成" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
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
                        prop="combineCode"
                        label="事件执行编码"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="事件类型"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="dept"
                        label="组织(组织编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="job"
                        label="岗位(岗位编码)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="originUser"
                        label="发起人(用户名)"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="detail"
                        label="任务详情(需求中预留的五个字段用于任务详情)"
                        width="180">
                </el-table-column>
                <el-table-column label="跳转目标页面">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="goForward(scope.row.siteCode)">
                            跳转
                        </el-button>
                        <el-button size="mini" @click="received(scope.row.id)">接收</el-button>
                        <el-button size="mini" @click="withdraw(scope.row.id)">退回</el-button>
                        <el-button size="mini" @click="completed(scope.row.id)">跳转</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
	export default {
		name: "event-list",
		data() {
			return {
				applyInfoData: [
                    {
                    	name: 'x',
                        combineCode: '100-20201024-1',
                        type: '紧急/不可延时',
                        dept: '组织部(010)',
                        job: '人事经理(012)',
                        originUser: '张三(San Zhang)',
                        targetUser: '李四(Si Li)',
	                    siteCode: '1344559323458',
                        detail: '五个字段的信息经过处理合并而成'
                    }
                ],
				applyInfoSelect: {
					name: '',
					combineCode: '',
                    user: '',
                    type: ''
                },
                receiveInfoData: [
	                {
	                	id: 3,
		                name: 'x',
		                combineCode: '100-20201024-2',
		                type: '正常/可延时',
		                dept: '技术部(012)',
		                job: '组长2(008)',
		                originUser: '王五(Wu Wang)',
		                siteCode: '1344559323458',
		                detail: '五个字段的信息经过处理合并而成'
	                }
                ],
				receiveInfoSelect: {
					completeStatus: ''
                }
			}
		},
		methods: {
			goForward(row) {
				// 利用目标页面编码跳转至目标页面
                console.log(row.siteCode)
                window.location.pathname = '/page-a.html'
			},
			received() {

            },
            withdraw() {

            },
			completed() {

            }
		}
	}
</script>

<style lang="scss" scoped>
.event-list__wrap {
    padding-right: 1rem;
}
</style>