import React from 'react'
import Layout from '../../components/Layout/Layout'

const Register = () => {
    return (
        <Layout title={'Sign-up'}>
            <div className='register overflow-auto'>
                <h1>Register Page</h1>
                <form>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputName" className='form-label'>Name</label> */}
                        <input type="text" className="form-control" id="exampleInputName" placeholder="Enter Your Name here" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputEmail1" className='form-label'>Name</label> */}
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Your Email Id here" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputPassword1" className='form-label'>Password</label> */}
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Pass here" />
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputPassword1" className='form-label'>Phone</label> */}
                        <input type="number" className="form-control" id="exampleInputPhone" placeholder="Enter your Phone Number here" />
                    </div>
                    <div className="mb-3 form-group">
                        {/* <label htmlFor="exampleInputName" className='form-label'>Address</label> */}
                        <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter your Address here" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register