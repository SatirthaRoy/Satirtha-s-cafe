import { useLocation, useNavigate } from "react-router-dom";
import useData from "../hooks/useData";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";



const Card = ({item}) => {
  const navigate = useNavigate();
  const myAxios = useAxios();
  const location = useLocation();
  const {image, name, recipe, price} = item;
  const {user} = useData();
  const cardAction = () => {
    if(!user) {
      Swal.fire({
        title: "You are not logged in",
        text: "Want to login?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {state: {from: location}});
        }
      });
    } else {
      const menuItem = {
        itemId: item._id,
        userId: user.uid,
        name,
        image,
        price
      }
      myAxios.post('/carts', menuItem)
      .then(res => {
        if(res.data.insertedId) {
          toast.success(`${name} added to the cart Succesfully.`);
        }
      })

    }
  }
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
          <button onClick={cardAction} className="border-[#BB8506] font-medium px-10 py-6 border-b-4 rounded-3xl bg-white text-[#BB8506] hover:bg-black">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

export default Card