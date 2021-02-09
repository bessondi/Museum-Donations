import {apiKey} from '../apiKey'

export function pay (amount, email, recurrent) {
  const widget = new cp.CloudPayments();

  const receipt = {
    Items: [//товарные позиции
      {
        label: 'Наименование товара 3', //наименование товара
        price: 300.00, //цена
        quantity: 3.00, //количество
        amount: 900.00, //сумма
        vat: 20, //ставка НДС
        method: 0, // тег-1214 признак способа расчета - признак способа расчета
        object: 0, // тег-1212 признак предмета расчета - признак предмета товара, работы, услуги, платежа, выплаты, иного предмета расчета
      }
    ],
    taxationSystem: 0, //система налогообложения; необязательный, если у вас одна система налогообложения
    email: 'user@example.com', //e-mail покупателя, если нужно отправить письмо с чеком
    phone: '', //телефон покупателя в любом формате, если нужно отправить сообщение со ссылкой на чек
    isBso: false, //чек является бланком строгой отчётности
    amounts:
      {
        electronic: 900.00, // Сумма оплаты электронными деньгами
        advancePayment: 0.00, // Сумма из предоплаты (зачетом аванса) (2 знака после запятой)
        credit: 0.00, // Сумма постоплатой(в кредит) (2 знака после запятой)
        provision: 0.00 // Сумма оплаты встречным предоставлением (сертификаты, др. мат.ценности) (2 знака после запятой)
      }
  };

  //

  // console.log(recurrent)
  if (recurrent) {
    const data = {};
    data.cloudPayments = {recurrent: { interval: 'Month', period: 1, customerReceipt: receipt}}; //создание ежемесячной подписки
  }

  // let res
  // function result(action) {
  //   //
  // }
  //

  widget.pay('auth', // или 'charge'
    { //options
      publicId: apiKey, //id из личного кабинета
      description: `Пожертвование Музею Фаберже в сумме ${amount} рублей`, //назначение
      amount: amount, //сумма
      currency: 'RUB', //валюта,
      email: email,
      requireEmail: true, // mail в форме оплаты
      invoiceId: '', //номер заказа  (необязательно)
      accountId: '', //идентификатор плательщика (необязательно) mail
      skin: "mini", //дизайн виджета (необязательно)
      data: {
        myProp: 'myProp value'
      }
    },
    {
      onSuccess: function (options) { // 2 - success
        //действие при успешной оплате
        // result('success')
        // return 'some text'
      },
      onFail: function (reason, options) { // fail
        //действие при неуспешной оплате
        // result('fail')
        routeTo()
        // return 'some text'
      },
      onComplete: function (paymentResult, options) { // 1 - Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
        //например вызов вашей аналитики Facebook Pixel
        // result('complete')
        // return 'some text'
      }
    }
  )

  function failed() {
    return new Promise((resolve => resolve()))
  }

  return 'res'
};
