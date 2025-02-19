
const LandingPage = () => {
  return (
    <div className="w-full  h-screen pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
            return (
                <div className="masker">
                    <h1 key={index} className="uppercase text-[6vw] leading-[6vw] font-medium tracking-tighter">
                        {item}
                    </h1>
                </div>
            )
        })}
      </div>

      
    </div>
  )
}

export default LandingPage
