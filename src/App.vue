<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.number="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">{{ isEdit ? '修改' : '添加' }}</button>
    </div>
    <div>
      <table table border="1" cellpadding="10" cellspacing="0">
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
          <td>{{ item.sex }}</td>
          <td>
            <button @click="delFn(item.id)">删除</button>
            <button @click="editFn(item)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { id: 100, name: '张三', age: 22, sex: '男' },
        { id: 101, name: '飒飒', age: 18, sex: '女' },
      ],
      name: '',
      age: '',
      sex: '男',
      isEdit: false, // false 代表没有处于编辑  true  代表处于编辑
      currentId: '',
    };
  },
  methods: {
    // 添加
    addFn() {
      // 点击修改之后把 更新后的数据加进去
      if (this.isEdit) {
        const index = this.arr.findIndex((ele) => {
          return ele.id === this.currentId;
        });
        this.arr[index].name = this.name;
        this.arr[index].age = this.age;
        this.arr[index].sex = this.sex;
        this.currentId = '';
        this.isEdit = false;
        this.clearFn();
        return;
      }

      // 非空判断
      if (this.name == '' || this.age == 0) {
        return alert('Please  enter ');
      }

      // 定义id
      const id = this.arr[this.arr.length - 1]
        ? this.arr[this.arr.length - 1].id + 1
        : 100;
      // 添加数据
      this.arr.push({
        id: id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
      this.clearFn();
    },
    // 删除
    delFn(id) {
      const index = this.arr.findIndex((ele) => {
        return ele.id === id;
      });
      this.arr.splice(index, 1);

      // this.arr = this.arr.filter((v, ind) => ind != index);
    },
    // 编辑
    editFn(item) {
      this.isEdit = true;
      this.name = item.name;
      this.age = item.age;
      this.sex = item.sex;
      this.currentId = item.id;
    },

    // 输入框清空的函数
    clearFn() {
      (this.name = ''), (this.age = ''), (this.sex = '男');
    },
  },
};
</script>
