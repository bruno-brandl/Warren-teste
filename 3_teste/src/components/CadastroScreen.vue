<template>
      <div class="principal">
         <div class="linhas">
         <input type="radio">
         <div id="linha"></div>
         <input type="radio">
         <div id="linha"></div>
         <input type="radio"> 
          <br>
          <br>
     </div>
     </div>
     <br>
     <br>
    <div class="dois">
    <h1>Seja bem vindo</h1>
    
     </div>
        
            <br>
     

  <div class="Bem">

    <br>
    <p id="oi">Dados Pessoais</p>
   
    <section>
      <br>
      <br class="b">

      <div class="form">
        <br>
        <p>Seu Nome</p>
        <input class="input1" type="text">
        <br>
        
      </div>
      <br>
      
      <div class="form2">
        <p id="e1">Email</p>
        <input class="inputE1" type="email">
        <div>
          <br>
          
          <p id="e1">Confirme seu Email</p>
          <br>
          <input class="inputE2" type="email">
        </div>
      </div>
  
     <br>
      
      <div class="form2">
        <p id="e1">cpf</p>
        <input class="inputE3" type="number">
        <div>
          <br>
          
          <p id="e2">Telefone</p>
          <br>
          <input class="inputE4" type="number">
        </div>
      </div>
      <div>
        
      
        <p id="e2">Data de Nascimento</p>
        <input class="inputE5" type="date">
          <div>
            <br>
    <p id="txt">asajdsahdjkasgijgdbvbiybvbjbivbjkfds <br><br> sgdjkgsjgsjasgdjsagdkgasdksagdhkasgdjasgdjsgdjasgdsjkag</p>
  </div>
      </div>
      <div id="whatsapp">
        <input type="checkbox">
        <p>Whatsapp</p>
      </div>
      <br>
           <div id="email">
        <input type="checkbox">
        <p>Email</p>
      </div>
          <div>
            <br>
    <p id="txt">asajdsahdjkasgijgdbvbiybvbjbivbjkfds <br><br> sgdjkgsjgsjasgdjsagdkgasdksagdhkasgdjasgdjsgdjasgdsjkag</p>
  </div>

  <br>
        <button> Proximo</button>
     </section>
  </div>


</template>
<script>
export default {
  name: "cadastroScreen",
};
</script>
<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
}
#txt1{
  margin-left: 12%;
}
section{

  border-inline: solid 5px rgb(255, 0, 68);
  margin-right: 32%;
  display: inline-block;
  padding: 52px;
}

.Bem{
   
   margin-left: -60.6%;
   padding: 9%
}
.form{
  font-size: 23px;
  
}
.input1{
  padding: 16px;
  width:565px;
  border-radius: 9px;
  font-size:23PX ;
  border-bottom: solid 0.1px rgb(221, 1, 93);;
  
}
#oi{
  margin-left: 23%;
  font-size: 42px;
}
h1{
  font-size: 57px;
}
.dois{

  margin-left: 24%;
}
.form2{
 
  
  display: inline-flex;
}
.inputE1{
  margin-top:16%;
  width:265px;
  border-radius: 9px;
  margin-right: 16%;
  font-size: 21px;
  margin-left: -45px;
  border-bottom: solid 0.1px rgb(221, 1, 93);;
  
  }
.inputE2{
  
font-size: 21px;
padding: 3%;
width: 248px;
border-radius: 9px;
margin-top: 3%;
border-left:4px rgb(13, 11, 0) ;
border-bottom: solid 0.1px rgb(221, 1, 93);;
}
.inputE4{
font-size: 21px;
padding: 5%;
width: 265px;
border-radius: 9px;
margin-left: 12%;
border-bottom: solid 0.1px rgb(221, 1, 93);;
}
.inputE3{
  margin-top: 14%;
  width: 275px;
  border-radius: 9px;
  font-size: 21px;
  margin-left: -28px;
    border-bottom: solid 0.1px rgb(221, 1, 93);;

  
  }
#e1{
  margin-top: 7%;
  margin-left: 2%;
}
#e2{
 margin-left: 13%;
margin-top: 5%;
padding: 2px;
}
.inputE5{
   padding: 13px;
  width:165px;
  border-radius: 9px;
  font-size:23PX ;
  border-bottom: solid 0.1px rgb(221, 1, 93);
  margin-left: 10%;
}
#txt{
  margin-left: 2%;
}
#whatsapp{
  display: inline-flex; 
  margin: 12%;
}
#email{
  display: inline-flex; 
  margin-left: 12%;
}
button {
  text-align: center;
  padding-left: 2px;
  margin-left: 30%;
  height: 56px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 26px;
  color: #060606;
  border-radius: 24px;
  border-style: none;
  background-color: rgb(240, 176, 209);
  text-align: center;
  cursor: pointer;
  font-family: "Times New Roman", Times, serif;
}
button:hover {
  background-color: #f5e6e6;
  color: rgb(0, 0, 0);
}
.linhas{
  display: inline-flex;
  margin-left: 50%;  
    }
#linha{
  border-bottom: solid 3px magenta;
  margin: 12%;

}
</style>
