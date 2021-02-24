import Vue from "vue";
import VueCurrencyFilter from 'vue-currency-filter';

// or with custom config
Vue.use(VueCurrencyFilter, {
//   symbol : '$',
  thousandsSeparator: ',',
//   fractionCount: 0,
//   fractionSeparator: ',',
//   symbolPosition: 'front',
  symbolSpacing: false
})