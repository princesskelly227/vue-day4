<template>
  <div>
    <input type="text" v-model="user.name" />
    <input type="text" v-model="user.age" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: 0,
      },
    };
  },
  watch: {
    "user.name": {
      handler(val) {
        console.log(val);
      },
      deep: true,
    },
  },
  
};
</script>

<style>
</style>