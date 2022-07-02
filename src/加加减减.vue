<template>
  <div id="app">
    <ul>
      <li v-for="(item, index) in arr" :key="item">
        <span>{{ item }}</span>
        <button @click="del(index)">删除</button>
      </li>
    </ul>
    <button @click="addFn">生成</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    addFn() {
      this.arr.push(Math.floor(Math.random() * (100-1)+1));
    },
    del(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>