import {createStore} from 'vuex'

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

    isBtnActive: false,

    isGratitudeAvailable: false
  },
  mutations: {
    changeLoc(state, value) {
      state.locale = value
    },

    updateName(state, value) {
      state.nameValue = value
    },
    updateSurname(state, value) {
      state.surnameValue = value
    },
    updateEmail(state, value) {
      state.emailValue = value
    },

    nameValid(state, value) {
      state.isNameValid = value
    },
    surnameValid(state, value) {
      state.isSurnameValid = value
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
    updateCurrency(state, value) {
      state.currency = value
    },
    updateAmount(state, value) {
      state.amountValue = value

      state.currency === 'RUB' && state.amountValue >= 200
      || state.currency !== 'RUB' && state.amountValue >= 5
        ? state.isAmountValid = true
        : state.isAmountValid = false
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
    },

    showGratitude(state) {
      state.isGratitudeAvailable = true
    }
  }
})


export const ru = {
  form: {
    currentLang: 'ru',
    changeLangBtn: 'en',
    reportsBtn: 'отчеты',
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
    reportTitle: 'Отчет по работе музея',
    reportDescription: 'Здесь вы можете ознакомиться с отчетами по пожертвованиям.',
  },

  offer: {
    heading: {
      title: 'Договор о добровольном пожертвовании на общественно полезные цели\n (публичная оферта)',
      shirtDescription: 'Город Москва, Российская Федерация',
      subTitle: 'Размещено в сети Интернет на сайте fabergemuseum.ru',
      date: '«6» апреля 2021 г.',
      description: 'Некоммерческая организация «Культурно-исторический Фонд «Связь времен» (далее именуемая – «Благополучатель»), настоящим предлагает любым физическим лицам, именуемым в дальнейшем «Благотворитель», заключить Договор о добровольном пожертвовании на общественно полезные цели (далее – Договор) на следующих условиях, изложенных ниже:'
    },

    list: [
      {
        title: 'ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ',
        items: [
          {
            txt: 'В настоящей оферте нижеприведенные термины имеют следующие значения:',
            list: [
              {txt: 'Благополучатель – Некоммерческая организация «Культурно-исторический Фонд «Связь времен» (ИНН 77055906723, e-mail: info@fsv.ru).'},
              {txt: 'Благотворитель – любое физическое лицо, акцептировавшее публичную оферту на условиях, изложенных в настоящей оферте.'},
              {txt: 'Пожертвование – добровольная, бескорыстная (безвозмездная) передача денежных средств Благотворителем Благополучателю в общественно полезных целях, в соответствии со статьей 582 Гражданского кодекса Российской Федерации.'},
              {
                txt: 'Общественно полезные цели – цели деятельности в сфере культуры, искусства, просвещения, духовного развития личности, определенные в уставе Благополучателя, а именно для:',
                list: [
                  {txt: 'реализации программ по сохранению, восстановлению и пополнению отечественного культурного наследия;'},
                  {txt: 'создания условий для широкого ознакомления с историческими и культурными памятниками Отечества, а также культурными и историческими ценностями, принадлежащими иностранным государствам, организациям и гражданам;'},
                  {txt: 'содействия восстановлению российских духовных и культурных традиций;'},
                  {txt: 'иных общественно полезных целей.'},
                ],
              },
              {txt: 'Договор о добровольном пожертвовании на общественно полезные цели (настоящий Договор) – является публичной офертой в соответствии с пунктом 2 статьи 437 Гражданского Кодекса РФ.'},
              {txt: 'Оферта – адресованное одному или нескольким конкретным лицам предложение, которое достаточно определенно и выражает намерение лица, сделавшего предложение, считать себя заключившим договор с адресатом, которым будет принято предложение.'},
              {txt: 'Акцепт оферты – осуществление Благотворителем перечисления денежных средств на расчётный счёт Благополучателя в качестве добровольного пожертвования в общественно полезных целях. Акцепт настоящей оферты Благотворителем означает, что Благотворитель ознакомился и согласен со всеми условиями Договора о добровольном пожертвовании на общественно полезные цели, являющемся публичной офертой Благополучателя. Принимая условия оферты, Благотворитель подтверждает добровольный и безвозмездный характер пожертвования.'},
              {txt: 'Сайт Благополучателя – несколько страниц, содержащих данные о деятельности Благополучателя, размещенные в сети Интернет по уникальному адресу fabergemuseum.ru, права на использование которого принадлежат Благополучателю.'},
            ]
          },
        ],
      },
      {
        title: 'ПРЕДМЕТ ДОГОВОРА',
        items: [
          {txt: 'По настоящему договору Благотворитель в качестве пожертвования, совершаемого в общественно полезных целях, реализуемых Благополучателем и определенных в уставе Благополучателя, перечисляет собственные денежные средства на расчётный счёт Благополучателя, а Благополучатель принимает пожертвование и использует их в общественно полезных целях, определенных в его Уставе.'},
          {txt: 'Благотворитель самостоятельно определяет размер суммы добровольного пожертвования и перечисляет пожертвование Благополучателю путем заполнения формы для внесения пожертвования на сайте Благополучателя fabergemuseum.ru Перечисление пожертвования осуществляется путем безналичного списания средств с банковской карты Благотворителя через платежную платформу банка-партнера.'},
          {txt: 'Дата пожертвования определяется датой поступления денежных средств, пожертвованных Благотворителем порядке и на условиях, определенных настоящим Договором, на счет Благополучателя.'},
        ]
      },
      {
        title: 'ПРАВА И ОБЯЗАННОСТИ СТОРОН',
        items: [
          {txt: 'Благополучатель обязуется использовать полученные от Благотворителя по настоящему договору денежные средства строго в рамках уставной деятельности.'},
          {txt: 'Благотворитель ежегодно размещает отчетность об источниках поступления и целях расходования денежных средств Благополучателя в установленном законом порядке в целях информирования Благотворителей о целях использования пожертвований.'},
          {txt: 'Благотворитель вправе получать полную и достоверную информацию об использовании пожертвования из отчетности, размещаемой Благополучателем на сайте fabergemuseum.ru в сети Интернет.'},
          {txt: 'Благополучатель не несет перед Благотворителем иных обязательств, кроме обязательств, указанных в настоящем Договоре.'},
        ]
      },
      {
        title: 'СРОКИ ДЕЙСТВИЯ',
        items: [
          {txt: 'Оферта - предложение заключать договор пожертвования на общественно полезные цели на указанных в настоящем Договоре условиях - вступает в силу со дня, следующего за днём её публикации на сайте Благополучателя fabergemuseum.ru'},
          {txt: 'Текст настоящей оферты может быть изменен Благополучателем без предварительного уведомления и действуют со дня, следующего за днём его размещения на сайте Благополучателя fabergemuseum.ru'},
          {txt: ' Оферта является бессрочной и действует до дня, следующего за днем размещения на Сайте извещения об отмене Оферты. Благополучатель вправе отменить Оферту в любое время без объяснения причин.'},
        ]
      },
      {
        title: 'ПРОЧИЕ УСЛОВИЯ',
        items: [
          {txt: 'Отношения сторон регулируются нормами законодательства Российской Федерации.'},
          {txt: 'В случае невозможности разрешения спора путем переговоров, споры и разногласия могут решаться в соответствии с действующим законодательством Российской Федерации в судебных инстанциях по месту нахождения Благополучателя.'},
        ]
      }
    ]
  }
}

