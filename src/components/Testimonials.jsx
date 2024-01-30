import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <section className="pb-20">
      <h2 className="font-epilogue text-suptitle flex justify-center text-[20px] mt-20">TESTIMONIALS</h2>
      <h1 className="font-epilogue text-title flex justify-center text-center font-bold text-[50px] leading-[50px] mt-4">What My<br className=""/>Clients Saying</h1>

      <div className="flex justify-center md:flex-row ms:flex-col mt-20">
        {testimonials.map((testimonials) => (
          <div key={testimonials.id} className="border-[0.5px] border-red-400 rounded-[5px] px-10 py-14 hover:bg-white hover:px-12 transition-all cursor-pointer">
            <img src={testimonials.imgStars} className=""/>
            <p className="font-epilogue text-title w-[290px] mt-4">{testimonials.content}</p>
            <div className="flex flex-row">
              <div className="">
                <img src={testimonials.imgClients} className="mt-4"/>  
              </div>              
              <div className="mt-8 ml-4">
                <h1 className="font-epilogue text-title font-bold">{testimonials.name}</h1>
                <h2 className="font-epilogue text-title">{testimonials.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="font-epilogue font-bold text-title bg-white px-8 py-2 rounded-[5px] hover:text-red-400 transition-all mt-4">SEE ALL</button>
      </div>
    </section>
  )
}

export default Testimonials
