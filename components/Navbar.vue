<template>
  <nav class="trans-nav">
    <div class="container">
      <div class="flex-div justify-content-btw">
        <div class="brand-logo-wrapper">
          <a href="/" class="brand-logo">
            <img src="../assets/images/je-logo.svg" alt="Japtini Energy" class="brand-logo-img">
            <img src="../assets/images/je-logo-2.svg" alt="Japtini Energy" class="brand-logo-img-2">
          </a>
        </div>
        <ul class="nav-links-wrapper">
          <li>
            <a href="/#about" class="nav-link-btn">About us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'NavbarComponent',
  mounted () {
    $(window).scroll(function () {
      $('nav.trans-nav').toggleClass('scrolled-nav', $(this).scrollTop() > 50)
    })
  }
}
</script>

<style src="../assets/css/navbar.css"></style>

<style scoped>
div#app-wrapper nav {
  background-color: transparent;
  box-shadow: none;
  position: fixed;
  top: 0;
  height: auto;
  width: 100%;
  z-index: 10;
}
div#app-wrapper nav .brand-logo {
  position: relative;
}
img.brand-logo-img {
  position: relative;
  transform: translateY(10px);
}
img.brand-logo-img-2 {
  width: 125px;
  position: relative;
  transform: translateY(5px);
}
div#app-wrapper nav.scrolled-nav.trans-nav {
  height: 65px;
  background-color: rgba(241, 241, 241, 0.85);
}
</style>
