<template>
    <div>
        <div>
            <h1>用于讨论需求与测试接口的工程</h1>
            <h4>登陆成功跳转到控制台</h4>
        </div>
        <div :class="['index-login__form__wrap']">
            <el-form :model="form" status-icon ref="form" label-width="100px" :class="['index-login__form']">
                <el-form-item label="用户名" prop="user">
                    <el-input v-model="form.user" autocomplete="on"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="form.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
	name: 'index-login',
    data() {
        return {
            form: {
                user: '',
                pass: ''
            }
        };
    },
    methods: {
        submitForm() {
            alert('登陆用户后跳转到 localhost:8080/main.html ')
            window.location.pathname = '/main.html'
        },
        resetForm() {
            this.$refs.form.resetFields();
        }
    }
}
</script>

<style lang="scss" scoped>
.index-login__form__wrap {
    text-align: center;
    .index-login__form {
        width: 20rem;
    }
}
</style>