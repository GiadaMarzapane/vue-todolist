const { createApp } = Vue;

createApp({
    data(){
        return{
            myTasks: [
                {
                    text: 'Fare la spesa',
                    done: true
                },{
                    text: 'Pagare il bollo',
                    done: false
                },{
                    text: 'Lavare la macchina',
                    done: true
                }, {
                    text: 'Comprare regalo Martina',
                    done: false
                }
            ],
            newTask: {
                text: '',
                done: false
            }
        }
    },
    methods:{
        removeMyTask(i) {
            this.myTasks.splice(i, 1)
        },

        addNewTask(){
            this.myTasks.push(this.newTask)
        }
    }
}).mount('#app');