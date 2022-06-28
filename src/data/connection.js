const mongoose = require("mongoose")
mongoose.connect(`mongodb://localhost:27017/menu`,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connect succesfully');
}).catch((e)=>{
    console.log(e);
})