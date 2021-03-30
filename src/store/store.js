import { createStore } from 'vuex'

export default createStore({
  state: {
    locale: 'ru',
    currency: 'RUB',

    nameValue: '',
    surnameValue: '',
    emailValue: '',
    amountValue: 0,

    isNameValid: true,
    isSurnameValid: true,
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

    updateName (state, value) {
      state.nameValue = value
    },
    updateSurname (state, value) {
      state.surnameValue = value
    },
    updateEmail (state, value) {
      state.emailValue = value
    },

    nameValid (state, value) {
      state.isNameValid = value
    },
    surnameValid (state, value) {
      state.isSurnameValid = value
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
    updateCurrency (state, value) {
      state.currency = value
    },
    updateAmount (state, value) {
      state.amountValue = value

      state.currency === 'RUB' && state.amountValue >= 200
        || state.currency !== 'RUB' && state.amountValue >= 5
        ? state.isAmountValid = true
        : state.isAmountValid = false
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
    description: 'Пожертвуйте на деятельность Музея Фаберже!\n Приглашаем Вас поддержать Музей Фаберже в Санкт-Петербурге, осуществив пожертвование на счет НО «Культурно-исторический Фонд «Связь времен». Ваша помощь поможет нашему музею радовать россиян и гостей со всего мира своей уникальной коллекцией и масштабными выставочными, издательскими и просветительскими проектами. Для нас ценна любая Ваша помощь, как и понимание того, что Вам небезразлична судьба Музея Фаберже!',
    nameLabel: 'Ваше имя',
    surnameLabel: 'Ваша фамилия',
    namePlaceholder: 'Карл',
    surnamePlaceholder: 'Фаберже',
    mailLabel: 'Email',
    offerAgreement: ' Согласен(-на) с условиями оферты',
    note: 'Обращаем Ваше внимание, что пожертвования через сайт Музея Фаберже принимаются только от физических лиц.',
    recurrentOnce: 'Единовременно',
    recurrentMonthly: 'Ежемесячно',
    otherAmount: 'Другая сумма',
    enterAmountValue: 'Введите сумму пожертвования:',
    amountPlaceholder: 'Минимальная сумма 200 рублей',
    submitBtn: 'Пожертвовать',
    gratitudeDefaultText: 'Уважаемый благотворитель!',
    gratitudeText: 'Благодарим Вас за пожертвование в пользу Музея Фаберже!\n История культуры и искусства в России неразрывно связна с деятельностью меценатов, и, совершая пожертвование, Вы продолжаете эту славную традицию.\n Всегда ждем Вас в Музее Фаберже в Санкт-Петербурге!',
    backBtn: 'Вернуться назад',
    saveBtn: 'Сохранить',
    offerText: 'Текст Договора - оферты',
    reportTitle: 'Отчет по работе музея'
  }
}

export const en = {
  form: {
    changeLangBtn: 'ru',
    heading: 'Donations for Fabergé Museum',
    description: 'Donate to the activities of the Fabergé Museum!\n We invite you to support the Fabergé Museum in St. Petersburg by making a donation to the account of the Cultural and Historical Foundation «Link of Times». Your help will help our museum delight Russians and guests from around the world with its unique collection and large-scale exhibition, publishing and educational projects. We appreciate all your help, as well as the understanding that you care about the fate of the Fabergé Museum!',
    nameLabel: 'First name',
    surnameLabel: 'Last name',
    namePlaceholder: 'Carl',
    surnamePlaceholder: 'Fabergé',
    mailLabel: 'Email',
    offerAgreement: ' I agree to the terms of the offer',
    note: 'Please note that donations through the Fabergé Museum website are accepted only from individuals.',
    recurrentOnce: 'Donate once',
    recurrentMonthly: 'Donate monthly',
    otherAmount: 'Other Amount',
    enterAmountValue: 'Enter the donation amount:',
    amountPlaceholder: 'Minimum amount are 5 currency units',
    submitBtn: 'Donate',
    gratitudeDefaultText: 'Dear donator!',
    gratitudeText: 'Thank you for your donation to the Fabergé Museum!\n The history of culture and art in Russia is inextricably linked to the activities of patrons of the arts, and by making a donation you are continuing this glorious tradition.\n We are always looking forward to seeing you at the Fabergé Museum in St. Petersburg!',
    backBtn: 'Back to donation',
    saveBtn: 'Save',
    offerText: 'Offer Text',
    reportTitle: 'Report on the museum\'s work'
  }
}
