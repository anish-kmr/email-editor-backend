const axios = require('axios');

exports.generateAccessToken = async (req,res) => {
    const {client_id, client_secret, code, shop } = req.body;
    let payload = {client_id,client_secret,code}
    let response = {}
    try{
        let auth_res = await axios.post(`https://${shop}/admin/oauth/access_token`,payload);
        
        response = {
            success:true,
            access_token:auth_res.data.access_token
        };
    }
    catch(err){
        console.log("axios error ",err.response)
        response={
            success:false
        }
    }
    return res.status(200).json(response);
    

}