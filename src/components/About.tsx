const About = () => {
  return (
    <div className="w-full  bg-[#cdeb69] rounded-t-3xl text-black">
      <h1 className="text-[3.2vw] p-20 leading-[4vw] ">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-t-[1px] p-10 flex itemscenter justify-between  border-[#95ad43]">
        <div className="w-1/2 px-10">
          <h1 className="text-4xl font-medium">Our approach:</h1>
          <button className=" flex items-center uppercase gap-8 px-6 py-4 mt-[1vw] bg-zinc-900 rounded-full text-zinc-100">
            Read More
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2  h-[70vh] ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
