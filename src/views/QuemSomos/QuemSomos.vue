<template>
  <div id="quem-somos">
    <Navbar />
    <div id="quemsomos-main-container">
      <div id="compo-quemsomos-main-container">
        <img src="https://i.ibb.co/BKWDrFt/Group-removebg-preview.png" alt="Group-removebg-preview" id="subquadrado-esquerda"/>
        <img src="https://i.ibb.co/BKWDrFt/Group-removebg-preview.png" alt="Group-removebg-preview" id="subquadrado-direita"/>
        <img src="https://i.ibb.co/fNWXp0b/Rectangle-4580.png" alt="Rectangle-4580" id="quadrado-claro"/>
        <div id="quadrado-verde">
        </div>
        <img src="https://i.ibb.co/P1TWDCC/shutterstock-2173227909-removebg-preview.png" alt="shutterstock-2173227909-removebg-preview" id="veio-qv"/>
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

#quadrado-verde{
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
  clip-path: polygon(0% 0%, 100% 0%, 100% 35%, 55% 100%,15% 41%);
}

#quadrado-claro {
  position: absolute;
  width: 450px;
  height: 450px;
  top: 200px;
  left: 285px;
}

#subquadrado-esquerda{
  position: absolute;
  top: 250px;
  left: 200px;
}

#subquadrado-direita {
  position: absolute;
  top: 300px;
  left: 630px;
}
</style>
