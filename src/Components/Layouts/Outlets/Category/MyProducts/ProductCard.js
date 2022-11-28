/* eslint-disable eqeqeq */
import React, { useContext } from "react";
import { AuthContext } from "../../../../Context/AuthProvider/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcAdvertising } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ProductCard = ({ product }) => {
  const { user } = useContext(AuthContext);

  const handleAdvertise = (id) => {
    fetch(`http://localhost:5000/laptop/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTimeout(() => window.location.reload(), 3000);
        toast.success("Your Product is Advertised", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/laptop/${product._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => window.location.reload(), 3000);
        toast.success("Your Product is Deleted", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      });
  };

  return (
    <div className="">
      {product.userId == user.uid ? (
        <div className="flex justify-between bg-white rounded-xl p-5 items-center m-2">
          <div
            className="flex items-center
            "
          >
            <div className="w-16 border-2 border-gray-300 rounded-xl">
              <img
                className="rounded-xl"
                src={product.image}
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/4101d83b54c7b8d58639aba6fa6622e6.jpg&w=70&zc=1";
                }}
                alt="laptop"
              />
            </div>
            <div className="ml-5">
              <p className="text-left">Name: {product.name}</p>
              <p className="text-sm float-left">
                {product.details.slice(0, 35) + "..."}
              </p>
            </div>
          </div>
          <p className="text-left">Brand: {product.brand}</p>
          <p className="text-left">Resale Price: {product.resalePrice}</p>
          <div className=" flex items-center text-left">
            Availablity
            {product.paid ? (
              <>
                <p>: Sold</p>
              </>
            ) : (
              <>
                <div className="flex items-center">
                  <p>: Available</p>
                  {product.advertised ? (
                    <>
                      <p className="ml-24">Product Advertised</p>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleAdvertise(product._id)}
                        className="ml-10 text-gray-800 bg-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-xl text-lg px-5 py-2.5 text-center dark:focus:ring-yellow-900 flex"
                      >
                        <span className="mr-3">Advertise</span>{" "}
                        <FcAdvertising size={30} />
                      </button>
                    </>
                  )}
                </div>
              </>
            )}
          </div>
          <Link
            onClick={() => handleDelete(product._id)}
            className="text-white bg-red-500 hover:text-white hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-lg px-5 py-2.5 text-center dark:focus:ring-yellow-900"
          >
            <RiDeleteBin6Line size={30} />
            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Link>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductCard;
