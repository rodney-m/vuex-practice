import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
    state(){
        return {
            counter : 0
        }
    },
    mutations: {
        increment(state){
            state.counter+=2                
           
        },
        increase(state, payload){
            state.counter = state.counter + payload.value
        },
    },
    actions: {
        increment(context){
            setTimeout(() => {
                context.commit('increment')
            }, 2000);
        },
        increase(context, payload){
            console.log(context)
            context.commit('increase', payload)
        },
    },
    getters: {
        finalCounter(state){
            return state.counter 
        },
        nomalizedCounter(_, getters){
            const finalCounter=  getters.finalCounter
            if(finalCounter < 0) {
                return 0
            } else if (finalCounter > 100) {
                return 100
            } else {
                return finalCounter
            }
        },
    }
}

const store = createStore({
    modules : {
        numbers : counterModule
    },
    state(){
        return {
            isLoggedIn : false
        }
    },
    mutations: {
        
        setAuth(state, payload){
            state.isLoggedIn = payload.isAuth
        }
    },
    getters: {
        
        userIsAuthenticated(state) {
            return state.isLoggedIn
        }
    }, 
    actions : {
        
        login(context) {
            context.commit('setAuth', {isAuth : true})
        },
        logout(context) {
            context.commit('setAuth', {isAuth : false})
        }
    }
})

const app = createApp(App);
app.use(store)

app.mount('#app');
