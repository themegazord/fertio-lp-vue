<template>
  <div id="quem-somos">
    <Navbar />
    <div id="quemsomos-main-container">
      <div id="compo-quemsomos-main-container">
        <RedesSociais id="redes-sociais"/>
        <img src="https://i.ibb.co/LzZ3PKf/circulo-verde.png" alt="circulo-verde" id="circulo-verde-quem-somos">
        <img src="https://i.ibb.co/XjGDmDB/aro-aberto.png" alt="aro-aberto" id="aro-aberto-quem-somos">
        <img src="https://i.ibb.co/P1TWDCC/shutterstock-2173227909-removebg-preview.png"
          alt="shutterstock-2173227909-removebg-preview" id="veio-qv" />
      </div>
      <div id="info-quemsomos-main-container">
        <img src="../../assets/folha-mobile.png" alt="Folha Fertio" id="folha-mobile">
        <h3 id="title-info-quemsomos-main-container">Quem Somos</h3>
        <p id="desc-info-quemsomos-main-container">
          Desde 2012, a <strong>Fertio Fertilizantes</strong> atua no mercado de
          <strong>fertilizantes</strong> trazendo aos produtores o que há de mais
          avançado em nutrição vegetal. <br><br>

          Para isso, estabeleceu a parceria com a empresa belga <strong>Tessenderlo Kerley</strong>,
          que é uma das empresas mais importantes e inovadoras de fertilizantes no mundo. <br><br>

          Juntas, a <strong>Tessenderlo Kerley</strong> e a <strong>Fertio Fertilizantes</strong>
          acreditam que a <strong>inovação</strong> expande as possibilidades para os agricultores,
          os consumidores e para o agronegócio.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/NavbarComponent.vue';
import RedesSociais from '../../components/RedeSocialComponent.vue';

export default {
  components: { Navbar, RedesSociais },
};
</script>

<style>
  #veio-qv {
    width: 140%;
    height: 100%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 60%;
    height: 60%;
  }

  #folha-mobile {
    display: none;
  }
@media screen and (max-width: 2560px) {
  #quemsomos-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: calc(100vh - 90px);
  }
  #compo-quemsomos-main-container {
    position: relative;
    overflow: hidden;
    left: 0;
    bottom: 0;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    left: -15rem;
  }

  #aro-aberto-quem-somos {
    left: 15rem;
  }

  #circulo-verde-quem-somos {
    left: 12rem;
  }

  #redes-sociais {
    z-index: 1;
    left: 3rem;
    bottom: 1rem;
  }
  #redes-sociais > a {
    font-size: 3rem;
    padding: .5rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 4.496rem;
    line-height: 6rem;
    font-weight: 700;
    text-align: center;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 2.6rem;
    line-height: 3.2rem;
    text-align: center;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
@media screen and (max-width: 1920px) {
  #quemsomos-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: calc(100vh - 90px);
  }
  #compo-quemsomos-main-container {
    position: relative;
    overflow: hidden;
    left: 0;
    bottom: 0;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    left: -11.25rem;
  }

  #aro-aberto-quem-somos {
    left: 11.25rem;
  }

  #circulo-verde-quem-somos {
    left: 9rem;
  }

  #redes-sociais {
    z-index: 1;
    left: 2.25rem;
    bottom: .75rem;
  }
  #redes-sociais > a {
    font-size: 2.25rem;
    padding: .375rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 3.372rem;
    line-height: 4.5rem;
    font-weight: 700;
    text-align: center;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.95rem;
    line-height: 2.4rem;
    text-align: center;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
