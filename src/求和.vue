<template>
  <div>
    <div v-for="item in arr" :key="item">
      <input type="checkbox" v-model="check" :value="item" />
      <span>{{ item }}</span>
    </div>
    <p>你选中的元素, 累加的值和为: {{ all }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      check: [],
    };
  },
  computed: {
    all() {
      return this.check.reduce((sum, next) => sum + next, 0);
    },
  },
};
</script>

<style></style>
