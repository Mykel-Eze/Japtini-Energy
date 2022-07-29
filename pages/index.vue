<template>
  <div id="main-wrapper">
    <!-- <full-page id="fullpage" ref="fullpage" :options="options">
      <div id="landing" class="section rel">
        <div class="row">
          <div class="container">
            <span>Landing - 1</span>
          </div>
        </div>
      </div>
      <div id="vision" class="section rel">
        <div class="row">
          <div class="container">
            <span>Vision - 2</span>
          </div>
        </div>
      </div>
      <div id="mission" class="section rel">
        <div class="row">
          <div class="container">
            <span>Mission - 3</span>
          </div>
        </div>
      </div>
      <div id="objectives" class="section rel">
        <div class="row">
          <div class="container">
            <span>Objectives - 4</span>
          </div>
        </div>
      </div>
    </full-page> -->

    <section id="home">
      <div class="row full-height">
        <div class="container full-height rel">
          <div class="big-banner-txt-wrapper flex-div">
            <img src="../assets/images/je-icon-big.svg" alt="Japtini Energy icon" class="banner-logo-icon">
            <div class="big-banner-txt">
              Accelerating the <br class="hidden-xs-sm"> future of energy
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about">
      <div class="row rel">
        <div class="container">
          <div class="about-container col s12 m10 offset-m1">
            <h4 class="section-title">
              About Japtini Energy
            </h4>
            <div class="section-sub-title pry-color">
              An African Based Renewable Energy Company established to fill the energy gap across Africa
            </div>
            <div class="section-body-txts">
              <p>
                We provide off-grid energy access to improve production among rural/small holder farmers and the
                agricultural processing sectors with the aim to bring innovation from one sector to another, changing
                the future of energy, together.
              </p>
              <p>
                At Japtini Energy, we have positioned ourselves as a leader in solar systems integration to provide a
                vital service to all with the aim of fully harnessing this abundant source of energy into beneficial
                and usable forms. We differentiate ourselves by providing quality products and services to our clients,
                handled by world class trained and experienced staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services">
      <div class="row">
        <div class="container">
          <div class="col s12">
            <h4 class="col s12 section-title">
              Our Services
            </h4>
          </div>
          <div>
            <div class="col s12 sect-content-wrapper">
              <div class="col s12 m6 section-img-side visible-xs">
                <img src="../assets/images/solar-house.jpg" alt="solar-house" class="section-img">
              </div>
              <div class="col s12 m6 section-txt-side">
                <div class="section-sub-title pry-color">
                  Stand-Alone Solar/Solar Home Systems (SHS) Distribution
                </div>
                <div class="section-body-txts">
                  <p>
                    Employing two main operations models, including 'lease to own Pay-As-You-Go' and outright sales,
                    Japtini Energy distributes and installs decentralized standalone solar (SAS) components, units and
                    equipment including; solar panels, solar lighting, solar water pumps, batteries etc.
                  </p>
                </div>
              </div>
              <div class="col s12 m6 section-img-side hidden-xs">
                <img src="../assets/images/solar-house.jpg" alt="solar-house" class="section-img">
              </div>
            </div>
            <div class="col s12 sect-content-wrapper">
              <div class="col s12 m6 section-img-side">
                <img src="../assets/images/engineer-lady.jpg" alt="engineer-lady" class="section-img">
              </div>
              <div class="col s12 m6 section-txt-side">
                <div class="section-sub-title pry-color">
                  Productive Use of Energy Equipment Financing
                </div>
                <div class="section-body-txts">
                  <p>
                    As part of efforts to increase affordability and maximize energy use for the off-grid system,
                    Japtini Energy deploys a scheme to improve the productive use of energy equipment and appliances
                    for consumers.
                  </p>
                </div>
              </div>
            </div>
            <div class="col s12 sect-content-wrapper">
              <div class="col s12 m6 section-img-side visible-xs">
                <img src="../assets/images/engineer-man.jpg" alt="engineer-man" class="section-img">
              </div>
              <div class="col s12 m6 section-txt-side">
                <div class="section-sub-title pry-color">
                  Mini-Grid Services
                </div>
                <div class="section-body-txts">
                  <p>
                    Japtini deploys containerized turnkey solar off-grid systems in places where it is much more
                    feasible to ensure the sustainability of the systems. Japtini will also install, operate and
                    maintain these clean energy systems.
                  </p>
                </div>
              </div>
              <div class="col s12 m6 section-img-side hidden-xs">
                <img src="../assets/images/engineer-man.jpg" alt="engineer-man" class="section-img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="solutions">
      <div class="row">
        <div class="container">
          <div class="about-container col s12 m10 offset-m1">
            <h4 class="section-title white-txt">
              Custom solutions tailored <br class="hidden-xs-sm"> to your needs
            </h4>
            <div class="section-body-txts">
              <p>
                With ample years of experience in solar energy services, our products are designed for the specific needs of
                a customer and adjusted to each person’s unique requirements. We also understand the importance of regular
                upgrades in technology and performance analysis - which ensures that we serve our clients with ease.
              </p>
            </div>
            <div class="section-btn-wrapper">
              <button class="section-btn-white">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import $ from 'jquery'

export default {
  name: 'IndexPage',
  data () {
    return {
      options: {
        scrollOverflow: false,
        scrollBar: false,
        menu: '.menu',
        navigation: false,
        continuousVertical: true,
        anchors: ['landing', 'vision', 'mission', 'objectives']
        // sectionsColor: ['#02ffcc']
        // onLeave () {
        //   if (!($('.audio-trigger').hasClass('muted'))) {
        //     const audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3')
        //     // var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3')
        //     audio.load()
        //     audio.play()
        //   }
        // }
      }
    }
  }
}
</script>
