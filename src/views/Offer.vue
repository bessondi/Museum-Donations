<template>
  <div class="offer">
    <router-link to="/">
      <button class="offer__button-back">{{ $locale('form.backBtn') }}</button>
    </router-link>

    <h2 class="offer__heading">
      {{ this.$locale('offer.heading.title') }}
    </h2>


    <div class="offer__description">
      <p class="offer__description-header">
        {{ this.$locale('offer.heading.shirtDescription') }}
        <br/>
        {{ this.$locale('offer.heading.subTitle') }}
        <br/>
        {{ this.$locale('offer.heading.date') }}
        <br/>
        <br/>
        {{ this.$locale('offer.heading.description') }}
      </p>

      <ol class="offer__description-list">
        <li v-for="section of this.$locale('offer.list')"
          class="offer__description-item">
          {{ section.title }}

          <ol class="offer__description-item__list">
            <li v-for="listItem of section.items"
                class="offer__description-item__list-definition">
              <span>{{ listItem.txt }}</span>

              <ol v-if="listItem.list"
                class="offer__description-item__list-definition__items">
                  <li v-for="subList of listItem.list">
                    {{ subList.txt }}

                    <ol v-if="subList.list" class="offer__description-item__list-definition__items__subitems">
                      <li v-for="subSubList of subList.list">
                        {{ subSubList.txt }}
                      </li>
                    </ol>
                  </li>
              </ol>
            </li>
          </ol>
        </li>
      </ol>

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
