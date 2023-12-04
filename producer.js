const {Queue} = require('bullmq');

const notificationQueue =  new Queue('email-queue',{
    connection:{
        host:'127.0.0.1',
        port:'6379'
    }
});

async function init(){
    const res = notificationQueue.add('email to thamitha',{
        email:'thamitha@gmail.com', 
        subject:'welcome message',
        body:'Hey thamitha, welcome to the platform'
    });

    console.log('Job added to queue', res.id);

}

init();