@media screen and (max-width: 1600px) {
  #quemsomos-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: calc(100vh - 90px);
  }
  #compo-quemsomos-main-container {
    position: relative;
    overflow: hidden;
    left: 0;
    bottom: 0;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    left: -9.375rem;
  }

  #aro-aberto-quem-somos {
    left: 9.375rem;
  }

  #circulo-verde-quem-somos {
    left: 7.5rem;
  }

  #redes-sociais {
    z-index: 1;
    left: 1.875rem;
    bottom: .625rem;
  }
  #redes-sociais > a {
    font-size: 1.875rem;
    padding: .313rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 2.81rem;
    line-height: 3.75rem;
    font-weight: 700;
    text-align: center;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.625rem;
    line-height: 2rem;
    text-align: center;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
@media screen and (max-width: 1440px) {
  #quemsomos-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: calc(100vh - 90px);
  }
  #compo-quemsomos-main-container {
    position: relative;
    overflow: hidden;
    left: 0;
    bottom: 0;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    left: -8.438rem;
  }

  #aro-aberto-quem-somos {
    left: 8.438rem;
  }

  #circulo-verde-quem-somos {
    left: 6.75rem;
  }

  #redes-sociais {
    z-index: 1;
    left: 1.688rem;
    bottom: .563rem;
  }
  #redes-sociais > a {
    font-size: 1.688rem;
    padding: .282rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 2.529rem;
    line-height: 3.375rem;
    font-weight: 700;
    text-align: center;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.463rem;
    line-height: 1.8rem;
    text-align: center;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
@media screen and (max-width: 1366px) {
  #quemsomos-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: calc(100vh - 90px);
  }
  #compo-quemsomos-main-container {
    position: relative;
    overflow: hidden;
    left: 0;
    bottom: 0;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    width: 160%;
    height: 100%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 70%;
    height: 60%;
  }

  #veio-qv {
    left: -14rem;
  }

  #aro-aberto-quem-somos {
    left: 6.5rem;
  }

  #circulo-verde-quem-somos {
    left: 5.25rem;
  }

  #redes-sociais {
    z-index: 1;
    left: 1.601rem;
    bottom: .534rem;
  }
  #redes-sociais > a {
    font-size: 1.601rem;
    padding: .268rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 2.399rem;
    line-height: 3.202rem;
    font-weight: 700;
    text-align: center;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.388rem;
    line-height: 1.708rem;
    text-align: center;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
@media screen and (max-width: 1280px) {
  #quemsomos-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: calc(100vh - 90px);
  }
  #compo-quemsomos-main-container {
    position: relative;
    overflow: hidden;
    left: 0;
    bottom: 0;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    width: 160%;
    height: 100%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 70%;
    height: 60%;
  }

  #veio-qv {
    left: -12.5rem;
  }

  #aro-aberto-quem-somos {
    left: 6.5rem;
  }

  #circulo-verde-quem-somos {
    left: 5.25rem;
  }

  #redes-sociais {
    z-index: 1;
    left: 1.5rem;
    bottom: .5rem;
  }
  #redes-sociais > a {
    font-size: 1.5rem;
    padding: .251rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 2.248rem;
    line-height: 3rem;
    font-weight: 700;
    text-align: center;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.301rem;
    line-height: 1.6rem;
    text-align: center;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}
@media screen and (max-width: 1024px) {
  #quemsomos-main-container {
    display: grid;
    grid-template-columns: 50% 50%;
    height: calc(100vh - 90px);
  }
  #compo-quemsomos-main-container {
    position: relative;
    overflow: hidden;
    left: 0;
    bottom: 0;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    width: 160%;
    height: 95%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 90%;
    height: 60%;
  }

  #veio-qv {
    left: -10rem;
  }

  #aro-aberto-quem-somos {
    left: 2rem;
  }

  #circulo-verde-quem-somos {
    left: 1rem;
  }

  #redes-sociais {
    z-index: 1;
    left: .5rem;
    bottom: .4rem;
  }
  #redes-sociais > a {
    font-size: 1.2rem;
    padding: .201rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 1.798rem;
    line-height: 2.4rem;
    font-weight: 700;
    text-align: center;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.041rem;
    line-height: 1.328rem;
    text-align: center;
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }
}

/* Responsividade Mobile */

