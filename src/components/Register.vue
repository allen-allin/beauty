<template>
    <div class="wrapper">
        <div class="main">
            <label>
                <span>Username：</span>
                <el-input id="userName" type="text" required="required" v-model="username" /><span id="tel"></span>
            </label>
            <label>
                <span>Email：</span>
                <el-input id="eMail" type="text" required="required" v-model="email" />
            </label>
            <label>
                <span>Password：</span>
                <el-input id="passWord" type="password"  required="required" v-model="password" /><span id="pw"></span>
            </label>
            <label>
                <span>Confirm：</span>
                <el-input id="conFirm" type="password" required="required" v-model="password2" /><span id="cf"></span>
            </label>
            <p><el-checkbox  style="width:3%; vertical-align: middle;" type="checkbox" required="required" v-model="checked" />I agree to the terms of service and privacy statement. </p>
            <div>
                <el-button type="primary" style="width: 100%" @click="register">Sign Up</el-button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
    	data() {
    		return {
    			username: "",
    			password: "",
    			password2: "",
    			email: "",
    			checked: false
    		}
    	},
    	methods: {
    		register() {
                const { username, password, password2, email, checked } = this      //es6解构赋值
                
                //检测是否勾选同意服务协议
    			if (!checked) {
    				this.$notify({
    					title: "警告",
    					message: "请同意服务协议",
    					type: "warning"
    				})
    				return
                }
                
                //检测内容是否为空  这里用到了 es6中数组的some方法
    			if ([username, password, password2, email, checked].some(v => v === "")) {
    				this.$notify({
    					title: "警告",
    					message: "内容不能为空",
    					type: "warning"
    				})
    				return
                }
                
                //检测两次密码是否一样
    			if (password !== password2) {
    				this.$notify({
    					title: "警告",
    					message: "两次密码不一样",
    					type: "warning"
    				})
    				return
                }
                
                //检测用户名是否已经被注册
                const users = this.getStorage("users") || {}
                if(username === 'admin' || username in users) {
                    this.$notify({
    					title: "警告",
    					message: "该用户已被注册",
    					type: "warning"
    				})
    				return
                }
    			
                users[username] = password
                //将用户名和密码以键值对的形式存在localstorage中
                this.setStorage("users", users)

                this.$notify({
                    title: '成功',
                    message: '注册成功，请登录',
                    type: 'success'
                });
                // 500ms后跳转到登录页面
    			setTimeout(() => {
                    this.$router.push("./login")
                }, 500);
    		}
    	}
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wrapper {
    	background-image: url("./img/register.jpg");
    	background-size: 100% 100%;
    	height: 100vh;
    	width: 100vw;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .main {
    	width: 30%;
    }
    h1 {
    	color: gray;
    }
    /* div{
            padding:0 30% 0 30%;
            vertical-align: middle;
        } */

    p {
    	font-size: 20px;
    	color: white;
    	text-align: left;
    	padding-left: 2.5%;
    }
    input {
    	margin-bottom: 10px;
    	width: 95%;
    	height: 32px;
    	line-height: 32px;
    	color: #fff;
    	text-indent: 28px;
    	border: 1px solid #e2e4dd;
    	background-color: rgba(255, 255, 255, 0.2);
    	border-radius: 3px;
    }
    #button {
    	width: 95%;
    	box-shadow: 0 4px 5px #666;
    	background: cornflowerblue;
    	color: white;
    	font-size: 18px;
    	text-align: center;
    	text-indent: 0;
    	padding-top: 3%;
    	padding-bottom: 3%;
    	cursor: pointer;
    }
    #button:hover {
    	opacity: 0.9;
    }
</style>


