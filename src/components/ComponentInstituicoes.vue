<template>
  <h1 class="titulo-inst">INSTITUIÇÕES</h1>
  <div class="circulo-inst"></div>

  <div class="box-1-inst">
    <div class="circulo-2-inst"></div>
    <form class="form-inst" method="get" action="">
      <label class="label-nome-inst">Nome</label>
      <ul class="ul-inst">
        <li class="li-inst" v-for="datas in data" :key="datas.nome">
          <router-link
            :to="{ name: 'edicao-instituicao', params: { id: datas.id } }"
          >
            <div class="item-inst">
              {{ datas.nome }}
            </div>
          </router-link>
        </li>
      </ul>
    </form>
  </div>

  <div class="container-botao-inst">
    <router-link :to="{ name: 'cadastro-instituicoes' }">
      <input class="botao-inst" type="submit" name="novo" value="Novo" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentInstituicoes",
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
      const token = localStorage.getItem("@Auth");
      const res = await fetch("http://localhost:8080/instituicao", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const data = await res.json();
      this.data = data;
    },
  },
});
</script>

<style>
.item-inst {
  padding: 1%;
  color: var(--terceira-color);
  text-align: left;
}

.li-inst {
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
}

.ul-inst {
  margin-left: 8%;
  overflow-y: scroll;
  height: 296px;
  width: 85%;
}

.ul-inst::-webkit-scrollbar {
  background-color: transparent;
  border-radius: 20px;
  border: 3px solid var(--principal-color);
  width: 8px;
}

.ul-inst::-webkit-scrollbar-thumb {
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

.container-botao-inst {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-inst {
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
  cursor: pointer;
}

.label-nome-inst {
  position: absolute;
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  margin-left: -28%;
  margin-top: -2.5%;
}

.box-1-inst {
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

.form-inst {
  margin-top: 55px;
}

.titulo-inst {
  font-size: 40px;
  position: absolute;
  margin-left: 65.1%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-inst {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-inst {
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