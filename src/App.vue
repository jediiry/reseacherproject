<template>
  <div id="app" class="overflow-x-hidden">
    <router-view />
    <div class="menu-background hidemenu">
      <div class="grid grid-rows-4 grid-cols-1 gap-5 mobile_sidemenu shadow-xl">
        <div class="row-span-1 flex justify-between items-center p-4">
          <img class="logo" src="./assets//teklabspcelogo.png" alt="">
          <span class="close_menu inline-block" @click="toggleMenu">&times;</span>
        </div>
        <div class="row-span-2">
          <div class="menu">
            <span class="menu-item" :class="{'active': currentRoute == ''}" @click="route('')">
                <img src="./assets/icon/dashboard.svg" alt=""> Dashboard
            </span>
            <span class="menu-item" @click="route('discovery')" :class="{'active': currentRoute == 'discovery'}">
                <img src="./assets/icon/chat.svg" alt=""> Discovery
            </span>
            <span class="menu-item" @click="route('program')" :class="{'active': currentRoute == 'program'}">
                <img src="./assets/icon/calender.svg" alt=""> Program
            </span>
            <span class="menu-item" @click="route('submission')" :class="{'active': currentRoute == 'submission'}">
                <img src="./assets/icon/file.svg" alt=""> Submission
            </span>
            <span class="menu-item" @click="route('payment')" :class="{'active': currentRoute == 'payment'}">
                <img src="./assets/icon/shop.svg" alt=""> Payment
            </span>
            <span class="menu-item" @click="route('leadership')" :class="{'active': currentRoute == 'leadership'}">
                <img src="./assets/icon/map.svg" alt=""> Leaders board
            </span>
            <span class="menu-item" @click="route('crowdstream')" :class="{'active': currentRoute == 'crowdstream'}">
                <img src="./assets/icon/circle.svg" alt=""> Crowd stream
            </span>
          </div>
        </div>
        <div class="flex items-center">
          <div class="menu">
            <span class="menu-item " @click="$m.showmodal('logout')">
              <img src="./assets/icon/logout.svg" alt=""> Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  methods: {
    route(param) {
      this.$store.state.active = param;
      this.$router.push(`/${param}`);
    },
    toggleMenu(){
      document.querySelector('.menu-background').classList.toggle('hidemenu');
    }
  },
  computed: {
    ...mapState({
      currentRoute: (state) => state.active,
    }),
  },
};
</script>

<style>
@media only screen and (max-width: 75em) { /** 1200px / 16 */
  
  .mobile_sidemenu {
    display: block !important;
  }

}

.menu-background.hidemenu {
  display: none; 
}
.menu-background {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4); 
  transition: all .2s;
}

 .mobile_sidemenu {
  display: none;
  width: 60%;
  background-color: #fff;
  position: absolute;
  top: 0; /* 82px */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 100vh;
  transition: all .2s;
}

.mobile_sidemenu a {
  display: block;
  text-align: center;
  padding: 16px;
  transition: all 0.3s ease;
  color: white;
  font-size: 14px;
}

.mobile_sidemenu a:hover {
  background-color: #000;
}

.active {
  background-color: #7a7c7b;
  color: #fff;
} 

.close_menu{
  color: #777;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close_menu:hover,
.close_menu:focus {
  color: black;
  text-decoration: none;
}


</style>