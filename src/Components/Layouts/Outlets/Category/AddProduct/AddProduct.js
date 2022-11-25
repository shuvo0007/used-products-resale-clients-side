import React, { useState } from "react";
import useTitle from "../../../../../Hooks/useTitle";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Label, Radio } from "flowbite-react";

const AddProduct = () => {
  useTitle("AddCategory");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [category, setCategory] = useState({});

  const handleAddService = (event) => {
    event.preventDefault();

    fetch(
      "https://b6a11-service-review-server-side-shuvo0007.vercel.app/category",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(category),
      }
    )
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
        <div className="">
          <label
            for="name"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Product Name
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
        <div className="flex flex-col items-start">
          <label
            for="name"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Brand Name
          </label>
          <fieldset className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Radio id="asus" name="laptop" value="asus" />
              <Label htmlFor="Buyer">Asus</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="hp" name="laptop" value="hp" />
              <Label htmlFor="Buyer">Hp</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="dell" name="laptop" value="dell" />
              <Label htmlFor="Seller">Dell</Label>
            </div>
          </fieldset>
        </div>
        <div>
          <label
            for="price"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Price
          </label>
          <input
            onBlur={handleInputBlur}
            type="number"
            name="price"
            className="bg-transparent border border-gray-300 text-gray-800 float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="123.00"
            required
          />
        </div>
        <div>
          <label
            for="company"
            className="block mb-2 text-xl font-medium text-gray-800 float-left dark:text-gray-300"
          >
            Image URL
          </label>
          <input
            onBlur={handleInputBlur}
            type="text"
            name="image"
            id="company"
            className="bg-transparent border border-gray-300 text-gray-800 float-left text-sm rounded-lg 
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="http://.....com/abcd.jpg .png"
            required
          />
        </div>

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