@media screen and (max-width: 768px) {
  #quemsomos-main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #compo-quemsomos-main-container {
    position: relative;
    height: 600px;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    width: 110%;
    height: 95%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 60%;
    height: 60%;
  }

  #veio-qv {
    left: -5rem;
  }

  #aro-aberto-quem-somos {
    left: 10rem;
  }

  #circulo-verde-quem-somos {
    left: 9rem;
  }

  #redes-sociais {
    display: none;
    z-index: 1;
    left: .5rem;
    bottom: .4rem;
  }
  #redes-sociais > a {
    font-size: 1.2rem;
    padding: .201rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #092E58;
    border-radius: 15px 15px 0 0;
  }

  #folha-mobile {
    display: initial;
    margin-top: 5rem;
    width: 3.12rem;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 3.84rem;
    line-height: 3.84rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
  }

  #desc-info-quemsomos-main-container {
    margin-top: 5.376rem;
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 2.048rem;
    line-height: 2.56rem;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 3rem;
  }
}
@media screen and (max-width: 600px) {
  #quemsomos-main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #compo-quemsomos-main-container {
    position: relative;
    height: 600px;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    width: 130%;
    height: 95%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 60%;
    height: 60%;
  }

  #veio-qv {
    left: -7rem;
  }

  #aro-aberto-quem-somos {
    left: 8rem;
  }

  #circulo-verde-quem-somos {
    left: 7rem;
  }

  #redes-sociais {
    display: none;
    z-index: 1;
    left: .5rem;
    bottom: .4rem;
  }
  #redes-sociais > a {
    font-size: 1.2rem;
    padding: .201rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #092E58;
    border-radius: 15px 15px 0 0;
  }

  #folha-mobile {
    display: initial;
    margin-top: 5rem;
    width: 2.438rem;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
  }

  #desc-info-quemsomos-main-container {
    margin-top: 4.2rem;
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 3rem;
  }
}
@media screen and (max-width: 500px) {
  #quemsomos-main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #compo-quemsomos-main-container {
    position: relative;
    height: 600px;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    width: 150%;
    height: 95%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 60%;
    height: 60%;
  }

  #veio-qv {
    left: -10rem;
  }

  #aro-aberto-quem-somos {
    left: 5rem;
  }

  #circulo-verde-quem-somos {
    left: 4rem;
  }

  #redes-sociais {
    display: none;
    z-index: 1;
    left: .5rem;
    bottom: .4rem;
  }
  #redes-sociais > a {
    font-size: 1.2rem;
    padding: .201rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #092E58;
    border-radius: 15px 15px 0 0;
  }

  #folha-mobile {
    display: initial;
    margin-top: 5rem;
    width: 2.032rem;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
  }

  #desc-info-quemsomos-main-container {
    margin-top: 3.5rem;
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.333rem;
    line-height: 1.667rem;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 3rem;
  }
}
@media screen and (max-width: 425px) {
  #quemsomos-main-container {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  #compo-quemsomos-main-container {
    position: relative;
    height: 600px;
  }
  #circulo-verde-quem-somos,
  #aro-aberto-quem-somos,
  #veio-qv,
  #redes-sociais {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  #veio-qv {
    width: 170%;
    height: 95%;
  }

  #aro-aberto-quem-somos,
  #circulo-verde-quem-somos {
    width: 80%;
    height: 60%;
  }

  #veio-qv {
    left: -11rem;
  }

  #aro-aberto-quem-somos {
    left: 3rem;
  }

  #circulo-verde-quem-somos {
    left: 2rem;
  }

  #redes-sociais {
    display: none;
    z-index: 1;
    left: .5rem;
    bottom: .4rem;
  }
  #redes-sociais > a {
    font-size: 1.2rem;
    padding: .201rem;
  }

  #info-quemsomos-main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #092E58;
    border-radius: 15px 15px 0 0;
  }

  #folha-mobile {
    display: initial;
    margin-top: 5rem;
    width: 1.727rem;
  }

  #title-info-quemsomos-main-container {
    font-family: 'DM Sans';
    font-size: 2.125rem;
    line-height: 2.125rem;
    font-weight: 700;
    text-align: center;
    color: #FFFFFF;
  }

  #desc-info-quemsomos-main-container {
    margin-top: 2rem;
    width: 90%;
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 1.133rem;
    line-height: 1.417rem;
    text-align: center;
    color: #FFFFFF;
    mix-blend-mode: normal;
    opacity: 0.8;
    margin-bottom: 3rem;
  }
}

