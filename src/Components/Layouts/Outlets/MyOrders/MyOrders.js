import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {user.photoURL != "admin" &&
      user.photoURL != "seller" &&
      user.photoURL != "" ? (
        <></>
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
