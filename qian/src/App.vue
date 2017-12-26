<template>
  <div id="app">
   <HeaderView></HeaderView>
   <!-- <HomeView></HomeView> -->
   <router-view></router-view>  
   <FooterView></FooterView>
  </div>
</template>
<script>
import HeaderView from './components/header.vue';
import FooterView from './components/footer.vue';
import HomeView from './components/Home.vue';

export default{
	components:{
		HeaderView,
		FooterView,
		HomeView
	}
}

</script>
<style scoped>
    /*@import './assets/css/index.css'*/
 </style>


