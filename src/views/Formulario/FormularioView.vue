<template>
  <div id="formulario-main-container">
    <div id="info-contato-formulario-main-container">
      <h1 id="titulo-info-contato">Informações de contato</h1>
      <div id="meio-info-contato">
        <div id="endereco-info-contato">
          <span id="titulo-endereco-info-container">
            <i class="fa-solid fa-location-dot"></i> Endereço
          </span>
          <p id="logradouro-endereco-info-container">
            R. Júlio Perneta, 250 Curitiba, PR 80810-110
          </p>
        </div>
        <div id="email-info-contato">
          <span id="titulo-email-info-container">
            <i class="fa-regular fa-envelope"></i> E-mail
          </span>
          <p id="email-email-info-container">contato@fertio.com.br</p>
        </div>
        <div id="telefones-info-contato">
          <span id="titulo-telefones-info-contato">
            <i class="fa-brands fa-whatsapp"></i> Telefones
          </span>
          <p class="telefones">(41) 3336-5465</p>
          <p class="telefones">(41) 9 9626-7118</p>
          <p class="telefones pe">(87) 9 8119-8493</p>
        </div>
      </div>
      <RedeSocial id="redes-sociais-form" />
    </div>
    <div id="form-contato">
      <div id="form-contato-content">
        <h1 id="titulo-form-contato">Torne-se um produtor de sucesso!</h1>
        <h3 id="sub-titulo-form-contato">
          Preencha o formulário abaixo e inicie a nova era da sua agricultura.
        </h3>
        <v-form id="form-form-contato" v-model="valid" @submit.prevent="submit">
          <v-text-field
            v-model="nome"
            class="nome-completo"
            label="Nome Completo"
            placeholder="Nome Completo"
            :error-messages="nomeErros"
            :error="!!nomeErros.length"
            :style="{ color: !!nomeErros.length ? 'red' : 'initial' }"
            solo></v-text-field>
          <div id="email-telefone-form-contato">
            <v-text-field
              v-model="email"
              class="email"
              label="E-mail"
              :error-messages="emailErros"
              :error="!!emailErros.length"
              :style="{ color: !!emailErros.length ? 'red' : 'initial' }"
              placeholder="E-mail" solo>
            </v-text-field>
            <v-text-field
              v-model="telefone"
              class="telefone"
              label="Telefone"
              :error-messages="telefoneErros"
              :error="!!telefoneErros.length"
              :style="{ color: !!telefoneErros.length ? 'red' : 'initial' }"
              placeholder="Telefone" solo></v-text-field>
          </div>
          <v-text-field
            v-model="assunto"
            class="assunto"
            label="Assunto"
            :error-messages="assuntoErros"
            :error="!!assuntoErros.length"
            :style="{ color: !!assuntoErros.length ? 'red' : 'initial' }"
            placeholder="Assunto" solo>
          </v-text-field>
          <v-textarea
            v-model="mensagem"
            rows="7"
            :error-messages="mensagemErros"
            :error="!!mensagemErros.length"
            :style="{ color: !!mensagemErros.length ? 'red' : 'initial' }"
            label="Mensagem" solo></v-textarea>
          <div id="div-button">
            <button type="submit" id="submit-enviar">Enviar</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';
import RedeSocial from '../../components/RedeSocialComponent.vue';

