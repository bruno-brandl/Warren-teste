<template>
  <div class="container">
    <div class="container-text">
      <h1>Investir é sobre você</h1>
      <p>Comece a Investir em Poucos Minutos, DESCOMPLIQUE.</p>
    </div>

    <div>
      <button class="invista">Invista</button>
    </div>
  </div>
</template>



<script>
export default {
  name: "SegundoComponente",
};
</script>

<style>
.container {
  width: 100%;
  padding: 100px;
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
background-color: #6c6a6b;
}

h1 {
  font-size: 50px;
  font-family: "Times New Roman", Times, serif;
}

.invista {
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
.invista:hover {
  background-color: #f5e6e6;
  color: rgb(0, 0, 0);
}
</style>