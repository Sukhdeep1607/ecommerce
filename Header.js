import React from "react";
import { logo } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
    const productData = useSelector((state) => state.ecommerce.productData);
    const userInfo = useSelector((state) => state.ecommerce.userInfo);
    return (
        <div className="w-full h-20 bg-white font-titleFont border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
            <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <Link to="/">
            <div>
            <img className="w-28" src={logo} alt="logo" />
          </div>
             
            </Link>
                <div className="flex item-center gap-8">
                    <ul className="flex item-center gap-8">
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"></li>
                        <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300"></li>
                    </ul>
                    <Link to="/cart">
                    <div className="relative" >
                        <img className="w-6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeckmkNZTw-QClsK7E1rla-oibMezG8WLNvBJs1yOa_g&s" alt="Cart" />
                        <span className="absolute w-6 top-5 left-0 text-sm flex items-center justify-center font-semibold ">{productData.length}</span>
                    </div>
                    </Link>
                    <Link to="/login">
            <img
              className="w-8 h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>
          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
                </div>
            </div>

        </div>
    );
};
export default Header;