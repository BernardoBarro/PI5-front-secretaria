<template>
  <h1 class="titulo-edi-reu">EDIÇÃO REUNIÃO</h1>
  <div class="circulo-edi-reu"></div>

  <div class="box-1-edi-reu">
    <div class="circulo-2-edi-reu"></div>
    <form>
      <input
        id="input-edi-reu"
        type="text"
        name="nome-reuniao"
        placeholder=" Nome da Reunião"
        v-bind:value="nome"
        ref="nome"
      />
      <br />
      <input
        id="input-edi-reu"
        type="text"
        name="dataReuniao"
        placeholder=" Data de Inicio"
        v-bind:value="dataReuniao"
        ref="dataReuniao"
      /><br />
      <input
        id="input-edi-reu"
        type="text"
        name="local"
        placeholder=" Local"
        v-bind:value="local"
        ref="local"
      /><br />
      <textarea
        id="textarea-edi-reu"
        name="assunto"
        placeholder=" Assunto"
        v-bind:value="assunto"
        ref="assunto"
      ></textarea>
    </form>
  </div>

  <div class="container-botao-edi-reu">
    <router-link :to="{ name: 'home' }">
      <input
        class="botao-editar-edi-reu"
        type="submit"
        name="editar"
        value="Editar"
        @click="putData"
      />
    </router-link>
    <router-link :to="{ name: 'home' }">
      <input
        class="botao-excluir-edi-reu"
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
  name: "ComponentEdicaoReuniao",
  data() {
    return {
      putResult: null,
      data: {},
      nome: {},
      dataReuniao: {},
      assunto: {},
      local: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const token = localStorage.getItem("@Auth");
      const res = await fetch(
        "http://localhost:8080/reuniao/" + router.currentRoute.value.params.id,
        {
          method: "GET",
          headers: {
            Authorization: token,
          },
        }
      );
      const data = await res.json();
      this.data = data;
      this.nome = data.nome;
      this.dataReuniao = data.dataReuniao;
      this.assunto = data.assunto;
      this.local = data.local;
    },
    async putData() {
      const token = localStorage.getItem("@Auth");
      const { nome, dataReuniao, assunto, local } = this.$refs;
      const putData = {
        nome: nome.value,
        dataReuniao: dataReuniao.value,
        assunto: assunto.value,
        local: local.value,
      };
      console.log(putData);
      try {
        const res = await fetch(
          "http://localhost:8080/reuniao/" +
            router.currentRoute.value.params.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              charset: "utf-8",
              Authorization: token,
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
      const token = localStorage.getItem("@Auth");
      const id = router.currentRoute.value.params.id;
      if (id) {
        console.log(id);
        try {
          const res = await fetch(
            "http://localhost:8080/reuniao/" +
              router.currentRoute.value.params.id,
            {
              method: "DELETE",
              headers: {
                Authorization: token,
              },
            }
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
.container-botao-edi-reu {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.botao-excluir-edi-reu {
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

.botao-editar-edi-reu {
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

#input-edi-reu {
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

#input-edi-reu::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

#textarea-edi-reu {
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

#textarea-edi-reu::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

.box-1-edi-reu {
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

.titulo-edi-reu {
  font-size: 40px;
  position: absolute;
  margin-left: 58%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-edi-reu {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-edi-reu {
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