export const customStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "#ffff", // Background color of the search bar
    border: "none", // Remove all borders
    borderBottom: "2px solid #f1e2ff", // Only keep the bottom border
    boxShadow: "none", // Remove the default box shadow
    borderRadius: 0,
    outline: 0,
    outlineColor: "red",
    padding: "0px",
    "&:hover": {
      borderBottom: "2px solid #f1e2ff", // Bottom border color when hovering over the search bar
    },
  }),
  input: (provided: any) => ({
    ...provided,
    color: "#cf9fff", // Text color of the search input
    caretColor: "#cf9fff",
    fontSize: "30px",
    lineHeight: "24px",
    cursor: "text",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "#f1e2ff", // Placeholder text color
    fontSize: "30px",
    lineHeight: "40px",
  }),
  clearIndicator: (provided: any) => ({
    ...provided,
    color: "#cf9fff", // Change the color of the clear indicator (the "x" button) to red
    cursor: "pointer",
    "&:hover": {
      color: "#cf9fff", // Change color when hovering over the clear indicator
    },
  }),
  dropdownIndicator: (provided: any) => ({
    ...provided,
    paddingRight: 0,
    padding: "0px",
    width: "30px",
    height: "30px",
    cursor: "pointer",
    svg: {
      width: "100%",
      height: "100%",
    },
    color: "#cf9fff",
    "&:hover": {
      color: "#cf9fff",
    },
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: "#cf9fff",
    fontSize: "30px",
    lineHeight: "30px",
    padding: "0px",
  }),
  option: (provided: any) => ({
    ...provided,
    fontSize: "20px",
    lineHeight: "24px",
    backgroundColor: "#f1e2ff",
    opacity: "0.7",
    color: "#cf9fff",
    padding: "10px",
    marginTop: "2px",
    marginBottom: "5px",
    gap: "2px",
    border: "1px solid #cf9fff",
    cursor: "pointer",
    borderRadius: "5px",
    "&:hover": {
      opacity: "1",
    },

    menu: (provided: any) => ({
      ...provided,
      backgroundColor: "#0000",
      margin: 0,
      boxShadow: "none",
    }),
    menuList: (provided: any) => ({
      ...provided,
      backgroundColor: "#0000",
      padding: 0,
      boxShadow: "none",
    }),
    menuPortal: (provided: any) => ({
      ...provided,
      backgroundColor: "#0000",
      padding: "50px",
      boxShadow: "none",
    }),
  }),
};
