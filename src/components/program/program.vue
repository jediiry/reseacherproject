<template src="./program.html"> </template>

<script>
import mainheader from "../header/header";
export default {
  name: "program",
  components: {
    mainheader,
  },
  methods: {
    details() {
      this.$router.push("program/details");
    },
  },
};
</script>

<style scoped>
.programList {
  cursor: pointer;
}
.programList:hover {
  background: rgb(235, 235, 235);
}
img.programList_avatar {
  flex: 1 !important;
}

.programList_container {
  flex: 3 !important;
}


@media only screen and (max-width: 52.2em) { /** 840px / 16 */
  .programList_box {
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-columns: auto;
  }

  .programList{
    flex-direction: column;
    width: 100%;
    margin-bottom: 0;
    border-bottom-right-radius: 0.5rem;
  }

  .programList_avatar img {
    width: 100% !important;
    border-top-right-radius: .5rem;
    border-bottom-left-radius: 0;
  }

  .programList_container {
    padding: 1.4rem;
    grid-template-rows: repeat(3, 1fr);
  }

  .programList_container > :nth-child(1){    
    flex-direction: column;
    grid-column: span 3/span 3;
  }

  .programList_container > :nth-child(2){    
    flex-direction: column;
    grid-column: span 3/span 3;
    justify-content: end;
  }

  .programList_container > :nth-child(3){    
    flex-direction: column;
    grid-column: span 3/span 3;
    flex-direction: row;
  }


}

@media only screen and (max-width: 46.88em) { /** 750px / 16 */
  .programList_box {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (max-width: 31.25em) { /** 500px / 16 */
  .programList_box {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
