import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    updatemenu() {
      if (document.getElementsByClassName('responsive-menu')[0].checked == true) {
        document.getElementsByClassName('menu')[0].style.borderBottomRightRadius = '0';
        document.getElementsByClassName('menu')[0].style.borderBottomLeftRadius = '0';
      }else{
        document.getElementsByClassName('menu')[0].style.borderRadius = '0';
      }
    },
    showDialogPasteleria() {
      document.querySelector('#dialogPasteleria').showModal();
    },
    hideDialogPasteleria() {
      document.querySelector('#dialogPasteleria').close();
    },
    showDialogVacunacion() {
      document.querySelector('#dialogVacunacion').showModal();
    },
    hideDialogVacunacion() {
      document.querySelector('#dialogVacunacion').close();
    },
    showDialogPokedex() {
      document.querySelector('#dialogPokedex').showModal();
    },
    hideDialogPokedex() {
      document.querySelector('#dialogPokedex').close();
    }
  },
  actions: {
    updatemenu (context) {
      context.commit('updatemenu')
    },
    showDialogPasteleria (context) {
      context.commit('showDialogPasteleria')
    },
    hideDialogPasteleria (context) {
      context.commit('hideDialogPasteleria')
    },
    showDialogVacunacion (context) {
      context.commit('showDialogVacunacion')
    },
    hideDialogVacunacion (context) {
      context.commit('hideDialogVacunacion')
    },
    showDialogPokedex (context) {
      context.commit('showDialogPokedex')
    },
    hideDialogPokedex (context) {
      context.commit('hideDialogPokedex')
    },
  },
  modules: {
  }
})
