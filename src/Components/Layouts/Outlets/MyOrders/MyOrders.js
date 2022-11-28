import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const MyOrders = () => {
  useTitle("MyOrders");

  const { user } = useContext(AuthContext);
  const selectedLaptop = useLoaderData();
  // console.log("user:" +user.displayName);
  // console.log("booked laptop:" + selectedLaptop);
  return (
    <div>
      {user.photoURL != "admin" &&
      user.photoURL != "seller" &&
      user.photoURL != "" ? (
        <>
          <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
            <h2 className="yatra-font text-5xl my-10">My Booked Product</h2>
            <div className="flex flex-wrap gap-10 justify-around">
              {selectedLaptop
                .slice()
                .reverse()
                .map((bookedLaptop) => {
                  return user?.uid == bookedLaptop.buyerId ? (
                    <>
                      <div className="max-w-sm text-left">
                        <img
                          className="rounded-xl h-96 w-full"
                          src={bookedLaptop.productImage}
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
                            {bookedLaptop.productName}
                          </h2>
                          <p className="">
                            <span className="font-bold">Price:</span>{" "}
                            {bookedLaptop.productPrice} tk
                          </p>
                        </div>
                        <Link>
                          <button
                           
                            className="text-gray-800 bg-yellow-300 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900 w-full"
                          >
                            Pay Now
                          </button>
                        </Link>
                      </div>
                    </>
                  ) : (
                    <></>
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <div className="my-28 py-10 px-10 border-2  shadow-2xl bg-gray-200 rounded-xl text-xl">
          <h2 className="yatra-font text-5xl my-10">
            Please Log in as Buyer to Buy product
          </h2>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
