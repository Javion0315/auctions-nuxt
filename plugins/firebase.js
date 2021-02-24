
import firebase from 'firebase/app';//因使用的是Firebase SDK snippet，所以是firebase/app
import "firebase/firestore";
import "firebase/analytics";

//Only run on client-side and only in production mode
if (process.client 
  && process.env.NODE_ENV === 'production' 
  && window.location.hostname === 'www.gemcard.co' //只在正式網域作用
  ) {

  //Firebase SDK snippet
  let firebaseConfig = {
      apiKey: "AIzaSyBfUq3zxrR5x6FmeXBY9u-_xK2yG29i2Lc",
      authDomain: "gemcard-web-8c5bc.firebaseapp.com",
      databaseURL: "https://gemcard-web-8c5bc.firebaseio.com",
      projectId: "gemcard-web-8c5bc",
      storageBucket: "gemcard-web-8c5bc.appspot.com",
      messagingSenderId: "892974942910",
      appId: "1:892974942910:web:cdf1aeebf9756c4af12cef",
      measurementId: "G-Q6E434HSX6"
    };

  // 確認firebase是否準備初始化
  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
  }

  // Vue.config.productionTip = false

  // const defaultAnalytics = firebase.analytics();
}