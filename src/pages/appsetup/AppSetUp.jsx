import React from "react";
import { LoginForm } from "./LoginForm"; 

const AppSetUp = () => {
  return (
    <div
      id="base_page_wrapper"
      className="h-screen w-screen bg-grey-700 grid grid-cols-1 md:grid-cols-3"
    >
      <div
        id="basic_form_section_right"
        className="col-span-2 flex flex-col justify-center items-center p-8 text-white"
      >
        <div
          id="login_form_wrapper"
          className="w-full max-w-md bg-white rounded-lg p-8 text-black"
        >
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
