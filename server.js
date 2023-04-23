const express = require('express');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');
const app = express();
const bodyParser = require('body-parser');

const APIKEY = "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";

//var input = "pretend you are a kid. Do not say that you are an AI. Where were you born? ."

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    try {
        const configuration = new Configuration({apiKey: APIKEY});
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: JSON.stringify(req.body.data)}]
        });
        res.send(completion.data.choices[0].message);
    } catch (error) {
        res.send(error);
    }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

const path = require(`path`);

app.get('/form-submit', (req, res) => {
    console.log({
        name: req.query.name,
        message: req.query.message
    });
    res.send('Thanks for your message!');
});