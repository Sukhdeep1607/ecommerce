import React from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ecommerceSlice";
import { ToastContainer, toast } from "react-toastify";
const ProductsCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id=product.title;
    const idString=(id)=>{
        return String(id).toLowerCase().split(" ").join("");
    };
    const rootid =idString(id);
    console.log(rootid);
   
  const handleDetails = () => {
    navigate(`/product/${rootid}`, {
        state: {
          item: product,
        },
        })
    };

    return(
        <div className="group relative">
            <div onClick={handleDetails}
            className="w-full h-96 cursor-pointer overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-110 duration-500" src={product.image} alt="productimage" />
            </div>
            <div className="w-full border-[1px] px-2 py-4">
                <div className="flex justify-between items-center">
                <div>
                <h2 className="font-titleFont text-base font-bold">
              {product.title.substring(0, 17)}
            </h2>
            <div className="flex gap-2 relative">
            <div className="text-sm relative w-28 flex justify-end overflow-hidden">
                <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
                    <p className="font-semibold">₹{product.price}</p>
                </div>
                <p onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                  // & toast.success(`${product.title} is added`)
                )}className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500" >
                add to cart{" "}
                <span>
                    <BsArrowRight/>
                </span>
                </p>
            </div>
            </div>
</div>
</div>
</div>
<ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
        </div>
    );
};

export default ProductsCard;