import {dream} from "../assets"

const Dream = () => {
  return (
    <section className="flex justify-between md:flex-row ms:flex-col pb-20">
      <div className="mt-36">
        <h2 className="font-epilogue text-suptitle text-[20p]">GABRIEL PIRES</h2>
        <h1 className="font-epilogue text-title font-bold leading-[50px] text-[50px] max-w-[400px] mt-6">Help To Build Your Dream Project</h1>
        <p className="font-epilogue text-title max-w-[460px] mt-6">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
        <button className="font-epilogue text-white px-8 py-2 rounded-[5px] font-bold bg-red-400 mt-6 hover:text-red-400 hover:bg-white transition-all">CONTACT ME</button>
      </div>

      <div className="mt-20">
        <img src={dream} className="w-[500px]"/>
      </div>
    </section>
  )
}

export default Dream
