import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidatData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validation form
    const message = checkValidatData(
      name?.current?.value,
      email?.current?.value,
      password?.current?.value
    );

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // signUp form logic
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
          // ..
        });
    } else {
      // SignIn form logic

      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          navigate("/");
        });
    }
  };

  const toggelSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute  top-0 left-0 w-full h-full flex items-center justify-center">
        <img
          className="w-full h-screen object-cover"
          src="https://images6.alphacoders.com/523/523681.jpg"
          alt="Bg-Logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-11/12 max-w-md p-12 absolute bg-[rgba(0,0,0,0.7)]  my-36 mx-auto right-0 left-0 text-white  rounded-lg ">
        <h1 className="py-6 text-3xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="  p-3 my-4 w-full rounded-sm bg-yellow-50 text-black"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          type="text"
          className="  p-3 my-4 w-full rounded-sm bg-yellow-50 text-black"
          placeholder="Email Address"
        />
        <input
          ref={password}
          type="password"
          className="  p-3 my-4 w-full rounded-sm bg-yellow-50 text-black"
          placeholder="Password"
        />

        <p className="py-2 text-red-500 font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-3 my-6 bg-yellow-700 w-full rounded-sm cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggelSignInForm} className="py-4 cursor-pointer">
          {isSignInForm
            ? "New to Bus-Stop?Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
