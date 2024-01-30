import styles from "../style";
import {hero} from "../assets";
import Button2 from "./Button2";

const Hero = () => {
  return (
    <section id="about" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <h2 className="font-epilogue font-regular ss:text-[22px] xs:text-[22px] text-[42px] text-red-400 mb-5 tracking-widest ms:text-[22px]">
          GABRIEL PIRES  
        </h2> 
        <div className="flex flex-row  justify-between items-center w-full">
          <h1 className="flex-1 font-epilogue font-bold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[75px]">
            The Simple, <br className="sm:block hidden"/>{" "}
            <span className="font-bold">Clean Design</span>{" "}
          </h1>
        </div>

        <p className={`text-gray-300 max-w-[470px] mt-5`}>
          Agency provides a full service range including technical skills, design, business understanding.
        </p>

        <div className={`mt-10 ${styles.flexCenter}`}>
          <Button2/>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 ss:ml-10 my-10 relative mr-[60px] xs:block ms:ml-[50px]`}>
        <img src={hero} alt="hero" className="w-[100%] h-[100%] relative z-[5]"/>
      </div>
    </section>
  );
};

export default Hero;