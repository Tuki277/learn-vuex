import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [
            { id: 1, title: "Viec 1", completed: true },
            { id: 2, title: "Viec 2", completed: true },
            { id: 3, title: "Viec 3", completed: false }
        ],
        auth: {
            isAuthenticated: true
        }
    },
    //ham tinh toan
    getters: {
        doneTodos: state => state.todos.filter(todo => todo.completed),
        progress: (state, getter) => {
            const doneTodos = getter.doneTodos
            return Math.round( ( doneTodos.length / state.todos.length) * 100)
        }
    },
    //thay doi state
    mutations: {
        toggle_auth (state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
        task_complete (state, todoID) {
            state.todos.map(todo => {
                if ( todo === todoID ) {
                    todo.completed = !todo.completed
                    return todo
                }
            })
        }
    }
}

const store = new Vuex.Store(storeData)

export default store