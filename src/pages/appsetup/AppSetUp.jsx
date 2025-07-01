import React from "react";
import { LoginForm } from "./LoginForm"; 
import logo from '../../assets/beo-logo.png' 


const AppSetUp = () => {
  return (
    <div
      id="base_page_wrapper"
      className="h-screen w-screen flex items-center justify-center bg-grey-700 relative"
    >
      <div
        id="basic_form_section_right"
        className="flex justify-center items-center w-full"
      >
        <div
          id="login_form_wrapper"
          className="w-full max-w-md bg-white rounded-lg p-8 text-black"
          
        >
          <div className="w-[216px] h-[95px] absolute top-[48px] left-[50px]">
            <img src={logo} alt="" />
          </div>

          <LoginForm />
        </div>
      </div>

      {/* <div
        id="img_wrapper_right"
        className="hidden md:block bg-blue-600"
      /> */}
    </div>
  );
};

export default AppSetUp;
