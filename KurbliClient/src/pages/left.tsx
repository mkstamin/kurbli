import { Input } from "../UI/input_box";

export function LeftText({
  toggleScoreBadge,
  setKurbilScore,
  kurbilScore,
}: any) {
  return (
    <div className="flex flex-col items-start justify-start p-4 m-4 sm:p-10 sm:m-10">
      <div className="font-semibold">
        <h2 className="text-[52px] leading-[70px] text-[#18180B]">
          Get your kurbli score and see how appealing your home could be to
          investors.
        </h2>
      </div>
      <div className="text-gray-600">
        <p className="">Get started by entering your email address below.</p>
      </div>

      <Input
        toggleScoreBadge={toggleScoreBadge}
        fn={setKurbilScore}
        final_score={kurbilScore}
      />
    </div>
  );
}
