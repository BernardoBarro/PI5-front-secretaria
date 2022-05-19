<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-fifth" style="margin-right: -6%">
      <MenuBox />
    </div>
    <h1 class="titulo">CADASTRO DE MEMBRO</h1>
    <div class="circulo"></div>

    <div class="box-1">
      <div class="box-2">
        <div class="circulo-2"></div>
        <img src="../assets/icon-perfil.png" />
        <br />
        <ul>
          <li class="cargos">
            <label>
              <input
                type="radio"
                id="Presidente"
                name="fav_language"
                value="Presidente"
              />
              <span>Presidente</span><br />
            </label>
          </li>

          <li class="cargos">
            <label>
              <input
                class="cargos"
                type="radio"
                id="Vice-Presidente"
                name="fav_language"
                value="Vice-Presidente"
              />
              <span>Vice-Presidente</span><br />
            </label>
          </li>

          <li class="cargos">
            <label>
              <input
                class="cargos"
                type="radio"
                id="Secretario"
                name="fav_language"
                value="Secretario"
              />
              <span>Secretário</span><br />
            </label>
          </li>

          <li class="cargos">
            <label>
              <input
                class="cargos"
                type="radio"
                id="Tesoureiro"
                name="fav_language"
                value="Tesoureiro"
              />
              <span>Tesoureiro</span><br />
            </label>
          </li>

          <li class="cargos">
            <label>
              <input
                class="cargos"
                type="radio"
                id="Membro"
                name="fav_language"
                value="Membro"
              />
              <span>Membro</span><br />
            </label>
          </li>
        </ul>
      </div>

      <div class="box-3">
        <div class="coluna-esquerda">
          <form method="get" action="">
            <input type="text" name="RI" placeholder=" RI" /><br />
            <input type="text" name="nome" placeholder=" Nome" /><br />
            <input
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              name="sexo"
              placeholder=" Sexo"
            /><br />
            <input
              type="text"
              onfocus="(this.type='date')"
              onblur="(this.type='text')"
              name="data-nascimento"
              placeholder=" Data de Nascimento"
            /><br />
            <input
              type="text"
              name="data-admissao"
              placeholder=" Data de Admissão"
            /><br />
            <input
              type="e-mail"
              name="telefone"
              placeholder=" Telefone"
            /><br />
          </form>
        </div>

        <div class="coluna-direita">
          <form method="get" action="">
            <input type="text" name="endereço" placeholder=" Endereço" /><br />
            <input type="text" name="ocupacao" placeholder=" Ocupação" /><br />
            <input type="text" name="padrinho" placeholder=" Padrinho" /><br />
            <input type="text" name="email" placeholder=" E-mail" /><br />
            <input type="text" name="senha" placeholder=" Senha" /><br />
            <select class="cargo-comissoes" name="cargo-comissoes">
              <option value="protocolo">Protocolo</option>
              <option value="comunidades">Comunidades</option>
              <option value="internos">Internos</option>
              <option value="imagem-publica">Imagem Pública</option>
              <option value="financas">Finanças</option>
              <option value="internacionais">Internacionais</option>
            </select>
            <br />
          </form>
        </div>
      </div>
    </div>
    <div class="container-botao">
      <router-link :to="{ name: 'membros' }">
        <input class="botao" type="submit" name="salvar" value="Salvar" />
      </router-link>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuBox from "../components/menu/Menu.vue";

export default defineComponent({
  name: "CadastroMembros",
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

.botao {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

.cargo-comissoes {
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
  font-weight: 600;
  letter-spacing: 3px;
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

#textarea::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.coluna-esquerda {
  width: 55%;
  position: absolute;
  margin-left: 0%;
  margin-top: 5%;
}

.coluna-direita {
  width: 55%;
  margin-left: 55%;
  position: absolute;
  margin-top: 5%;
}

.box-1 {
  background-color: white;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.box-2 {
  background-color: #f970a4;
  width: 20%;
  height: 25rem;
  padding: 0;
  position: absolute;
  text-align: center;
  border-radius: 38px 0px 0px 5px;
}

img {
  margin-top: 46px;
}

input[type="radio"] {
  display: none;
}

.cargos {
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
  cursor: pointer;
  border-radius: 5px;
}

.cargos:hover {
  background-color: #d91b5c;
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
  margin-left: 48%;
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

.cargos label span {
  cursor: pointer;
  width: 100%;
}

.cargos label input {
  z-index: 1;
}
.cargos input[type="radio"] {
  all: unset;
}
.cargos input[type="radio"]:checked + span {
  color: #d91b5c;
  font-weight: 700;
}
</style>