const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://atharva-gl:atharva-gl@cluster0.ahbcmqr.mongodb.net/?retryWrites=true&w=majority")
.then((res)=>console.log('Database connected'))
.catch((e)=>console.log('Error in connection',e))