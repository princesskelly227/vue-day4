<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="item in arr" :key="item.name">
        {{ item.name }} <button @click="addFn(item.name)">买书</button>
      </li>
    </ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tr v-for="(item, index) in arr" :key="item.name">
        <th>{{ index + 1 }}</th>
        <th>{{ item.name }}</th>
        <th>{{ item.price }}</th>
        <th>{{ item.count }}</th>
        <th>{{ item.price * item.count }}</th>
      </tr>
    </table>
    <p>总价格为: {{ priceAll }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '水浒传',
          price: 107,
          count: 0,
        },
        {
          name: '西游记',
          price: 192,
          count: 0,
        },
        {
          name: '三国演义',
          price: 219,
          count: 0,
        },
        {
          name: '红楼梦',
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods: {
    addFn(val) {
      const index = this.arr.findIndex((ele) => ele.name == val);
      console.log(index);
      this.arr[index].count++;
    },
  },
  computed: {
    priceAll() {
      return this.arr.reduce(
        (sum, item) => (sum += item.price * item.count),
        0
      );
    },
  },
};
</script>
