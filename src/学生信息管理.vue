<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" placeholder="请输入您的姓名"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" placeholder="请输入您的年龄"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value=0>男</option>
        <option value=1>女</option>
      </select>
    </div>
    <div>
      <button @click="add">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="item in arr" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ {0:'男',1:'女'}[item.sex] }}</td>
          <td>
            <button @click="del(item.id)">删除</button>
            <button @click="edit(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      arr:JSON.parse(localStorage.getItem("arr"))||[],
      // arr: [
      //   {
      //     id: 1,
      //     name: "one",
      //     age: 18,
      //     sex: 0,
      //   },
      //   {
      //     id: 2,
      //     name: "two",
      //     age: 20,
      //     sex: 1,
      //   },
      // ],
      name: "",
      age: "",
      sex: 0,
      flag: false,
      num: 0,
    };
  },
  methods: {
    add() {
      if (this.flag) {
        this.flag = false;
        const index = this.arr.findIndex((ele) => ele.id == this.num);
        this.arr[index] = {
          id: this.arr[index].id,
          name: this.name,
          age: this.age,
          sex: this.sex,
        };
        this.name = "";
        this.age = "";
        this.sex = 0;
        localStorage.setItem('arr',JSON.stringify(this.arr))
        return;
      }
      if (this.name == "" || this.age == "")
        return alert("请您完善信息");
      const id = this.arr[this.arr.length - 1]
        ? this.arr[this.arr.length - 1].id + 1
        : 1;
      this.arr.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
      this.name = "";
      this.age = "";
      this.sex = 0;
    },
    del(id) {
      const index = this.arr.findIndex((ele) => ele.id == id);
      this.arr.splice(index, 1);
    },
    edit(id) {
      this.flag = true;
      const index = this.arr.findIndex((ele) => ele.id == id);
      this.num = this.arr[index].id;
      this.id = this.arr[index].id;
      this.name = this.arr[index].name;
      this.age = this.arr[index].age;
      this.sex = this.arr[index].sex;
    },
  },
  watch: {
    arr:{
      handler(val){
        localStorage.setItem('arr',JSON.stringify(val))
      },
      deep: true
    }
  }
};
</script>
<style></style>