// eslint-disable-next-line @typescript-eslint/no-var-requires
const { Vonage } = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: process.env.VONAGE_API_KEY,
  apiSecret: process.env.VONAGE_API_SECRET,
});

const from = 'Vonage APIs';
// const to = 639776369680
// const text = 'A text message sent using the Vonage SMS API amazing lagi ni bai haha'

export async function sendSMS(to: any, text: any) {
  await vonage.sms
    .send({ to, from, text })
    .then((resp: any) => {
      console.log('Message sent successfully');
      console.log(resp);
    })
    .catch((err: any) => {
      console.log('There was an error sending the messages.');
      console.error(err);
    });
}
