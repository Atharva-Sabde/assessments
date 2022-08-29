const express = require("express");
const mongoose = require("mongoose");
const bp = require("body-parser");

const app = express();

app.use(cors())
app.use(bp.json())  // specify type as json , as others for graphql etc are available too.
// console.log(app);