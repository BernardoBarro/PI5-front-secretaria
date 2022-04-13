<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <div class="container">
    <div class="box">
      <img id="logo-box" src="../../assets/logoRotaract.png" alt="" />
      <h1 class="titulo-box">ROTARACT</h1>
      <h1 class="linha-box">_______________________</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RodapeBox",
});
</script>

<style scoped>
.box {
  background-color: white;
  width: 68%;
  height: 35rem;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 23%;
}
.container {
  display: flex;
  justify-items: center;
}
#logo-box {
  height: 15%;
  margin-left: 30%;
  margin-top: 25%;
}
.titulo-box {
  font-size: 25px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.2rem;
  margin-top: 5px;
  font-weight: bold;
  color: #f970a4;
}
.linha-box {
  margin-top: -15px;
  font-size: 20px;
  color: #f970a4;
  font-weight: bold;
  text-align: center;
}
</style>