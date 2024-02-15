const {Product} = require('../../database/Models/Product.js')

const AllPro = async(req,res) => {
    try {
    const result=await Product.findAll({});
    res.json(result) }
     catch (error) {res.send(error) }
};


const AllProSeller = async(req,res) => {
    try {
    const result=await Product.findAll({where:{role:req.params.seller}});
    res.json(result) }
     catch (error) {res.send(error) }
};


const GetOnePro=async(req,res) => {
    try {
    const result=await Product.findOne({where:{prodId:req.params.prodId}})
    res.json(result)}
    catch (error) { res.send(error)}
}

const AddPro = async(req,res) => {
    try {
    const result=await Product.create(req.body)
    res.json(result) } 
    catch (error) {res.send(error) }
};

const DeletePro = async(req,res) => {
    try {
    const result=await Product.destroy({where:req.params})
    res.json(result) } 
    catch (error){res.send(error) }
};

const UpdatePro = async(req,res) => {
    try {
    const result=await Product.update(req.body,{where:req.params})
    res.json(result)   
    }
     catch (error) {res.send(error)}
};



module.exports={AllPro,GetOnePro,AddPro,DeletePro,UpdatePro}