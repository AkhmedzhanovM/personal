import {contact} from '../constants';

const Contact1 = () => {
  return (
    <section className="">
      <div className="flex justify-center mt-20 pb-20 md:flex-row ms:flex-col">
        <div className="sm:mx-20 bg-white flex flex-col rounded-[5px] px-8 py-10">
          <h1 className="font-epilogue text-title font-bold text-[20px]">Get In Touch</h1>
          <input name="" className="border-[0.5px] border-red-400 rounded-[5px] pl-4 py-2 sm:w-[400px] mt-6" placeholder="Your email"/>
          <input name="" className="border-[0.5px] border-red-400 rounded-[5px] pl-4 py-2 sm:w-[400px] mt-4" placeholder="Subject"/>
          <input name="" className="border-[0.5px] border-red-400 rounded-[5px] pl-4 pb-16 py-2 sm:w-[400px] h-[100px] mt-4" placeholder="Message"/>
          <button className="relative sm:right-[-260px] bg-red-400 text-white font-epilogue font-bold py-2 w-[140px] rounded-[5px] mt-4 hover:text-red-400 hover:bg-white transition-all">SUBMIT NOW</button>
        </div>

        <div className="sm:mx-20 md:mt-0 ms:mt-10">
          <h2 className="font-epilogue text-suptitle text-[20px]">CONTACT</h2>
          <h1 className="font-epilogue text-white font-bold text-[50px] mt-2">Contact Me</h1>
          <p className="font-epilogue text-gray-400 mt-2 max-w-[460px]">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>
          <div className="flex flex-col mt-8">
            {contact.map((contact) => (
              <div key={contact.id} className="">
                <img src={contact.img} className="bg-icon rounded-full p-2"/>
                <p className="font-epilogue text-white ml-12 relative bottom-8">{contact.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact1
