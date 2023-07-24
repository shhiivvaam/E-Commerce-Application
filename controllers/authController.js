import { hashPassword } from "../helpers/authHelper.js"
import userModel from "../models/userModel.js"
import JWT from "jsonwebtoken"

export const registerController = async (req, res) => {
    // return {
    //     register(req, res) {
    //         res.render('auth/register')
    //     }
    // }
    try {
        const { name, email, password, phone, address } = req.body

        //validation
        if (!name) {
            return res.send({ error: 'Name is Required' })
        }
        if (!email) {
            return res.send({ error: 'Email is Required' })
        }
        if (!password) {
            return res.send({ error: 'Password is Required' })
        }
        if (!phone) {
            return res.send({ error: 'Phone is Required' })
        }
        if (!address) {
            return res.send({ error: 'Address is Required' })
        }

        // checking user
        const existingUser = await userModel.findOne({ email })

        // checking existing user
        if (existingUser) {
            return res.status(200).send({
                sucess: true,
                message: 'Already Registered! Please Login'
            })
        }

        // registered user
        const hashedPassword = await hashPassword(password);

        // save
        const user = await new userModel({ 
            name,
            email,
            password: hashedPassword,
            phone,
            address,
        }).save();

        res.status(201).send({
            sucess: true,
            message: 'User Registered Successfully',
            user,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            sucess: false,
            message: 'Error in Registration',
            error
        })
    }
}

// POST LOGIN



