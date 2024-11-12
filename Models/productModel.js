const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    id:{
        type:Number,
        require:true,
    },
    
    title:{
           type: String,
           require:true
    },
    price:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    rating:{
        rate:{
            type:Number
        },
        count:{
            type:Number
        }
    }
});
const products = mongoose.model('products',productSchema);
module.exports = products;