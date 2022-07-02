<template>
  <div>
   <div v-for='item in arr' :key='item'  >
    <input type="checkbox" v-model='sum' :value="item">{{item}}
   </div>
   <span>累计值为{{total}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
     arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
     sum:[]
    };
    
  },
  computed: {
    total(){
      return this.sum.reduce((tol,next)=>{return tol+ next},0)
    }
  }
 
};
</script>