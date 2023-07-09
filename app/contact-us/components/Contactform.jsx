'use client'
import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'

function Contactform() {
    let initialValues = {
        name: "",
        phone: "",
        email: "",
        message: ""
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        name: yup.string().min(3).max(25).matches(/^[a-zA-Z]+$/, 'Only alphabetic characters allowed').required(),
        email: yup.string().email().required(),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10).max(10).required(),
        message: yup.string()
    })
    const { handleSubmit, handleBlur, errors, touched, values, handleChange, resetForm } = useFormik({
        initialValues,
        validationSchema:schema,
        onSubmit: (data) => {
            resetForm();
        }
    });
    return (
        <div className='w-full order-1 lg:order-2' >
            <form onSubmit={handleSubmit} >
                <div className='flex flex-col gap-[30px]' >
                    <span className='text-lg text-red-800 font-medium tracking-wider' ></span>
                    <div className='flex flex-col gap-[30px]' >
                        <div className='flex flex-col gap-1' >
                            <input type="text" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} className='form-input font-mono text-[20px] leading-[25px] placeholder:text-black h-[54px] px-[25px] py-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-none' placeholder='Name*' />
                            { errors.name && touched.name ? <span className='text-sm text-red-800 font-medium tracking-wider'>{errors.name}</span>: null}
                        </div>
                        <div className='flex flex-col gap-1' >
                            <input type="number" name='phone' value={values.phone} onChange={handleChange} onBlur={handleBlur} className='form-input font-mono text-[20px] leading-[25px] placeholder:text-black h-[54px] px-[25px] py-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-none' placeholder='Phone*' />
                            { errors.phone && touched.phone ? <span className='text-sm text-red-800 font-medium tracking-wider'>{errors.phone}</span>: null}
                        </div>
                        <div className='flex flex-col gap-1' >
                            <input type="email" name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} className='form-input font-mono text-[20px] leading-[25px] placeholder:text-black h-[54px] px-[25px] py-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-none' placeholder='Email*' />
                            { errors.email && touched.email ? <span className='text-sm text-red-800 font-medium tracking-wider'>{errors.email}</span>: null}
                        </div>
                        <div className='flex flex-col gap-1' >
                            <textarea name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} className='form-textarea font-mono text-[20px] leading-[25px] placeholder:text-black px-[25px] py-[15px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] border-none h-[119px]' placeholder='Your Message' ></textarea>
                            { errors.message && touched.message ? <span className='text-sm text-red-800 font-medium tracking-wider'>{errors.message}</span>: null}
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='font-mono text-[20px] leading-[25px] font-bold flex justify-center items-center hover:ring-2 hover:ring-offset-2 hover:ring-black text-white bg-black w-[100%] md:w-[217px] h-[46px] rounded-[100px]'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contactform;