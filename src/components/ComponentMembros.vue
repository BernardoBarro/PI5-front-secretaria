<template>
  <h1 class="titulo-memb">MEMBROS</h1>
  <div class="circulo-memb"></div>

  <div class="box-1-memb">
    <div class="circulo-2-memb"></div>
    <form class="form-memb" method="get" action="">
      <label class="label-nome-memb">Nome</label>
      <ul class="ul-memb">
        <li class="li-memb" v-for="datas in data" :key="datas.pessoa.nome">
          <router-link
            :to="{ name: 'edicao-membro', params: { id: datas.ri } }"
          >
            <div class="item-memb">
              {{ datas.pessoa.nome }}
            </div>
          </router-link>
        </li>
      </ul>
    </form>
  </div>

  <div class="container-botao-memb">
    <router-link :to="{ name: 'cadastro-membros' }">
      <input class="botao-memb" type="submit" name="novo" value="Novo" />
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentMembros",
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
      const res = await fetch("http://localhost:8080/associado");
      const data = await res.json();
      this.data = data;
    },
  },
});
</script>

<style>
.fa-arrow-up::before {
  content: "\f062";
  position: absolute;
  margin-left: 7.5%;
  margin-top: -3.9%;
  color: #f970a4;
}

.item-memb {
  padding: 1%;
  color: #f970a4;
  text-align: left;
}

.li-memb {
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

.ul-memb {
  margin-left: 8%;
  overflow-y: scroll;
  height: 296px;
  width: 85%;
}

.fa-chevron-right::before {
  content: "\f054";
  position: absolute;
  margin-top: -1%;
  margin-left: 60%;
  color: #f970a4;
}

.container-botao-memb {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-memb {
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

.label-nome-memb {
  position: absolute;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  margin-left: -28%;
  margin-top: -2.5%;
}

.box-1-memb {
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

.form-memb {
  margin-top: 55px;
}

.titulo-memb {
  font-size: 40px;
  position: absolute;
  margin-left: 72%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo-memb {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-memb {
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