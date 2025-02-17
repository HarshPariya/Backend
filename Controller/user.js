const userModel = require("../Model/UserSchema");
const bcrypt = require("bcrypt");

module.exports.registerUser = async (req, res) => {
    const { email, password, name } = req.body;
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      res.send({ message: "User Exist" });
    }
    const salt = await bcrypt.genSalt();
    
    const hash_password = await bcrypt.hash(password, salt);
    const newUser = new userModel({ name, email, password: hash_password });
    await newUser.save();
    res.send({ message: "User Created Successfully" });
    
};  

