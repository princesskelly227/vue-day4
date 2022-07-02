// 局部过滤器
<template>
  <div id="app">
    <!-- <p>原来的样子: {{ msg }}</p>
    <p>使用翻转过滤器: {{ msg | reverse }}</p> -->
    <p :title="msg | toUp">鼠标长停</p>
    
  </div>
</template>

<script>

 
export default {
  data(){
    return {
      msg:  'Hello, Vuelllllllllllllllllllllll'
    }
  },
 
  filters:{
    toUp(val){
      return val.toUpperCase()
    }
  }
}
</script>

<style>

</style>
