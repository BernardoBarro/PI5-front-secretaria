<template>
  <div class="container-main-rec-sen">
    <div class="container" id="container">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <img
              class="img-rec-sen"
              src="../assets/rotaractLogin.png"
              alt="some text"
              width="60%"
              height="40"
            />
            <h1 class="text-1-rec-sen">Rotaract</h1>
            <p class="text-2-rec-sen">Erechim</p>
            <div class="linha-vertical-rec-sen"></div>
          </div>
        </div>
      </div>
      <div class="form-container-rec-sen sign-in-container-rec-sen">
        <form id="form-rec-sen" action="#">
          <div class="bola-rec-sen" />
          <h1 class="h1-rec-sen">RECUPERAÇÃO DE SENHA</h1>
          <p class="text-3-rec-sen">
            Preencha o seu e-mail, senha e RI, que a equipe irá conferir e lhe
            enviar seu usuário por e-mail. (Fique atento a caixa de spam)
          </p>
          <input
            class="input-email-rec-sen"
            type="email"
            placeholder="E-mail"
          />
          <input
            class="input-senha-rec-sen"
            type="password"
            placeholder="Senha"
          />
          <input class="input-ri-rec-sen" type="number" placeholder="RI" />
          <router-link class="button-login" :to="{ name: 'login' }">
            <button class="button-rec-sen">Enviar</button>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComponentRecuperacaoSenha",
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.container-main-rec-sen {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -12px 0px -15px;
}
.bola-rec-sen {
  border-radius: 10px;
  width: 16px;
  height: 16px;
  background-color: var(--terceira-color);
  position: inherit;
  display: inline-block;
  margin-left: -54%;
  margin-top: -74.5%;
  position: absolute;
}
.h1-rec-sen {
  color: var(--terceira-color);
  font-weight: 600;
}

.text-1-rec-sen {
  margin-left: 13%;
  font-size: 35px;
  position: absolute;
  margin-top: 10%;
}
.text-2-rec-sen {
  margin-top: 23%;
  margin-left: 25%;
  text-align: left;
  font-size: 20px;
  position: absolute;
  text-align: left;
}
.text-3-rec-sen {
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
.linha-vertical-rec-sen {
  width: 193px;
  border: 0.1px solid #ffffff;
  margin-top: 30%;
  position: absolute;
}
.button-rec-sen {
  border-radius: 20px;
  border: 1px solid var(--terceira-color);
  background-color: var(--terceira-color);
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
#form-rec-sen {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  margin-top: 0%;
}
.input-email-rec-sen {
  background-color: rgb(253, 252, 252);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 15px;
}
.input-senha-rec-sen {
  background-color: rgb(253, 252, 252);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 15px;
}
.input-ri-rec-sen {
  background-color: rgb(253, 252, 252);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15), 0 4px 4px rgba(0, 0, 0, 0.12);
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 15px;
  width: 52%;
  margin-left: -47%;
}
#container {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 70%;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 15px;
}
.form-container-rec-sen {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}
.sign-in-container-rec-sen {
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
  background: var(--terceira-color);
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

.img-rec-sen {
  width: 50%;
  margin-left: 50%;
  margin-top: 0%;
}
</style>