export default {
  components: { RedeSocial },
  data: () => ({
    valid: false,
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
  }),
  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        const fullMessage = encodeURI(`Olá 😊.$Meu nome é *${this.nome
        }* e fiquei interessado no seu produto.$✉️ = *${this.email}*.$📱 = *${
          this.telefone}*.$🤔 = *${this.assunto}*.$💬 = *${this.mensagem}*`);

        window.open(`https://api.whatsapp.com/send?phone=5541996267118&text=${fullMessage.replaceAll('$', '%0D')}`);
      }
    },
  },
  mixins: [validationMixin],
  validations: {
    nome: {
      required,
    },
    email: {
      required,
      email,
    },
    telefone: {
      required,
    },
    assunto: {
      required,
    },
    mensagem: {
      required,
    },
  },
  computed: {
    nomeErros() {
      const erros = [];
      if (!this.$v.nome.$dirty) return erros;
      if (!this.$v.nome.required) erros.push('Por favor, insira seu nome');
      return erros;
    },
    emailErros() {
      const erros = [];
      if (!this.$v.email.$dirty) return erros;
      if (!this.$v.email.email) erros.push('E-mail inválido');
      if (!this.$v.email.required) erros.push('Por favor, insira seu email');
      return erros;
    },
    telefoneErros() {
      const erros = [];
      if (!this.$v.telefone.$dirty) return erros;
      if (!this.$v.telefone.required) erros.push('Por favor, insira seu telefone');
      return erros;
    },
    assuntoErros() {
      const erros = [];
      if (!this.$v.assunto.$dirty) return erros;
      if (!this.$v.assunto.required) erros.push('Por favor, insira seu assunto');
      return erros;
    },
    mensagemErros() {
      const erros = [];
      if (!this.$v.mensagem.$dirty) return erros;
      if (!this.$v.mensagem.required) erros.push('Por favor, insira sua mensagem');
      return erros;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

/* Media Width */
@media screen and (max-width: 2560px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 3.1rem;
    margin-top: 4.5rem;
    color: #FFFFFF;
    gap: 3.7rem;
    height: 100%;
  }
  #titulo-info-contato {
    font-size: 4rem;
    font-weight: 700;
    line-height: 5.2rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
    width: 75%;
    height: 100%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 2.3rem;
    font-weight: 700;
    line-height: 3.2rem;
    margin-bottom: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 2.2rem;
    font-weight: 400;
    line-height: 3.2rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 2rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  #redes-sociais-form {
    display: flex;
    justify-content: center;
    font-size: 4.2rem;
    gap: 2rem;
    width: 100%;
    height: 100%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 5rem 20rem 5rem 12rem;
  }

  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 4rem;
    font-weight: 700;
    line-height: 3rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 2rem;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 3rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: 1rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 5rem;
    font-size: 1.2rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: 1.3rem;
    line-height: 1.8rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 17.5rem;
    height: 5.4rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 2.8rem;
    line-height: 3.52rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1920px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 2.325rem;
    margin-top: 3.375rem;
    color: #FFFFFF;
    gap: 2.275rem;
  }
  #titulo-info-contato {
    font-size: 3rem;
    font-weight: 700;
    line-height: 3.9rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 2.625rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.725rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin-bottom: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.650rem;
    font-weight: 400;
    line-height: 2.4rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1.5rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 3.15rem;
    gap: 1.5rem;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 3.75rem 15rem 3.75rem 9rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 3rem;
    font-weight: 700;
    line-height: 2.25rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 1.5rem;
    font-size: 1.875rem;
    font-weight: 400;
    line-height: 2.25rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .75rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 3.75rem;
    font-size: .9rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .975rem;
    line-height: 1.350rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 13.125rem;
    height: 4.05rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 2.1rem;
    line-height: 2.64rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1600px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 1.938rem;
    margin-top: 2.813rem;
    color: #FFFFFF;
    gap: 1.896rem;
  }
  #titulo-info-contato {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 2.667rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.823rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.438rem;
    font-weight: 700;
    line-height: 2rem;
    margin-bottom: 1.25rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.375rem;
    font-weight: 400;
    line-height: 2rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1.25rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 2.625rem;
    gap: 1.25rem;
    height: 55%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 3.125rem 12.5rem 3.125rem 7.5rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.875rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 1.25rem;
    font-size: 1.563rem;
    font-weight: 400;
    line-height: 1.875rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .625rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 3.125rem;
    font-size: .75rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .813rem;
    line-height: 1.125rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 10.938rem;
    height: 3.375rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.75rem;
    line-height: 2.2rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1440px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 1.744rem;
    margin-top: 2.532rem;
    color: #FFFFFF;
    gap: 1.706rem;
  }
  #titulo-info-contato {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.4rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.641rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.294rem;
    font-weight: 700;
    line-height: 1.8rem;
    margin-bottom: 1.125rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.238rem;
    font-weight: 400;
    line-height: 1.8rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1.125rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 2.363rem;
    gap: 1.125rem;
    height: 49.5%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 2.813rem 10.8rem 2.813rem 6.75rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.688rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 1.125rem;
    font-size: 1.407rem;
    font-weight: 400;
    line-height: 1.688rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .563rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 2.813rem;
    font-size: .675rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .732rem;
    line-height: 1.013rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 9.844rem;
    height: 3.038rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.575rem;
    line-height: 1.98rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1366px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 1.654rem;
    margin-top: 2.402rem;
    color: #FFFFFF;
    gap: 1.618rem;
  }
  #titulo-info-contato {
    font-size: 2.134rem;
    font-weight: 700;
    line-height: 2.277rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.557rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.228rem;
    font-weight: 700;
    line-height: 1.708rem;
    margin-bottom: 1.708rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.174rem;
    font-weight: 400;
    line-height: 1.708rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1.067rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 2.242rem;
    gap: 1.067rem;
    height: 46.956%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 2.668rem 10.245rem 2.668rem 6.403rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 2.134rem;
    font-weight: 700;
    line-height: 1.601rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 1.067rem;
    font-size: 1.335rem;
    font-weight: 400;
    line-height: 1.601rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .534rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 2.668rem;
    font-size: .640rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .694rem;
    line-height: .961rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 9.338rem;
    height: 2.882rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.494rem;
    line-height: 1.878rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1280px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 1.55rem;
    margin-top: 2.251rem;
    color: #FFFFFF;
    gap: 1.516rem;
  }
  #titulo-info-contato {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.134rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.459rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.151rem;
    font-weight: 700;
    line-height: 1.6rem;
    margin-bottom: 1.6rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.6rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 2.101rem;
    gap: 1rem;
    height: 44%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 2.5rem 9.6rem 2.5rem 6rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.5rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: 1rem;
    font-size: 1.251rem;
    font-weight: 400;
    line-height: 1.5rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .5rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 2.5rem;
    font-size: .6rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .65rem;
    line-height: .9rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 8.75rem;
    height: 2.7rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.4rem;
    line-height: 1.76rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 1024px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: grid;
    grid-template-columns: 25% 75%;
    background-color: #092E58;
    width: 100%;
    height: 100vh;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    padding: 0 1.452rem;
    margin-top: 2.109rem;
    color: #FFFFFF;
    gap: 1.421rem;
  }
  #titulo-info-contato {
    font-size: 1.874rem;
    font-weight: 700;
    line-height: 2rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.367rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1.079rem;
    font-weight: 700;
    line-height: 1.499rem;
    margin-bottom: 1.499rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1.031rem;
    font-weight: 400;
    line-height: 1.499rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: .937rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 1.969rem;
    gap: .937rem;
    height: 41.23%;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 38px 0 0 38px;
  }
  #form-contato-content {
    margin: 2.343rem 8.996rem 2.343rem 5.622rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 1.874rem;
    font-weight: 700;
    line-height: 1.406rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: .937rem;
    font-size: 1.172rem;
    font-weight: 400;
    line-height: 1.406rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .469rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 2.343rem;
    font-size: .562rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .609rem;
    line-height: .843rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 8.199rem;
    height: 2.53rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.312rem;
    line-height: 1.649rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}

