<template>
  <div class="home-page__container">
    <div class="home-page__content">
      <div class="logo">
        <img src="../assets/img/Logo.png" alt="" />
      </div>
      <div class="home-heading">
        <h1>Make successful</h1>
        <h1>your day</h1>
      </div>
      <div class="home-page__paragrapgh">
        <p>Make small somethings to get <span>big gift in your life</span></p>
      </div>
      <div class="main-btn">
        <router-link to="/addTask">
          <button>Start</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/fonts';
@media (min-width: 320px) {
  /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */
  .home-page__container {
    background: linear-gradient(
      180deg,
      rgba(229, 0, 0, 0.71) 9.02%,
      rgba(221, 6, 7, 0.720854) 11.25%,
      #1593af 68.67%
    );
    height: 100vh;  

    .home-page__content {
      max-width: 312px;
      background: #222222;
      margin: 0 auto;
    

      .logo {
        display: flex;
        justify-content: center;

        img {
          margin-top: 5.7rem;
        }
      }
    }

    .home-heading {
      text-align: center;
      margin-top: 3.7rem;
      color: #ffffff;
      font-family: 'Creepster', cursive;
      font-size: 3.2rem;
      font-weight: 400;
      line-height: 1.1;
    }

    .home-page__paragrapgh {
      text-align: center;
      margin-top: 4.4rem;
      color: #c1cc41;
      p {
        span {
          display: block;
        }
      }
    }
    .main-btn {
      display: flex;
      justify-content: center;
      padding-bottom: 8rem;
      button {
        background: #1ab8db;
        border-radius: 15px;
        padding: 0.5rem 3.2rem;
        font-size: 2.4rem;
        color: #ffffff;
        text-align: center;
        margin-top: 6.2rem;
        cursor: pointer;
      }
    }
  }
}
</style>
