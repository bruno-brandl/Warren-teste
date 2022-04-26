<template>
<footer>
       <div id="textos">
      <div id="sobre">
        <h2 class="sobre">Sobre</h2>
        <p class="sobre">Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
      </div>
      <div id="investir">
        <h2 class="investir">Investir</h2>
        <div id="investir">
          <p class="investir">Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
      <div id="fale">
        <h2 class="fale">Fale Conosco</h2>
        <div id="fale">
          <p class="fale">Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
          <p>Lorem Ipsum</p>
        </div>
      </div>
    </div>
    </footer>

</template>

<script>
export default {
  name: "TerceiroComponente",
};
</script>
<style>
footer {
  background-color: rgb(94, 88, 91);
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
#textos {
  height: 22  0px;
  width: 100ch;
  font-size: 23px;
  display: flex;
  justify-content: space-evenly;

}
.sobre {
  padding-top: 22px;
}
.investir {
  padding-top: 22px;
}

.fale {
  padding-top: 22px;
}
</style>