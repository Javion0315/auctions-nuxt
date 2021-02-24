<template>
  <div>
    <section class="page_404" v-if="error.statusCode === 404" style="text-align: center; margin: 100px 0px 20px 0px">
      <div class="container" style="display: flex; justify-content: center;">
        <div class="row">
          <div class="col-sm-12" style="width: 100vw;">
            <div class="col-sm-10 col-sm-offset-1 text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center">404</h1>
              </div>
              <div class="contant_box_404">
                <h3 class="h2">Look like you're lost</h3>

                <p>the page you are looking for not avaible!</p>

                <NuxtLink to="/">
                    <h1 style="font-size: 40px; color: #DAC187; margin-top: 20px; font-weight: bold">Home page</h1>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="containerElse" v-else style="text-align: center; margin: 100px 0px 20px 0px">
        <h1>An error as occured.</h1>
        <h1> <span class="ascii">(╯°□°）╯︵ ┻━┻</span></h1>
        <NuxtLink to="/">
            <h1 style="font-size: 40px; color: #DAC187; margin-top: 20px; font-weight: bold">Home page</h1>
        </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error',
}
</script>

<style scoped>
/*======================
    404 page
=======================*/

.page_404 {
  padding: 40px 0;
  background: #fff;
  font-family: "Arvo", serif;
}

.page_404 img {
  width: 100%;
}

.four_zero_four_bg {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-repeat: no-repeat;
  background-position: center;
}

.four_zero_four_bg h1 {
  font-size: 80px;
}

.four_zero_four_bg h3 {
  font-size: 80px;
}

.link_404 {
  color: #fff !important;
  padding: 10px 20px;
  background: #39ac31;
  margin: 20px 0;
  display: inline-block;
}
.contant_box_404 {
  margin-top: -50px;
}
.containerElse {
	height: 400px;
    font-size: 50px;
	font-family: "Montserrat", "sans-serif";
	font-weight: bolder;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
</style>