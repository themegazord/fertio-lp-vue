<!-- eslint-disable max-len -->
<template>
  <div id="home">
    <Navbar />
    <div id="home-main-container">
      <div id="left-main-container">
        <div class="left-main-container">
          <h1 id="title-left-main-container">Especialistas em Fertilizantes de Alta Performance</h1>
          <p id="desc-left-main-container">
            Aumente a sua produtividade e se torne um produtor de sucesso!
          </p>
          <button id="btn-left-main-container" @click="vaiProFormulario">
            Falar com o especialista
            <img src="../../assets/setinha-direita.svg" alt="Seta para direita">
          </button>
        </div>
        <div class="bottom-left-main-container">
          <img src="../../assets/11-anos.png" alt="Informações de 11 anos da empresa" id="info-11anos">
          <hr id="linha-vertical">
          <img src="../../assets/avaliacao.png" alt="Avaliação da empresa de 4,8 de 5 estrelas" id="avaliacao">
        </div>
      </div>
      <div id="right-main-container">
        <img src="https://i.ibb.co/LzZ3PKf/circulo-verde.png" alt="circulo-verde" id="circulo-verde">
        <img src="https://i.ibb.co/XjGDmDB/aro-aberto.png" alt="aro-aberto" id="aro-aberto">
        <img src="https://i.ibb.co/cDynFQ6/fazendeiro-removebg-preview-1.png" alt="fazendeiro-removebg-preview-1"
          id="fazendeiro">
        <Depoimentos id="depoimento-fazenda-inova" titulo="Fazenda Inova"
          descricao="A parceria com a Fertio elevou a qualidade e a produtividade de nossas culturas!">
          <img src="../../assets/fazenda_inova.png" alt="Fazenda Inova" id="imagem-esq-card-depoimentos" />
        </Depoimentos>
        <Depoimentos id="depoimento-henrique-moraes" titulo="Henrique Moraes"
          descricao="Satisfeito! Colhendo ótimos resultados graças a Fertio.">
          <img src="../../assets/henrique_moraes.png" alt="Foto do Henrique Moraes" id="imagem-esq-card-depoimentos">
        </Depoimentos>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/NavbarComponent.vue';
import Depoimentos from '../../components/CardDepoimentoComponent.vue';

export default {
  components: {
    Navbar,
    Depoimentos,
  },
  methods: {
    vaiProFormulario() {
      this.$router.push({ path: '/formulario' });
    },
  },
};
</script>

<style>
#fazendeiro {
  width: 95%;
  height: 95%;
}

#aro-aberto{
  width: 80%;
  height: 70%;
}

#circulo-verde {
  width: 80%;
  height: 70%;
}
@media screen and (max-width: 2560px) {
  #home {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  #home-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    max-height: calc(100vh - 90px)
  }

  #left-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  #title-left-main-container {
    font-size: 5rem;
    line-height: 5.117rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    width: 90%;
    font-size: 2.2rem;
    line-height: 2.729rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 26.5rem;
    height: 3.838rem;
    background: #CFFD00;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 1rem;
  }

  #btn-left-main-container img {
    width: 1.8rem;
    height: 1.8rem;
  }

  .bottom-left-main-container {
    display: flex;
    align-items: center;
  }

  #info-11anos {
    width: 29rem;
    height: 5.969rem;
  }

  #linha-vertical {
    width: 3.411rem;
    transform: rotate(90deg);
    border: 1px solid;
  }

  #avaliacao {
    width: 13.5rem;
    height: 5.969rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 7rem;
    /* width: 62.5rem;
    height: 59.375rem; */
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 11rem;
    /* width: 46.5625rem;
    height: 42.5rem; */
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 15rem;
    /* width: 44.6875rem;
    height: 40.625rem; */
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 20rem;
    right: 7rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 10rem;
    right: 45rem;
  }
}

@media screen and (max-width: 1920px) {
  #home {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  #home-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    max-height: calc(100vh - 90px)
  }

  #left-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.199rem;
  }

  #title-left-main-container {
    font-size: 3.75rem;
    line-height: 3.75rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    width: 90%;
    font-size: 1.65rem;
    line-height: 2rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
    width: 19.875rem;
    height: 2.813rem;
    background: #CFFD00;
    font-size: 1.125rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 1rem;
  }

  #btn-left-main-container img {
    width: 1.35rem;
    height: 1.35rem;
  }

  .bottom-left-main-container {
    display: flex;
    align-items: center;
  }

  #info-11anos {
    width: 21.75rem;
    height: 4.375rem;
  }

  #linha-vertical {
    width: 2.558rem;
    transform: rotate(90deg);
    border: 1px solid;
  }

  #avaliacao {
    width: 10.125rem;
    height: 4.375rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 5.5rem;
    /* width: 46.875rem;
    height: 43.516rem; */
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 9.25rem;
    /* width: 34.922rem;
    height: 31.148rem; */
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 12rem;
    /* width: 33.516rem;
    height: 29.774rem; */
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 14.658rem;
    right: 5.250rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 7.329rem;
    right: 33.75rem;
  }
}

@media screen and (max-width: 1600px) {
  #home {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  #home-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    max-height: calc(100vh - 90px)
  }

  #left-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.101rem;
  }

  #title-left-main-container {
    font-size: 3.125rem;
    line-height: 3.583rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    width: 90%;
    font-size: 1.375rem;
    line-height: 1.911rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .625rem;
    width: 16.563rem;
    height: 2.688rem;
    background: #CFFD00;
    font-size: 0.938rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 1rem;
  }

  #btn-left-main-container img {
    width: 1.125rem;
    height: 1.125rem;
  }

  .bottom-left-main-container {
    display: flex;
    align-items: center;
  }

  #info-11anos {
    width: 18.125rem;
    height: 4.181rem;
  }

  #linha-vertical {
    width: 2.132rem;
    transform: rotate(90deg);
    border: 1px solid;
  }

  #avaliacao {
    width: 8.438rem;
    height: 4.181rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 4.25rem;
    /* width: 39.063rem;
    height: 41.582rem; */
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 7.375rem;
    /* width: 29.102rem;
    height: 29.764rem; */
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 9.5rem;
    /* width: 27.93rem;
    height: 28.451rem; */
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 14.007rem;
    right: 4.375rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 7.003rem;
    right: 28.125rem;
  }
}

@media screen and (max-width: 1440px) {
  #home {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  #home-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    max-height: calc(100vh - 90px)
  }

  #left-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.101rem;
  }

  #title-left-main-container {
    font-size: 3.125rem;
    line-height: 3.583rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    width: 90%;
    font-size: 1.375rem;
    line-height: 1.911rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .625rem;
    width: 16.563rem;
    height: 2.688rem;
    background: #CFFD00;
    font-size: 0.938rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 1rem;
  }

  #btn-left-main-container img {
    width: 1.125rem;
    height: 1.125rem;
  }

  .bottom-left-main-container {
    display: flex;
    align-items: center;
  }

  #info-11anos {
    width: 18.125rem;
    height: 4.181rem;
  }

  #linha-vertical {
    width: 2.132rem;
    transform: rotate(90deg);
    border: 1px solid;
  }

  #avaliacao {
    width: 8.438rem;
    height: 4.181rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 3.625rem;
    /* width: 39.063rem;
    height: 41.582rem; */
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 6.438rem;
    /* width: 29.102rem;
    height: 29.764rem; */
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 8.25rem;
    /* width: 27.93rem;
    height: 28.451rem; */
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 14.007rem;
    right: 3.938rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 7.003rem;
    right: 25.313rem;
  }
}

@media screen and (max-width: 1366px) {
  #home {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  #home-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    max-height: calc(100vh - 90px)
  }

  #left-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 2.964rem;
    line-height: 3.2rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    width: 90%;
    font-size: 1.304rem;
    line-height: 1.707rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .593rem;
    width: 15.712rem;
    height: 1.707rem;
    background: #CFFD00;
    font-size: 0.890rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 1rem;
  }

  #btn-left-main-container img {
    width: 1.067rem;
    height: 1.067rem;
  }

  .bottom-left-main-container {
    display: flex;
    align-items: center;
  }

  #info-11anos {
    width: 17.194rem;
    height: 3.734rem;
  }

  #linha-vertical {
    width: 2.022rem;
    transform: rotate(90deg);
    border: 1px solid;
  }

  #avaliacao {
    width: 8.004rem;
    height: 3.734rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 3.336rem;
    /* width: 37.056rem;
    height: 37.134rem; */
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 6.004rem;
    /* width: 27.606rem;
    height: 26.580rem; */
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 7.672rem;
    /* width: 26.495rem;
    height: 25.407rem; */
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 12.509rem;
    right: 3.736rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 6.254rem;
    right: 24.012rem;
  }
}

@media screen and (max-width: 1280px) {
  #home {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  #home-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    max-height: calc(100vh - 90px)
  }

  #left-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.954rem;
  }

  #title-left-main-container {
    font-size: 2.777rem;
    line-height: 3.333rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    width: 90%;
    font-size: 1.222rem;
    line-height: 1.778rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .556rem;
    width: 14.723rem;
    height: 1.778rem;
    background: #CFFD00;
    font-size: 0.834rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 1rem;
  }

  #btn-left-main-container img {
    width: 1rem;
    height: 1rem;
  }

  .bottom-left-main-container {
    display: flex;
    align-items: center;
  }

  #info-11anos {
    width: 16.112rem;
    height: 3.890rem;
  }

  #linha-vertical {
    width: 1.895rem;
    transform: rotate(90deg);
    border: 1px solid;
  }

  #avaliacao {
    width: 7.5rem;
    height: 3.89rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 2rem;
    /* width: 34.723rem;
    height: 38.681rem; */
    /* width: 86.8075%;
    height: 77.362%; */
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 5.5rem;
    /* width: 25.868rem;
    height: 27.688rem; */
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 7.672rem;
    /* width: 26.495rem;
    height: 25.407rem; */
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 13.030rem;
    right: 3.501rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 6.515rem;
    right: 22.5rem;
  }
}

@media screen and (max-width: 1024px) {
  #home {
    width: 100%;
    height: 100vh;
    background-color: #FFFFFF;
  }

  #home-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    max-height: calc(100vh - 90px)
  }

  #left-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 2.222rem;
    line-height: 3.2rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    width: 90%;
    font-size: 0.978rem;
    line-height: 1.707rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .445rem;
    width: 11.778rem;
    height: 1.707rem;
    background: #CFFD00;
    font-size: 0.667rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 1rem;
  }

  #btn-left-main-container img {
    width: .8rem;
    height: .8rem;
  }

  .bottom-left-main-container {
    display: flex;
    align-items: center;
  }

  #info-11anos {
    width: 12.89rem;
    height: 3.734rem;
  }

  #linha-vertical {
    width: 1.516rem;
    transform: rotate(90deg);
    border: 1px solid;
  }

  #avaliacao {
    width: 6rem;
    height: 3.734rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  calc(100vh - 90px);
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 1.6rem;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 4.4rem;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 6.138rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 12.509rem;
    right: 2.801rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 6.254rem;
    right: 18rem;
  }
}

