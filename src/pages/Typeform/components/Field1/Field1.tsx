import React from "react";

const Field1 = () => {
  return (
    <>
      <div className="flex-1">
        <h1 className=" lexend-deca font-[400px] text-[24px] leading-6 text-font-color-1 mb-10">
          Before we start, What is your name?
        </h1>

        <div className="">
          <div className=" mb-12">
            <label
              htmlFor="firstName"
              className="text-font-color-2 text-[14px] md:text-[16px] leading-5 md:leading-6 "
            >
              First name
            </label>
            <input
              className=" w-full placeholder:text-font-color-3 caret-font-color-2 pl-0 flex flex-col border-b-2 outline-0 outline-font-color-2 border-b-font-color-3 p-2 focus:border-b-font-color-2 text-font-color-2 sm:text-[16px] md:text-[20px] lg:text-[24px] leading-6"
              name="firstName"
              type="text"
              placeholder="Jane"
            ></input>
          </div>

          <div className=" mb-12">
            <label
              htmlFor="firstName"
              className="text-font-color-2 text-[16px] leading-[24px]"
            >
              Last name
            </label>
            <input
              className="w-full placeholder:text-font-color-3 pl-0 caret-font-color-2 flex flex-col border-b-2 outline-0 outline-font-color-2 border-b-font-color-3 p-2 focus:border-b-font-color-2 text-font-color-2 sm:text-[16px] md:text-[20px] lg:text-[24px] leading-6"
              name="lastName"
              type="text"
              placeholder="Smith"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Field1;
