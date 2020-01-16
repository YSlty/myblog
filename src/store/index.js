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
			Axios.get('http://backstage.yslty.com/api/article')
			.then(function (res) {
				context.commit('getArticle',res.data)
			})
			.catch(function (error) {
				window.console.log(error);
			});
		}
		
  },
  modules: {
  }
})
