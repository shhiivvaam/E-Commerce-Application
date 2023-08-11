import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    //form funtion

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(name, email, password, phone, address);
        // toast.success("Registered Sucessfully");

        try {
            // const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`, { name, email, password, phone, address });
            const res = await axios.post('/api/v1/auth/register', { name, email, password, phone, address });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/login');
            } else {
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong!')
        }
    };

    // console.log(process.env.REACT_APP_API);

    return (
        <Layout title={'Sign-up'}>
            <div className='register overflow-auto'>
                <h1>Register Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputName" className='form-label'>Name</label> */}
                        <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" id="exampleInputName" placeholder="Enter Your Name here" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputEmail1" className='form-label'>Name</label> */}
                        <input type="email" required value={email} autoComplete='username' onChange={(e) => { setEmail(e.target.value) }} className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Id here" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputPassword1" className='form-label'>Password</label> */}
                        <input type="password" required value={password} autoComplete="current-password" onChange={(e) => { setPassword(e.target.value) }} className="form-control" id="exampleInputPassword1" placeholder="Enter Your Pass here" />
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputPassword1" className='form-label'>Phone</label> */}
                        <input type="number" required value={phone} onChange={(e) => { setPhone(e.target.value) }} className="form-control" id="exampleInputPhone" placeholder="Enter your Phone Number here" />
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputName" className='form-label'>Address</label> */}
                        <input type="text" required value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" id="exampleInputAddress" placeholder="Enter your Address here" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register