/* @media screen and (max-width: 2560px) {
  #redes-sociais {
    bottom: 200px;
    left: 900px;
    display: flex;;
    gap: 28px;
  }
  #ig,#fb,#tg {
    width: 56px;
    height: 56px;
  }
  #title-info-quemsomos-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: calc(45px + 30px);
    line-height: 60px;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: calc(22px + 20px);
    line-height: calc(32px + 20px);
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #veio-qv {
    width: calc(900px + 900px);
    height: calc(600px + 600px);
    top: calc(230px - 270px);
    left: calc(310px - 590px);
  }

  #quadrado-verde {
    width: calc(380px + 300px);
    height: calc(380px + 300px);
    top: calc(230px + 100px);
    left: calc(310px + 50px);
  }

  #quadrado-claro {
    width: calc(450px + 350px);
    height: calc(450px + 350px);
    top: calc(230px + 50px);
    left: calc(310px + 10px);
  }

  #subquadrado-esquerda {
    width: calc(200px + 200px);
    height: calc(180px + 180px);
    top: 250px;
    left: 200px;
  }

  #subquadrado-direita {
    width: calc(200px + 200px);
    height: calc(180px + 180px);
    top: calc(300px + 250px);
    left: calc(630px + 300px);
  }
}
@media screen and (max-width: 1920px) {
  #redes-sociais {
    bottom: 150px;
    left: 675px;
    display: flex;
    gap: 18px;
  }
  #ig,#fb,#tg {
    width: 42px;
    height: 42px;
  }
  #title-info-quemsomos-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: calc(45px + 11.25px);
    line-height: 60px;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: calc(22px + 9.5px);
    line-height: calc(32px + 7px);
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #veio-qv {
    width: calc(900px + 525px);
    height: calc(600px + 300px);
    top: calc(230px - 270px);
    left: calc(310px - 590px);
  }

  #quadrado-verde {
    width: calc(380px + 130px);
    height: calc(380px + 130px);
    top: calc(230px + 20px);
    left: calc(310px - 60px);
  }

  #quadrado-claro {
    width: calc(450px + 150px);
    height: calc(450px + 150px);
    top: calc(230px + 10px);
    left: calc(310px - 100px);
  }

  #subquadrado-esquerda {
    width: calc(200px + 100px);
    height: calc(180px + 90px);
    top: 250px;
    left: calc(200px - 50px);
  }

  #subquadrado-direita {
    width: calc(200px + 100px);
    height: calc(180px + 90px);
    top: calc(300px + 75px);
    left: calc(630px + 67.5px);
  }
}
@media screen and (max-width: 1600px) {
  #redes-sociais {
    bottom: 125px;
    left: 562.5px;
    display: flex;
    gap: 15px;
  }
  #ig,#fb,#tg {
    width: 35px;
    height: 35px;
  }
  #title-info-quemsomos-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: calc(45px + 11.25px);
    line-height: 60px;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: calc(22px + 4.25px);
    line-height: calc(32px + .5px);
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #veio-qv {
    width: calc(900px + 287.5px);
    height: calc(600px + 150px);
    top: calc(230px - 265px);
    left: calc(310px - 545px);
  }

  #quadrado-verde {
    width: calc(380px + 45px);
    height: calc(380px + 45px);
    top: calc(230px - 21.67px);
    left: calc(310px - 101.67px);
  }

  #quadrado-claro {
    width: calc(450px + 50px);
    height: calc(450px + 50px);
    top: calc(230px - 30px);
    left: calc(310px - 135px);
  }

  #subquadrado-esquerda {
    width: calc(200px + 50px);
    height: calc(180px + 45px);
    top: calc(250px - 41.67px);
    left: calc(200px - 75px);
  }

  #subquadrado-direita {
    width: calc(200px + 50px);
    height: calc(180px + 45px);
    top: calc(300px + 62.5px);
    left: calc(630px - 48.75px);
  }
}
@media screen and (max-width: 1366px) {
  #redes-sociais {
    bottom: 106.719px;
    left: 480.234px;
    display: flex;
    gap: 12.8px;
  }
  #ig,#fb,#tg {
    width: 29.881px;
    height: 29.867px;
  }
  #title-info-quemsomos-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: calc(45px + 1.2876px);
    line-height: 60px;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: calc(22px - 0.4px);
    line-height: calc(32px - 5.256px);
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #veio-qv {
    width: 1013.828px;
    height: 640px;
    top: -29.881px;
    left: -200.631px;
  }

  #quadrado-verde {
    width: 362.667px;
    height: 362.844px;
    top: 177.862px;
    left: 177.862px;
  }

  #quadrado-claro {
    width: 426.875px;
    height: 426.667px;
    top: 170.750px;
    left: 149.406px;
  }

  #subquadrado-esquerda {
    width: 213.438px;
    height: 192px;
    top: 177.862px;
    left: 106.719px;
  }

  #subquadrado-direita {
    width: 213.438px;
    height: 192px;
    top: 309.484px;
    left: 496.242px;
  }
}
@media screen and (max-height: 987px) {
  #redes-sociais {
    bottom: 80px;
  }
}
@media screen and (max-height: 768px) {
  #veio-qv {
    width: 1013.828px;
    height: 640px;
    top: -29.881px;
    left: -200.631px;
  }

  #quadrado-verde {
    width: 362.667px;
    height: 362.844px;
    top: 177.862px;
    left: 177.862px;
  }

  #quadrado-claro {
    width: 426.875px;
    height: 426.667px;
    top: 170.750px;
    left: 149.406px;
  }

  #subquadrado-esquerda {
    width: 213.438px;
    height: 192px;
    top: 177.862px;
    left: 106.719px;
  }

  #subquadrado-direita {
    width: 213.438px;
    height: 192px;
    top: 309.484px;
    left: 496.242px;
  }
}

@media screen and (max-width: 1024px) {
  #redes-sociais {
    bottom: 106.719px;
    left: 360px;
    display: flex;
    gap: 12.8px;
  }
  #ig,#fb,#tg {
    width: 29.881px;
    height: 29.867px;
  }
  #title-info-quemsomos-main-container {
    font-style: normal;
    font-weight: 700;
    font-size: calc(45px + 1.2876px);
    line-height: 60px;
    color: #092E58;
  }

  #desc-info-quemsomos-main-container {
    width: 90%;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: calc(22px - 0.4px);
    line-height: calc(32px - 5.256px);
    color: #383A47;
    mix-blend-mode: normal;
    opacity: 0.8;
  }

  #veio-qv {
    width: 1013.828px;
    height: 640px;
    top: -29.881px;
    left: -300.631px;
  }

  #quadrado-verde {
    width: 362.667px;
    height: 362.844px;
    top: 177.862px;
    left: 77.862px;
  }

  #quadrado-claro {
    width: 426.875px;
    height: 426.667px;
    top: 170.750px;
    left: 49.406px;
  }

  #subquadrado-esquerda {
    width: 213.438px;
    height: 192px;
    top: 177.862px;
    left: 06.719px;
  }

  #subquadrado-direita {
    width: 213.438px;
    height: 192px;
    top: 309.484px;
    left: 396.242px;
  }
} */
</style>
