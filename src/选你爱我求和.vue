<template>
  <div>
    <span
      v-for="(item, index) in arr" :key="index">
      <input type="checkbox" v-model="selectNum" :value="item" />
      <i>{{ item }}</i>
    </span>
    <p>你选中的元素, 累加的值和为: {{ numSum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      selectNum: [], 
    };
  },
  computed: {
    numSum() {
      return this.selectNum.reduce((sum, next) =>  sum += next, 0);
    },
  },
};
</script>

<style>
i {
  font-style: normal;
  margin-right: 10px;
}
</style>