const mongoose = require("mongoose");
const productcollection = require('../../models/ProductSchema');
const getproductcontroller = async(req,res)=>{
    try {
        const { category, name, subcategory } = req.params;
        let product;
    
        if (category) {
            const searchCategory = category.toLowerCase();
            product = await productcollection.find({ category: { $regex: new RegExp(searchCategory, 'i') } });
        } 
        else if (name) {
            const searchName = name.toLowerCase();
            product = await productcollection.find({ name: { $regex: new RegExp(searchName, 'i') } });
        } 
        else if (subcategory) {
            const searchSubcategory = subcategory.toLowerCase();
            product = await productcollection.find({ sub_category: { $regex: new RegExp(searchSubcategory, 'i') } });
        } 
        else {
            product = await productcollection.find();
        }
    
        if (!product || product.length === 0) {
            res.status(404).send({ message: "No products found" });
        } else {
            res.status(200).send(product);
        }
    
        console.log("Product fetched successfully");
    } catch (error) {
        res.status(500).send({ message: "Error in fetching data" });
        console.error(`Error occurred: ${error}`);
    }
   
};
module.exports = getproductcontroller;