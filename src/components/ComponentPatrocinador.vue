<template>
  <h1 class="titulo-pat">PATROCINADOR</h1>
  <div class="circulo-pat"></div>

  <div class="box-1-pat">
    <div class="circulo-2-pat"></div>
    <form class="form-pat" method="get" action="">
      <label class="label-nome-pat">Patrocinador</label>
      <ul class="ul-pat">
        <li class="li-pat" v-for="datas in data" :key="datas.nome">
          <div class="item-pat">
            {{ datas.nome }}
          </div>
        </li>
      </ul>
    </form>
  </div>

  <div class="container-botao-pat">
    <router-link :to="{ name: 'cadastro-projetos' }">
      <input class="botao-pat" type="submit" name="novo" value="Novo" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentPatrocinador",
  data() {
    return {
      data: {},
    };
  },
  beforeMount() {
    this.getName();
  },

  methods: {
    async getName() {
      const res = await fetch("http://localhost:8080/patrocinador");
      const data = await res.json();
      this.data = data;
    },
  },
});
</script>

<style>
.item-pat {
  padding: 1%;
  color: #f970a4;
  text-align: left;
}

.li-pat {
  list-style-type: none;
  width: 92.2%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 52px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: #f2f2f2;
  border-radius: 3px;
}

.ul-pat {
  margin-left: 8%;
  overflow-y: scroll;
  height: 296px;
  width: 85%;
}

.fa-arrow-up::before {
  content: "\f062";
  position: absolute;
  margin-left: 7.5%;
  margin-top: -3.9%;
  color: #f970a4;
}

.fa-chevron-right::before {
  content: "\f054";
  position: absolute;
  margin-top: -1%;
  margin-left: 60%;
  color: #f970a4;
}

.container-botao-pat {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-pat {
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

.label-nome-pat {
  position: absolute;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  margin-left: -28%;
  margin-top: -2.5%;
}

.box-1-pat {
  background-color: white;
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

.form-pat {
  margin-top: 55px;
}

.titulo-pat {
  font-size: 40px;
  position: absolute;
  margin-left: 62%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo-pat {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-pat {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f2f2f2;
  position: absolute;
  display: inline-block;
  margin-left: -37%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>