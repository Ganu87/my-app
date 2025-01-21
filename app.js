const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

    console.log(" test 1");
    console.log(" test 2");
    console.log(" test 3");
    console.log(" test 4");
app.listen(PORT, () => {
    console.log(`My main Server running on http://localhost:${PORT}`);
});
