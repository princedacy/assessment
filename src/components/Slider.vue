<template>
  <section>
    <div class="container middle-section">
      <div class="slider">
        <div class="slider-left">
          <img src="@/assets/images/ex.png" alt="" class="desktop-logo"/>
          <img src="@/assets/images/exmob.png" alt="" class="mobile-logo"/>
          <p>
            I costi chilometrici relativi alle auto provate dal 2016 ad oggi.
            <a href="#">Più informazioni</a>
          </p>
        </div>
        <div class="slider-right">
          <h6>Costi calcolati su queste percentuali di utilizzo</h6>
          <div class="percentages">
            <div class="citta ribbon">
              <h3 class="number">33</h3>
              <span class="name">città</span>
            </div>
            <div class="statale ribbon">
              <h3 class="number">33</h3>
              <span class="name">statale</span>
            </div>
            <div class="autostrada ribbon">
              <h3 class="number">33</h3>
              <span class="name">autostrada</span>
            </div>
          </div>
          <div class="colored-lines">
              <div class="yellow"></div>
              <div class="blue"></div>
              <div class="green"></div>
          </div>
          <button type="submit">Cambia percentuali</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
/* .wrapper {
  background: #eeeeee;
}
.slider {
  display: flex;
}
.slider-left {
  width: 45%;
}
.slider-left p {
  text-align: start;
}
.slider-right {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.slider-right h6 {
  color: #333333;
  text-transform: uppercase;
}
.percentages .ribbon {
  width: 30%;
  background: #ffffff;
  border-radius: 8pt;
}
.percentages .percent {
  color: lightgray;
  font-size: 20px;
}
.citta h3 {
  color: #ffc31f;
  margin: 0;
} */
</style>