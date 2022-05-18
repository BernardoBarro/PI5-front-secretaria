<template>
  <div class="container-main">
    <div class="container" id="container">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <img
              src="../assets/rotaractLogin.png"
              alt="some text"
              width="60%"
              height="40"
            />
            <h1 class="text-1">Rotaract</h1>
            <p class="text-2">Erechim</p>
            <div class="linha-vertical"></div>
          </div>
        </div>
      </div>
      <div class="form-container sign-in-container">
        <form action="#">
          <div class="bola" />
          <h1>RECUPERAÇÃO DE SENHA</h1>
          <p class="text-3">
            Preencha o seu e-mail, senha e RI, que a equipe irá conferir e lhe
            enviar seu usuário por e-mail. (Fique atento a caixa de spam)
          </p>
          <input class="input-email" type="email" placeholder="E-mail" />
          <input class="input-senha" type="password" placeholder="Senha" />
          <input class="input-ri" type="number" placeholder="RI" />
          <button>Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecuperacaoSenha",
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.container-main {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -12px 0px -15px;
}

.bola {
  border-radius: 10px;
  width: 16px;
  height: 16px;
  background-color: #f970a4;
  position: inherit;
  display: inline-block;
  margin-left: -54%;
  margin-top: -74.5%;
  position: absolute;
}

h2 {
  text-align: center;
}

h1 {
  color: #f970a4;
  font-weight: 600;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  color: #f970a4;
}

.text-1 {
  margin-left: 13%;
  font-size: 35px;
  position: absolute;
  margin-top: 10%;
}

.text-2 {
  margin-top: 23%;
  margin-left: 25%;
  text-align: left;
  font-size: 20px;
  position: absolute;
  text-align: left;
}

.text-3 {
  font-size: 10px;
  font-weight: 400;
  text-align: left;
  margin-right: 37%;
  margin-top: 10%;
  color: #c4c4c4;
  text-align: left;
  margin-bottom: 14px;
  margin-left: 8px;
}

.linha-vertical {
  width: 193px;
  border: 0.1px solid #ffffff;
  margin-top: 30%;
  position: absolute;
}

button {
  border-radius: 20px;
  border: 1px solid #f970a4;
  background-color: #f970a4;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  margin-top: 44px;
}
form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
}

.input-email {
  background-color: rgb(253, 252, 252);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 15px;
}

.input-senha {
  background-color: rgb(253, 252, 252);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 15px;
}
.input-ri {
  background-color: rgb(253, 252, 252);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 15px;
  width: 52%;
  margin-left: -47%;
}

.container {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 70%;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 15px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 50%;
  width: 50%;
}

.sign-up-container {
  left: 50%;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.overlay-container {
  width: 50%;
  height: 100%;
}

.overlay {
  background: #f970a4;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
}

.overlay-panel {
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 50%;
}

.overlay-right {
  right: 0;
}
.social-container {
  margin: 20px 0;
}

.social-container a {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

img {
  width: 50%;
  margin-left: 50%;
  margin-top: 0%;
}
</style>
