<template>
    <div>
        <el-menu default-active="home" mode="horizontal"  @select="handleSelect">
            <el-menu-item index="home">我的简历</el-menu-item>

            <!-- 当管理员的时候显示用户管理路由 -->
            <el-menu-item v-if="auth === 'admin'" index="manage">用户管理</el-menu-item>  
            <el-menu-item style="float: right" index="login"> <img src="../img/tx.png" alt=""> &nbsp;&nbsp;退出</el-menu-item>
        </el-menu>


        <!-- 子路由： 简历和用户管理页面 -->
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                auth: sessionStorage.getItem('auth')
            }
        },
    	methods: {
           
            handleSelect(index) {
                if(index === 'login') {         //如果是退出则跳回登陆页面 同时情况登陆信息
                    sessionStorage.removeItem('auth')
                }

                 // 点击菜单 跳转到相应的路由
                this.$router.push({
                    name: index
                })
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
    	font-weight: normal;
    }
    ul {
    	list-style-type: none;
    	padding: 0;
    }
    li {
    	display: inline-block;
    	margin: 0 10px;
    }
    a {
    	color: #42b983;
    }
</style>
