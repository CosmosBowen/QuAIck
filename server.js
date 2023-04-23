const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const axios = require('axios');
const { Configuration, OpenAIApi } = require("openai");

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
const { query, response } = require('express');


app.get('/ask', async (req, res) => {



    // input = req.input;
    // input = tell_kids + req.query.input;

    tell_kids = "Imagine you are communicating with an elementary school kid from an authorative perspective. If asked, let them know you are AI. Make the child feel very comfortable, and add humor to make the conversation exciting, have fun! In less than 4 sentences. In 10 words including onomatopoeia.";

    tell_2 = "now you are talking to nature, imagine you are collection of every spirit in the world, make it simple but spiritual. In 5 words "

    tell_3 = "you are a realist and you tell things straight to the point, don't sugar coat anything."

    // input = "hi"
    // console.log("backend received input:", input);
    try {


        const configuration = new Configuration({
            apiKey: APIKEY,
        });
        const openai = new OpenAIApi(configuration);

        // Define the prompts
        const inputs = [
            tell_kids + req.query.input,
            tell_2 + req.query.input,
            tell_3 + req.query.input
        ];
        console.log("backend received input:", inputs);

        // let outputs = []

        const promise1 = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputs[0] }],
        });

        const promise2 = openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputs[1] }],
        });

        const promise3 = openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputs[2] }],
        });
        // output = completion_1.data.choices[0].message;
        // const promise1 = Promise.resolve(3);
        // const promise2 = 42;
        // const promise3 = new Promise((resolve, reject) => {
        //     setTimeout(resolve, 100, 'foo');
        // });

        Promise.all([promise1, promise2, promise3]).then((values) => {
            const outputs = values.map(value => value.data.choices[0].message.content);
            console.log("here are the outputs:", outputs);
            res.json(outputs);

        });
        // Make the API calls in parallel using Promise.all()
        // const responses = await Promise.all(
        //     [() => {
        //         const completion_1 = openai.createChatCompletion({
        //             model: "gpt-3.5-turbo",
        //             messages: [{ role: "user", content: inputs[0] }],
        //         });
        //         output = completion_1.data.choices[0].message;
        //         outputs.push(output)
        //     },
        //     () => {
        //         const completion_2 = openai.createChatCompletion({
        //             model: "gpt-3.5-turbo",
        //             messages: [{ role: "user", content: inputs[1] }],
        //         });
        //         output = completion_2.data.choices[0].message;
        //         outputs.push(output)
        //     },
        //     () => {
        //         const completion_3 = openai.createChatCompletion({
        //             model: "gpt-3.5-turbo",
        //             messages: [{ role: "user", content: inputs[2] }],
        //         });
        //         output = completion_3.data.choices[0].message;
        //         outputs.push(output)
        //     },
        //     ]

        // );

        // Extract the response messages and return them as an array
        // const output = responses.map(response => response.data.choices[0].message);

    } catch (error) {
        console.log('error:', error);
        res.send([]);

    }

});


// app.get('/ask', async (req, res) => {
//     // input = req.input;
//     tell_kids = "Imagine you are communicating with an elementary school kid from an authorative perspective. If asked, let them know you are AI. Make the child feel very comfortable, and add humor to make the conversation exciting, have fun! In less than 4 sentences."
//     input = tell_kids + req.query.input
//     // input = "hi"
//     console.log("backend received input:", input);
//     try {


//         const configuration = new Configuration({
//             apiKey: APIKEY,
//         });
//         const openai = new OpenAIApi(configuration);

//         const completion = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: input }],
//         });
//         output = completion.data.choices[0].message;
//         console.log("here is output:", output);
//         res.json(output.content)
//     } catch (error) {
//         console.log('error:', error);
//         res.send([]);

//     }

// })

// app.get('/ask', async (req, res) => {
//     input = req.query.input;
//     input = "hi, what is your favorite color?"
//     console.log("input:", input);
//     try {


//         const configuration = new Configuration({
//             apiKey: APIKEY,
//         });
//         const openai = new OpenAIApi(configuration);

//         const completion = await openai.createChatCompletion({
//             model: "gpt-3.5-turbo",
//             messages: [{ role: "user", content: input }],
//         });
//         response = completion.data.choices[0].message
//         console.log(response);
//         res.send(response.content)



//         // const callOptions = {
//         //     method: 'GET',
//         //     url: 'https://api.openai.com/v1/chat/completions',
//         //     headers: {
//         //         'Authorization': 'Bearer ' + APIKEY,
//         //         'Content-Type': 'application/json'
//         //     },
//         //     data: '{' +
//         //         '"model": "gpt-3.5-turbo",' +
//         //         '"messages": [{"role": "user", "content": "' + input + '"}]' +
//         //         '}'
//         // };
//         // const response = await axios(callOptions);
//         // let data = response.data;
//         // console.log("Here is data")
//         // console.log(data)
//         // output = data
//         // // let events = [];
//         // // if (data_events.length > 0) {
//         // if (output) {

//         //     // console.log("al events:", events);
//         //     res.send(output);
//         // } else {
//         //     res.send([])
//         // }
//     } catch (error) {
//         console.log('error:', error);
//         res.send([]);

//     }

// })


// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const completion = await openai.createChatCompletion({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Hello world" }],
// });
// console.log(completion.data.choices[0].message);


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