@media screen and (max-width: 768px) {
  #home {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }

  #home-main-container {
    /* display: grid;
    grid-template-columns: 50% 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100% - 90px);
    gap: 7rem;
  }

  #left-main-container {
    max-height:  calc(100% - 90px);
    height:  calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5rem;
    gap: 5rem;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 3.667rem;
    line-height: 3.5rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    font-size: 1.5rem;
    line-height: 1.8rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    height: 5rem;
    background: #CFFD00;
    font-size: 1.5rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 10px;
  }

  #btn-left-main-container img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  #info-11anos {
    width: 30rem;
    height: 7rem;
  }

  #linha-vertical {
    display: none;
  }

  #avaliacao {
    width: 20rem;
    height: 10rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  900px;
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 1.6rem;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 4.4rem;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 6.138rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 15.509rem;
    right: 2.801rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 6.254rem;
    right: 22rem;
  }
}

@media screen and (max-width: 600px) {
  #home {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }

  #home-main-container {
    /* display: grid;
    grid-template-columns: 50% 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100% - 90px);
    gap: 7rem;
  }

  #left-main-container {
    max-height:  calc(100% - 90px);
    height:  calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5rem;
    gap: 5rem;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 2.865rem;
    line-height: 2.734rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    font-size: 1.172rem;
    line-height: 1.406rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    height: 5rem;
    background: #CFFD00;
    font-size: 1.172rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 10px;
  }

  #btn-left-main-container img {
    width: 1.172rem;
    height: 1.172rem;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  #info-11anos {
    width: 23.438rem;
    height: 5.469rem;
  }

  #linha-vertical {
    display: none;
  }

  #avaliacao {
    width: 15.625rem;
    height: 7.813rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  703.125px;
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 1.25rem;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 3.438rem;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 4.795rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 12.116rem;
    right: 2.188rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 4.886rem;
    right: 17.188rem;
  }
}

@media screen and (max-width: 500px) {
  #home {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }

  #home-main-container {
    /* display: grid;
    grid-template-columns: 50% 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100% - 90px);
    gap: 7rem;
  }

  #left-main-container {
    max-height:  calc(100% - 90px);
    height:  calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5rem;
    gap: 5rem;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 2.388rem;
    line-height: 2.278rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    font-size: .977rem;
    line-height: 1.172rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    height: 4.167rem;
    background: #CFFD00;
    font-size: .977rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 10px;
  }

  #btn-left-main-container img {
    width: .977rem;
    height: .977rem;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  #info-11anos {
    width: 19.532rem;
    height: 4.558rem;
  }

  #linha-vertical {
    display: none;
  }

  #avaliacao {
    width: 13.021rem;
    height: 6.511rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  585.938px;
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: 1.042rem;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 2.865rem;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 3.996rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 10.097rem;
    right: 1.823rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 4.072rem;
    right: 14.323rem;
  }
}

@media screen and (max-width: 425px) {
  #home {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }

  #home-main-container {
    /* display: grid;
    grid-template-columns: 50% 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100% - 90px);
    gap: 7rem;
  }

  #left-main-container {
    max-height:  calc(100% - 90px);
    height:  calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5rem;
    gap: 5rem;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 2.029rem;
    line-height: 1.937rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    font-size: .83rem;
    line-height: .996rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    height: 2.767rem;
    background: #CFFD00;
    font-size: .830rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 10px;
  }

  #btn-left-main-container img {
    width: .830rem;
    height: .830rem;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  #info-11anos {
    width: 16.602rem;
    height: 3.874rem;
  }

  #linha-vertical {
    display: none;
  }

  #avaliacao {
    width: 11.068rem;
    height: 5.534rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  498px;
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: .885rem;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 2.435rem;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 3.397rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 8.582rem;
    right: 1.550rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 3.461rem;
    right: 12.174rem;
  }
}

@media screen and (max-width: 375px) {
  #home {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }

  #home-main-container {
    /* display: grid;
    grid-template-columns: 50% 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100% - 90px);
    gap: 7rem;
  }

  #left-main-container {
    max-height:  calc(100% - 90px);
    height:  calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5rem;
    gap: 5rem;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 1.79rem;
    line-height: 1.709rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    font-size: .732rem;
    line-height: .956rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    height: 2.441rem;
    background: #CFFD00;
    font-size: .732rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 10px;
  }

  #btn-left-main-container img {
    width: .732rem;
    height: .732rem;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  #info-11anos {
    width: 14.649rem;
    height: 3.418rem;
  }

  #linha-vertical {
    display: none;
  }

  #avaliacao {
    width: 9.766rem;
    height: 4.883rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  439px;
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: .781rem;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 2.149rem;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 2.997rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 8.582rem;
    right: 1.550rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 3.461rem;
    right: 12.174rem;
  }
}

@media screen and (max-width: 320px) {
  #home {
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
  }

  #home-main-container {
    /* display: grid;
    grid-template-columns: 50% 50%; */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: calc(100% - 90px);
    gap: 7rem;
  }

  #left-main-container {
    max-height:  calc(100% - 90px);
    height:  calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-top: 5rem;
    gap: 5rem;
  }

  .left-main-container,
  .bottom-left-main-container {
    margin: 0 auto;
    width: 75%;
  }

  .left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.876rem;
  }

  #title-left-main-container {
    font-size: 1.527rem;
    line-height: 1.458rem;
    color: #092E58;
    font-weight: 700;
  }

  #desc-left-main-container {
    font-size: .625rem;
    line-height: .816rem;
    font-weight: 400;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #btn-left-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 80%;
    height: 2.083rem;
    background: #CFFD00;
    font-size: .625rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #092E58;
    border-radius: 10px;
  }

  #btn-left-main-container img {
    width: .625rem;
    height: .625rem;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
  }

  #info-11anos {
    width: 12.5rem;
    height: 2.917rem;
  }

  #linha-vertical {
    display: none;
  }

  #avaliacao {
    width: 8.334rem;
    height: 4.167rem;
  }

  #right-main-container {
    max-height:  calc(100vh - 90px);
    height:  374.613px;
    width: 100%;
    position: relative;
    right: 0;
    bottom: 0;
    overflow-y: hidden;
  }

  #fazendeiro {
    position: absolute;
    bottom: 0;
    right: .666rem;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 1.834rem;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 2.557rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 7.323rem;
    right: 1.323rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 2.953rem;
    right: 10.388rem;
  }
}
/* #home {
  width: 100%;
  height: 100vh;
  background-color: #FFFFFF;
}

#home-main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: calc(100vh - 90px);
  position: absolute;
  bottom: 0;
}

#fazendeiro {
  width: 675px;
  height: 750px;
  position: absolute;
  bottom: 0;
  right: 175px;
}

#circulo-verde {
  position: absolute;
  bottom: 0;
  right: 275px;
}

#aro-aberto {
  position: absolute;
  bottom: 0;
  right: 275px;
}

#left-main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 1;
  gap: 120px;
}

.left-main-container {
  width: 500px;
  gap: 30px;
  display: flex;
  flex-direction: column;
}

#title-left-main-container {
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 60px;
  color: #092E58;
}

#desc-left-main-container {
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #383A47;
}

#btn-left-main-container {
  width: 265px;
  height: 45px;
  background-color: #CFFD00;
  border-radius: 10px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

#linha-vertical {
  width: 40px;
  transform: rotate(90deg);
  border: 1px solid;
}

.bottom-left-main-container {
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
}

#depoimento-fazenda-inova {
  position: absolute;
}

#depoimento-henrique-moraes {
  position: absolute;
}

@media screen and (max-width: 2560px) {
  #depoimento-fazenda-inova {
    bottom: 400px;
    right: 150px;
  }

  #depoimento-henrique-moraes {
    bottom: 200px;
    right: 825px;
  }

  #fazendeiro {
    width: 1125px;
    height: 1200px;
    position: absolute;
    bottom: 0;
    right: 175px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 275px;
    width: 900px;
    height: 810px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 230px;
    width: 900px;
    height: 860px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 850px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 86px;
    line-height: 103.2px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 38px;
    line-height: 48px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 350px;
    height: 72px;
    font-size: 22px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 24px;
    height: 24px;
  }

  #linha-vertical {
    width: 52px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 666px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 400px;
    height: 100px;
  }

  #avaliacao {
    width: 180px;
    height: 90px;
  }
}

@media screen and (max-width: 1920px) {
  #depoimento-fazenda-inova {
    bottom: 300px;
    right: 112.5px;
  }

  #depoimento-henrique-moraes {
    bottom: 150px;
    right: 618.75px;
  }

  #fazendeiro {
    width: 843.75px;
    height: 900px;
    position: absolute;
    bottom: 0;
    right: 131.25px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 206.25px;
    width: 675px;
    height: 607.5px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 172.5px;
    width: 675px;
    height: 645px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 637.5px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 64.5px;
    line-height: 75px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 28.5px;
    line-height: 36px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 262.5px;
    height: 54px;
    font-size: 16.5px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 18px;
    height: 18px;
  }

  #linha-vertical {
    width: 39px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 499.5px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 300px;
    height: 75px;
  }

  #avaliacao {
    width: 135px;
    height: 67.5px;
  }
}

@media screen and (max-width: 1600px) {
  #depoimento-fazenda-inova {
    bottom: 250px;
    right: 93.75px;
  }

  #depoimento-henrique-moraes {
    bottom: 125px;
    right: 515.625px;
  }

  #fazendeiro {
    width: 703.125px;
    height: 750px;
    position: absolute;
    bottom: 0;
    right: 109.375px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 171.875px;
    width: 562.5px;
    height: 506.25px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 143.75px;
    width: 562.5px;
    height: 537.5px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 531.25px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 53.75px;
    line-height: 62.5px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 23.75px;
    line-height: 30px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 218.75px;
    height: 45px;
    font-size: 13.75px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 15px;
    height: 15px;
  }

  #linha-vertical {
    width: 32.5px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 416.25px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 250px;
    height: 62.5px;
  }

  #avaliacao {
    width: 112.5px;
    height: 56.25px;
  }
}

@media screen and (max-width: 1440px) {
  #depoimento-fazenda-inova {
    bottom: 250px;
    right: 84.375px;
  }

  #depoimento-henrique-moraes {
    bottom: 125px;
    right: 464.063px;
  }

  #fazendeiro {
    width: 703.125px;
    height: 750px;
    position: absolute;
    bottom: 0;
    right: 91.146px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 143.229px;
    width: 562.5px;
    height: 506.25px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 119.792px;
    width: 562.5px;
    height: 537.5px;
  }
}

@media screen and (max-width: 1366px) {
  #depoimento-fazenda-inova {
    bottom: 237.153px;
    right: 80.039px;
  }

  #depoimento-henrique-moraes {
    bottom: 118.576px;
    right: 440.215px;
  }

  #fazendeiro {
    width: 666.992px;
    height: 640px;
    position: absolute;
    bottom: 0;
    right: 103.754px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 163.043px;
    width: 533.594px;
    height: 432px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 136.363px;
    width: 533.594px;
    height: 458.667px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 531.25px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 50.988px;
    line-height: 59.288px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 22.53px;
    line-height: 28.458px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 207.509px;
    height: 38.4px;
    font-size: 13.043px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 14.229px;
    height: 14.229px;
  }

  #linha-vertical {
    width: 30.830px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 394.859px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 237.153px;
    height: 53.333px;
  }

  #avaliacao {
    width: 106.719px;
    height: 48px;
  }
}

@media screen and (max-width: 1280px) {
  #depoimento-fazenda-inova {
    bottom: 222.222px;
    right: 75px;
  }

  #depoimento-henrique-moraes {
    bottom: 111.111px;
    right: 412.5px;
  }

  #fazendeiro {
    width: 625px;
    height: 666.667px;
    position: absolute;
    bottom: 0;
    right: 97.222px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 152.778px;
    width: 500px;
    height: 450px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 127.778px;
    width: 500px;
    height: 477.778px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 497.804px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 47.778px;
    line-height: 55.555px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 21.112px;
    line-height: 26.573px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 194.445px;
    height: 40px;
    font-size: 12.222px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 13.333px;
    height: 13.333px;
  }

  #linha-vertical {
    width: 28.889px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 370px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 222.222px;
    height: 55.555px;
  }

  #avaliacao {
    width: 100px;
    height: 50px;
  }
}

@media screen and (max-width: 1024px) {
  #depoimento-fazenda-inova {
    bottom: 177.778px;
    right: 60px;
  }

  #depoimento-henrique-moraes {
    bottom: 88.889px;
    right: 360px;
  }

  #fazendeiro {
    width: 500px;
    height: 640px;
    position: absolute;
    bottom: 0;
    right: 77.778px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 122.222px;
    width: 400px;
    height: 432px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 102.222px;
    width: 400px;
    height: 458.667px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 1;
    gap: 120px;
  }

  .left-main-container {
    width: 398.243px;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 500;
    font-size: 38.222px;
    line-height: 44.444px;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 16.890px;
    line-height: 21.258px;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 165.556px;
    height: 38.4px;
    font-size: 9.778px;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 10.666px;
    height: 10.666px;
  }

  #linha-vertical {
    width: 23.111px;
    transform: rotate(90deg);
    border: 1px solid;
  }

  .bottom-left-main-container {
    display: flex;
    width: 296px;
    justify-content: space-between;
    align-items: center;
  }

  #info-11anos {
    width: 177.778px;
    height: 53.333px;
  }

  #avaliacao {
    width: 80px;
    height: 48px;
  }
}

@media screen and (max-width: 768px) {
  #home-main-container {
    display: flex;
    position: absolute;
    bottom: 0;
    flex-direction: column;
    justify-content: initial;
    width: 100%;
    height: calc(100vh - 75px);
  }

  #fazendeiro {
    width: 575px;
    height: 650px;
    position: absolute;
    bottom: 0;
    right: 75px;
  }

  #circulo-verde {
    position: absolute;
    bottom: 0;
    right: 195px;
  }

  #aro-aberto {
    position: absolute;
    bottom: 0;
    right: 175px;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: calc(50vh - 90px);
    gap: 5rem;
    margin-top: 5rem;
  }

  .left-main-container {
    width: 75%;
    gap: 30px;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: 3.84rem;
    line-height: 4.211rem;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 1.664rem;
    line-height: 2rem;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 33.920rem;
    height: 4.816rem;
    font-size: 1.920rem;
    font-weight: 700;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 1.920rem;
    height: 1.664rem;
  }

  #linha-vertical {
    width: 40px;
    transform: rotate(90deg);
    border: 1px solid;
    display: none;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
  }

  #depoimento-henrique-moraes {
    position: absolute;
  }

  #info-11anos {
    width: 80%;
    height: 100px;
  }

  #avaliacao {
    width: 40%;
    height: 100px;
  }

}

@media screen and (max-width: 640px) {
  #home-main-container {
    display: flex;
    flex-direction: column;
    justify-content: initial;
    width: 100%;
    height: calc(100vh - 75px);
  }

  #right-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #fazendeiro {
    width: 17.548rem;
    height: 22.595rem;
    position: absolute;
    bottom: 0;
    right: 7rem;
  }

  #circulo-verde {
    width: 18rem;
    height: 17rem;
    position: absolute;
    bottom: 0;
    right: 7rem;
  }

  #aro-aberto {
    width: 18rem;
    height: 17rem;
    position: absolute;
    bottom: 0;
    right: 8rem;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: calc(50vh - 90px);
    gap: 4.258rem;
    margin-top: 5rem;
  }

  .left-main-container {
    width: 75%;
    gap: 1.597rem;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 0.9rem;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 16.563rem;
    height: 3.101rem;
    font-size: 0.938rem;
    font-weight: 700;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 1.3rem;
    height: 1.117rem;
  }

  #linha-vertical {
    width: 40px;
    transform: rotate(90deg);
    border: 1px solid;
    display: none;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.303rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 8rem;
    right: 3rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 3rem;
    right: 13rem;
  }

  #info-11anos {
    width: 60%;
    height: 3.5rem;
  }

  #avaliacao {
    width: 30%;
    height: 3rem;
  }

}

@media screen and (max-width: 375px) {
  #home-main-container {
    display: flex;
    flex-direction: column;
    justify-content: initial;
    width: 100%;
    height: calc(100vh - 75px);
  }

  #right-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #fazendeiro {
    width: 17.548rem;
    height: 22.595rem;
  }

  #circulo-verde {
    width: 18rem;
    height: 17rem;
  }

  #aro-aberto {
    width: 18rem;
    height: 17rem;
  }

  #left-main-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: calc(50vh - 90px);
    gap: 4.258rem;
    margin-top: 5rem;
  }

  .left-main-container {
    width: 75%;
    gap: 1.597rem;
    display: flex;
    flex-direction: column;
  }

  #title-left-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 0.9rem;
    color: #383A47;
  }

  #btn-left-main-container {
    width: 16.563rem;
    height: 3.101rem;
    font-size: 0.938rem;
    font-weight: 700;
    background-color: #CFFD00;
    border-radius: 10px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #btn-left-main-container img {
    width: 1.3rem;
    height: 1.117rem;
  }

  #linha-vertical {
    width: 40px;
    transform: rotate(90deg);
    border: 1px solid;
    display: none;
  }

  .bottom-left-main-container {
    display: flex;
    flex-direction: column;
    width: 75%;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.303rem;
  }

  #depoimento-fazenda-inova {
    position: absolute;
    bottom: 8rem;
    right: 3rem;
  }

  #depoimento-henrique-moraes {
    position: absolute;
    bottom: 3rem;
    right: 10rem;
  }

  #info-11anos {
    width: 60%;
    height: 3.5rem;
  }

  #avaliacao {
    width: 30%;
    height: 3rem;
  }

}

@media screen and (max-height: 950px) {
  #fazendeiro {
    height: 800px;
  }
}

@media screen and (max-height: 900px) {
  #fazendeiro {
    height: 700px
  }
}

@media screen and (max-height: 780px) {
  #fazendeiro {
    width: 580px;
    height: 600px
  }
}
@media screen and (max-height: 690px) {
  #title-left-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: 1.3rem;
    line-height: 1.3rem;
    color: #092E58;
  }

  #desc-left-main-container {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 0.9rem;
    color: #383A47;
  }

  #fazendeiro {
    height: 17.5rem;
    width: 17rem;
  }
}
*/
</style>
