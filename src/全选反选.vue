<template>
  <div>
    <span>全选:</span>
    <input type="checkbox"  v-model="allcheck">
    <button @click='btn'>反选</button>
    <ul>
      <li v-for='(item,index) in arr' :key='index'>
        <input type="checkbox" v-model='item.c'>{{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "猪八戒",
          c: false,
        },
        {
          name: "孙悟空",
          c: false,
        },
        {
          name: "唐僧",
          c: false,
        },
        {
          name: "白龙马",
          c: false,
        },
      ],
      
    };
  },
  computed: {
    allcheck:{
      set(val){
        this.arr.forEach((ele)=>{return ele.c=val})
      },
      get(){
        return this.arr.every(ele=>ele.c===true)
      },
    }
  },
  methods: {
    btn(){
      this.arr.forEach(ele=>ele.c=!ele.c)
    }
  }
  

};
</script>