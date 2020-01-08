import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
// Vue.use()

export default new Vuex.Store({
  state: {
		data:[],
		num:'1'
  },
  mutations: {
		getArticle(state,res){
			state.data=res
			window.console.log(res)
		}
  },
  actions: {
		getArticle(context){
			Axios.get('json/blog.json')
			.then(function (res) {
				context.commit('getArticle',res)
			})
			.catch(function (error) {
				window.console.log(error);
			});
		}
		
  },
  modules: {
  }
})
