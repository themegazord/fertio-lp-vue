<template>
  <div id="quem-somos">
    <Navbar />
    <div id="quemsomos-main-container">
      <div id="compo-quemsomos-main-container">
        <RedesSociais id="redes-sociais"/>
        <img src="https://i.ibb.co/BKWDrFt/Group-removebg-preview.png" alt="Group-removebg-preview"
          id="subquadrado-esquerda" />
        <img src="https://i.ibb.co/BKWDrFt/Group-removebg-preview.png" alt="Group-removebg-preview"
          id="subquadrado-direita" />
        <img src="https://i.ibb.co/fNWXp0b/Rectangle-4580.png" alt="Rectangle-4580" id="quadrado-claro" />
        <div id="quadrado-verde">
        </div>
        <img src="https://i.ibb.co/P1TWDCC/shutterstock-2173227909-removebg-preview.png"
          alt="shutterstock-2173227909-removebg-preview" id="veio-qv" />
      </div>
      <div id="info-quemsomos-main-container">
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
