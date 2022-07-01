<template>
  <div>
    <div v-for="(item, index) in arr" :key="index">
      <input type="checkbox" v-model="checkAll" :value="item" />{{ item }}
    </div>
    <p>选中的元素，累加和为:{{ sumAll() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      checkAll: [],
    };
  },
  methods: {
    sumAll() {
      return this.checkAll.reduce((sum, val) => {
        return (sum += val);
      }, 0);
    },
  },
};
</script>

<style></style>
