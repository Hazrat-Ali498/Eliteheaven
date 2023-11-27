import mongoose from 'mongoose';
 
const productStructure= new mongoose.Schema({
category:String,
name:String,
price:Number,
Image:String,
type:String
});
export const productStructureModel=mongoose.model('eliteheaven',productStructure);