/* Mobile */

@media screen and (max-width: 768px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: flex;
    flex-direction: column-reverse;
    background-color: #092E58;
    width: 100%;
    height: 100%;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    margin-top: 2rem;
    color: #FFFFFF;
    gap: 1.5rem;
  }
  #titulo-info-contato {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2rem;
    align-items: center;
    letter-spacing: 0.04em;
    width: 75%;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    width: 75%;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 2rem;
    gap: 1rem;
    margin: 2rem auto;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 0 0 38px 38px;
  }
  #form-contato-content {
    margin: 0 3rem;
    padding-top: 3rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 1.874rem;
    font-weight: 700;
    line-height: 1.406rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: .937rem;
    font-size: 1.172rem;
    font-weight: 400;
    line-height: 1.406rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    gap: .469rem;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 2.343rem;
    font-size: .562rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .609rem;
    line-height: .843rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 8.199rem;
    height: 2.53rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.312rem;
    line-height: 1.649rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 425px) {
  /* Lado esquerdo */
  #formulario-main-container {
    display: flex;
    flex-direction: column-reverse;
    background-color: #092E58;
    width: 100%;
    height: 100%;
  }
  #info-contato-formulario-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    margin-top: 2rem;
    color: #FFFFFF;
    gap: 1.5rem;
  }
  #titulo-info-contato {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 2rem;
    align-items: center;
    letter-spacing: 0.04em;
  }
  #meio-info-contato {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  #endereco-info-contato,
  #email-info-contato,
  #telefones-info-contato {
    display: flex;
    flex-direction: column;
  }

  #endereco-info-contato span,
  #email-info-contato span,
  #telefones-info-contato span {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.5rem;
    margin-bottom: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #endereco-info-contato p,
  #email-info-contato p,
  #telefones-info-contato p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  .telefones.pe {
    padding-top: 1rem;
  }

  #bottom-info-contato {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  #redes-sociais-form {
    display: flex;
    font-size: 2rem;
    gap: 1rem;
    margin: 2rem auto;
  }

  /* Lado direito */
  #form-contato {
    background-color: #FFFFFF;
    border-radius: 0 0 38px 38px;
  }
  #form-contato-content {
    margin: 0 3rem;
    padding-top: 3rem;
    height: 100vh;
  }
  #form-contato-content .v-form {
    height: calc(100vh - 50rem);
  }
  #titulo-form-contato {
    font-size: 1.874rem;
    font-weight: 700;
    line-height: 1.406rem;
    color: #019A34;
  }
  #sub-titulo-form-contato {
    margin-top: .937rem;
    font-size: 1.172rem;
    font-weight: 400;
    line-height: 1.406rem;
    width: 80%;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
  #email-telefone-form-contato {
    display: flex;
    flex-direction: column;
  }
  .email .v-input__slot,
  .nome-completo .v-input__slot,
  .telefone .v-input__slot,
  .assunto .v-input__slot {
    height: 2.343rem;
    font-size: .562rem;
  }
  .v-input__slot {
    background: #F5F5F5;
    border: 1px solid #E1E1E1;
  }
  .v-label {
    font-family: 'Mulish';
    font-size: .609rem;
    line-height: .843rem;
  }
  #div-button {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit-enviar {
    width: 8.199rem;
    height: 2.53rem;
    background: #019A34;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px 0px;
    font-size: 1.312rem;
    line-height: 1.649rem;
    color: #FFFFFF;
    font-family: 'Mulish';
  }
}
@media screen and (max-width: 320px) {
   #form-contato-content .v-form {
    height: calc(100vh - 55rem);
  }
}
</style>