export const en = {
  form: {
    currentLang: 'en',
    changeLangBtn: 'ru',
    reportsBtn: 'reports',
    heading: 'Donations for Fabergé Museum',
    description: 'Donate to the activities of the Fabergé Museum!\n We invite you to support the Fabergé Museum in St. Petersburg by making a donation to the account of the Cultural and Historical Foundation «Link of Times». Your contribution will help our Museum to delight Russians and guests from around the world with its unique collection and large-scale exhibition, publishing and educational projects. We appreciate all your help, as well as the understanding that you care about the fate of the Fabergé Museum!',
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
    reportTitle: 'Report on the museum\'s work',
    reportDescription: 'Donation reports are available here.',
  },

  offer: {
    heading: {
      title: 'Agreement on voluntary donation for public useful purposes\n (public offer)',
      shirtDescription: 'Moscow, Russian Federation',
      subTitle: 'Posted on the Internet at fabergemuseum.ru',
      date: 'April 6, 2021',
      description: 'The non-profit organization "Cultural and Historical Foundation "Link of Times" (hereinafter referred to as the "Beneficiary") hereby invites any individuals, hereinafter referred to as the "Philanthropist", to conclude an Agreement on voluntary donation for socially useful purposes (hereinafter referred to as the "Agreement") on the following conditions set out  below:'
    },

    list: [
      {
        title: 'TERMS AND DEFINITIONS',
        items: [
          {
            txt: 'In this offer, the following terms have the following meanings:',
            list: [
              {txt: 'Beneficiary - Non-profit organization "Cultural and Historical Foundation "Link of Times" (TIN 77055906723, e-mail: info@fsv.ru).'},
              {txt: 'Benefactor - any individual who has accepted a public offer on the terms set forth in this offer.'},
              {txt: 'Donation - a voluntary, disinterested (gratuitous) transfer of funds by the Benefactor to the Beneficiary for socially useful purposes, in accordance with Article 582 Of the Civil Code of the Russian Federation.'},
              {
                txt: 'Socially useful purposes - the goals of activities in the field of culture, art, education, spiritual development of the individual, defined in the Charter of the Beneficiary, namely for:',
                list: [
                  {txt: 'Implementation of programs for the preservation, restoration and replenishment of the national cultural heritage;'},
                  {txt: 'Creating conditions for wide acquaintance with the historical and cultural monuments of the Motherland, as well as cultural and historical values belonging to foreign states, organizations and citizens;'},
                  {txt: 'Assistance in the restoration of Russian spiritual and cultural traditions;'},
                  {txt: 'Other socially useful purposes.'}
                ]
              },
              {txt: 'The agreement on voluntary donation for socially useful purposes (this Agreement) is a public offer in accordance with paragraph 2 of Article 437 of the Civil Code of the Russian Federation.'},
              {txt: 'Offer - an offer addressed to one or several specific persons, which is quite definite and expresses the intention of the person who made the offer to consider himself to have concluded an agreement with the addressee who will accept the offer.'},
              {txt: 'Offer acceptance - the Benefactor\'s transfer of funds to the Beneficiary\'s current account as a voluntary donation for socially useful purposes. Acceptance of this offer by the Benefactor means that the Benefactor has read and agrees with all the terms of the Agreement on voluntary donation for socially useful purposes, which is a public offer of the Beneficiary. By accepting the terms of the offer, the Benefactor confirms the voluntary and gratuitous nature of the donation.'},
              {txt: 'The Beneficiary\'s website - several pages containing data on the Beneficiary\'s activities, posted on the Internet at the unique address fabergemuseum.ru , the rights to use of which belong to the Beneficiary.'},
            ]
          },
        ],
      },
      {
        title: 'SUBJECT OF THE CONTRACT',
        items: [
          {txt: 'According to this agreement, the Benefactor, transfers his own funds to the current account of the Beneficiary, as a donation made for socially useful purposes, realized by the Beneficiary and defined in the Charter of the Beneficiary, and the Beneficiary accepts the donation and uses them for socially useful purposes specified in its Charter.'},
          {txt: 'The Philanthropist independently determines the amount of the voluntary donation and transfers the donation to the Beneficiary by filling out the donation form on the Beneficiary\'s website fabergemuseum.ru  The donation is transferred by non-cash debiting of funds from the Philanthropist\'s bank card through the payment platform of the partner bank.'},
          {txt: 'The date of donation is determined by the date of receipt of funds donated by the Benefactor in the manner and under the conditions specified in this Agreement, to the Beneficiary\'s account.'},
        ],
      },
      {
        title: 'RIGHTS AND OBLIGATIONS OF THE PARTIES',
        items: [
          {txt: 'The Beneficiary undertakes to use the funds received from the Benefactor under this Agreement strictly within the framework of the statutory activities.'},
          {txt: 'The Benefactor annually posts reports on the sources of income and the purposes of spending the Beneficiary\'s funds in the manner prescribed by law in order to inform the Benefactors about the purposes of using donations.'},
          {txt: 'The Philanthropist has the right to receive complete and reliable information about the use of the donation from the reports posted by the Beneficiary on the Internet website fabergemuseum.ru'},
          {txt: 'The Beneficiary does not bear any other obligations to the Benefactor, except for the obligations specified in this Agreement.'},
        ],
      },
      {
        title: 'TERMS OF ACTION',
        items: [
          {txt: 'Offer - a proposal to conclude a donation agreement for socially useful purposes on the conditions specified in this Agreement - shall enter into force on the day following the day of its publication on the Beneficiary\'s website'},
          {txt: 'The text of this offer may be changed by the Beneficiary without prior notice and is valid from the day following the day of its posting on the Beneficiary\'s website fabergemuseum.ru'},
          {txt: 'The Offer is unlimited and is valid until the day following the day the notice of the Offer cancellation is posted on the Site. The Beneficiary has the right to cancel the Offer at any time without giving reasons.'},
        ],
      },
      {
        title: 'OTHER CONDITIONS',
        items: [
          {txt: 'The Relations of the parties are governed by the norms of the legislation of the Russian Federation.'},
          {txt: 'If it is impossible to resolve the dispute through negotiations, disputes and disagreements can be resolved in accordance with the current legislation of the Russian Federation in the courts at the location of the Beneficiary.'},
        ]
      }
    ]
  }
}
