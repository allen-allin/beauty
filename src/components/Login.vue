<template>
    <div class="login__box text-center">
            <div class="login__content">
                    <div class="content__header">
                            <img src="./img/tx.png" style="">
                    </div>
                    <div class="content__detail">
                            <div class="box">

                            </div>
                            <div class="detail__ipt detail__item">
                                    <el-input type="text" name="username" id="username" placeholder="Username/Email" autofocus v-model="username" />
                            </div>
                            <div class="detail__ipt detail__item">
                                    <el-input type="password" name="password"  id="password" placeholder="Password" v-model="password" />
                            </div>
                            <div class="detail__forget detail__item clearfix">
                                    <label class="remember_pass">
                                            <el-checkbox type="checkbox" class="" />Remember Me
                                    </label>
                                    <a style="color: #fff;cursor: pointer" @click="register">Register</a>
                            </div>
                            <div>
                                <el-button @click="login" style="width: 100%;margin-top: 10px" type="primary">Login</el-button>
                            </div>
                    </div>
                    <div class="fotter">
                            <div>OS X</div>
                            <div>Mountain Lion</div>
                    </div>
            </div>
    </div>
</template>

<script>
    export default {
    	data() {
    		return {
                username: '',
                password: '',
    		}
        },
        methods: {
            login() {
                const users = this.getStorage('users') || []
                const {username,password} = this        // es6解构赋值
                // 判断该用户名是否在本地存储里
                const isUserExist = username in users && users[username] === password
                //判断是否为管理员
                const isAdmin = username === 'admin' && password === 'admin'

                if(isUserExist || isAdmin) {
                    // 登录成功  将用户名存起来  并且跳转到页面内
                    sessionStorage.setItem('auth',username)
                    this.$router.push('./admin/home')
                }else {
                    this.$notify({
    					title: "提示",
    					message: "用户名或密码错误",
    					type: "error"
    				})
                }
            },
            register() {

                this.$router.push('./register')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .login__box {
    	background-color: #06366e;
    	position: fixed;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	background-image: url("./img/back.jpg");
    	background-size: 100% 100%;
    }
    .login__content {
    	width: 380px;
    	height: 400px;
    	display: inline-block;
    	position: absolute;
    	top: 0;
    	bottom: 0;
    	left: 0;
    	right: 0;
    	margin: auto;
    }
    .content__header img {
    	border: 1.5px solid #fff;
    	border-radius: 50%;
    }
    .content__header {
    	margin: 10px auto;
    	text-align: center;
    }
    .content__header h1 {
    	color: #a2cbf3;
    	font-size: 24px;
    	font-weight: 500;
    	letter-spacing: 4px;
    }
    .content__header h1:after {
    	content: "State Taxation Bureau of Chengdu";
    	display: block;
    	font-size: 12px;
    	color: #4a709d;
    	text-transform: uppercase;
    	letter-spacing: normal;
    }
    .box {
    	top: -20px;
    	right: 177px;
    	position: absolute;
    	width: 0;
    	height: 0;
    	border: 10px transparent solid;
    	border-bottom-color: rgba(255, 255, 255, 0.1);
    }
    .content__detail:before {
    	width: 0;
    	height: 0;
    	border: 10px transparent solid;
    	border-bottom-color: rgba(255, 255, 255, 0.3);
    	position: absolute;
    	top: -20px;
    	right: 177px;
    	content: "";
    }
    .content__detail {
    	position: relative;
    	background: rgba(255, 255, 255, 0.1);
    	padding: 30px 20px;
    	border: 1px solid #aaa;
    	border-radius: 10px;
    	z-index: 50;
    	/*background: url("../../assets/images/login/loginbox.png")  no-repeat left top/100% 100%;*/
    }
    .fotter {
    	text-align: center;
    	color: #fff;
    	margin-top: 15px;
    }
    .detail__title {
    	position: absolute;
    	left: 155px;
    	top: 20px;
    	color: #a2cbf3;
    	font-weight: 400;
    }
    .detail__item {
    	margin: 14px 0;
    }
    input::-webkit-input-placeholder {
    	/* WebKit browsers */
    	color: white;
    }
    .detail__ipt {
    	position: relative;
    }
    .detail__ipt input {
    	width: 100%;
    	height: 32px;
    	line-height: 32px;
    	color: #fff;
    	text-indent: 28px;
    	border: 1px solid #e2e4dd;
    	background-color: rgba(255, 255, 255, 0.2);
    	border-radius: 3px;
    }
    .ipt__icon {
    	position: absolute;
    	left: 5px;
    	top: 3px;
    	color: #3b78b5;
    	font-size: 20px;
    }

    .detail__forget .remember_pass {
    	float: left;
    	font-size: 12px;
    	color: #fff;
    	/*vertical-align: middle;*/
    }
    .detail__forget .remember_pass input {
    	/*    position: relative;*/
    	/*    width: 13px;
        height: 13px;*/
    	color: transparent;
    	vertical-align: middle;
    	/*    margin-right: 5px;*/
    	/*    cursor: pointer;*/
    	/*    border: 1px solid #eee;*/
    	/*    -webkit-appearance:none;*/
    	/*    background-color: rgba(255,255,255,.7);*/
    	/*    vertical-align: middle;*/
    }
    .detail__forget .remember_pass input:after {
    	position: absolute;
    	content: "v";
    	top: -3px;
    	left: 1px;
    	color: inherit;
    }
    .selected {
    	color: #3b78b5 !important;
    }
    .detail__forget a {
    	float: right;
    	font-size: 12px;
    }

    .detail__btn button {
    	width: 100%;
    	height: 30px;
    	color: #fff;
    	cursor: pointer;
    	font-size: 15px;
    	letter-spacing: 5px;
    	background-color: #2964e5;
    	border-radius: 3px;
    	border: 0;
    	margin-top: 12px;
    	margin-bottom: 0;
    }
    .detail__btn button:hover {
    	opacity: 0.9;
    }
</style>
