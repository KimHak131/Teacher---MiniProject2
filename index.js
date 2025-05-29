const e1 = require('express');
const app = e1();

// LOGIN API
app.post('/addassignment', (req, res) => {
    res.send(`
        <html>
            <head><title>Add Assignment</title></head>
            <body>
                <h1>INSIDE ADD API</h1>
            </body>
        </html>
    `);
});

// SEARCH API
app.get('/searchstudent', (req, res) => {
    res.send(`
        <html>
            <head><title>Search Student</title></head>
            <body>
                <h1>INSIDE SEARCH API</h1>
            </body>
        </html>
    `);
});

// DELETE API
app.delete('/removestudent', (req, res) => {
    res.send(`
        <html>
            <head><title>Remove Student</title></head>
            <body>
                <h1>INSIDE REMOVE API</h1>
            </body>
        </html>
    `);
});

// START THE EXPRESS SERVER
app.listen(5010, () => {
    console.log('EXPRESS Server Started at Port No: 5010');
});
