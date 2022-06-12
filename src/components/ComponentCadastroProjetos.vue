<template>
  <h1 class="titulo-cad-proj">CADASTRO DE PROJETOS</h1>
  <div class="circulo-cad-proj"></div>

  <div class="box-1-cad-proj">
    <div class="circulo-2-cad-proj"></div>
    <form class="form-cad-proj" method="get" action="">
      <input
        id="input-projeto-cad-proj"
        type="text"
        name="nome"
        ref="nome"
        placeholder=" Nome do Projeto"
      /><br />
      <input
        id="input-data-inicio-cad-proj"
        type="text"
        name="dataInicio"
        ref="dataInicio"
        placeholder=" Data Início"
      /><br />
      <input
        id="input-status-cad-proj"
        type="text"
        name="status"
        ref="status"
        placeholder=" Status"
      /><br />
      <textarea
        id="textarea-proj"
        name="descricao"
        placeholder="Observações do Projeto"
        ref="descricao"
      ></textarea>
      <img class="img-cad-proj" src="../assets/icon-patrocinador.png" />
    </form>
  </div>

  <div class="container-botao-cad-proj">
    <router-link :to="{ name: 'projetos' }">
      <input
        class="botao-cad-proj"
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
  name: "ComponentCadastroProjetos",
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
        dataInicio: this.$refs.dataInicio.value,
        status: this.$refs.status.value,
        descricao: this.$refs.descricao.value,
      };
      console.log(postData);
      try {
        const res = await fetch("http://localhost:8080/projeto", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            charset: "utf-8",
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

<style>
.container-botao-cad-proj {
  align-items: flex-end;
  margin-block-start: auto;
  margin-bottom: 24px;
}

.img-cad-proj {
  width: 218px;
  position: absolute;
  margin-left: -65%;
  margin-top: -2%;
}

.botao-cad-proj {
  background-color: #f970a4;
  border: none;
  border-radius: 20px;
  color: var(--segunda-color);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-left: -93px;
  padding: 8px 40px;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%);
}

#textarea-proj {
  margin-top: 78px;
  margin-left: 22.8%;
  width: 57%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  color: #f970a4;
  outline: none;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 9px 0px 108px 10px;
}

#textarea-proj::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
}

#input-projeto-cad-proj {
  color: #f970a4;
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
#input-data-inicio-cad-proj {
  color: #f970a4;
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

#input-status-cad-proj {
  color: #f970a4;
  width: 44.5%;
  height: 40px;
  margin-top: 46px;
  outline: none;
  margin-left: -13.4%;
  border: none;
  box-shadow: 0px 4px 4px 0px rgb(0 0 0 / 15%) inset;
  background-color: var(--principal-color);
  border-radius: 3px;
  position: absolute;
}

.input-projeto-cad-proj::placeholder {
  color: #f970a4;
  font-weight: 600;
  letter-spacing: 3px;
  padding: 5px;
}

.box-1-cad-proj {
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
.form-cad-proj {
  margin-top: 33px;
}

.titulo-cad-proj {
  font-size: 40px;
  position: absolute;
  margin-left: 46%;
  margin-top: 1.5%;
  letter-spacing: 6px;
  font-weight: 500;
  color: #ffb0ce;
}
.circulo-cad-proj {
  border-radius: 10px;
  width: 20px;
  height: 20px;
  background-color: #f970a4;
  position: absolute;
  display: inline-block;
  margin-left: 90.5%;
  margin-top: 3%;
}
.circulo-2-cad-proj {
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