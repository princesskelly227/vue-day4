<template>
  <div>
    <p>国内网站粉丝数量：{{ (num + '万') | numfil(10000) }}</p>
    <p>外国网站粉丝数量：{{ (num + '千') | numfil(1000) }}</p>
    <br />
    <p>时间：{{ time | timefil('YYYY-MM-DD')}}</p>
    <p>时间：{{ time | timefil('YYYY/MM/DD')}}</p>
  </div>
</template>

<script>
import moment from moment
export default {
    data() {
        return {
            num: 1876986,
            time: 1636450540055
        }
    },
    filters: {
        numfil(val,unit) {
            return this.num / unit
        },
        timefil(val,str) {
             return moment(val).format(str)
        }
    }

}
</script>

<style></style>
