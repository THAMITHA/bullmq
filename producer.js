const {Queue} = require('bullmq');

const notificationQueue =  new Queue('email-queue');

async function init(){
    const res = notificationQueue.add('email to thamitha',{
        email:'thamitha@gmail.com', 
        subject:'welcome message',
        body:'Hey thamitha, welcome to the platform'
    });

    console.log('Job added to queue', res.id);

}

init();