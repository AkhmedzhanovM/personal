import {look, check} from "../assets";

const Look = () => {
  return (
    <section className="flex xs:justify-center md:flex-row ms:flex-col pb-20">
      <div className="mt-40 xs:mx-10">
        <h2 className="font-epilogue text-suptitle text-[20px]">FEATURES</h2>
        <h1 className="font-epilogue text-white font-bold text-[50px] leading-[60px] mt-4">Give Your Site<br className=""/>A New Look</h1>
        <h2 className="font-epilogue text-white mt-4">Service range including technical skills, design,<br className=""/>business understanding.</h2>
        <div className="flex-col mt-8">
          <div className="">
            <img src={check} className=""/>
            <p className="font-pilogue text-gray-300 ml-10 relative bottom-[30px]">Range including technical skills</p>
          </div>
          <div className="">
            <img src={check} className=""/>
            <p className="font-pilogue text-gray-300 ml-10 relative bottom-[30px]">Business understanding</p>
          </div>
          <div className="">
            <img src={check} className=""/>
            <p className="font-pilogue text-gray-300 ml-10 relative bottom-[30px]">Partner on the long run</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <img src={look} className=""/>
      </div>
    </section>
  )
}

export default Look
