const orderModel = require("../Model/ProductOrderModel")

exports.getOrderData = async (req, res) => {
    try{
        const responce = await orderModel.finf({}, '')

        if(!responce){
            res.status(201).json(
                {
                    success: true,
                    message: ""
                }
            )
        }
        
    }catch(error){
        res.status(501).josn(
            {
                success: false,
                message: ""
            }
        )
    }
}