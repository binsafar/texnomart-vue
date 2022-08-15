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
                id: 1,
                name: 'Warren Musk',
                phone: '998901234567',
                grade: 4
            }
        ]
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        register(student) {
            this.students.push(student)
            console.log(this.students)
        }
    }
})
