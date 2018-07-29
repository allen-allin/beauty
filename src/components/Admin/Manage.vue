<template>
    <div class="main">

        <!-- ele的表格组件 参考文档 -->
        <el-table :data="tableData" style="width: 80%;margin: 50px auto;" border>
            <el-table-column v-for="(item,index) in cols"
                :key="index"
                :prop="item.prop"
                :label="item.label" />
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDel(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
    	data() {
    		return {
                tableData: [],
                users: {},
                cols: [
                    {
                        prop: 'username',
                        label: '用户名'
                    },
                    {
                        prop: 'password',
                        label: '密码'
                    }
                ]
    		}
        },
        created() {
            //初始化的时候从本地存储里面获取所有用户信息并存在users里面
            const users = this.getStorage('users')
            this.users = users       
        },
        watch: {
            //监听users的变化，如果发生改变则根据users来计算出tableData
            users: {
                deep: true,
                handler(users) {
                    //这里用了es6中对象Object.entries方法以及数组的map方法，还有解构赋值和对象简写
                    this.tableData = Object.entries(users).map(([username,password]) => ({username,password}))
                }
            }
        },
        methods: {
            handleDel(item) {
                //由于vue 无法检测到对象属性的添加或删除，所以这里删除对象的属性的时候，要先拷贝一份
                const users = {...this.users}           //利用es6的扩展运算符来进行对象的浅拷贝
                delete users[item.username]             //删除这个用户名
                this.users = users                      //重新赋值给this.users，触发watcher，使表格数据更新
                this.setStorage('users',users)          //将新数据存到本地存储里
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
