import {design, development, plus} from "../assets";

const Work = () => (
  <section id="services" className="bg-secondary">
    <h2 className="font-epilogue text-suptitle flex justify-center mt-20 text-[20px]">SERVICE</h2>
    <h1 className="text-title flex justify-center font-epilogue font-bold xs:text-[50px] ms:text-[40px] mt-2">How I Can Help</h1>
    <h1 className="text-title flex justify-center font-epilogue font-bold xs:text-[50px] ms:text-[40px] leading-10">You With</h1>

    <div className="flex justify-center mt-20 md:flex-row ms:flex-col">
      <div className="border-[0.5px] border-red-400 p-10 py-8 pb-2 xs:pr-[100px] ms:pr-2">
        <img src={design} className="w-[80px]"/>
        <h2 className="text-title font-bold font-epilogue relative bottom-14 left-24 text-[20px]">Design</h2>
        <p className="text-title max-w-[400px]">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
        <img src={plus} className="mt-10 cursor-pointer"/>
        <button className="font-epilogue text-title cursor-pointer hover:text-red-400 hover:underline relative bottom-10 left-16">Learn More</button>
      </div>
      <div className="border-[0.5px] border-red-400 p-10 py-8 pb-2 xs:pr-[100px] ms:pr-2">
        <img src={development} className="w-[80px]"/>
        <h2 className="text-title font-bold font-epilogue relative bottom-14 left-24 text-[20px]">Development</h2>
        <p className="text-title max-w-[400px]">Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
        <img src={plus} className="mt-10 cursor-pointer"/>
        <button className="font-epilogue text-title cursor-pointer hover:text-red-400 hover:underline relative bottom-10 left-16">Learn More</button>
      </div>
    </div>

    <h2 className="text-title font-epilogue flex justify-center mt-20 pb-20">Want more service? <button className="ml-2 font-epilogue text-black cursor-pointer hover:underline">Explore Now</button></h2>
  </section>
)

export default Work
