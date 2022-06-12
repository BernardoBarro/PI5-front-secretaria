<template>
  <h1 class="titulo-edi-pro">EDIÇÃO PROJETOS</h1>
  <div class="circulo-edi-pro"></div>

  <div class="box-1-edi-pro">
    <div class="circulo-2-edi-pro"></div>
    <form>
      <input
        id="input-edi-pro"
        type="text"
        name="nome-projeto"
        placeholder=" Projeto"
        v-bind:value="nome"
        ref="nome"
      />
      <br />
      <input
        id="input-edi-pro"
        type="text"
        name="dataInicio"
        placeholder=" Data de Inicio"
        v-bind:value="dataInicio"
        ref="dataInicio"
      /><br />
      <input
        id="input-edi-pro"
        type="text"
        name="status"
        placeholder=" Status"
        v-bind:value="status"
        ref="status"
      /><br />
      <textarea
        id="textarea-edi-pro"
        name="descricao"
        placeholder=" Descrição"
        v-bind:value="descricao"
        ref="descricao"
      ></textarea>
    </form>
  </div>

  <div class="container-botao-edi-pro">
    <router-link :to="{ name: 'projetos' }">
      <input
        class="botao-editar-edi-pro"
        type="submit"
        name="editar"
        value="Editar"
        @click="putData"
      />
    </router-link>
    <router-link :to="{ name: 'projetos' }">
      <input
        class="botao-excluir-edi-pro"
        type="submit"
        name="excluir"
        value="Excluir"
        @click="deleteDataById"
      />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import router from "../router";

export default defineComponent({
  name: "ComponentEdicaoProjetos",
  data() {
    return {
      putResult: null,
      data: {},
      nome: {},
      dataInicio: {},
      status: {},
      descricao: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://localhost:8080/projeto/" + router.currentRoute.value.params.id
      );
      const data = await res.json();
      this.data = data;
      this.nome = data.nome;
      this.dataInicio = data.dataInicio;
      this.status = data.status;
      this.descricao = data.descricao;
    },
    async putData() {
      const { nome, dataInicio, status, descricao } = this.$refs;
      const putData = {
        nome: nome.value,
        dataInicio: dataInicio.value,
        status: status.value,
        descricao: descricao.value,
      };

      console.log(putData);
      try {
        const res = await fetch(
          "http://localhost:8080/projeto/" +
            router.currentRoute.value.params.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              charset: "utf-8",
            },
            body: JSON.stringify(putData),
          }
        );
        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (err) {
        this.putResult = err.message;
      }
    },
    async deleteDataById() {
      const id = router.currentRoute.value.params.id;
      if (id) {
        console.log(id);
        try {
          const res = await fetch(
            "http://localhost:8080/projeto/" +
              router.currentRoute.value.params.id,
            { method: "DELETE" }
          );
          const data = await res.json();
          const result = {
            status: res.status + "-" + res.statusText,
            headers: { "Content-Type": res.headers.get("Content-Type") },
            data: data,
          };
          this.deleteResult = this.fortmatResponse(result);
        } catch (err) {
          this.deleteResult = err.message;
        }
      }
    },
  },
});
</script>

<style scoped>
.container-botao-edi-pro {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-excluir-edi-pro {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -275px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

.botao-editar-edi-pro {
  background-color: var(--terceira-color);
  border: none;
  border-radius: 20px;
  color: var(--principal-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -125px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
  width: 125px;
}

#input-edi-pro {
  width: 77%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 29px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: var(--terceira-color);
  padding-left: 11px;
  font-weight: 600;
}

#input-edi-pro::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

#textarea-edi-pro {
  margin-top: 14px;
  margin-left: 29px;
  width: 77%;
  padding-bottom: 122px;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: var(--terceira-color);
  padding-left: 11px;
  padding-top: 10px;
  font-weight: 600;
  outline: none;
}

#textarea-edi-pro::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

.box-1-edi-pro {
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
  margin-top: 33px;
}

.titulo-edi-pro {
  font-size: 40px;
  position: absolute;
  margin-left: 56%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-edi-pro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-edi-pro {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--principal-color);
  position: absolute;
  display: inline-block;
  margin-left: -37%;
  margin-top: 2%;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
}
</style>