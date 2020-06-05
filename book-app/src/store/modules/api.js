import axios from 'axios'

const state = {

}

const getters = {

}

const actions = {
    postApi({commit}, data) {
        this.dispatch('busyLoading', true)
        console.log(data)
        let api = new Promise ((res, rej)=>{
        axios({
            method: 'POST',
            url: `${process.env.VUE_APP_API_URL + data['url']}`,
            timeout: 30000,
            data
        })
        .then((response) => {
            console.log(response)
            res(response);
        })
        .catch((error) => {
            console.log(error)
            rej(error);
        })
        })
        return api.then((result)=>{
            this.dispatch('busyLoading', false)
            return result;
        }).catch((error) => {
            console.log(error)
        })
    },
    getApi({commit, state}, data) {
        this.dispatch('busyLoading', true)
        let api = new Promise ((res, rej)=>{
            axios({
                method: 'get',
                url: `${process.env.VUE_APP_API_URL + data['url']}`,
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then((response) => {
                console.log(response)
                res(response);
            })
            .catch((error) => {
                console.log(error)
                res(error);
            })
            })
            return api.then((result)=>{
                this.dispatch('busyLoading', false)
                return result;
            }).catch((error) => {
            console.log(error)
            })
      },
    updateApi({commit, state}, data) {
        this.dispatch('busyLoading', true)
        let api = new Promise ((res, rej)=>{
        axios({
            method: 'PATCH',
            url: `${process.env.VUE_APP_API_URL + data['url']}`,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/merge-patch+json',
            },
            data
        })
        .then((response) => {
            console.log(response)
            res(response);
        })
        .catch((error) => {
            console.log(error)
            rej(error);
        })
        })
        return api.then((result)=>{
            this.dispatch('busyLoading', false)
            return result;
        }).catch((error) => {
            console.log(error)
        })
    },
    delApi({commit, state}, data) {
        this.dispatch('busyLoading', true)
        let api = new Promise ((res, rej)=>{
            axios({
            method: 'delete',
            url: `${process.env.VUE_APP_API_URL + data['url']}`,
            headers: {
                'Authorization': localStorage.getItem('Authorization'),
                'Identity': localStorage.getItem('identity'),
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            })
            .then((response) => {
            
            })
            .catch((error) => {
            })
        })
    }
}

const mutations = {
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}