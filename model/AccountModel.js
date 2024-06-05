import mongoose from "mongoose";

const obj = {
    username: String,
    password: String,
    fullName: String,
    salt: String
}

const AccountSchema = new mongoose.Schema(obj);

const AccountModel = mongoose.model("account", AccountSchema, "account")

export default AccountModel