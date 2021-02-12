export default {
  install(app, options) {
    let currentLang = 'ru'

    const changeLang = name => currentLang = name

    app.config.globalProperties.$locale = key  => {
      return key.split('.').reduce((words, k) => {
        return words[k] || 'wrongValue'
      }, options[currentLang])
    }

    app.provide('changeLocale', changeLang)
  }
}
