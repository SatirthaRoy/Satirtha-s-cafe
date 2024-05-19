import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useData from '../../hooks/useData';
import toast from 'react-hot-toast';

const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const { register, handleSubmit, formState: {errors} } = useForm()
  const [capError, setCapError] = useState(false);
  const {signIn, setUser} = useData();

  const onSubmit = (data, e) => {
    console.log(data);
    if(validateCaptcha(data.captcha)) {
      signIn(data.email, data.password)
      .then(result => {
        console.log(result.user);
        setUser(result.user);
        toast.success('Successfully logged in.');
        navigate(location?.state?.from?.pathname || '/');
      })
      .catch(e => {
        console.log('sign in err: ', e);
      })
      setCapError(false)
    } else {
      setCapError(true);
      toast.error('Captcha failed.')
    }
    
  } 

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  return (
    <div className='py-40 h-full bg-[url(/bistro-boss-restaurant-resources-main/assets/others/authentication.png)] bg-cover bg-no-repeat'>
      <div className='w-11/12 mx-auto flex justify-center items-center md:flex-row flex-col py-10 px-4 lg:px-24 shadow-lg'>
        <div className='flex-1'>
          <img src='/bistro-boss-restaurant-resources-main/assets/others/authentication2.png' alt="" className='flex-1'/>
        </div>
        
        <div className='flex-1 space-y-8 md:px-8 px-4'>
          <h1 className='text-4xl font-bold text-center'>Login</h1>
          <form action="" className='flex-1' onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="" className='space-y-4'>
              <h3 className='text-xl font-semibold'>Email</h3>
              <input type="email" {...register('email', {required: true})} placeholder='Enter your email' className='w-full pl-4 py-4 rounded-lg text-base font-normal'/>
              {errors.email?.type === 'required' && <p className='text-red-400'>This field is required.</p>}
            </label>
            <label htmlFor="" className='space-y-4'>
              <h3 className='text-xl font-semibold mt-7'>Password</h3>
              <input type="password" {...register('password', {required: true})} placeholder='Enter your email' className='w-full pl-4 py-4 rounded-lg text-base font-normal'/>
              {errors.password?.type === 'required' && <p className='text-red-400'>This field is required.</p>}
            </label>
            <div className='my-6'>
              <LoadCanvasTemplate/>
              {capError && <p className='text-red-400'>Captcha doesn't match.</p>}
            </div>
            
            <input type="text" {...register('captcha', {required: true})} placeholder='Enter captcha' className='w-full pl-4 py-4 rounded-lg text-base font-normal'/>
            <label htmlFor="" className='space-y-4'>
              <input type="submit" value='Login' className='w-full p-4 cursor-pointer bg-[#D1A054B2] font-semibold rounded-lg text-base text-white mt-6'/>
            </label>
          </form>
          <p className='text-[#D1A054] text-center text-xl font-medium'>New here? <Link to='/register' className='font-semibold'>Create a New Account</Link></p>
          <p className='text-center text-xl font-medium'>Or sign in with</p>
          <div className='flex justify-center gap-10'>
            <div className='cursor-pointer text-2xl border border-[#444444] rounded-full p-3'><FaFacebook/></div>
            <div className='cursor-pointer text-2xl border border-[#444444] rounded-full p-3'><FaGoogle/></div>
            <div className='cursor-pointer text-2xl border border-[#444444] rounded-full p-3'><FaGithub/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login