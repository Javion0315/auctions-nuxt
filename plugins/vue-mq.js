import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
    breakpoints: {
      mobile: 450,
      tablet: 768,
      laptop: 1200,
      desktop: Infinity,
    }
  })