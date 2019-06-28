import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

const store = new Vuex.Store({

	state:{
		results: [
			{
				'img':'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/batman-art-rohan-sendi.jpg',
				'title':'Amantay',
				'body':'Amantay is the best',
				'done':false
			},
			{
				'img':'https://i.imgur.com/vQmsIl7.jpg',
				'title':'Nurs',
				'body':'Nurs is the best',
				'done':false
			}
		]
	},
	getters :{
		results(state){
			return state.results
		}
	},
	mutations:{
		set(state,{result}){
			state.results.push(result)
		},
		upd(state,{total}){
			state.results.splice(total.id,1)
			state.results.push(total.result)
		},
		del(state,{id}){
			state.results.splice(id,1)

		},

	},
	actions:{
		search({commit},query){
			var result  = query;
			commit('set',{result:result})
			
		},
		update({commit},query){
			var total  = query;
			commit('upd',{total:total})
			
		},
		delete({commit},query){
			var id  = query;
			commit('del',{id:id})
			
		},

	}
})

export default store