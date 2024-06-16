import Select from "react-select";
import { customStyles } from "pages/Typeform/components/Field3/customStyles";
import { countries } from "../../data/countries";

const Field3 = () => {
  const countryOptions = countries.map((country) => ({
    label: country.name.common,
    value: country.name.common,
    flag: country.flags.png,
  }));

  return (
    <>
      <div className="flex-1">
        <h1 className=" lexend-deca font-[400px] text-[24px] leading-6 text-font-color-1 mb-10">
          Which country you are from? 🏡🏡🏡
        </h1>

        <div className="">
          <div className="mb-6">
            <Select
              closeMenuOnSelect={false}
              className=""
              options={countryOptions}
              isClearable
              isSearchable
              styles={customStyles}
              placeholder="Type or select an option"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Field3;
