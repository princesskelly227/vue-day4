<template>
  <div>
   <span>国内网站粉丝数量：{{fansNum/10000 | fans}}</span><br>
   <span>国外网站粉丝数量：{{fansNum/1000 | fans2}}</span><br>
   <span>时间：{{time | format('YYYY-MM-DD')}}</span><br>
   <span>时间：{{time | format('YYYY/MM/DD')}}  </span>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      fansNum:1876986,
      time:1636450540055
    };
    
  },
  filters: {
    fans:(val)=>{
      return val.toFixed(2)+'万'
    },
    fans2:(val)=>{
      return val.toFixed(2)+'千'
    },
    format:(val,str)=>{
      return moment(val).format(str)
    }
  }
 
};
</script>