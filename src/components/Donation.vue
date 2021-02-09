<template>
  <div class="donation">
    <div class="title">
      <h1 class="heading">Пожертвование Музею Фаберже</h1>
      <p class="description">Музей Фаберже в Санкт-Петербурге и НО «Культурно-Исторический Фонд «Связь времен»»
        приглашает Вас поддержать Музей, осуществив пожертвование на счет Фонда на его уставную деятельность.</p>
      <p>Ваше участие станет значимой помощью в деле поддержки нашего Музея, которая позволит ему в полной мере
        выполнять свои основные задачи: собирать, изучать и популяризировать русское искусство!</p>
    </div>

    <form @submit.prevent="getPay" class="form">
      <div class="field">
        <label for="name"><strong>*Ваше имя:</strong></label>
        <input v-model.trim="nameValue"
               :class="isNameValid === null ? '' : isNameValid ? 'valid' : 'invalid'"
               class="textField" type="text" id="name" name="name" placeholder="Карл Фаберже"
               required>
      </div>
      <div class="field">
        <label for="email"><strong>*Email:</strong></label>
        <input v-model.trim="emailValue"
               :class="isEmailValid === null ? '' : isEmailValid ? 'valid' : 'invalid'"
               class="textField" type="email" id="email" name="email" placeholder="faberge@museum.ru"
               required>
      </div>

      <!-- agreements -->
      <div class="field">
        <input v-model="isOfferAgreement" type="checkbox" id="offerAgreement" name="offerAgreement">
        <label class="agreement" for="offerAgreement"><strong> Согласен(-на) с условиями
          <router-link to="/offer"> оферты</router-link>
        </strong>
          <br>
          <p>Обращаем Ваше внимание, что пожертвования через сайт Музея Фаберже принимаются только от
            физических лиц.</p>
        </label>
        <!--        <input v-model="isEmailSubscription" type="checkbox" id="emailSubscription" name="emailSubscription">-->
        <!--        <label class="agreement" for="emailSubscription"> Хочу получать письма на эл.почту</label>-->
      </div>

      <!-- subscription or single payment -->
      <div v-if="isOfferAgreement" class="field recurrent">
        <input v-model="recurrentPicked" type="radio" id="firstType" class="hidden" name="recurrent" value="single">
        <label :class="recurrentPicked === 'single' ? 'checked' : null" for="firstType"
               class="btn">Единовременно</label>
        <input v-model="recurrentPicked" type="radio" id="secondType" class="hidden" name="recurrent" value="monthly">
        <label :class="recurrentPicked === 'monthly' ? 'checked' : null" for="secondType"
               class="btn">Ежемесячно</label>
      </div>

      <!-- sum -->
      <div v-if="isOfferAgreement" class="field amount">
        <input @click="getAmount(50)" type="radio" id="firstAmount" class="hidden" name="amount">
        <label :class="amountValue === 50 ? 'checked' : null" for="firstAmount" class="btn btnAmountTitle">50
          ₽</label>

        <input @click="getAmount(100)" type="radio" id="secondAmount" class="hidden" name="amount">
        <label :class="amountValue === 100 ? 'checked' : null" for="secondAmount" class="btn btnAmountTitle">100
          ₽</label>

        <input @click="getAmount(1000)" type="radio" id="thirdAmount" class="hidden" name="amount">
        <label :class="amountValue === 1000 ? 'checked' : null" for="thirdAmount" class="btn btnAmountTitle">1000
          ₽</label>

        <input @click="getAmount('other')" type="radio" id="otherAmount" class="hidden" name="amount">
        <label :class="isAmountFieldVisible ? 'checked' : null" for="otherAmount" class="btn btnAmountTitle">Другая
          сумма</label>
      </div>

      <!-- sum field -->
      <div v-if="isOfferAgreement && isAmountFieldVisible" for="otherAmount" class="field otherAmount">
        <label for="donationSum">Введите сумму пожертвования:</label>
        <input v-model.number="amountValue" class="textField" type="number" id="donationSum" name="sum"
               placeholder="Минимальная сумма 50 рублей">
      </div>

      <!-- btn -->
      <div class="field">
        <input :class="isNameValid && isEmailValid && isOfferAgreement && isBtnActive? 'active' : ''"
               class="submitBtn" id="submit" type="submit"
               :value="`Пожертвовать ${amountValue ? amountValue+' руб.' : ''}`">
      </div>
      <div class="paymentLogos">
        <img v-for="icon in paymentIcons" class="logo" :src="icon.logo" :alt="icon.alt">
      </div>
    </form>
  </div>
