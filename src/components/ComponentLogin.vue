<template>
  <div class="container-main-login">
    <div class="container" id="container">
      <div class="overlay-container">
        <div class="overlay">
          <div class="overlay-panel overlay-right">
            <img
              class="img-login"
              src="../assets/rotaractLogin.png"
              alt="some text"
              width="60%"
              height="40"
            />
            <h1 class="text-1-login">Rotaract</h1>
            <p class="text-2-login">Erechim</p>
            <div class="linha-vertical-login"></div>
          </div>
        </div>
      </div>
      <div class="form-container sign-in-container">
        <form class="form-login" action="#">
          <p class="text-3-login">
            Please enter your username and password to login.
          </p>
          <input type="email" placeholder="User" />
          <input type="password" placeholder="Password" />

          <router-link
            class="recupera-senha"
            :to="{ name: 'recuperacao-senha' }"
            >Esqueceu sua senha?</router-link
          >
          <router-link class="button-login" :to="{ name: 'home' }"
            >Login</router-link
          >
        </form>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentLogin",
});
</script>


<style scoped>
* {
  box-sizing: border-box;
}

.container-main-login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -12px 0px -15px;
}

.recupera-senha {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
  color: var(--terceira-color);
}

.text-1-login {
  margin-left: 13%;
  font-size: 35px;
  position: absolute;
  margin-top: 10%;
}

.text-2-login {
  margin-top: 23%;
  margin-left: 25%;
  text-align: left;
  font-size: 20px;
  position: absolute;
  text-align: left;
}

.text-3-login {
  font-size: 10px;
  font-weight: 400;
  text-align: left;
  margin-right: 37%;
  margin-top: 10%;
  color: #c4c4c4;
  text-align: left;
}

.linha-vertical-login {
  width: 193px;
  border: 0.1px solid var(--principal-color);
  margin-top: 30%;
  position: absolute;
}

.button-login {
  border-radius: 20px;
  border: 1px solid var(--terceira-color);
  background-color: var(--terceira-color);
  color: var(--principal-color);
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}
.form-login {
  background-color: var(--segunda-color);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  margin-top: 0%;
}

input {
  background-color: var(--principal-color);
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 5%) inset;
  border: none;
  outline: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
  border-radius: 15px;
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

.social-container .recupera-senha {
  border: 1px solid #dddddd;
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
}

.img-login {
  width: 50%;
  margin-left: 50%;
  margin-top: 0%;
}
</style>