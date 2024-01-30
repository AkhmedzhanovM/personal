import {arrow, logo1, logo2, logo3, logo4, logo5} from "../assets";
import {useState} from 'react';

const FAQ = () => {
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  return (
    <section className="">
      <div className="flex justify-center md:flex-row ms:flex-col">
        <div className="mt-20 xs:mx-12">
          <h2 className="font-epilogue text-suptitle text-[20px]">FAQ</h2>
          <h1 className="font-epilogue font-bold text-[50px] leading-[50px] text-white mt-4">Frequently Asked<br className=""/>Questions</h1>
          <p className="font-epilogue text-gray-400 max-w-[450px] mt-4">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
          <button className="font-epilogue hover:underline hover:text-red-400 text-white mt-4">Contact Me</button>
        </div>

        <div className="mt-20 xs:mx-12">
          <div className="flex flex-col">
            <div className={`${toggle ? 'bg-white' : 'bg-none'} transition-all duration-200 border-[0.5px] border-gray-600 rounded-[5px] xs:w-[450px] ms:max-w-[450px] px-10 py-8`}>
              <div className="flex justify-between">
                <h1 className={`${toggle ? 'text-title' : 'text-white'} font-epilogue text-title font-bold text-[16px]`}>A digital agency is a business</h1>
                <img onClick={() => setToggle((prev) => !prev)} src={arrow} className={`${toggle ? 'rotate-180' : 'rotate-none'} relative bottom-1 cursor-pointer w-[30px] h-[30px]`}/>
              </div>
              <p className={`${toggle ? 'flex' : 'hidden'} font-epilogue text-title max-w-[450px] text-[14px] mt-4`}>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </div>

            <div className={`${toggle2 ? 'bg-white' : 'bg-none'} transition-all duration-200 border-[0.5px] border-gray-600 rounded-[5px] max-w-[450px] px-10 py-8`}>
              <div className="flex justify-between">
                <h1 className={`${toggle2 ? 'text-title' : 'text-white'} font-epilogue text-title font-bold text-[16px]`}>Hire to outsource your digital</h1>
                <img onClick={() => setToggle2((prev) => !prev)} src={arrow} className={`${toggle2 ? 'rotate-180' : 'rotate-none'} relative bottom-1 cursor-pointer w-[30px] h-[30px]`}/>
              </div>
              <p className={`${toggle2 ? 'flex' : 'hidden'} font-epilogue text-title max-w-[450px] text-[14px] mt-4`}>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </div>

            <div className={`${toggle3 ? 'bg-white' : 'bg-none'} transition-all duration-200 border-[0.5px] border-gray-600 rounded-[5px] max-w-[450px] px-10 py-8`}>
              <div className="flex justify-between">
                <h1 className={`${toggle3 ? 'text-title' : 'text-white'} font-epilogue text-title font-bold text-[16px]`}>Marketing efforts</h1>
                <img onClick={() => setToggle3((prev) => !prev)} src={arrow} className={`${toggle3 ? 'rotate-180' : 'rotate-none'} relative bottom-1 cursor-pointer w-[30px] h-[30px]`}/>
              </div>
              <p className={`${toggle3 ? 'flex' : 'hidden'} font-epilogue text-title max-w-[450px] text-[14px] mt-4`}>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </div>

            <div className={`${toggle4 ? 'bg-white' : 'bg-none'} transition-all duration-200 border-[0.5px] border-gray-600 rounded-[5px] max-w-[450px] px-10 py-8`}>
              <div className="flex justify-between">
                <h1 className={`${toggle4 ? 'text-title' : 'text-white'} font-epilogue text-title font-bold text-[16px]`}>Can provide your business</h1>
                <img onClick={() => setToggle4((prev) => !prev)} src={arrow} className={`${toggle4 ? 'rotate-180' : 'rotate-none'} relative bottom-1 cursor-pointer w-[30px] h-[30px]`}/>
              </div>
              <p className={`${toggle4 ? 'flex' : 'hidden'} font-epilogue text-title max-w-[450px] text-[14px] mt-4`}>Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20 pb-20">
        <img src={logo1} className=""/>
        <img src={logo2} className=""/>
        <img src={logo3} className=""/>
        <img src={logo4} className=""/>
        <img src={logo5} className=""/>
      </div>
    </section>
  )
}

export default FAQ
