import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  videoList: [{id: 1, isVanted: true}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]
}

export const mutations = {
  SET_VIDEOLIST (state, videoList) {
    state.videoList = videoList
  },
  UPDATE_VIDEOLIST (state, {index, indexItem}) {
    state.videoList.splice(index, 1, indexItem)
  }
}

export const actions = {
  getVideoList ({commit}, videoList) {
    commit('SET_VIDEOLIST', videoList)
  },
  updateVideoList ({commit}, obj) {
    commit('UPDATE_VIDEOLIST', obj)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
