import { ArrowUpRight } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="w-full  h-screen pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <h1
                key={index}
                className="uppercase text-[6vw] leading-[6vw] font-medium tracking-tighter"
              >
                {item}
              </h1>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] px-20 py-5 border-zinc-800 mt-28 flex items-center justify-between">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}

        <div className="start-btn flex items-center justify-between gap-2">
          <div className="uppercase px-4 py-2 border-[2px] border-zinc-500 font-light text-sm rounded-full">
            Start the project
          </div>
          <div className="arrow w-10 h-10 rounded-full border-[1px] flex items-center justify-center">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
