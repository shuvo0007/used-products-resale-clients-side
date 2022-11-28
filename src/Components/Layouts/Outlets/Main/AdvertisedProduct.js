import { useState } from "react";
import { Link } from "react-router-dom";

const AdvertisedProduct = ({ product }) => {
  const yearOfUse = 2022 - product.purchaseYear;

  const [showModal, setShowModal] = useState(false);
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
                  onClick={() => setShowModal(true)}
                  className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 w-full"
                >
                  Book Now
                </button>
              </Link>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">
                            Modal Title
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            I always felt like I could do anything. That’s the
                            main thing people are controlled by! Thoughts- their
                            perception of themselves! They're slowed down by
                            their perception of themselves. If you're taught you
                            can’t do anything, you won’t do anything. I was
                            taught I could do everything.
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
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
