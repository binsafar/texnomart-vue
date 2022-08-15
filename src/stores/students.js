import {defineStore} from 'pinia'

export const useStudentsStore = defineStore({
    id: 'counter',
    state: () => ({
        students: [
            {
                id: 1,
                name: 'Jack Bezos',
                phone: '998901234567',
                grade: 2
            },
            {
                id: 2,
                name: 'Warren Musk',
                phone: '998901234567',
                grade: 4
            }
        ],
        counter: 2,
        auth: false
    }),
    getters: {
        // doubleCount: (state) => state.counter * 2
    },
    actions: {
        register(student) {
            this.counter++
            this.students.push({id: this.counter, ...student})
        },
        delete(id) {
            for (let i = 0; i < this.students.length; i++) {
                if (this.students[i].id === id) {
                    this.students.splice(i, 1)
                }
            }
        },
        login(login, password) {
            if (login === 'admin' && password === 'admin') {
                this.auth = true
            } else {
                console.log('login or password is incorrect')
            }
        },
        logout() {
            this.auth = false
        }
    }
})
