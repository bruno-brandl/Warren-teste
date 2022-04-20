<template>
  <div class="container">
    <div class="container-text">
      <h1>Investir é sobre você</h1>
      <p>COMECE A INVESTIR EM POUCOS MINUTOS, DESCOMPLIQUE.</p>
    </div>

    <div>
      <button class="invista">Invista</button>
    </div>
  </div>
</template>



<script> export default {
        name: 'SegundoComponente' 
        } 
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
  background-color: #4d4444;
}

h1 {
  font-size: 50px;
}

.invista{
  text-align: center;
  padding-left: 2px;
  margin-left: 30%;
  height: 56px;
  font-size: 40px;
  color: #060606;
  border-radius: 24px;
  border-style: none;
  background-color: rgb(248, 87, 87);
  text-align: center;
  cursor: pointer;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.invista:hover {  
 background-color: #f5e6e6;
  color: rgb(0, 0, 0);
}
</style>