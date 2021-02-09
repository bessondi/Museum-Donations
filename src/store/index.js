import {createStore} from 'vuex'

export default createStore({
  state: {
    nameValue: '',
    emailValue: '',
    isNameValid: null,
    isEmailValid: null,
    isAmountValid: null,

    recurrentPicked: 'single',
    isOfferAgreement: false,
    isEmailSubscription: false,
    isAmountFieldVisible: false,
    amountValue: 0,

    isBtnActive: false
  },
  mutations: {
    // isMailValid(value) {
    //   const mailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{2,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\]?)$/
    //   if (value.length === 0 || value.toLowerCase().match(mailPattern) === null) {
    //     return false
    //   }
    //   return true
    // },
    // getAmount(num) {
    //   if (typeof num === 'number') {
    //     this.amountValue = num
    //     this.isAmountFieldVisible = false
    //   } else if (num === 'other') {
    //     this.amountValue = ''
    //     this.isAmountFieldVisible = true
    //   }
    // },
    // getPay() {
    //   if (
    //     this.nameValue !== ''
    //     && this.isMailValid(this.emailValue)
    //     && this.isOfferAgreement
    //     && this.amountValue >= 50
    //     && this.isBtnActive
    //   ) {
    //     const isRecurrent = this.recurrentPicked === 'single' ? false : this.recurrentPicked === 'monthly' ? true : null
    //
    //     changeRouter(this)
    //     pay(this.amountValue, this.emailValue, isRecurrent)
    //   }
    // },
    // isFormValid() {
    //   return this.isNameValid && this.isEmailValid && this.isAmountValid
    //     ? this.isBtnActive = true : this.isBtnActive = false
    // },
    //
    // nameValue() {
    //   this.nameValue.length >= 3 && this.nameValue.length < 60
    //     ? this.isNameValid = true : this.isNameValid = false
    //   this.isFormValid()
    // },
    // emailValue() {
    //   this.isEmailValid = this.isMailValid(this.emailValue)
    //   this.isFormValid()
    // },
    // amountValue() {
    //   this.amountValue >= 50 ? this.isAmountValid = true : this.isAmountValid = false
    //   this.isFormValid()
    // },

    updateName(state, value) {
      state.nameValue = value
    },
    nameValid(state, value) {
      state.isNameValid = value
    },

    updateEmail(state, value) {
      state.emailValue = value
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
    },
    addAmount(state, value) {
      if (typeof value === 'number') {
        state.amountValue = value
        state.isAmountFieldVisible = false
      } else if (value === 'other') {
        state.amountValue = ''
        state.isAmountFieldVisible = true
      }
    },

    formValid(state, value) {
      state.isBtnActive = value
    },

  },
  actions: {},
  modules: {}
})
