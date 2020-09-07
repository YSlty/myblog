import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import MetaInfo from 'vue-meta'

Vue.use(MetaInfo)
Vue.use(Vuex)
// Vue.use()

export default new Vuex.Store({
  state: {
		data:[],
		num:'1',
		list:[]
  },
  mutations: {
		getArticle(state,res){
			state.data=res
			// window.console.log(res)
		},
		getMsg(state,res){
			state.list=res
			window.console.log(res)
		}
  },
  actions: {
		getArticle(context){
			Axios.get('http://backstage.yslty.com/api/article')
			.then(function (res) {
				window.console.log(res)
				context.commit('getArticle',res.data)
			})
			.catch(function () {
				context.commit('getArticle','数据库过期，无法访问数据')
			});
// 			Axios.get('http://backstage.yslty.com/api/showLeaveMsg')
// 			.then(function (res) {
// 				context.commit('getMsg',res.data)
// 			})
// 			.catch(function (error) {
// 				window.console.log(error);
// 			});
		}
		
  },
  modules: {
  }
})
