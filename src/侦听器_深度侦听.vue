<template>
  <div>
    <span>用户名:</span>
    <input type="text" v-model="account.name" />
    <span>密码:</span>
    <input type="text" v-model="account.pwd" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: {
        name: "",
        pwd: "",
        msg: {
          msg: {
            a: "1",
          },
        },
      },
     
    };
  },
  watch: {
   
    "account.msg": {
      handler(newVal, oldVal) {
        console.log("newVal", newVal);
      },
      deep: true, 
      immediate: true, 
    },
  },
  
};
</script>