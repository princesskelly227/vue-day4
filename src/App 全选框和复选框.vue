<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="checkAll" />
    <button @click="reverse">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
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
          name: '猪八戒',
          c: false,
        },
        {
          name: '孙悟空',
          c: false,
        },
        {
          name: '唐僧',
          c: false,
        },
        {
          name: '白龙马',
          c: false,
        },
      ],
      // checkAll: [],
    };
  },
  computed: {
    checkAll: {
      set(val) {
        this.arr.forEach((item) => {
          item.c = val;
        });
      },
      get() {
        return this.arr.every((item) => {
          return item.c === true;
        });
      },
    },
  },
  methods: {
    reverse() {
      this.arr.forEach((item) => (item.c = !item.c));
    },
  },
};
</script>
