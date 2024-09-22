#!/usr/bin/env node

const axios = require('axios');

axios
    .get('https://dummyjson.com/products')
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });