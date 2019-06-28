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
				'img':'https://render.fineartamerica.com/images/rendered/default/print/4.500/8.000/break/images/artworkimages/medium/2/aquaman-geek-n-rock.jpg',
				'title':'Nurs',
				'body':'Nurs is the best',
				'done':false
			},
			{
				'img':'https://talenthouse-res.cloudinary.com/image/upload/c_limit,f_auto,fl_progressive,h_1280,w_1280/v1543122416/user-539116/submissions/vulcpz640asmsvljit6h.jpg',
				'title':'Madi',
				'body':'Madi is the best',
				'done':false
			},
			{
				'img':'https://i.etsystatic.com/8610102/r/il/a2d4c5/1777058613/il_794xN.1777058613_d02u.jpg',
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