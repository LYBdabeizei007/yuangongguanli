<template>
  <div>
     
    <h1>这是中间变换的</h1>
    <LoginView></LoginView>
    <SwiperView></SwiperView>
    <ContrView></ContrView>	 
  </div>
</template>
<script>
	
import SwiperView from './Swiper.vue';
import ContrView from './Contr.vue';
import LoginView from './login.vue';

export default{
	components:{
		SwiperView,
		ContrView,
		LoginView
	}
}

</script>