


const Card = ({item}) => {
  const {image, name, recipe, price} = item;
  return (
    <div className="card rounded-none bg-[#F3F3F3]">
      <figure className="relative">
        <img src={image} alt="Shoes" className='object-cover w-full max-h-[424px]'/>
        <div className="absolute top-5 right-5 bg-black text-white text-base py-3 px-4">${price}</div>
      </figure>
      <div className="card-body text-center space-y-7">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="border-[#BB8506] font-medium px-10 py-6 border-b-4 rounded-3xl bg-white text-[#BB8506] hover:bg-black">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default Card