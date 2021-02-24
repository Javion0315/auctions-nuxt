<template>
    <div>
        this is download page with qrcode.
    </div>
</template>

<script>
export default {
  created() {
      if(process.browser) {
        this.judgeBrand(navigator.userAgent.toLowerCase())
        console.log(navigator.userAgent.toLowerCase())
      }
        
  },
  methods: {
    judgeBrand(sUserAgent) {
        var isIphone = sUserAgent.match(/iphone/i) == "iphone";
        var isHuawei = sUserAgent.match(/huawei/i) == "huawei";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var isSamsung = sUserAgent.match(/sm-/i) == "sm-";

        if(isIphone) {
            location.href='https://apps.apple.com/us/app/id1527395702'
            console.log('iphone')
        } else if (bIsAndroid) {
            if(isHuawei) {
                location.href='https://sh-gemcard-co.oss-cn-shanghai.aliyuncs.com/GemCard%20Sport%20Cards%20Trading_v1.0.24_apkpure.com.apk'
                console.log('huawei')
            } else if(isSamsung) {
                location.href='https://play.google.com/store/apps/details?id=com.cardcool.gemcard'
                console.log('samsung')
            } else {
                location.href='https://play.google.com/store/apps/details?id=com.cardcool.gemcard'
                console.log('android')
            }
        } else {
            location.href='https://www.gemcard.co/zh-tw'
            console.log('pc')
        }
    }
  }
}
</script>