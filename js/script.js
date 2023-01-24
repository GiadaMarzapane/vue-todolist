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
            newTaskString: ''
        }
    },
    methods:{
        removeMyTask(i) {
            this.myTasks.splice(i, 1)
        },

        addNewTask(){
            newObj = {
                text: this.newTaskString,
                done: false
            };
            this.myTasks.push(newObj);
            console.log(this.myTasks);
        }
    }
}).mount('#app');