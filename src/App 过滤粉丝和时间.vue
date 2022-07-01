<template>
  <div>
    <h2>
      <p>国内网站: 粉丝数量：{{ num | numFts(10000, '万') }}</p>
      <p>国外网站: 粉丝数量：{{ num | numFts(1000, '千') }}</p>
    </h2>

    <h2>
      <p>时间：{{ time | timeFts('YYYY- MM - DD') }}</p>
      <p>时间：{{ time | timeFts('YYYY / MM / DD') }}</p>
    </h2>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  data() {
    return {
      num: 1876986,
      time: 1636450540055,
    };
  },
  filters: {
    numFts(num, val, str) {
      return num / val + str;
    },
    timeFts(val, str) {
      return moment(val).format(str);
    },
  },
};
</script>

<style></style>