</template>

<script>
  import payIcon1 from '@/assets/svg/apple-pay.svg'
  import payIcon2 from '@/assets/svg/g-pay.svg'
  import payIcon3 from '@/assets/svg/logo-visa.svg'
  import payIcon4 from '@/assets/svg/logo-mastercard.svg'
  import payIcon5 from '@/assets/svg/logo-mir.svg'
  import store from '../store'

  let routeTo
  const changeRouter = function (ctx) {
    routeTo = function (path) {
      ctx.$router.push(path)
    }
  }

  function pay(amount, email, recurrent) {
    const widget = new cp.CloudPayments();

    //создание ежемесячной подписки
    const data = {};
    if (recurrent) {
      data.cloudPayments = {
        recurrent: {
          interval: 'Month',
          period: 1,
          amount
        }
      }
    }

    const apiKey = 'pk_5dd54d4b5d9a17e641da689238624';

    widget.pay('auth', // или 'charge'
      { //options
        publicId: apiKey, //id из личного кабинета
        description: `Пожертвование Музею Фаберже в сумме ${amount} рублей`, //назначение
        amount: amount, //сумма
        currency: 'RUB', //валюта,
        email: email,
        requireEmail: true, // mail в форме оплаты
        invoiceId: '', //номер заказа  (необязательно)
        accountId: email, //идентификатор плательщика (необязательно) mail
        skin: "mini", //дизайн виджета (необязательно)
        data: data
      },
      {
        onSuccess: function (options) { // 2 - success - действие при успешной оплате
          routeTo('/gratitude')
        },
        onFail: function (reason, options) { // fail - действие при неуспешной оплате
          // routeTo('/')
        },
        onComplete: function (paymentResult, options) {
          // 1 - complete - Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
        }
      }
    )
  };

  export default {
    data() {
      return {
        paymentIcons: [
          {logo: payIcon1, alt: 'Apple pay'},
          {logo: payIcon2, alt: 'Google pay'},
          {logo: payIcon4, alt: 'MasterCard'},
          {logo: payIcon3, alt: 'VISA'},
          {logo: payIcon5, alt: 'МИР'}
        ],

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
      }
    },
    methods: {
      isMailValid(value) {
        const mailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{2,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,5}|[0-9]{1,3})(\]?)$/
        if (value.length === 0 || value.toLowerCase().match(mailPattern) === null) {
          return false
        }
        return true
      },
      getAmount(num) {
        if (typeof num === 'number') {
          this.amountValue = num
          this.isAmountFieldVisible = false
        } else if (num === 'other') {
          this.amountValue = ''
          this.isAmountFieldVisible = true
        }
      },
      getPay() {
        if (
          this.nameValue !== ''
          && this.isMailValid(this.emailValue)
          && this.isOfferAgreement
          && this.amountValue >= 50
          && this.isBtnActive
        ) {
          const isRecurrent = this.recurrentPicked === 'single' ? false : this.recurrentPicked === 'monthly' ? true : null

          changeRouter(this)
          pay(this.amountValue, this.emailValue, isRecurrent)
        }
      },
      isFormValid() {
        return this.isNameValid && this.isEmailValid && this.isAmountValid
          ? this.isBtnActive = true : this.isBtnActive = false
      }
    },
    watch: {
      nameValue() {
        this.nameValue.length >= 3 && this.nameValue.length < 60
          ? this.isNameValid = true : this.isNameValid = false
        this.isFormValid()
      },
      emailValue() {
        this.isEmailValid = this.isMailValid(this.emailValue)
        this.isFormValid()
      },
      amountValue() {
        this.amountValue >= 50 ? this.isAmountValid = true : this.isAmountValid = false
        this.isFormValid()
      },
      // recurrentPicked() {
      //   console.log(this.recurrentPicked)
      // },
      // isEmailSubscription() {
      //   console.log('mail ', this.isEmailSubscription)
      // }
    },
    mounted() {
      const paymentScript = document.createElement('script')
      paymentScript.setAttribute('src', 'https://widget.cloudpayments.ru/bundles/cloudpayments')
      document.head.appendChild(paymentScript)
    }
  }
</script>







