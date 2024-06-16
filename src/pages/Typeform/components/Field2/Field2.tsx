const Field2 = () => {
  return (
    <>
      <div className="flex-1">
        <h1 className=" lexend-deca font-[400px] text-[24px] leading-6 text-font-color-1 mb-3">
          What's your email address?
        </h1>
        <p className=" text-[#5e667b] text-[16px] leading-6 md:text-[20px] md:leading-7 mb-8">
          This is how we'll contact you.
        </p>

        <div className="">
          <div className=" mb-12">
            <input
              className=" w-full placeholder:text-font-color-3 placeholder:text-[30px] placeholder:leading-6 caret-font-color-2 pl-0 flex flex-col border-b-2 outline-0 outline-font-color-2 border-b-font-color-3 p-2 focus:border-b-font-color-2 text-font-color-2 sm:text-[16px] md:text-[20px] lg:text-[24px] leading-6"
              name="email"
              type="text"
              placeholder="name@example.com"
            ></input>
          </div>
        </div>
      </div>
    </>
  );
};

export default Field2;
