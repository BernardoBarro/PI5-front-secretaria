<template>
  <h1 class="titulo-cad-inst">CADASTRO DE INSTITUIÇÕES</h1>
  <div class="circulo-cad-inst"></div>

  <div class="box-1-cad-inst">
    <div class="circulo-2-cad-inst"></div>
    <form class="form-cad-inst" method="get" action="">
      <input
        id="input-nome-cad-inst"
        type="text"
        name="nome"
        ref="nome"
        placeholder=" Nome da Instituição"
      /><br />
      <input
        class="input-contato-cad-inst"
        type="text"
        name="contato"
        ref="contato"
        placeholder=" Telefone"
      /><br />
      <textarea
        id="textarea"
        name="descricao"
        placeholder="Observações da Instituição"
        ref="descricao"
      ></textarea>
      <img class="img-cad-patr" src="../assets/icon-patrocinador.png" />
    </form>
  </div>

  <div class="container-botao-cad-inst">
    <router-link :to="{ name: 'instituicoes' }">
      <input
        class="botao-cad-inst"
        type="submit"
        name="salvar"
        value="Salvar"
        @click="postData"
      />
    </router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ComponentCadastroInstituicoes",
  data() {
    return {
      postResult: null,
    };
  },
  methods: {
    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },
    async postData() {
      const postData = {
        nome: this.$refs.nome.value,
        contato: this.$refs.contato.value,
        descricao: this.$refs.descricao.value,
      };
      console.log(postData);
      try {
        const res = await fetch("http://localhost:8080/instituicao", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
            Authorization:'Bearer ${token}
          },
          body: JSON.stringify(postData),
        });

        if (!res.ok) {
          const message = `An error has occured: ${res.status} - ${res.statusText}`;
          throw new Error(message);
        }
      } catch (err) {
        this.postResult = err.message;
      }
    },
  },
});
</script>

<style scoped>
.container-botao-cad-inst {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

#textarea {
  margin-top: 45px;
  margin-left: 22.8%;
  width: 57%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: var(--terceira-color);
  outline: none;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 9px 0px 108px 10px;
}

#textarea::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
}

#input-nome-cad-inst {
  color: var(--terceira-color);
  width: 57%;
  height: 40px;
  margin-top: 12px;
  outline: none;
  margin-left: 22.7%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
}
.input-contato-cad-inst {
  color: var(--terceira-color);
  width: 44.5%;
  height: 40px;
  margin-top: 15px;
  outline: none;
  margin-left: -13.4%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  position: absolute;
}

.input-nome-cad-inst::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}
.input-contato-cad-inst::placeholder {
  color: var(--terceira-color);
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.botao-cad-inst {
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

.box-1-cad-inst {
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

.form-cad-inst {
  margin-top: 58px;
}

.titulo-cad-inst {
  font-size: 40px;
  position: absolute;
  margin-left: 40%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: var(--terceira-color);
}

.circulo-cad-inst {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: var(--terceira-color);
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}

.circulo-2-cad-inst {
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