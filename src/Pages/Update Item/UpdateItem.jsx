import React, { useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import SectionTitle from '../../Shared components/SectionTitle';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import useAxios from '../../hooks/useAxios';

const UpdateItem = () => {
  const myAxios = useAxios();
  const item = useLoaderData();

  const navigate = useNavigate();
  const [category, setCategory] = useState(item?.category);
  const [buttonLoading, setBUttonLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setBUttonLoading(true)
    const updatedItem = {
      name: data.name,
      price: Number(data.price),
      category: category,
      recipe: data.recipe
    }
    myAxios.patch(`/menu/update?id=${item._id}`, updatedItem)
    .then(res => {
      if(res.data?.modifiedCount) {
        toast.success('Updated successfuly.')
      }
      setBUttonLoading(false);
      navigate('/dashboard/manageitems')
    })
  }

  return (
    <div className='w-full py-20 bg-white'>
      <SectionTitle title='Update' phrase='Modify'/>
      <div className="flex flex-col justify-center items-center gap-6 bg-[#F3F3F3] lg:px-28 w-11/12 mx-auto md:px-16 px-6 py-11">
        <div className="w-11/12 space-y-5">
          <h3 className="font-semibold">Recipe Name*</h3>
          <input defaultValue={item?.name} type="text" {...register('name', {required: true})} className="p-5 rounded-lg w-full" placeholder="Recipe name"/>
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
              <input defaultValue={item?.price} type="text" {...register('price', {required: true})} className="p-5 rounded-lg w-full" placeholder="Price"/>
              {errors.price?.type === 'required' && <p className='text-red-400'>Price is required.</p>}
            </div>
          </div>
          <h3 className="font-semibold">Recipe Details*</h3>
          <textarea defaultValue={item?.recipe}  type="text" {...register('recipe', {required: true})} className="p-5 rounded-lg w-full" placeholder="Details"></textarea>
          {errors.recipe?.type === 'required' && <p className='text-red-400'>Recipe detail is required.</p>}
          <button onClick={handleSubmit(onSubmit)} className="text-white font-semibold p-4 bg-gradient-to-r from-[#835D23] to-[#B58130] block mx-auto">{buttonLoading? <span className="loading loading-spinner text-neutral"></span>:<>Update Recipe Details</>}</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateItem