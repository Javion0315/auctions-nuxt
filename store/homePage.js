export const state = () => ({
    carouseList: [],
    currentList: [],
    upcoming: [],
    items: [],
  })
  export const mutations = {
    SET_BANNER_DATA(state, data) {
        state.carouseList = data
    },
    SET_CURRENT_DATA(state, data) {
        state.currentList = data
    },
    SET_UPCOMING_DATA(state, data) {
        state.upcoming = data
    },
    SET_ITEMS_DATA(state, data) {
        state.items = data
    },
  }
  export const actions = {
    async GET_HOMEPAGE_DATA({commit}) {
        const data = {
            "lang": "zh-CN",
            "platform": "h5"
        }
        await this.$axios.$post(`${process.env.BASE_API_URL}/home.do`, data).then((res) => {
            commit('SET_BANNER_DATA', res.carouseList)
            commit('SET_CURRENT_DATA', res.currentSpecialList)
            commit('SET_UPCOMING_DATA', res.upcomingSpecialList)
            commit('SET_ITEMS_DATA', res.goodsList)
        })
    }
  }
