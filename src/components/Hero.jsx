const Hero = () => {
  return (
    <div className=" bg-black/90 text-white h-[800px]  flex flex-col justify-center items-center gap-6">
      <h2 className="text-5xl tracking-wider ">
        Would you like a coup of Delicious Coffee?
      </h2>
      <p className=" tracking-widest text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        aliquid, <br /> nemo officiis mollitia illo perspiciatis?
      </p>
      <div>
        <button className="bg-yellow-600/80 hover:bg-yellow-500 text-yellow-50 duration-300 px-6 py-2 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
