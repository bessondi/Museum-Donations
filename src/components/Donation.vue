<template>
  <div class="donation">
    <div class="donation__header">
      <a href="https://fabergemuseum.ru/" class="icon">
        <img class="logo" :src="backIcon" alt="back to main page">
      </a>

      <button @click="changeLang" class="icon">
        <img class="logo"
             :src="$locale('form.changeLangBtn') === 'ru'
              ? languageIcons.ru : languageIcons.en" alt="language">
      </button>
    </div>

    <div class="donation__title">
      <h1 class="heading">{{ $locale('form.heading') }}</h1>
      <p class="description">{{ $locale('form.description') }}</p>
    </div>

    <form @submit.prevent="getPay" class="donation__form">
      <!-- name -->
      <div class="donation__form__name">
        <div class="donation__form__field">
          <label for="name"><strong>{{ $locale('form.nameLabel') }}:</strong></label>
          <input v-model.trim="name"
                 class="textField" type="text" id="name" name="name" :placeholder="$locale('form.namePlaceholder')"
                 :class="$store.state.isNameValid === true && $store.state.nameValue === ''
                   ? ''
                   : $store.state.isNameValid
                     ? 'valid'
                     : 'invalid'"
                 >
        </div>
        <!-- surname -->
        <div class="donation__form__field">
          <label for="name"><strong>{{ $locale('form.surnameLabel') }}:</strong></label>
          <input v-model.trim="surname"
                 class="textField" type="text" id="surname" name="surname" :placeholder="$locale('form.surnamePlaceholder')"
                 :class="$store.state.isSurnameValid === true && $store.state.surnameValue === ''
                   ? ''
                   : $store.state.isSurnameValid
                     ? 'valid'
                     : 'invalid'"
                 >
        </div>
      </div>

      <!-- mail -->
      <div class="donation__form__field">
        <label for="email"><strong>*{{ $locale('form.mailLabel') }}:</strong></label>
        <input v-model.trim="email"
               :class="$store.state.isEmailValid === null ? '' : $store.state.isEmailValid ? 'valid' : 'invalid'"
               class="textField" type="email" id="email" name="email" placeholder="faberge@museum.ru"
               required>
      </div>

      <!-- agreements -->
      <div class="donation__form__field">
        <input v-model="offerAgreement" type="checkbox" id="offerAgreement" name="offerAgreement">
        <label class="agreement" for="offerAgreement">
          <strong>{{ $locale('form.offerAgreement') }}
            <router-link to="/offer">
              <img class="logo" :src="linkIcon" alt="offer">
            </router-link>
          </strong>
          <br>
          <br>
          <small>{{ $locale('form.note') }}</small>
        </label>
        <!--        <input v-model="isEmailSubscription" type="checkbox" id="emailSubscription" name="emailSubscription">-->
        <!--        <label class="agreement" for="emailSubscription"> Хочу получать письма на эл.почту</label>-->
      </div>

      <!-- subscription or single payment -->
      <div v-if="offerAgreement" class="donation__form__field recurrent">
        <input v-model="recurrent" type="radio" id="firstType" class="donation__form_hidden" name="recurrent"
               value="single">
        <label :class="$store.state.recurrentPicked === 'single' ? 'checked' : null" for="firstType"
               class="btn">{{ $locale('form.recurrentOnce') }}</label>
        <input v-model="recurrent" type="radio" id="secondType" class="donation__form_hidden" name="recurrent"
               value="monthly">
        <label :class="$store.state.recurrentPicked === 'monthly' ? 'checked' : null" for="secondType"
               class="btn">{{ $locale('form.recurrentMonthly') }}</label>
      </div>

      <!-- payment currency -->
      <div v-if="offerAgreement && locale === 'en'" class="donation__form__field recurrent">
        <input v-model="currency" type="radio" id="firstEnCurrency" class="donation__form_hidden" name="enCurrency"
               value="EUR">
        <label :class="$store.state.currency === 'EUR' ? 'checked' : null" for="firstEnCurrency"
               class="btn">Donate in EUR</label>
        <input v-model="currency" type="radio" id="secondEnCurrency" class="donation__form_hidden" name="enCurrency"
               value="USD">
        <label :class="$store.state.currency === 'USD' ? 'checked' : null" for="secondEnCurrency"
               class="btn">Donate in USD</label>
      </div>

      <!-- sum -->
      <div v-if="offerAgreement" class="donation__form__field amount">
        <input @click="setAmount(50)" type="radio" id="firstAmount" class="donation__form_hidden" name="amount">
        <label :class="$store.state.amountValue === 50 ? 'checked' : null" for="firstAmount" class="btn btnAmountTitle">
          50 {{ currencySign }}
        </label>

        <input @click="setAmount(100)" type="radio" id="secondAmount" class="donation__form_hidden" name="amount">
        <label :class="$store.state.amountValue === 100 ? 'checked' : null" for="secondAmount" class="btn btnAmountTitle">
          100 {{ currencySign }}
        </label>

        <input @click="setAmount(1000)" type="radio" id="thirdAmount" class="donation__form_hidden" name="amount">
        <label :class="$store.state.amountValue === 1000 ? 'checked' : null" for="thirdAmount" class="btn btnAmountTitle">
          1000 {{ currencySign }}
        </label>

        <input @click="setAmount('other')" type="radio" id="otherAmount" class="donation__form_hidden" name="amount">
        <label :class="$store.state.isAmountFieldVisible ? 'checked' : null" for="otherAmount" class="btn btnAmountTitle">
          {{ $locale('form.otherAmount') }}
        </label>
      </div>

      <!-- sum field -->
      <div v-if="offerAgreement && $store.state.isAmountFieldVisible" class="donation__form__field otherAmount">
        <label for="donationSum">{{ $locale('form.enterAmountValue') }}</label>
        <input v-model.number="amountSum" class="textField" type="number" id="donationSum" name="sum"
               :placeholder="$locale('form.amountPlaceholder')">
      </div>

      <!-- btn -->
      <div class="donation__form__field">
        <input class="submitBtn" id="submit" type="submit"
               :class="$store.state.isNameValid && $store.state.isEmailValid
          && $store.state.isOfferAgreement && $store.state.isBtnActive
            ? 'active' : ''"
               :value="`${ $locale('form.submitBtn') } ${ $store.state.amountValue ?
               $store.state.amountValue + currencySign
               : ''}`">
      </div>
      <div class="paymentLogos">
        <img v-for="icon in paymentIcons" :key="icon.id" class="logo" :src="icon.logo" :alt="icon.alt">
      </div>
    </form>
  </div>
</template>

<script>
import langIconRU from '@/assets/svg/ru-flag.svg'
import langIconEN from '@/assets/svg/en-flag.svg'
import backIcon from '@/assets/svg/backArrow.svg'
import linkIcon from '@/assets/svg/link.svg'
import payIcon1 from '@/assets/svg/apple-pay.svg'
import payIcon2 from '@/assets/svg/g-pay.svg'
import payIcon3 from '@/assets/svg/logo-visa.svg'
import payIcon4 from '@/assets/svg/logo-mastercard.svg'
import payIcon5 from '@/assets/svg/logo-mir.svg'

let routeTo
const changeRouter = function (ctx) {
  routeTo = function (path) {
    ctx.$router.push(path)
  }
}

function pay(amount, email, recurrent, locale, currency, name = '', surname = '') {
  const widgetLanguage = locale === 'en' ? 'en-US' : 'ru-RU'

  const widget = new cp.CloudPayments({language: widgetLanguage})

  // создание ежемесячной подписки
  const data = {}
  if (recurrent) {
    data.cloudPayments = {
      recurrent: {
        interval: 'Month',
        period: 1,
        amount
      }
    }
  }

  const apiKey = 'pk_5dd54d4b5d9a17e641da689238624'

  widget.pay('auth', // или 'charge'
    { // options
      publicId: apiKey, // id из личного кабинета
      description: widgetLanguage === 'ru-RU'
        ? `Пожертвование Музею Фаберже в сумме ${amount} ${currency}`
        : `Donation to the Fabergé Museum in the amount of ${amount} ${currency}`, // назначение
      amount: amount, // сумма
      currency: currency, // валюта,
      email: email,
      requireEmail: true, // mail в форме оплаты
      invoiceId: '', // номер заказа  (необязательно)
      accountId: email, // идентификатор плательщика (необязательно) mail
      skin: 'mini', // дизайн виджета (необязательно)
      data: data
    },
    {
      onSuccess: function (options) {
        // 2 - success - действие при успешной оплате

        name !== '' ? localStorage.setItem('name', name) : null
        surname !== '' ? localStorage.setItem('surname', surname) : null
        routeTo('/gratitude')
      },
      onFail: function (reason, options) {
        // fail - действие при неуспешной оплате

        // routeTo('/gratitude')
      },
      onComplete: function (paymentResult, options) {
        // 1 - complete - Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
      }
    }
  )
}

export default {
  inject: ['changeLocale'],
  data() {
    return {
      paymentIcons: [
        {
          id: 1,
          logo: payIcon1,
          alt: 'Apple pay'
        },
        {
          id: 2,
          logo: payIcon2,
          alt: 'Google pay'
        },
        {
          id: 3,
          logo: payIcon4,
          alt: 'MasterCard'
        },
        {
          id: 4,
          logo: payIcon3,
          alt: 'VISA'
        },
        {
          id: 5,
          logo: payIcon5,
          alt: 'МИР'
        }
      ],
      languageIcons: {
        ru: langIconRU,
        en: langIconEN,
      },
      linkIcon: linkIcon,
      backIcon: backIcon
    }
  },
  computed: {
    locale: {
      get() {
        return this.$store.state.locale
      }
    },
    currency: {
      get() {
        return this.$store.state.currency
      },
      set(value) {
        this.$store.commit('updateCurrency', value)
        console.log(this.$store.state.currency)
      }
    },
    currencySign: {
      get() {
        return this.currency === 'RUB' ? ' ₽' : this.currency === 'EUR' ? ' €' : ' $'
      }
    },
    name: {
      get() {
        return this.$store.state.nameValue
      },
      set(value) {
        this.$store.commit('updateName', value)
        this.$store.state.nameValue.length === 0 ||
        this.$store.state.nameValue.length >= 2 && this.$store.state.nameValue.length <= 10
          ? this.$store.commit('nameValid', true) : this.$store.commit('nameValid', false)
        this.isFormValid()
      }
    },
    surname: {
      get() {
        return this.$store.state.surnameValue
      },
      set(value) {
        this.$store.commit('updateSurname', value)
        this.$store.state.surnameValue.length === 0 ||
        this.$store.state.surnameValue.length >= 2 && this.$store.state.surnameValue.length <= 10
          ? this.$store.commit('surnameValid', true) : this.$store.commit('surnameValid', false)
        this.isFormValid()
      }
    },
    email: {
      get() {
        return this.$store.state.emailValue
      },
      set(value) {
        this.$store.commit('updateEmail', value)
        this.$store.commit('emailValid', this.isMailValid(this.email))
        this.isFormValid()
      }
    },
    offerAgreement: {
      get() {
        return this.$store.state.isOfferAgreement
      },
      set(value) {
        this.$store.commit('updateOfferAgreement', value)
        this.isFormValid()
      }
    },
    recurrent: {
      get() {
        return this.$store.state.recurrentPicked
      },
      set(value) {
        this.$store.commit('updateRecurrent', value)
      }
    },
    amountSum: {
      get() {
        return this.$store.state.amountValue
      },
      set(value) {
        this.$store.commit('updateAmount', value)
        this.isFormValid()
      }
    }
  },
  methods: {
    getPay() {
      if (
        // this.nameValue !== '' &&
        this.$store.state.isEmailValid
        && this.$store.state.isOfferAgreement
        && this.$store.state.isBtnActive
        && this.$store.state.currency === 'RUB' && this.$store.state.amountValue >= 50
          || this.$store.state.currency !== 'RUB' && this.$store.state.amountValue >= 5
      ) {
        const isRecurrent = this.$store.state.recurrentPicked === 'single'
          ? false : this.$store.state.recurrentPicked === 'monthly' ? true : null

        changeRouter(this)
        pay(this.amountSum, this.email, isRecurrent, this.locale, this.currency, this.name, this.surname)
      }
    },
    setAmount(value) {
      this.$store.commit('addAmount', value)
      this.isFormValid()
    },
    isMailValid(value) {
      const mailPattern = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{2,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\]?)$/
      return !(value.length === 0 || value.toLowerCase().match(mailPattern) === null)
    },
    isFormValid() {
      this.$store.state.isNameValid &&
      this.$store.state.isSurnameValid &&
      this.$store.state.isEmailValid &&
      this.$store.state.isAmountValid
        ? this.$store.commit('formValid', true) : this.$store.commit('formValid', false)
    },
    changeLang() {
      if (this.$store.state.locale === 'ru' && this.$store.state.currency === 'RUB') {
        this.$store.commit('changeLoc', 'en')
        this.changeCurrencyType('EUR')
      } else if (this.$store.state.locale === 'en' && this.$store.state.currency !== 'RUB') {
        this.$store.commit('changeLoc', 'ru')
        this.changeCurrencyType('RUB')
      }

      this.changeLocale(this.$store.state.locale)
      this.$forceUpdate()
    },
    changeCurrencyType(currencyType) {
      this.$store.commit('updateCurrency', currencyType)
      console.log(this.$store.state.locale, this.$store.state.currency)
    }
  },
  mounted() {
    const paymentScript = document.createElement('script')
    paymentScript.setAttribute('src', 'https://widget.cloudpayments.ru/bundles/cloudpayments')
    document.head.appendChild(paymentScript)
  }
}
</script>
