<template src="./settings.html"> </template>

<script>
import mainheader from "../header/header";
import SettingSkills from './settingskills';
import SettingsPayment from './settingspayment';


export default {
  name: "settings",
  data() {
    return {
      data: "settings_payment",
    };
  },
  components: {
    mainheader,
    SettingSkills,
    SettingsPayment
  },
  methods: {
    settab(param) {
      this.data = param;
    },
  },
};
</script>

<style>
.settings_tab_left {
  flex: 2;
}
.settings_tab_right {
  width: 1;
}
.settings_tab_right > :nth-child(1){
  margin-left: auto;
}



@media only screen and (max-width: 50em) { /** 800px / 16 */
  .settings_tab{
    flex-direction: column;
    padding: 15px 0;
  }

  .settings_tab_right {
    margin-left: 0;
    margin-top: 13px;
    margin-right: 0;
    width: 100%;
  }

  .settings_tab_right > :nth-child(1){
    margin-left: 0;
  }
  
}

@media only screen and (max-width: 42.5em) { /** 680px / 16 */
  .genral_info_box{
    flex-direction: column;
  }
  .settings_tab_right {
    margin-left: auto;
    margin-right: 1%;
  }
}

@media only screen and (max-width: 33.75em) { /** 540px / 16 */
  .settingtab{
    margin-bottom: 11px;
  }
}

@media only screen and (max-width: 25em) { /** 400px / 16 */
  .settings_tab {
    padding: 12px;
  }

  .settings_tab_right {
    margin-top: 13px;
    flex-direction: column;
  }

  .settings_tab_right > :nth-child(1){
    margin-bottom: 10px;
  }
}
</style>
