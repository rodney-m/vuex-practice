import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
    state(){
        return {
            counter : 0
        }
    },
    mutations: {
        increment(state){
            setTimeout(() => {
                state.counter+=2                
            }, 2000);
        },
        increase(state, payload){
            state.counter += payload.value
        }
    },
    getters: {
        finalCounter(state){
            return state.counter * 2
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
        }
    }, 
    actions : {

    }
})

const app = createApp(App);
app.use(store)

app.mount('#app');
