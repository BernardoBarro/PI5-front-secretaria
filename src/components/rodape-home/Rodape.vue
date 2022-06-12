<template>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <div class="container">
    <div class="box">
      <div class="container-bola">
        <div class="bola"></div>
        <div class="bola"></div>
        <div class="bola"></div>
        <div class="bola"></div>
        <div class="bola"></div>
        <div class="bola"></div>
        <div class="bola"></div>
        <div class="bola"></div>
      </div>
      <img id="logo-box" src="../../assets/logoRotaract.png" alt="" />
      <h1 class="titulo-box">ROTARACT</h1>
      <h1 class="linha-box">_______________________</h1>
      <div id="card-presidente">
        <div class="icon">
          <i class="fa-solid fa-circle-user fa-3x" style="color: #ffff"></i>
        </div>
        <h2 class="text-card">Maicon Miosso</h2>
        <h3 class="sub-text-card">Presidente</h3>
      </div>
      <div id="card-vice-presidente">
        <div class="icon">
          <i class="fa-solid fa-circle-user fa-3x" style="color: #ffff"></i>
        </div>
        <h2 class="text-card">Caroline Kolassa</h2>
        <h3 class="sub-text-card">Vice - Presidente</h3>
      </div>
      <div id="card-tesoureiro">
        <div class="icon">
          <i class="fa-solid fa-circle-user fa-3x" style="color: #ffff"></i>
        </div>
        <h2 class="text-card">Bernardo Barro</h2>
        <h3 class="sub-text-card">Tesoureiro</h3>
      </div>
      <div>
        <p class="text-endereco">
          Rua Joaquim Brasil Cabral, 477 - Centro, Erechim - RS, <br />
          CEP: 9700-000
          <br />
          Telefone: (54) 99977-6938
        </p>
      </div>
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
  margin-top: 10%;
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
#card-presidente {
  background: #d91b5c;
  width: 121%;
  height: 11%;
  margin-top: 20px;
  margin-left: -10%;
}

#card-vice-presidente {
  background: #f970a4;
  width: 121%;
  height: 11%;
  margin-top: 20px;
  margin-left: -10%;
}

#card-tesoureiro {
  background: #f970a4;
  width: 121%;
  height: 11%;
  margin-top: 20px;
  margin-left: -10%;
}

.icon {
  margin-left: 9%;
  margin-top: 5%;
  position: absolute;
}

.text-card {
  position: absolute;
  margin-left: 24%;
  margin-top: 5%;
  color: white;
  font-weight: bold;
}
.sub-text-card {
  position: absolute;
  margin-left: 24%;
  margin-top: 10%;
  color: white;
  font-size: 11px;
}

.text-endereco {
  margin-top: 14%;
  font-size: 12px;
  font-weight: bold;
}

.bola {
  border-radius: 10px;
  width: 16px;
  height: 16px;
  background-color: var(--principal-color);
  position: inherit;
  display: inline-block;
  margin-left: 6.5px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.15);
}
</style>