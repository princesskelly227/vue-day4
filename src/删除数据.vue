<template>
  <div id="app">
    <ul>
      <li v-for='(item,index) in num' :key="index">{{item}}<button @click='del(index)'>删除</button></li>
    </ul>
    <button @click="create">生成</button>
  </div>
</template>

<script>
// import moment from 'moment';
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色
export default {
  data() {
    return {
     num:[]
    };
  },
  methods: {
   create(){
    this.num.push(Math.floor(Math.random()*20))
    console.log(this.num);
   },
   del(ind){
  //  const index= this.num.findIndex((ele)=>{return ele.index==ind})
   this.num.splice(ind,1)
   }
  },
  
};
</script>

<style >

</style>