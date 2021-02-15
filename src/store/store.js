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
    changeLangBtn: 'en',
    heading: 'Пожертвование Музею Фаберже',
    description: 'Музей Фаберже в Санкт-Петербурге и НО «Культурно-Исторический Фонд «Связь времен» приглашает Вас поддержать Музей, осуществив пожертвование на счет Фонда на его уставную деятельность. Ваше участие станет значимой помощью в деле поддержки нашего Музея, которая позволит ему в полной мере выполнять свои основные задачи: собирать, изучать и популяризировать русское искусство!',
    nameLabel: 'Ваше имя',
    namePlaceholder: 'Карл Фаберже',
    mailLabel: 'Email',
    offerAgreement: ' Согласен(-на) с условиями оферты',
    note: 'Обращаем Ваше внимание, что пожертвования через сайт Музея Фаберже принимаются только от физических лиц.',
    recurrentOnce: 'Единовременно',
    recurrentMonthly: 'Ежемесячно',
    otherAmount: 'Другая сумма',
    amountPlaceholder: 'Минимальная сумма 50 рублей',
    submitBtn: 'Пожертвовать',
    currency: ' ₽',

    backBtn: 'Вернуться назад',
    offerText: 'Текст Договора - оферты'
  }
}

export const en = {
  form: {
    changeLangBtn: 'ru',
    heading: 'Donations for Fabergé Museum',
    description: 'The Fabergé Museum in St. Petersburg and the Cultural and Historical Foundation «Link of Times» invites you to support the Museum by making a donation to the Foundation\'s account for its statutory activities. Your participation will be a significant help in supporting our Museum, which will allow it to fully fulfill its main tasks: to collect, study and popularize Russian art!',
    nameLabel: 'Your name',
    namePlaceholder: 'Carl Fabergé',
    mailLabel: 'Email',
    offerAgreement: ' I agree to the terms of the offer',
    note: 'Please note that donations through the Fabergé Museum website are accepted only from individuals.',
    recurrentOnce: 'Donate once',
    recurrentMonthly: 'Donate monthly',
    otherAmount: 'Other Amount',
    amountPlaceholder: 'Minimum amount 5 euro',
    submitBtn: 'Donate',
    currency: ' €',

    backBtn: 'Back to donation',
    offerText: 'Offer Text'
  }
}
