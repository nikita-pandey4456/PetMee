const mongoose = require ('mongoose');

mongoose.connect("mongodb+srv://tany:tany@cluster0.i3duv6h.mongodb.net/?retryWrites=true&w=majority").then (() => {
    console.log(`connection successful`);
}).catch ( (e) => {
    console.log(`no connection`);
})

//mongodb+srv://tany:tany@cluster0.i3duv6h.mongodb.net/?retryWrites=true&w=majority

//mongodb+srv://tanisha:tanisha@cluster0.dmounhu.mongodb.net/?retryWrites=true&w=majority