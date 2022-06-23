import axios from "@/axios"
import array from './headers.js'
export default {
  namespaced: true,
  state: {
    table: 'is table',
    records : [],
    listLoading : false,
    allHeadersArray: array,
    headers: []


  },
  getters:{
    records(state) {
      return  state.records
    },
    headers (state){
      return state.headers
    },
    listLoading(state){
      return state.listLoading
    }
  },
  mutations: {
    setRecords(state, payload){
      state.records = payload
    },
    setTable(state, payload){
      state.table = payload
      state.headers = state.allHeadersArray[payload]
    },
    setListLoading(state, payload){
      state.listLoading = payload
    },
    resetTable(state){
      state.records  = []
    }
  },

  actions:  {
    
    async saveRecord({dispatch, state} , {form}){
      try {
        let res = await axios.post(`/${state.table}`, form)
        console.log(res);
        dispatch('fetchList')
       } catch(err) {
        console.log(err);
        
      
      }
    },
    async updateRecord({dispatch, state} , {form}){
      try {
        let res = await axios.put(`/${state.table}`, form)
        console.log(res);
        dispatch('fetchList')
       } catch(err) {
        console.log(err);
        
      
      }
    },
    async deleteRecord({dispatch, state} , {id}){
      try {
        let res = await axios.delete(`/${state.table}/${id}`)
        console.log(res);
        dispatch('fetchList')
       } catch(err) {
        console.log(err);
        
      
      }
    },
   async fetchList({commit ,state}){
   commit('resetTable')
    try {
        
        commit('setListLoading', true)
        let res = await axios.get(`/${state.table}`)
        commit('setListLoading', false)
        commit('setRecords',res['data'])
      } catch(err) {
        console.log(err);
        commit('setListLoading', false)
      
      }
      
    }
  }
}
