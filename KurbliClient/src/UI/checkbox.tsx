export function Checkbox({ setIsChecked }: any) {
  const handleCheckBox = (event: any) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div className="flex items-center py-5">
      <input
        type="checkbox"
        onChange={handleCheckBox}
        className="w-[30px] h-[30px] checked text-green-500 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      ></input>
      {/* <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
        <input type="checkbox" className="hidden" checked />
        <svg
          className="hidden w-4 h-4 text-purple pointer-events-none"
          viewBox="0 0 172 172"
        >
          <g
            fill="none"
            stroke-width="none"
            stroke-miterlimit="10"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <path d="M0 172V0h172v172z" />
            <path
              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
              fill="currentColor"
              stroke-width="1"
            />
          </g>
        </svg>
      </div> */}
      <label className="ms-2 text-sm font-normal text-[#494949]">
        By checking the box, you agree allow us to use your information to
        contact you about our services.
        {/* By checking the box, you agree to our{" "}
        <a href="#" className="text-[#D9A831] underline">
          privacy policy
        </a>{" "}
        and{" "}
        <a href="#" className="underline text-[#D9A831]">
          terms of use,
        </a>{" "}
        and allow us to use your information to contact you about our services */}
      </label>
    </div>
  );
}
