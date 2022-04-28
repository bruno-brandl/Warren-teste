<template>
 <header>
        <div class="navbar">
            <img class="logo" src="/img/icon.png" alt="">
            <div class="nav-container">
                
                 <h1 class="text">Formulario</h1>
            
            </div>
  

        </div>
    </header>
</template>
<script>
export default {
        name: 'PrimeiroComponente'
}
</script>
<style>

   *{
    box-sizing: border-box;
    margin: 0;
}
    .text{
      cursor: pointer;
      margin-left: 35px;


    }
    
    .logo{
  cursor: pointer;
  margin-right: 5%;
}
 .logo:hover{
    -ms-transform: scale(1.2); 
  -webkit-transform: scale(1.2); 
  transform: scale(1.2); 
 }
.navbar{
    background-color: #f03079;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 1490px;
    
   
    
} 
.nav-container{
    font-family: 'Source Sans Pro', sans-serif;
    justify-content: center;
    display: flex;
}
</style>