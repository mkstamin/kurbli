export function Right({ valid_address, score }: any) {
  return (
    <div className="flex flex-col bg-[#18180B]">
      <div className="bg-white order-2 md:order-none">
        <img
          className=""
          src={`${valid_address && !score ? "/valid.png" : "/home.png"}`}
          height="600px"
          width="1200px"
        />
      </div>

      <div className="mx-3 md:mx-6 my-4 md:my-10 order-1 md:order-none">
        <h2 className="text-lg md:text-[40px] md:leading-[54px] text-white">
          How does kurbli work?
        </h2>

        <p className="text-xs md:text-2xl text-white mt-3 md:mt-8">
          kurbli uses a proprietary combination of artificial intelligence and
          predictive analytics to determine how investible your property may be
          to potential investors.
        </p>
      </div>
      {/* <div className="text-2xl font-semibold text-gray-300 m-2 p-2">
        What we provide
      </div>
      <div className="flex p-2 m-2">
        <div className="flex flex-col text-gray-300 p-1 m-1">
          <img src="/threelines.svg" width="56px" height="56px" />
          <div className="m-1">Listing your home for sale</div>
        </div>
        <div className="flex flex-col text-gray-300 p-1 m-1">
          <img src="/search.svg" width="56px" height="56px" />
          <div className="m-1">Finding homes for you to buy</div>
        </div>
        <div className="flex flex-col text-gray-300 p-1 m-1">
          <img src="bucket.svg" width="56px" height="56px" />
          <div className="m-1">Providing you with market information</div>
        </div>
        <div className="flex flex-col text-gray-300 p-1 m-1">
          <img src="dollar.svg" width="56px" height="56px" />
          <div className="m-1">Negotiating on your behalf</div>
        </div>
      </div> */}
    </div>
  );
}
