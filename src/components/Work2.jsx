import {art1, art2, art3} from "../assets";

const Work2 = () => (
    <section className="">
        <div className="flex justify-between md:flex-row ms:flex-col">
            <div className="flex flex-col">
                <h2 className="text-suptitle font-epilogue mt-20 text-[20px]">PORTFOLIO</h2>
                <h1 className="text-white font-epilogue font-bold text-[50px] mt-2">Latest Work</h1>
            </div>
            <button type="button" className="text-white border-[0.5px] border-gray-400 rounded-[5px] font-epilogue font-bold hover:text-red-400 hover:border-red-400 h-[40px] w-[150px] md:mt-32 ms:mt-4 transition-all">EXPLORE MORE</button>
        </div>

        <div className="flex justify-between mt-20 md:flex-row ms:flex-col ms:items-center">
            <div className="cursor-pointer">
                <img src={art1} className="w-[350px] hover:border-[2px] border-red-400 transition-all hover:opacity-90"/>
                <div className="bg-white relative bottom-[120px] left-[20px] w-[80px] py-2 rounded-full">
                    <h2 className="font-epilogue text-title text-center">Design</h2>
                </div>
                <h1 className="text-white font-epilogue font-bold text-[30px] ml-6 relative bottom-[110px]">SOFA</h1>
            </div>
            <div className="cursor-pointer">
                <img src={art2} className="w-[350px] hover:border-[2px] border-red-400 transition-all hover:opacity-90"/>
                <div className="bg-white relative bottom-[120px] left-[20px] w-[90px] py-2 rounded-full">
                    <h2 className="font-epilogue text-title text-center">Branding</h2>
                </div>
                <h1 className="text-white font-epilogue font-bold text-[30px] ml-6 relative bottom-[110px]">KeyBoard</h1>
            </div>
            <div className="cursor-pointer">
                <img src={art3} className="w-[350px] hover:border-[2px] border-red-400 transition-all hover:opacity-90"/>
                <div className="bg-white relative bottom-[120px] left-[20px] w-[110px] py-2 rounded-full">
                    <h2 className="font-epilogue text-title text-center">Illustration</h2>
                </div>
                <h1 className="text-white font-epilogue font-bold text-[30px] ml-6 relative bottom-[110px]">Work Media</h1>
            </div>
        </div>
    </section>
)

export default Work2
