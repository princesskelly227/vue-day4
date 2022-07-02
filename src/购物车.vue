<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="all" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item,index) in list" :key="item.id">
        <td><input type="checkbox" v-model="item.c" /></td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <span @click="subtract(index)">-</span
          ><input type="text" v-model.number="item.conut" /><span
            @click="add(index)"
            :value="item.count"
            >+</span
          >
        </td>
        <td>{{ item.price * item.conut || 0 }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="dels">删除选中商品</button>
    <button @click="delall">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数{{ isprice }}</p>
      <p>总价{{ allprice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", price: 100000, conut: 0, c: false },
        { id: 2, name: "宝马", price: 200000, conut: 0, c: false },
        { id: 3, name: "奥迪", price: 300000, conut: 0, c: false },
      ],
      num: 0,
      arr: [],
    };
  },
  methods: {
    subtract(index) {
      this.list[index].conut--;
    },
    add(index) {
      this.list[index].conut++;
    },
    del(id) {
      const index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    dels() {

    },
    delall() {
      this.list=[]
    },
  },
  computed: {
    all: {
      set(val) {
        this.list.forEach((ele) => (ele.c = val));
      },
      get() {
        return this.list.every((ele) => ele.c);
      },
    },
    isprice() {
      return this.list.reduce((sum, next) => sum+next.conut, 0);
    },
    allprice() {
      return this.list.reduce(
        (sum, next) =>  sum + next.price * next.conut ,
        0
      );
    },
  },
};
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
