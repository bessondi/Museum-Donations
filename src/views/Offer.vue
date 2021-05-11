<template>
  <div class="offer">
    <router-link to="/">
      <button class="offer__button-back">{{ $locale('form.backBtn') }}</button>
    </router-link>

    <div v-if="isRusOfferShowed">
      <h2 class="offer__heading">
        Договор о добровольном пожертвовании на общественно полезные цели
        <br/>
        (публичная оферта)
      </h2>
      <div class="offer__description">
        <p class="offer__description-header">
          Город Москва, Российская Федерация
          <br/>
          Размещено в сети Интернет на сайте <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a> «6» апреля 2021
          г.
          <br/><br/>
          Некоммерческая организация «Культурно-исторический Фонд «Связь времен» (далее именуемая – «Благополучатель»),
          настоящим предлагает любым физическим лицам, именуемым в дальнейшем «Благотворитель», заключить Договор о
          добровольном пожертвовании на общественно полезные цели (далее – Договор) на следующих условиях, изложенных
          ниже:
        </p>
        <ol class="offer__description-list">
          <li class="offer__description-item">
            ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                <span> В настоящей оферте нижеприведенные термины имеют следующие значения:</span>
                <ol class="offer__description-item__list-definition__items">
                  <li>
                    Благополучатель – Некоммерческая организация «Культурно-исторический Фонд «Связь времен»
                    (ИНН 77055906723, e-mail: <a href="mailto:info@fsv.ru">info@fsv.ru</a>).
                  </li>
                  <li>
                    Благотворитель – любое физическое лицо, акцептировавшее публичную оферту на условиях, изложенных в
                    настоящей оферте.
                  </li>
                  <li>
                    Пожертвование – добровольная, бескорыстная (безвозмездная) передача денежных средств Благотворителем
                    Благополучателю в общественно полезных целях, в соответствии со статьей 582 Гражданского кодекса
                    Российской Федерации.
                  </li>
                  <li>
                  <span>Общественно полезные цели – цели деятельности в сфере культуры, искусства, просвещения,
                    духовного развития личности, определенные в уставе Благополучателя, а именно для:</span>
                    <ol class="offer__description-item__list-definition__items__subitems">
                      <li>
                        реализации программ по сохранению, восстановлению и пополнению отечественного культурного
                        наследия;
                      </li>
                      <li>
                        создания условий для широкого ознакомления с историческими и культурными памятниками Отечества,
                        а также культурными и историческими ценностями, принадлежащими иностранным государствам,
                        организациям и гражданам;
                      </li>
                      <li>содействия восстановлению российских духовных и культурных традиций;</li>
                      <li>иных общественно полезных целей.</li>
                    </ol>
                  </li>
                  <li>
                    Договор о добровольном пожертвовании на общественно полезные цели (настоящий Договор) – является
                    публичной офертой в соответствии с пунктом 2 статьи 437 Гражданского Кодекса РФ.
                  </li>
                  <li>
                    Оферта – адресованное одному или нескольким конкретным лицам предложение, которое достаточно
                    определенно и выражает намерение лица, сделавшего предложение, считать себя заключившим договор с
                    адресатом, которым будет принято предложение.
                  </li>
                  <li>
                    Акцепт оферты – осуществление Благотворителем перечисления денежных средств на расчётный счёт
                    Благополучателя в качестве добровольного пожертвования в общественно полезных целях. Акцепт
                    настоящей оферты Благотворителем означает, что Благотворитель ознакомился и согласен со всеми
                    условиями Договора о добровольном пожертвовании на общественно полезные цели, являющемся публичной
                    офертой Благополучателя. Принимая условия оферты, Благотворитель подтверждает добровольный и
                    безвозмездный характер пожертвования.
                  </li>
                  <li>
                    Сайт Благополучателя – несколько страниц, содержащих данные о деятельности Благополучателя,
                    размещенные в сети Интернет по уникальному адресу
                    <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a>, права на использование которого
                    принадлежат Благополучателю.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            ПРЕДМЕТ ДОГОВОРА
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                По настоящему договору Благотворитель в качестве пожертвования, совершаемого в общественно полезных
                целях,
                реализуемых Благополучателем и определенных в уставе Благополучателя, перечисляет собственные денежные
                средства на расчётный счёт Благополучателя, а Благополучатель принимает пожертвование и использует их в
                общественно полезных целях, определенных в его Уставе.
              </li>
              <li class="offer__description-item__list-definition">
                Благотворитель самостоятельно определяет размер суммы добровольного пожертвования и перечисляет
                пожертвование Благополучателю путем заполнения формы для внесения пожертвования на сайте Благополучателя
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a> Перечисление пожертвования осуществляется
                путем безналичного списания средств с банковской карты Благотворителя через платежную платформу
                банка-партнера.
              </li>
              <li class="offer__description-item__list-definition">
                Дата пожертвования определяется датой поступления денежных средств, пожертвованных Благотворителем
                порядке
                и на условиях, определенных настоящим Договором, на счет Благополучателя.
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            ПРАВА И ОБЯЗАННОСТИ СТОРОН
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                Благополучатель обязуется использовать полученные от Благотворителя по настоящему договору денежные
                средства строго в рамках уставной деятельности.
              </li>
              <li class="offer__description-item__list-definition">
                Благотворитель ежегодно размещает отчетность об источниках поступления и целях расходования денежных
                средств Благополучателя в установленном законом порядке в целях информирования Благотворителей о целях
                использования пожертвований.
              </li>
              <li class="offer__description-item__list-definition">
                Благотворитель вправе получать полную и достоверную информацию об использовании пожертвования из
                отчетности, размещаемой Благополучателем на сайте
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a> в сети Интернет.
              </li>
              <li class="offer__description-item__list-definition">
                Благополучатель не несет перед Благотворителем иных обязательств, кроме обязательств, указанных в
                настоящем Договоре.
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            СРОКИ ДЕЙСТВИЯ
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                Оферта - предложение заключать договор пожертвования на общественно полезные цели на указанных в
                настоящем
                Договоре условиях - вступает в силу со дня, следующего за днём её публикации на сайте Благополучателя
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a>.
              </li>
              <li class="offer__description-item__list-definition">
                Текст настоящей оферты может быть изменен Благополучателем без предварительного уведомления и действуют
                со
                дня, следующего за днём его размещения на сайте Благополучателя
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a>.
              </li>
              <li class="offer__description-item__list-definition">
                Оферта является бессрочной и действует до дня, следующего за днем размещения на Сайте извещения об
                отмене
                Оферты. Благополучатель вправе отменить Оферту в любое время без объяснения причин.
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            ПРОЧИЕ УСЛОВИЯ
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                Отношения сторон регулируются нормами законодательства Российской Федерации.
              </li>
              <li class="offer__description-item__list-definition">
                В случае невозможности разрешения спора путем переговоров, споры и разногласия могут решаться в
                соответствии с действующим законодательством Российской Федерации в судебных инстанциях по месту
                нахождения
                Благополучателя.
              </li>
            </ol>
          </li>
        </ol>

      </div>
    </div>

    <div v-else>
      <h2 class="offer__heading">
        AGREEMENT ON VOLUNTARY DONATION FOR PUBLIC USEFUL PURPOSES
        <br/>
        (PUBLIC OFFER)
      </h2>
      <div class="offer__description">
        <p class="offer__description-header">
          Moscow, Russian Federation
          <br/>
          Posted on the Internet at <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a> April 6, 2021
          <br/><br/>
          The non-profit organization "Cultural and Historical Foundation "Link of Times" (hereinafter referred to as
          the
          "Beneficiary") hereby invites any individuals, hereinafter referred to as the "Philanthropist", to conclude an
          Agreement on voluntary donation for socially useful purposes (hereinafter referred to as the "Agreement") on
          the following conditions set out below:
        </p>
        <ol class="offer__description-list">
          <li class="offer__description-item">
            TERMS AND DEFINITIONS
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                <span> In this offer, the following terms have the following meanings:</span>
                <ol class="offer__description-item__list-definition__items">
                  <li>
                    Beneficiary - Non-profit organization "Cultural and Historical Foundation "Link of Times"
                    (TIN 77055906723, e-mail: <a href="mailto:info@fsv.ru">info@fsv.ru</a>).
                  </li>
                  <li>
                    Benefactor - any individual who has accepted a public offer on the terms set forth in this offer.
                  </li>
                  <li>
                    Donation - a voluntary, disinterested (gratuitous) transfer of funds by the Benefactor to the
                    Beneficiary for socially useful purposes, in accordance with Article 582 Of the Civil Code of the
                    Russian Federation.
                  </li>
                  <li>
                    <span>
                      Socially useful purposes - the goals of activities in the field of culture, art, education,
                      spiritual development of the individual, defined in the Charter of the Beneficiary, namely for:
                    </span>
                    <ol class="offer__description-item__list-definition__items__subitems">
                      <li>
                        implementation of programs for the preservation, restoration and replenishment of the national
                        cultural heritage;
                      </li>
                      <li>
                        creating conditions for wide acquaintance with the historical and cultural monuments of the
                        Motherland, as well as cultural and historical values belonging to foreign states, organizations
                        and citizens;
                      </li>
                      <li>assistance in the restoration of Russian spiritual and cultural traditions;</li>
                      <li>other socially useful purposes.</li>
                    </ol>
                  </li>
                  <li>
                    The agreement on voluntary donation for socially useful purposes (this Agreement) is a public offer
                    in accordance with paragraph 2 of Article 437 of the Civil Code of the Russian Federation.
                  </li>
                  <li>
                    Offer - an offer addressed to one or several specific persons, which is quite definite and expresses
                    the intention of the person who made the offer to consider himself to have concluded an agreement
                    with the addressee who will accept the offer.
                  </li>
                  <li>
                    Offer acceptance - the Benefactor's transfer of funds to the Beneficiary's current account as a
                    voluntary donation for socially useful purposes. Acceptance of this offer by the Benefactor means
                    that the Benefactor has read and agrees with all the terms of the Agreement on voluntary donation
                    for socially useful purposes, which is a public offer of the Beneficiary. By accepting the terms of
                    the offer, the Benefactor confirms the voluntary and gratuitous nature of the donation.
                  </li>
                  <li>
                    The Beneficiary's website - several pages containing data on the Beneficiary's activities, posted on
                    the Internet at the unique address
                    <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a>, the rights to use of which belong to
                    the Beneficiary.
                  </li>
                </ol>
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            SUBJECT OF THE CONTRACT
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                According to this agreement, the Benefactor, transfers his own funds to the current account of the
                Beneficiary, as a donation made for socially useful purposes, realized by the Beneficiary and defined in
                the Charter of the Beneficiary, and the Beneficiary accepts the donation and uses them for socially
                useful purposes specified in its Charter.
              </li>
              <li class="offer__description-item__list-definition">
                The Philanthropist independently determines the amount of the voluntary donation and transfers the
                donation to the Beneficiary by filling out the donation form on the Beneficiary's website
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a> The donation is transferred by non-cash
                debiting of funds from the Philanthropist's bank card through the payment platform of the partner bank.
              </li>
              <li class="offer__description-item__list-definition">
                The date of donation is determined by the date of receipt of funds donated by the Benefactor in the
                manner and under the conditions specified in this Agreement, to the Beneficiary's account.
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            RIGHTS AND OBLIGATIONS OF THE PARTIES
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                The Beneficiary undertakes to use the funds received from the Benefactor under this Agreement strictly
                within the framework of the statutory activities.
              </li>
              <li class="offer__description-item__list-definition">
                The Benefactor annually posts reports on the sources of income and the purposes of spending the
                Beneficiary's funds in the manner prescribed by law in order to inform the Benefactors about the
                purposes of using donations.
              </li>
              <li class="offer__description-item__list-definition">
                The Philanthropist has the right to receive complete and reliable information about the use of the
                donation from the reports posted by the Beneficiary on the Internet website
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a> в сети Интернет.
              </li>
              <li class="offer__description-item__list-definition">
                The Beneficiary does not bear any other obligations to the Benefactor, except for the obligations
                specified in this Agreement.
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            TERMS OF ACTION
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                Offer - a proposal to conclude a donation agreement for socially useful purposes on the conditions
                specified in this Agreement - shall enter into force on the day following the day of its publication on
                the Beneficiary's website
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a>.
              </li>
              <li class="offer__description-item__list-definition">
                The text of this offer may be changed by the Beneficiary without prior notice and is valid from the day
                following the day of its posting on the Beneficiary's website
                <a href="https://www.fabergemuseum.ru">fabergemuseum.ru</a>.
              </li>
              <li class="offer__description-item__list-definition">
                The Offer is unlimited and is valid until the day following the day the notice of the Offer cancellation
                is posted on the Site. The Beneficiary has the right to cancel the Offer at any time without giving
                reasons.
              </li>
            </ol>
          </li>
          <li class="offer__description-item">
            OTHER CONDITIONS
            <ol class="offer__description-item__list">
              <li class="offer__description-item__list-definition">
                The Relations of the parties are governed by the norms of the legislation of the Russian Federation.
              </li>
              <li class="offer__description-item__list-definition">
                If it is impossible to resolve the dispute through negotiations, disputes and disagreements can be
                resolved in accordance with the current legislation of the Russian Federation in the courts at the
                location of the Beneficiary.
              </li>
            </ol>
          </li>
        </ol>

      </div>
    </div>

  </div>
</template>


<script>
export default {
  data() {
    return {
      isRusOfferShowed: this.$locale('form.currentLang') === 'ru'
    }
  }
}
</script>
