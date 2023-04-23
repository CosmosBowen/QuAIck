const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const axios = require('axios');
const APIKEY = "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"

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, input');
    next();
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

const path = require(`path`);
const { query } = require('express');



app.get('/', async (req, res) => {
    input = req.input;
    console.log("input:", input);
    try {
        const callOptions = {
            method: 'GET',
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                'Authorization': 'Bearer ' + APIKEY,
                'Content-Type': 'application/json'
            },
            data: '{' +
                '"model": "gpt-3.5-turbo",' +
                '"messages": [{"role": "user", "content": "' + input + '"}]' +
                '}'
        };
        const response = await axios(callOptions);
        let data = response.data;
        console.log("Here is data")
        console.log(data)
        output = data
        // let events = [];
        // if (data_events.length > 0) {
        if (output) {

            // console.log("al events:", events);
            res.send(output);
        } else {
            res.send([])
        }
    } catch (error) {
        console.log('error:', error);
        res.send([]);

    }

})


const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello world" }],
});
console.log(completion.data.choices[0].message);


// app.get('/ask', async (req, res) => {
//     // input = req.input;
//     input = "what is you name"
//     console.log("input:", input);
//     try {
//         const callOptions = {
//             method: 'POST',
//             url: 'https://api.openai.com/v1/chat/completions',
//             headers: {
//                 'Authorization': 'Bearer ' + APIKEY,
//                 'Content-Type': 'application/json'
//             },
//             data: '{' +
//                 '"model": "gpt-3.5-turbo",' +
//                 '"messages": [{"role": "user", "content": "' + input + '"}]' +
//                 '}'
//         };
//         const response = await axios(callOptions);
//         let data = response.data;
//         console.log("Here is data")
//         console.log(data)
//         output = data
//         // let events = [];
//         // if (data_events.length > 0) {
//         if (output) {

//             // console.log("al events:", events);
//             res.send(output);
//         } else {
//             res.send([])
//         }
//     } catch (error) {
//         console.log(error);
//         //console.log('error: fetched events .');
//         res.send([]);

//     }

// })

// app.get('/ask', async (req, res) => {
//     const input = req.query.input || "what is your name";
//     console.log("input:", input);
//     try {
//         const callOptions = {
//             method: 'POST',
//             url: 'https://api.openai.com/v1/chat/completions',
//             headers: {
//                 'Authorization': 'Bearer ' + APIKEY,
//                 'Content-Type': 'application/json'
//             },
//             data: JSON.stringify({
//                 model: 'davinci',
//                 prompt: input + '\nAI:',
//                 temperature: 0.7,
//                 max_tokens: 100,
//                 top_p: 1,
//                 frequency_penalty: 0,
//                 presence_penalty: 0
//             })
//         };
//         const response = await axios(callOptions);
//         const data = JSON.parse(response.data);
//         const output = data.choices[0].text.trim();
//         res.send(output);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send('Error');
//     }
// });
