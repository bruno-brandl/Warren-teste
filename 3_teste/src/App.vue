<template>
  <nav>
   
<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style="float:right">  <img width="100px" alt="Vue logo" src="./assets/1.png"></li>

</ul>
  </nav>
    <div class="dropdown">
  <button class="dropbtn">menu com sub menu</button>
  <div class="dropdown-content">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
  </div>
</div> 
<componente-1/>
</template>

<script>
import componente1 from './components/componente1.vue'
export default {
  name: 'App',
  components: {
    componente1
  }
  

}
</script>

<style>

body{
  background-color: rgb(147, 143, 144);
}


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(157, 157, 157);
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}
.dropbtn {
  background-color: #cbc9c9;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
  
}

.dropdown:hover .dropbtn {
  background-color: #656060;
}

</style>