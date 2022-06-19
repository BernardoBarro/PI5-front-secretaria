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
            :to="{ name: 'edicao-membro', params: { ri: datas.ri } }"
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

<script>
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
      const token = localStorage.getItem("@Auth");
      const res = await fetch("http://localhost:8080/associado", {
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
.fa-arrow-up::before {
  content: "\f062";
  position: absolute;
  margin-left: 7.5%;
  margin-top: -3.9%;
  color: var(--terceira-color);
}

.item-memb {
  padding: 1%;
  color: var(--terceira-color);
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
  background-color: var(--principal-color);
  border-radius: 3px;
}

.ul-memb {
  margin-left: 8%;
  overflow-y: scroll;
  height: 296px;
  width: 85%;
}

.ul-memb::-webkit-scrollbar {
  background-color: transparent;
  border-radius: 20px;
  border: 3px solid var(--principal-color);
  width: 8px;
}

.ul-memb::-webkit-scrollbar-thumb {
  background-color: var(--terceira-color);
  border-radius: 20px;
}

.fa-chevron-right::before {
  content: "\f054";
  position: absolute;
  margin-top: -1%;
  margin-left: 60%;
  color: var(--terceira-color);
}

.container-botao-memb {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-memb {
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

.label-nome-memb {
  position: absolute;
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  margin-left: -28%;
  margin-top: -2.5%;
}

.box-1-memb {
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

.form-memb {
  margin-top: 55px;
}

.titulo-memb {
  font-size: 40px;
  position: absolute;
  margin-left: 71.8%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-memb {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-memb {
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