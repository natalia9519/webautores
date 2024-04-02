import mongoose from "mongoose";

const authSchema = new mongoose.Schema ({
    username: {type: String, required : true},
    password: {type: String, required : true},
   },
    {collection: "users"}
)

 const User = mongoose.model ('User', authSchema);

 export default User;