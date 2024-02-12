import { BsCupHot } from "react-icons/bs";
import { FaGaugeHigh, FaBoxArchive } from "react-icons/fa6";
const Features = () => {
  return (
    <div className="w-full bg-gray-200">
      <div className="container w-[80%] mx-auto">
        <div className="features py-[58px] flex flex-row justify-between ">
          <div className="feature w-[310px] flex flex-col gap-2">
            <BsCupHot className="w-[4.5rem] h-[4.5rem]" />
            <h4 className="text-2xl">Awesome Aroma</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure.
            </p>
          </div>
          <div className="feature w-[310px] flex flex-col gap-2">
            <FaGaugeHigh className="w-[4.5rem] h-[4.5rem]" />
            <h4 className="text-2xl">Awesome Aroma</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure.
            </p>
          </div>
          <div className="feature w-[310px] flex flex-col gap-2">
            <FaGaugeHigh className="w-[4.5rem] h-[4.5rem]" />
            <h4 className="text-2xl">Awesome Aroma</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure.
            </p>
          </div>
          <div className="feature w-[310px] flex flex-col gap-2">
            <BsCupHot className="w-[4.5rem] h-[4.5rem]" />
            <h4 className="text-2xl">Awesome Aroma</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
