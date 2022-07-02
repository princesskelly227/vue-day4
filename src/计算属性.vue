<template>
  <div>
   
   
    {{ getTotalPrice }}
    {{ getTotalPrice }}
    {{ getTotalPrice }}
    {{ getTotalPrice }}
    {{ getTotalPrice }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      total: 5, // 商品数量
      price: 98, // 单价
      coupon: 400, // 优惠券
      // getTotalPrice: 0,
    };
  },
  
  computed: {
    getTotalPrice() {
      console.log("计算");
      return this.total * this.price >= 500
        ? this.total * this.price - this.coupon
        : this.total * this.price;
    },
  },
};
</script>