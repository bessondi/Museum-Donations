import { createStore } from 'vuex'

export default createStore({
  state: {
    locale: 'ru',
    currency: 'RUB',

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
    changeLoc (state, value) {
      state.locale = value
    },
    changeCurrency (state, value) {
      state.currency = value
    },
    updateName (state, value) {
      state.nameValue = value
    },
    updateEmail (state, value) {
      state.emailValue = value
    },

    nameValid (state, value) {
      state.isNameValid = value
    },
    emailValid (state, value) {
      state.isEmailValid = value
    },

    updateOfferAgreement (state, value) {
      state.isOfferAgreement = value
    },
    updateRecurrent (state, value) {
      state.recurrentPicked = value
    },
    updateAmount (state, value) {
      state.amountValue = value
      state.amountValue >= 50 ? state.isAmountValid = true : state.isAmountValid = false
    },
    addAmount (state, value) {
      if (typeof value === 'number') {
        state.amountValue = value
        state.isAmountFieldVisible = false
      } else if (value === 'other') {
        state.amountValue = ''
        state.isAmountFieldVisible = true
      }
      state.amountValue >= 50 ? state.isAmountValid = true : state.isAmountValid = false
    },

    formValid (state, value) {
      state.isBtnActive = value
    }
  },
  actions: {},
  modules: {}
})

export const ru = {
  form: {
    changeLangBtn: '🇬🇧',
    heading: 'Пожертвование Музею Фаберже',
    description: 'Музей Фаберже в Санкт-Петербурге и НО «Культурно-Исторический Фонд «Связь времен»» приглашает Вас поддержать Музей, осуществив пожертвование на счет Фонда на его уставную деятельность. Ваше участие станет значимой помощью в деле поддержки нашего Музея, которая позволит ему в полной мере выполнять свои основные задачи: собирать, изучать и популяризировать русское искусство!',
  }
}

export const en = {
  form: {
    changeLangBtn: '🇷🇺',
    heading: 'Donations for Fabergé Museum',
    description: 'The Fabergé Museum in St. Petersburg and the Cultural and Historical Foundation “Link of Times” invites you to support the Museum by making a donation to the Foundation\'s account for its statutory activities. Your participation will be a significant help in supporting our Museum, which will allow it to fully fulfill its main tasks: to collect, study and popularize Russian art!',
  }
}
