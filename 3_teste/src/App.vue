<template>
  <div>
    <componente1 />
    <section>
      <div class="container-banner">
        <div class="text-h-1">
          <h1>Por que investir em Carteiras na Warren?</h1>
          <div class="text-h-4">
            <h4>Descubra seu perfil, crie objetivos e comece a investir</h4>
            <br />
          </div>
          <button class="botao2">Criar Conta</button>
        </div>
      </div>
    </section>
    <br />
   

    <div id="divMain">
      <div id="mainContents1">
        <div id="mainPhoto1">
          <img src="./assets/wa.jpg " id="mainPhoto2" width="120px" alt="" />
        </div>
        <div id="mainText1">
          <h2 id="mainTitle1">Loren Ipsum</h2>
          <p class="mainText1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            veritatis aut consequuntur iste dolore pariatur, quia, perferendis
            doloremque illo quaerat voluptas. Sunt perspiciatis facilis error
            dolor veritatis unde nulla magni.
          </p>
          <div id="mainButton1">
            <input type="button" value="Button" class="mainButton1" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div id="mainContents2">
        <div id="mainPhoto2">
          <img src="./assets/wa.jpg " id="mainPhoto2" width="120px" alt="" />
        </div>
        <div id="mainText2">
          <h2 id="mainTitle2">Loren Ipsum</h2>
          <p class="mainText2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            veritatis aut consequuntur iste dolore pariatur, quia, perferendis
            doloremque illo quaerat voluptas. Sunt perspiciatis facilis error
            dolor veritatis unde nulla magni.
          </p>
          <div id="mainButton2">
            <input type="button" value="Button" class="mainButton2" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>

  <componente2 />
  <componente3 />
</template>
   


<script>
import componente1 from "./components/componente1.vue";
import componente2 from "./components/componente2.vue";
import componente3 from "./components/componente3.vue";
export default {
  name: "App",
  components: {
    componente1,
    componente2,
    componente3,
  },
};
</script>

<style>
svg {
  cursor: pointer;
}
svg:hover {
  -ms-transform: scale(1.2);
  -webkit-transform: scale(1.2);
  transform: scale(1.1);
}
* {
  box-sizing: border-box;
  margin: 0;
}

#divMain {
  height: 100vh;
}
#mainContents1 {
  height: 70vh;
  display: flex;
  align-items: center;
}
#mainPhoto1 {
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
}
#mainText1 {
  height: 50vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
#mainTitle1 {
  font-size: 40px;
  color: black;
}
.mainText1 {
  width: 75%;
  font-size: 20px;
  color: black;
  border-bottom: solid 3px rgb(255, 0, 89);
}
.mainButton1 {
  font-size: 20px;
  padding: 10px 55px;
  border: 0px;
  border-radius: 30px;
  color: white;
  background-color: rgb(255, 20, 106);
}
.mainButton1:hover {
  background-color: rgba(255, 20, 106, 0.616);
}
#mainContents2 {
  height: 50vh;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
#mainPhoto2 {
  width: 60%;
  height: auto;
  display: flex;
  justify-content: center;
}
#mainText2 {
  height: 50vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: end;
}
#mainTitle2 {
  font-size: 40px;
  color: black;
}
.mainText2 {
  width: 75%;
  font-size: 20px;
  color: black;
  border-bottom: solid 3px rgb(255, 0, 119);
}
.mainButton2 {
  font-size: 20px;
  padding: 10px 55px;
  border: 0px;
  border-radius: 30px;
  color: white;
  background-color: rgb(255, 20, 106);
}
.mainButton2:hover {
  background-color: rgba(255, 20, 106, 0.616);
}

.container-banner {
  width: 100%;
  height: 580px;
  background-color: #555555;
  font-family: "Source Sans Pro", sans-serif;
  padding: 100px 15%;
  flex-direction: column;
  display: flex;
}

.text-h-1 {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  font-size: 48px;
  height: 56px;
  color: #ebecf3;
}
.botao2 {
  text-align: center;
  padding-left: 2px;
  height: 66px;
  font-size: 40px;
  color: #ffffff;
  border-radius: 24px;
  border-style: none;
  background-color: rgb(161, 157, 157);
  text-align: center;
  cursor: pointer;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.botao2:hover {
  background-color: #ecd6d6;
  color: rgb(0, 0, 0);
  border-bottom: 2px solid rgb(233, 107, 107);
}
</style>