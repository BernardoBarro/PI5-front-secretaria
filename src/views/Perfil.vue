<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <h1 class="titulo">PERFIL</h1>
    <div class="circulo"></div>

    <div class="box-1">
      <div class="box-2">
        <div class="circulo-2"></div>
        <img src="../assets/icon-perfil.png" />
        <br />
        <ul>
          <li class="nome-perfil">
            <label> <span>João da Silva</span><br /> </label>
          </li>

          <li class="informacoes">
            <label> <span>Vice-Presidente</span><br /> </label>
          </li>

          <li class="informacoes">
            <label> <span>096825</span><br /> </label>
          </li>

          <li class="informacoes">
            <label> <span>09/12/2021</span><br /> </label>
          </li>
        </ul>
      </div>

      <div class="box-3">
        <div class="coluna-esquerda">
          <form method="get" action="">
            <input
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              name="cidade"
              placeholder=" Erechim RS"
              disabled
            /><br />
            <input
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              name="ocupacao"
              placeholder=" Dentista"
              disabled
            /><br />
            <input type="text" name="cpf" placeholder=" 034.590.667-02" /><br />
            <input
              type="e-mail"
              name="email"
              placeholder=" joaodasilva@gmail.com"
              disabled
            /><br />
            <input
              type="text"
              name="telefone"
              placeholder=" (54) 99234-3425)"
              disabled
            /><br />
            <input
              type="text"
              name="data-nascimento"
              placeholder=" 05/03/2001"
              disabled
            /><br />
            <input
              type="text"
              name="padrinho"
              placeholder=" Padrinácio Perreira"
              disabled
            /><br />
          </form>
        </div>
      </div>
    </div>
    <div class="container-botao">
      <input class="botao-editar" type="submit" name="editar" value="Editar" />
      <input
        class="botao-excluir"
        type="submit"
        name="excluir"
        value="Excluir"
      />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";

export default defineComponent({
  name: "PerfilVue",
  components: {
    MenuBox,
  },
});
</script>

<style>
main {
  background-color: #f2f2f2;
}

.container-botao {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-excluir {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -275px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

.botao-editar {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: 111px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

input[type="text"] {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

input[type="date"] {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
  color: #f970a4;
}

input[type="e-mail"] {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

input[type="e-mail"]::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

input[type="date"]::placeholder {
  font-weight: 600;
  letter-spacing: 3px;
}

input[type="text"]::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

.coluna-esquerda {
  width: 55%;
  position: absolute;
  margin-left: 3%;
  margin-top: 2%;
}

.box-1 {
  background-color: white;
  width: 50%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  margin-left: 13%;
  padding: 0;
  border-radius: 38px 5px 5px 38px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.box-2 {
  background-color: #f970a4;
  width: 20%;
  height: 25rem;
  padding: 0;
  position: absolute;
  text-align: center;
  border-radius: 38px;
}

img {
  margin-top: 46px;
}

.nome-perfil {
  background-color: #f2f2f2;
  border: none;
  color: #f970a4;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 7px 38px;
  width: 76%;
  margin-top: 5px;
  margin-bottom: 20px;
  border-radius: 20px;
}

.informacoes {
  background-color: #f2f2f2;
  border: none;
  color: #f970a4;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  padding: 7px 38px;
  width: 76%;
  margin-top: 5px;
  border-radius: 5px;
}

.box-3 {
  width: 52.75%;
  margin-left: 20%;
  height: 25rem;
  padding: 0;
  position: absolute;
  display: inline-block;
}

.inputs {
  margin-top: 3px;
}

.titulo {
  font-size: 40px;
  position: absolute;
  margin-left: 78%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2 {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f2f2f2;
  position: absolute;
  display: inline-block;
  margin-left: -26.5%;
  margin-top: 8%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>