import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const AdvertisedProduct = ({ product }) => {
  const yearOfUse = 2022 - product.purchaseYear;

  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const from = "/private/myOrders";

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const productName = form.productName.value;
    const productId = product._id;
    const productImage = product.image;
    const productPrice = form.productPrice.value;
    const buyerName = form.buyerName.value;
    const buyerId = user?.uid;
    const buyerEmail = form.buyerEmail.value;
    const buyerNumber = form.buyerNumber.value;
    const location = form.location.value;

    const booking = {
      productName,
      productId,
      productImage,
      productPrice,
      buyerName,
      buyerId,
      buyerEmail,
      buyerNumber,
      location,
    };

    fetch("http://localhost:5000/selected-laptop", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => navigate(from, { replace: true }), 3000);
        toast.success("Laptop Booked", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setShowModal(false);
      });
  };

  return (
    <div
      className={`rounded-xl bg-white p-5 mt-16 ${
        product.advertised ? "" : "hidden"
      } ${product.paid ? "hidden" : ""}`}
    >
      {product.advertised ? (
        <>
          <div className="max-w-sm text-left ">
            <div>
              <img
                className="rounded-xl h-96 w-full"
                src={product.image}
                alt="laptop"
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src =
                    "https://www.bigpharmacy.com.my/scripts/timthumb.php?src=https://www.bigpharmacy.com.my//site_media/img/4101d83b54c7b8d58639aba6fa6622e6.jpg&w=70&zc=1";
                }}
              />
              <div className="text-2xl my-5 text-justify">
                <h2 className="text-2xl  tracking-tight text-gray-900 dark:text-white">
                  <span className="font-bold">Name: </span>
                  {product.name}
                </h2>
                <p className="">
                  <span className="font-bold">Location:</span>{" "}
                  {product.location}
                </p>
                <p className="">
                  <span className="font-bold">Resale Price:</span>{" "}
                  {product.resalePrice} tk
                </p>
                <p className="">
                  <span className="font-bold">Original Price:</span>{" "}
                  {product.originalPrice} tk
                </p>
                <p className="">
                  <span className="font-bold">Years of use:</span> {yearOfUse}{" "}
                  years
                </p>
                <p></p>
                <p className="">
                  <span className="font-bold">Seller Name:</span>{" "}
                  {product.userName}
                </p>
              </div>
              <Link>
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 w-full"
                >
                  Book Now
                </button>
              </Link>
              {showModal ? (
                <>
                  <div className=" justify-center items-center fixed inset-0  z-50 outline-none focus:outline-none ">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none bg-gray-300">
                        <form onSubmit={handleBooking}>
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid  border-slate-200 rounded-t">
                            <h3 className="text-4xl font-semibold">
                              Booking Details:
                            </h3>
                          </div>
                          {/*body*/}
                          <div className=" p-6 flex flex-col">
                            <label className="underline decoration-wavy text-yellow-800">
                              Product Name:
                            </label>
                            <input
                              name="productName"
                              id="productName"
                              defaultValue={product.name}
                              type="text"
                              disabled
                              className="bg-transparent border-0 text-2xl "
                            />
                            <label className="underline decoration-wavy text-yellow-800">
                              Product Price:
                            </label>
                            <input
                              name="productPrice"
                              id="productPrice"
                              defaultValue={product.resalePrice}
                              type="text"
                              disabled
                              className="bg-transparent border-0 text-2xl "
                            />
                            <label className="underline decoration-wavy text-yellow-800">
                              Your Name:
                            </label>
                            <input
                              name="buyerName"
                              id="buyerName"
                              defaultValue={user?.displayName}
                              type="text"
                              disabled
                              className="bg-transparent border-0 text-2xl"
                            />
                            <label className="underline decoration-wavy text-yellow-800">
                              Your Email:
                            </label>
                            <input
                              name="buyerEmail"
                              id="buyerEmail"
                              defaultValue={user?.email}
                              type="text"
                              disabled
                              className="bg-transparent border-0 text-2xl "
                            />
                            <label className="underline decoration-wavy text-yellow-800">
                              Enter Your Number:
                            </label>
                            <input
                              required
                              name="buyerNumber"
                              id="buyerNumber"
                              placeholder="Phone Number"
                              type="number"
                              className=" text-2xl "
                            />
                            <label className="underline decoration-wavy text-yellow-800">
                              Enter Your Location:
                            </label>
                            <input
                              required
                              name="location"
                              id="location"
                              placeholder="Meeting Location"
                              type="text"
                              className=" text-2xl "
                            />
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <input
                              type="submit"
                              value="Book Now"
                              className="bg-yellow-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
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
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdvertisedProduct;
