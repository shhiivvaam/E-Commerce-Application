import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall } from 'react-icons/bi';
import { BsSearchHeartFill } from 'react-icons/bs';

const Contact = () => {
    return (
        <Layout title = {'Contact Us - E Commerce App'}>
            <div className='row contactus px-5 py-5'>
                <div className='col-md-6'>
                    <img
                        src = './images/contactus.jpeg'
                        alt = 'contact us'
                        style={{width: '100%'}}
                    />
                </div>
                <div className='col-md-4'>
                    <h1 className='bg-dark p-2 text-white text-center'>
                        CONTACT US
                    </h1>
                    <p className='text-justify mt-2'>
                        Any Query and info about product, feel free to call anytime. We are 24*7 Live!
                    </p>
                    <p className='mt-3'>
                        <BiMailSend/> : life.shivam2394@gmail.com
                    </p>
                    <p className='mt-3'>
                        <BiPhoneCall/> : 987-196-5342
                    </p>
                    <p className='mt-3'>
                        <BsSearchHeartFill/> : https://shhiivvaam.github.io/portfolio/
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Contact