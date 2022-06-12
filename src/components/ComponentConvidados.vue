<template>
  <h1 class="titulo-conv">CONVIDADOS</h1>
  <div class="circulo-conv"></div>

  <div class="box-conv">
    <div class="circulo-2-conv"></div>
    <form method="get" action="">
      <label class="label-nome-conv">Nome</label>
      <ul class="ul-conv">
        <li class="li-conv" v-for="datas in data" :key="datas.nome">
          <router-link
            :to="{ name: 'edicao-convidado', params: { id: datas.id } }"
          >
            <div class="item-conv">
              {{ datas.nome }}
            </div>
          </router-link>
        </li>
      </ul>
    </form>
  </div>

  <div class="container-botao-conv">
    <router-link :to="{ name: 'cadastro-convidado' }">
      <input class="botao-conv" type="submit" name="novo" value="Novo" />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentConvidados",
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
      const res = await fetch("http://localhost:8080/convidado");
      const data = await res.json();
      this.data = data;
    },
  },
});
</script>

<style>
.item-conv {
  padding: 1%;
  color: #f970a4;
  text-align: left;
}

.li-conv {
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

.ul-conv {
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

.container-botao-conv {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-conv {
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

.label-nome-conv {
  position: absolute;
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  margin-left: -28%;
  margin-top: -2.5%;
}

.box-conv {
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

form {
  margin-top: 55px;
}

.titulo-conv {
  font-size: 40px;
  position: absolute;
  margin-left: 66%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}

.circulo-conv {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-conv {
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