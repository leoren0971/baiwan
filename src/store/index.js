import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  deviceInfo: {
    windowHeight: 665
  },
  videoList: [{id: 1, isVanted: true}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
  searchVideoList: [{id: 1, isVanted: true}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
  boxList: [{id: 1, isVanted: true}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}],
  searchBoxList: [{id: 1, isVanted: true}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}]
}

export const mutations = {
  SET_DEVICEINFO (state, info) {
    state.deviceInfo = info
  },
  SET_VIDEOLIST (state, videoList) {
    state.videoList = videoList
  },
  UPDATE_VIDEOLIST (state, {index, indexItem}) {
    state.videoList.splice(index, 1, indexItem)
  },
  SET_SEARCHVIDEOLIST (state, searchVideoList) {
    state.searchVideoList = searchVideoList
  },
  UPDATE_SEARCHVIDEOLIST (state, {index, indexItem}) {
    state.searchVideoList.splice(index, 1, indexItem)
  },
  SET_BOXLIST (state, boxList) {
    state.boxList = boxList
  },
  UPDATE_BOXLIST (state, {index, indexItem}) {
    state.boxList.splice(index, 1, indexItem)
  },
  SET_SEARCHBOXLIST (state, searchBoxList) {
    state.searchBoxList = searchBoxList
  },
  UPDATE_SEARCHBOXLIST (state, {index, indexItem}) {
    state.searchBoxList.splice(index, 1, indexItem)
  }
}

export const actions = {
  setDeviceInfo ({commit}, info) {
    commit('SET_DEVICEINFO', info)
  },
  setVideoList ({commit}, videoList) {
    commit('SET_VIDEOLIST', videoList)
  },
  updateVideoList ({commit}, obj) {
    commit('UPDATE_VIDEOLIST', obj)
  },
  setSearchVideoList ({commit}, videoList) {
    commit('SET_SEARCHVIDEOLIST', videoList)
  },
  updateSearchVideoList ({commit}, obj) {
    commit('UPDATE_SEARCHVIDEOLIST', obj)
  },
  setBoxList ({commit}, boxList) {
    commit('SET_BOXLIST', boxList)
  },
  updateBoxList ({commit}, obj) {
    commit('UPDATE_BOXLIST', obj)
  },
  setSearchBoxList ({commit}, boxList) {
    commit('SET_SEARCHBOXLIST', boxList)
  },
  updateSearchBoxList ({commit}, obj) {
    commit('UPDATE_SEARCHBOXLIST', obj)
  }
}

export const getters = {
  doneWindowHeight (state) {
    return state.deviceInfo.windowHeight
  },
  doneMyWindowHeight (state) {
    console.log(state.deviceInfo)
    return state.deviceInfo.screenHeight - state.deviceInfo.statusBarHeight
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
