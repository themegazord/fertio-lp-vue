<template>
  <div id="quem-somos">
    <Navbar />
    <div id="quemsomos-main-container">
      <div id="compo-quemsomos-main-container">
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

export default {
  components: { Navbar },
};
</script>

<style>
#quem-somos {
  overflow: hidden;
}

#quemsomos-main-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  align-items: flex-end;
  width: 100%;
  height: calc(100vh - 90px);
  position: absolute;
  bottom: 0;
}

#info-quemsomos-main-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
}

#title-info-quemsomos-main-container {
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 60px;
  color: #092E58;
}

#desc-info-quemsomos-main-container {
  width: 65%;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  color: #383A47;
  mix-blend-mode: normal;
  opacity: 0.8;
}

#compo-quemsomos-main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

#quadrado-verde {
  position: absolute;
  top: 230px;
  left: 310px;
  /* overflow: hidden; */
  width: 380px;
  height: 380px;
  background: linear-gradient(180deg, #019A34 0%, #CFFD00 100%);
  border-radius: 80px 80px 80px 0;
  transform: rotate(-45deg);
}

#veio-qv {
  width: 900px;
  height: 600px;
  position: absolute;
  top: 88px;
  left: 10px;
  /* z-index: 10; */
  clip-path: polygon(0% 0%, 100% 0%, 100% 35%, 55% 100%, 15% 41%);
}

#quadrado-claro {
  position: absolute;
  width: 450px;
  height: 450px;
  top: 200px;
  left: 285px;
}

#subquadrado-esquerda {
  position: absolute;
  top: 250px;
  left: 200px;
}

#subquadrado-direita {
  position: absolute;
  top: 300px;
  left: 630px;
}

@media screen and (max-width: 2560px) {
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
  #desc-info-quemsomos-main-container {
    width: 85%;
  }

  #quadrado-verde {
    top: calc(230px - 30px);
    left: calc(310px - 85px);
    width: calc(380px - 140px);
    height: calc(380px - 140px);
  }

  #veio-qv {
    width: calc(900px - 300px);
    height: calc(600px - 200px);
    top: 88px;
    left: 10px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 35%, 56% 100%, 15% 38%);
  }

  #quadrado-claro {
    width: calc(450px - 150px);
    height: calc(450px - 150px);
    top: calc(200px - 30px);
    left: calc(285px - 90px);
  }

  #subquadrado-esquerda {
    top: 250px;
    left: calc(200px - 90px);
  }

  #subquadrado-direita {
    top: 300px;
    left: calc(570px - 190px);
  }
}
</style>
