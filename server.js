const express = require('express');

(async function () {
    const app = new (require('express'))();
    console.log('Server is Run');
    app.listen(3000, error => {
        if (error) {
            console.log(error)
        } else {
            console.info('Running on port 3000');
        }
    })
}());
