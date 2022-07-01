<template>
  <div>
   <h1>国内网站：粉丝数量：{{fs|to(arr,'千')}}</h1>
   <h1>国外网站：粉丝数量：{{fs|to(arr,'万')}}</h1>
   <h1>时间:{{sum|timess('-')}}</h1>
   <h1>时间:{{sum|timess('/')}}</h1>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      sum:1636450540055,
      fs:1876986,
      arr:{'千':1000,'万':10000}
    };
  },
  filters:{
    timess(val,split){
      return moment(val).format('YYYY-MM-DD').split('-').join(split);
    },
    to(val,arr,number){
      return val/arr[number]+number
    }
  },
};
</script>