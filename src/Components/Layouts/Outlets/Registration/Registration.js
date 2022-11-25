import { Button, Label, Radio, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../../../Hooks/useTitle";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Registration = () => {
  useTitle("Registration");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
    navigate(from, { replace: true });
    updateUserProfile(profile)
      .then(() => {
        console.log(profile.photoURL);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="w-96">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your FullName" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Full Name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="name@mail.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="******"
            required={true}
          />
        </div>
        <fieldset className="flex flex-col gap-4">
          <legend>Choose your User Type</legend>
          <div className="flex items-center gap-2">
            <Radio
              id="Buyer"
              name="userType"
              value="buyer"
              defaultChecked={true}
            />
            <Label htmlFor="Buyer">Buyer</Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="Seller" name="userType" value="seller" />
            <Label htmlFor="Seller">Seller</Label>
          </div>
        </fieldset>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Registration;
