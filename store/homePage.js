export const state = () => ({
    homePage: [],
    espn_news: [],
    hotSales: [],
    rcPlayers: [],
    priceUpHigestFive: [],
    priceUpLowestFive: [],
  })
  export const mutations = {
    SET_HOMEPAGE_DATA(state, data) {
        state.homePage = data
    },
    SET_NEWS_DATA(state, data) {
        state.news = data
    },
    SET_HOTSALES_DATA(state, data) {
        state.hotSales = data
    },
    SET_RCPLAYERS_DATA(state, data) {
        state.rcPlayers = data
    },
    SET_PRICEUPHIGESTFIVE_DATA(state, data) {
        state.priceUpHigestFive = data
    },
    SET_PRICEUPLOWESTFIVE_DATA(state, data) {
      state.priceUpLowestFive = data
  },
  }
  export const actions = {
    async GET_HOMEPAGE_DATA({commit}) {
        await this.$axios.$get(`${process.env.BASE_API_URL}/homePage`).then((res) => {
            // console.log(res)
            commit('SET_HOMEPAGE_DATA', res.data)
            commit('SET_NEWS_DATA', res.data.news)
            commit('SET_HOTSALES_DATA', res.data.hotSales)
            commit('SET_RCPLAYERS_DATA', res.data.rcPlayers)
            commit('SET_PRICEUPHIGESTFIVE_DATA', res.data.priceUpHigestFive)
            commit('SET_PRICEUPLOWESTFIVE_DATA', res.data.priceUpLowestFive)
        })
    }
  }
