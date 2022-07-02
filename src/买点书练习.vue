<template>
  <div>
    <p>请选择你要购买的书籍</p>
    <ul>
        <li v-for="(item, index) in arr" :key="index">
        <span>{{ item["name"] }}</span>
        <button @click="buy(item.name)">买书</button>
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
      <tr v-for="(item,index) in arr" :key="index">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.count}}</td>
        <td>{{item.count*item.price}}</td>
      </tr>
    </table>
    <p>总价格为: {{allPrice}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
      name: '',
      price: 0,
      count: 0
    };
  },
  methods: {
    buy(val) {
        const index = this.arr.findIndex(ele => ele.name ==val)
        this.arr[index].count++
    }
  },
  computed:{
    allPrice() {
        return this.arr.reduce((sum,next) => {
            return sum + next.count*next.price;
        },0)
    }
  }
};
</script>