import React, { useState } from "react";
import useTitle from "../../../../../Hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { Select } from "flowbite-react";

const AddProduct = () => {
  useTitle("AddCategory");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [category, setCategory] = useState({});

  const handleAddService = (event) => {
    event.preventDefault();

    fetch("http://localhost:5000/laptop", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(category),
    })
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => navigate(from, { replace: true }), 3000);
        toast.success("Category Added", {
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

  const handleInputBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    const newCategory = { ...category };
    newCategory[field] = value;
    setCategory(newCategory);
  };

  return (
    <div className="m-28 px-36">
      <form className="flex flex-col" onSubmit={handleAddService}>
        {/* product name  */}
        <div className="">
          <label
            for="name"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Product Name/Model
          </label>
          <input
            onBlur={handleInputBlur}
            type="text"
            name="name"
            id="name"
            className="bg-transparent border border-gray-300 text-gray-800 float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title of the Service"
            required
          />
        </div>

        {/* brand name  */}
        <div className="flex flex-col items-start">
          <label
            for="brand"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Brand Name
          </label>
          <div className="relative w-full lg:max-w-sm">
            <select
              id="brand"
              name="brand"
              onBlur={handleInputBlur}
              required
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 "
            >
              <option value="">Please Choose One</option>
              <option value="asus">Asus</option>
              <option value="hp">Hp</option>
              <option value="dell">Dell</option>
            </select>
          </div>
        </div>

        {/* original price  */}
        <div>
          <label
            for="originalPrice"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Original Price
          </label>
          <input
            onBlur={handleInputBlur}
            type="number"
            name="originalPrice"
            className="bg-transparent border border-gray-300 text-gray-800 float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="123.00"
            required
          />
        </div>

        {/* reasle price  */}
        <div>
          <label
            for="resalePrice"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Resale Price
          </label>
          <input
            onBlur={handleInputBlur}
            type="number"
            name="resalePrice"
            className="bg-transparent border border-gray-300 text-gray-800 float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="123.00"
            required
          />
        </div>

        {/* condition type  */}
        <div className="flex flex-col items-start">
          <label
            for="brand"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Condition Type
          </label>
          <div className="relative w-full lg:max-w-sm">
            <select
              id="condition"
              name="condition"
              onBlur={handleInputBlur}
              required
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 "
            >
              <option value="">Please Choose One</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
            </select>
          </div>
        </div>

        {/* phone number  */}
        <div>
          <label
            for="price"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Phone Number
          </label>
          <input
            onBlur={handleInputBlur}
            type="number"
            name="phoneNumber"
            className="bg-transparent border border-gray-300 text-gray-800 float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="01*********"
            required
          />
        </div>

        {/* location */}
        <div className="flex flex-col items-start">
          <label
            for="brand"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Your Location
          </label>
          <div className="relative w-full lg:max-w-sm">
            <select
              id="location"
              name="location"
              onBlur={handleInputBlur}
              required
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 "
            >
              <option value="">Please Choose One</option>
              <option value="Barishal">Barishal</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Rajshashi">Rajshashi</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
        </div>

        {/* purshase year  */}
        <div className="flex flex-col items-start">
          <label
            for="brand"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Year of Purchase
          </label>
          <div className="relative w-full lg:max-w-sm">
            <select
              id="purchaseYear"
              name="purchaseYear"
              onBlur={handleInputBlur}
              required
              className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600 "
            >
              <option value="">Please Choose One</option>
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2010">2010</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        {/* description  */}
        <div>
          <label
            for="website"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Description
          </label>
          <textarea
            rows="10"
            onBlur={handleInputBlur}
            type="text"
            name="details"
            id="website"
            className="bg-transparent border border-gray-300 text-gray-800 float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Write something about the service"
            required
          />
        </div>

        {/* submit */}
        <div>
          <button
            type="submit"
            className="text-gray-800 bg-yellow-300 hover:text-gray-800 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            Submit
          </button>
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
      </form>
    </div>
  );
};

export default AddProduct;

// photo url, years of use, posted time, seller name, seller ID, 
