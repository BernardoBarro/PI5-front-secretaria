<template>
  <h1 class="titulo-projeto">PROJETOS</h1>
  <div class="circulo-projeto"></div>
  <div class="box-projeto">
    <div class="circulo-2-projeto"></div>
    <form method="get" action="">
      <label class="label-nome-projeto">Nome</label>
      <ul class="ul-projeto">
        <li v-for="datas in data" :key="datas.nome">
          <router-link
            :to="{ name: 'edicao-projeto', params: { id: datas.id } }"
          >
            <div
              class="li-projeto"
              v-if="datas.status != 'CANCELADO' && datas.status != 'FINALIZADO'"
            >
              {{ datas.nome }}
            </div>
          </router-link>
        </li>
      </ul>
    </form>
  </div>

  <div class="container-botao-projeto">
    <router-link :to="{ name: 'cadastro-projetos' }">
      <input class="botao-projeto" type="submit" name="novo" value="Novo" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentProjeto",
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
      const res = await fetch("http://localhost:8080/projeto");
      const data = await res.json();
      this.data = data;
    },
  },
});
</script>

<style>
.li-projeto {
  list-style-type: none;
  width: 92.2%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 52px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  padding: 1%;
  color: var(--terceira-color);
  text-align: left;
}

.ul-projeto {
  margin-left: 8%;
  overflow-y: scroll;
  height: 296px;
  width: 85%;
}

.ul-projeto::-webkit-scrollbar {
  background-color: transparent;
  border-radius: 20px;
  border: 3px solid var(--principal-color);
  width: 8px;
}

.ul-projeto::-webkit-scrollbar-thumb {
  background-color: var(--terceira-color);
  border-radius: 20px;
}

.fa-arrow-up::before {
  content: "\f062";
  position: absolute;
  margin-left: 7.5%;
  margin-top: -3.9%;
  color: var(--terceira-color);
}

.fa-chevron-right::before {
  content: "\f054";
  position: absolute;
  margin-top: -1%;
  margin-left: 60%;
  color: var(--terceira-color);
}

.container-botao-projeto {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-projeto {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

.label-nome-projeto {
  position: absolute;
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  margin-left: -28%;
  margin-top: -2.5%;
}

.box-projeto {
  background-color: var(--segunda-color);
  width: 78%;
  height: 25rem;
  margin-top: 133px;
  margin-bottom: 30px;
  padding: 0;
  border-radius: 38px 5px 5px 5px;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.15);
}

form {
  margin-top: 55px;
}

.titulo-projeto {
  font-size: 40px;
  position: absolute;
  margin-left: 72%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-projeto {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-projeto {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--principal-color);
  position: absolute;
  display: inline-block;
  margin-left: -36.5%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>