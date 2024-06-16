import rightArrow from "../../images/rightArrow.svg";
import { useGetMultiForm } from "./hooks/get-multiform/useGetMultiStepForm";

export const Typeform = () => {
  const { nextField, currentField, renderForm } = useGetMultiForm();

  console.log(currentField);

  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center ">
        <form className="w-full lg:w-2/3 max-w-5xl" action="">
          <div className=" w-[95%] lg:w-2/3 mx-auto flex lexand-deca font-[400px] text-[16px] leading-6 p-2">
            <div className=" flex items-start mr-2">
              <h1 className=" text-font-color-2 mr-1">{currentField}</h1>
              <img
                src={rightArrow}
                className="mt-1"
                alt="rightarrow"
                height="16"
                width="16"
              />
            </div>
            <div className="w-full">
              {renderForm()}
              <div className="flex flex-col md:flex-row">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    nextField();
                  }}
                  className=" shadow-lg bg-font-color-2 px-[16px] py-[6px] font-bold text-white rounded min-h-10"
                >
                  OK{" "}
                </button>
                <div className="flex flex-wrap mt-3 ml-3 md:mt-0 items-center font-sans text-[12px] leading-4">
                  <p>
                    press&nbsp;<span className="font-bold">Enter ↵</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
