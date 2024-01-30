import {professional, experience, development} from "../assets";

const Professional = () => {
  return (
    <section className="mt-20 pb-20">
      <div className="flex xs:mr-28 justify-center md:flex-row ms:flex-col">
        <div className="xs:mx-10">
          <img src={professional} className=""/>
        </div>

        <div className="xs:mx-10 xs:mt-28 ms:mt-0">
          <h2 className="font-epilogue text-suptitle text-[20px]">GABRIEL PIRES</h2>
          <h1 className="font-epilogue font-bold text-title text-[50px] leading-[60px] mt-4">Professional<br className=""/>Web Designer</h1>
          <h2 className="font-epilogue text-title text-[20px] mt-4">Provides a full service range</h2>
          <p className="font-epilogue text-title text-[15px] max-w-[400px] text-[15px] mt-4">Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.</p>
          <button className="font-epilogue text-title font-bold bg-white px-8 py-2 rounded-[5px] hover:text-red-400 transition-all mt-4">ABOUT ME</button>
        </div>
      </div>

      <div className="flex justify-center xs:flex-row ms:flex-col mt-20">
        <div className="border-[0.5px] border-red-400 rounded-[5px] px-10 pr-40 py-6 flex flex-row">
          <div className="">
            <img src={experience} className="max-w-[80px]"/>
          </div>
          <div className="ml-6">
            <h1 className="font-epilogue font-bold text-title text-[30px]">42%</h1>
            <h2 className="font-epilogue text-title">Years of Experience</h2>
          </div>
        </div>

        <div className="border-[0.5px] border-red-400 rounded-[5px] px-10 pr-40 py-6 flex flex-row">
          <div className="">
            <img src={experience} className="max-w-[80px]"/>
          </div>
          <div className="ml-6">
            <h1 className="font-epilogue font-bold text-title text-[30px]">42%</h1>
            <h2 className="font-epilogue text-title">Years of Experience</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Professional
