//if using vue-imagesLoaded for images, plugins/vue-imagesLoaded.js
//搭配 vue-isotope.js 使用

import Vue from 'vue'
import imagesLoaded from 'imagesloaded'

Vue.directive('images-loaded', imagesLoaded)