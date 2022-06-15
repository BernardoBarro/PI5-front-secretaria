<template>
  <h1 class="titulo-edi-conv">EDIÇÃO DE CONVIDADOS</h1>
  <div class="circulo-edi-conv"></div>
  <div class="box-1-edi-conv">
    <div class="circulo-2-edi-conv"></div>
    <form>
      <input
        id="input-edi-conv"
        type="text"
        name="nome"
        ref="nome"
        placeholder="Nome do convidado"
        v-bind:value="nome"
      /><br />
      <input
        id="input-edi-conv"
        type="text"
        ref="contato"
        placeholder="Telefone"
        v-bind:value="contato"
      /><br />
    </form>
  </div>

  <div class="container-botao-edi-conv">
    <router-link :to="{ name: 'convidados' }">
      <input
        class="botao-editar-edi-conv"
        type="submit"
        name="editar"
        value="Editar"
        @click="putData"
      />
    </router-link>
    <router-link :to="{ name: 'convidados' }">
      <input
        class="botao-excluir-edi-conv"
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
  name: "ComponentEdicaoConvidados",
  data() {
    return {
      putResult: null,
      data: {},
      nome: {},
      contato: {},
    };
  },
  beforeMount() {
    this.getName();
  },
  methods: {
    async getName() {
      const res = await fetch(
        "http://localhost:8080/convidado/" + router.currentRoute.value.params.id
      );
      const data = await res.json();
      this.nome = data.nome;
      this.contato = data.contato;
    },
    async putData() {
      const { nome, contato } = this.$refs;
      const putData = {
        nome: nome.value,
        conatato: contato.value,
      };
      console.log(putData);
      try {
        const res = await fetch(
          "http://localhost:8080/convidado/" +
            router.currentRoute.value.params.id,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              charset: "utf-8",
              Authorization:'Bearer ${token}
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
            "http://localhost:8080/convidado/" +
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

<style>
.container-botao-edi-conv {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}
.botao-editar-edi-conv {
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
.botao-excluir-edi-conv {
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

#input-edi-conv {
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

#input-edi-conv::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
}

.box-1-edi-conv {
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

.form-edi-conv {
  margin-top: 35px;
}

.titulo-edi-conv {
  font-size: 40px;
  position: absolute;
  margin-left: 45%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}
.circulo-edi-conv {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}
.circulo-2-edi-conv {
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