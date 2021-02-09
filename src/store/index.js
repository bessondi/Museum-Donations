import {createStore} from 'vuex'

export default createStore({
  state: {
    nameValue: '',
    emailValue: '',
    amountValue: 0,

    isNameValid: null,
    isEmailValid: null,
    isAmountValid: null,
    isOfferAgreement: false,

    isAmountFieldVisible: false,
    isEmailSubscription: false,
    recurrentPicked: 'single',

    isBtnActive: false
  },
  mutations: {
    updateName(state, value) {
      state.nameValue = value
    },
    updateEmail(state, value) {
      state.emailValue = value
    },

    nameValid(state, value) {
      state.isNameValid = value
    },
    emailValid(state, value) {
      state.isEmailValid = value
    },

    updateOfferAgreement(state, value) {
      state.isOfferAgreement = value
    },
    updateRecurrent(state, value) {
      state.recurrentPicked = value
    },
    updateAmount(state, value) {
      state.amountValue = value
      state.amountValue >= 50 ? state.isAmountValid = true : state.isAmountValid = false
    },
    addAmount(state, value) {
      if (typeof value === 'number') {
        state.amountValue = value
        state.isAmountFieldVisible = false
      } else if (value === 'other') {
        state.amountValue = ''
        state.isAmountFieldVisible = true
      }
      state.amountValue >= 50 ? state.isAmountValid = true : state.isAmountValid = false
    },

    formValid(state, value) {
      state.isBtnActive = value
    }
  },
  actions: {},
  modules: {}
})
