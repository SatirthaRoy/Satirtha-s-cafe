import React, { useState } from 'react'
import SectionTitle from '../../Shared components/SectionTitle'
import { ImSpoonKnife } from 'react-icons/im'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';


const img_api = import.meta.env.VITE_IMG_API;
const img_api_url = `https://api.imgbb.com/1/upload?key=${img_api}`;

const AddItem = () => {
  const myAxios = useAxios();
  const [buttonLoading, setButtonLoading] = useState(false);

  const [category, setCategory] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async(data) => {
    setButtonLoading(true);
    // upload image to imgbb and get an url
    const res = await axios.post(img_api_url, {image: data.image[0]}, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    })
    if(res.data.success) {
      const menuItem = {
        name: data.name,
        price: Number(data.price),
        recipe: data.recipe,
        category: category,
        image: res.data?.data?.display_url
      }
      console.log(menuItem);
      myAxios.post('/menu', menuItem)
      .then(res => {
        console.log(res.data);
        if(res.data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Item has been added",
            showConfirmButton: false,
            timer: 1500
          });
          reset();
        }
        setButtonLoading(false)
      })
    }
    
  }


  return (
    <div className='w-full py-20 bg-white'>
      <SectionTitle title='ADD AN ITEM' phrase="What's New?"/>
      <div className="flex flex-col justify-center items-center gap-6 bg-[#F3F3F3] lg:px-28 w-11/12 mx-auto md:px-16 px-6 py-11">
        <div className="w-11/12 space-y-5">
          <h3 className="font-semibold">Recipe Name*</h3>
          <input type="text" {...register('name', {required: true})} className="p-5 rounded-lg w-full" placeholder="Recipe name"/>
          {errors.name?.type === 'required' && <p className='text-red-400'>Name is required.</p>}
          <div className='flex flex-col md:flex-row w-full gap-4'>
            <div className='flex-1 space-y-3'>
              <h3 className="font-semibold">Category*</h3>
              <select {...register('category')} defaultValue='0' value={category} onChange={e => setCategory(e.target.value)} name="dropdown" id="" className="p-5 *:p-5 rounded-lg w-full">
                <option value="0">Category</option>
                <option value="salad">salad</option>
                <option value="dessert">dessert</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="drinks">drinks</option>
              </select>
              {errors.category?.type === 'required' && <p className='text-red-400'>Category is required.</p>}
            </div>
            <div className='flex-1 space-y-3'>
              <h3 className="font-semibold">Price*</h3>
              <input type="text" {...register('price', {required: true})} className="p-5 rounded-lg w-full" placeholder="Price"/>
              {errors.price?.type === 'required' && <p className='text-red-400'>Price is required.</p>}
            </div>
          </div>
          <h3 className="font-semibold">Recipe Details*</h3>
          <textarea type="text" {...register('recipe', {required: true})} className="p-5 rounded-lg w-full" placeholder="Details"></textarea>
          {errors.recipe?.type === 'required' && <p className='text-red-400'>Recipe detail is required.</p>}
          <input {...register('image', {required: true})} type="file" className='file-input file-input-xs md:file-input-md'/>
          {errors.image?.type === 'required' && <p className='text-red-400'>Image is required.</p>}
          <button onClick={handleSubmit(onSubmit)} className="text-white font-semibold p-4 bg-gradient-to-r from-[#835D23] to-[#B58130] flex items-center gap-3">{buttonLoading? <span className="loading loading-spinner text-neutral"></span>:<>Add Item<ImSpoonKnife className='text-2xl'/></>}</button>
        </div>
      </div>
    </div>
  )
}

export default AddItem