import Vue from 'vue'
import mutations from './mutations.js'
import * as types from './mutations_type.js'

export const actionGetBooks = (context) => { //取得書本
	fetch("https://demo.api-platform.com/books")
	.then(function(response){
		if(response.status >= 200 && response.status< 300){
			return response.json()
		} else{
			var error = new Error(response.statusText)
			error.response = response
			throw error
		}
	})
	.then(function(data){        //GET的資料全部書
		context.commit(types.GETBOOKS, data) //直接初始化書本展示組件
	})
	.catch(function(error){        //錯誤catch
		console.log('rejected:...')
		console.log('...catchError---'+ error)
	})
}

export const actionPutBooks = (context,inputData,id) =>{ //新增書本
	fetch(`https://demo.api-platform.com/books/${id}`,{
		method:'PUT',
		headers:{
			'Accept': 'application/Id+json',
			'Content-Type': 'application/Id+json',
		},
		body: JSON.stringify(inputData),
	})
	.then(function(response){
		if (response.status >= 200 && response.status <300){
			return response.json();
		} else{
			var error = new Error(response.statusText)
			console.log(response)
			error.response = response
			throw error
		}
	})
	.then(function(state,data){ //成功
		return
	})
	.catch(function(error){ //錯誤catch
		console.log('...catchError---'+ error)
	})
}
//仍需改善這裡的通訊
