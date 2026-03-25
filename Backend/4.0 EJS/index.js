import express from 'express';

const app = express();
const port = 3000;

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekDays = ['Sunday', 'Saturday'];
const today = days[(new Date()).getDay()];
console.log(today);

app.get('/', (req, res) => {
    res.render('index.ejs', {
        day: weekDays.includes(today) ? 'weekend' : 'weekday',
        activity: weekDays.includes(today) ? 'having fun' : 'work hard'
    })
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})