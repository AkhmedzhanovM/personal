import {info, star, shape} from "../assets";

const Help = () => {
  return (
    <section className="pt-2 md:max-h-[50vh]">
      <div className="">
        <img src={star} className="relative top-[-90px]"/>
        <img src={shape} className="relative top-[-180px] right-[-58px]"/>
      </div>

      <div className="flex justify-between md:flex-row ms:flex-col ms:relative ms:top-[-120px]">
        <div className="">
          <h2 className="font-epilogue text-suptitle text-[20px]">GET STARTED</h2>
          <h1 className="font-epilogue text-title font-bold text-[40px] leading-[50px] mt-4">I Help Companies<br className=""/>Move Faster</h1>
          <button className="font-epilogue font-bold text-white bg-red-400 rounded-[5px] px-8 py-2 hover:bg-white hover:text-red-400 transition-all mt-4">CONTACT ME</button>
        </div>

        <div className="">
          <p className="font-epilogue text-title text-[15px] mt-14">Put themselves in the merchant's shoes. It is<br className=""/>meant to partner on the long run.</p>
        </div>

        <div className="">
          <img src={info} className=""/>
        </div>
      </div>
    </section>
  )
}

export default Help
