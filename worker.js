const {Worker} = require('bullmq')

const sendEmail = ()=>new Promise((res,rej)=>setTimeout(()=>res(),5*1000));

const worker = new Worker("email-queue", async(job)=>{
    console.log(`message rec id: ${job.id}`);
    console.log("processing message");
    console.log(`Sending email to ${job.data.email}`);
    return sendEmail();
    console.log('Email Sent');
});

