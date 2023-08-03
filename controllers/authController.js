import { comparePassword, hashPassword } from "../helpers/authHelper.js"
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

        // register user
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
            message: 'User Registered Successfully!',
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
};

// POST LOGIN

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        //validation

        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }

        // check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Email is not Registered!',

            })
        }

        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                sucess: false,
                message: 'Invalid Password!',
            })
        }

        // JWT token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(200).send ({
            success: true, 
            message: 'loged-in Successfully!',
            user: {
                user: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            }, token
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in login',
            error
        })
    }
};

// test controller
export const testController = (req, res) => {
    // console.log('Protected Route');
    // res.send("Protected Route");

    try { 
        res.send("Protected Routes");
        console.log("Protected Route");
    } catch(error) {
        res.send(error);
        console.log(error);
    }
};


// admin Controller

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);

        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: 'Admin Resource. Access Denied! {UnAuthorised Access}'
            });
        } else {
            next();
        }
    } catch(error) {
        res.status(401).send({
            success: false,
            message: 'Error in Admin MiddleWare',
            error
        })
        console.log(error);
    }
}