<template>
  <div>
    <HelloWorld />
       <div class="principal">
         
    <cadastroScreen />
     <img src="img/Capturar.png" alt="">
    </div>
  </div>
    
    
    

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import cadastroScreen from "./components/CadastroScreen.vue";

export default {
    name:'Login',
  components: {
    HelloWorld,
    cadastroScreen,
  
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
}
.principal{
  display: inline-flex;
  
  
}

img{
    width: 472px;
  height: 1177px;
  margin-left: 108px;
}
</style>