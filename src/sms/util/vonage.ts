// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
    apiKey: process.env.VONAGE_API_KEY,
    apiSecret: process.env.VONAGE_API_SECRET,
})

export async function sendSMS(body: { message: string; receiver: string }) {
    await vonage.sms
        .send({ to: body.receiver, from: 'Vonage APIs', text: body.message })
        .then((resp: any) => {
            console.log('Message sent successfully');
            console.log(resp);
        })
        .catch((err: any) => {
            console.log('There was an error sending the messages.');
            console.error(err);
        });
}
