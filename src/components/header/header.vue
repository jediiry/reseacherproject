<template src="./header.html"> </template>

<script>
export default {
  name: "header",
  data() {
    return {
      notify: false,
      showmodal: false,
    };
  },
  methods: {
    route(param) {
      this.$store.state.active = param;
      this.$router.push(`/${param}`);
    },
    toggleMenu(){
      document.querySelector('.menu-background').classList.toggle('hidemenu');
    }
  },
};
</script>

<style>
.menu-iconbox{
  display: none;
  margin-left: 10px;
}

.menu-icon {
  display: grid;
  place-items: center;
  height: 50px;
  width: 40px;
  cursor: pointer;
}

.menu-icon > span {
  width: 100%;
  height: 3px;
  background: #333;
  display: block;
  transition: all 0.3s ease-in-out;
}

.line-1 {
  width: 42px;
  justify-self: end;
}

.line-2 {
  width: 35px;
  justify-self: end;
}

.menu-icon:hover span:nth-child(1) {
  width: 35px;
}

.menu-icon:hover span:nth-child(2) {    
  width: 35px;
}


.menu-icon.active span:nth-child(1) {
  transform-origin: center center;
  transform: rotate(-45deg) translate(-12px, 12px);
  width: 55px;
}

.menu-icon.active span:nth-child(2) {
  transform: translateX(10px);
  opacity: 0;
}

.menu-icon.active span:nth-child(3) {
  transform-origin: center center;
  transform: rotate(45deg) translate(-15px, -14px);
  width: 55px;
}

@media only screen and (max-width: 75em) { /** 1200px / 16 */
  .nav_searchbox {
    display: flex;
    align-items: center;
  }

  .menu-iconbox{
    display: block;
  }
}


</style>
