import { Radio } from "flowbite-react";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Registration = () => {
  useTitle("Registration");

  const navigate = useNavigate();
  const from = "/";

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userType = form.userType.value;

    createUser(email, password)
      .then((result) => {
        handleUpdateUserProfile(name, userType);
      })
      .catch((e) => console.error(e));
  };

  const handleUpdateUserProfile = (name, userType) => {
    const profile = { displayName: name, photoURL: userType };
    updateUserProfile(profile)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="md:relative md:flex md:flex-col md:justify-center md:overflow-hidden md:py-20">
      <div className="md:w-full md:p-12 p-5 md:m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-purple-600 lg:max-w-xl mx-5 mb-5">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline uppercase decoration-wavy">
          Registration
        </h1>
        <form className="mt-14" onSubmit={handleSubmit}>
          <div className=" my-6">
            <div className="mb-2 ">
              <label
                for="name"
                className="block text-xl font-semibold text-gray-800"
              >
                Full Name
              </label>
            </div>
            <input
              className="text-lg w-full rounded-xl border-2 border-purple-600"
              id="name"
              type="text"
              placeholder="Full Name"
              required={true}
            />
          </div>
          <div className=" my-6">
            <div className="mb-2 block">
              <label
                for="email"
                className="block text-xl font-semibold text-gray-800"
              >
                Email
              </label>
            </div>
            <input
              className="text-lg w-full rounded-xl border-2 border-purple-600"
              id="email"
              type="email"
              placeholder="name@mail.com"
              required={true}
            />
          </div>
          <div className=" my-6">
            <div className="mb-2 block">
              <label
                for="password"
                className="block text-xl font-semibold text-gray-800"
              >
                Password
              </label>
            </div>
            <input
              className="text-lg w-full rounded-xl border-2 border-purple-600"
              id="password"
              type="password"
              placeholder="******"
              required={true}
            />
          </div>
          <fieldset className="flex flex-col gap-4 my-6">
            <label
              for="email"
              className="block text-xl font-semibold text-gray-800"
            >
              Choose your User Type
            </label>
            <div className="flex items-center gap-2">
              <Radio
                id="Buyer"
                name="userType"
                value="buyer"
                defaultChecked={true}
              />
              <label className="text-lg" htmlFor="Buyer">
                Buyer
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="Seller" name="userType" value="seller" />
              <label className="text-lg" htmlFor="Seller">
                Seller
              </label>
            </div>
          </fieldset>
          <button
            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
