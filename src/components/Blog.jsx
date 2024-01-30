import {blog1, blog2, blog3} from "../assets";
import {blog} from '../constants';

const Blog = () => {
  return (
    <section className="">
      <div className="flex justify-between md:flex-row ms:flex-col xs:mx-20 mt-20">
        <div className="">
          <h2 className="font-epilogue text-suptitle text-[20px]">BLOG</h2>
          <h1 className="font-epilogue font-bold text-title text-[50px] leading-[50px] mt-4">Latest Blog<br className=""/>Articles</h1>
        </div>
        <div className="">
          <button className="font-epilogue font-bold text-title bg-white px-8 py-2 rounded-[5px] md:mt-24 ms:mt-12 hover:text-red-400 transition-all">DISCOVER ALL</button>
        </div>
      </div>

      <div className="flex justify-between md:flex-row ms:flex-col xs:mx-20 mt-20">
        <div className="cursor-pointer hover:opacity-90 transition-all">
          <img src={blog1} className="w-[550px] cursor-pointer"/>
          <h2 className="font-epilogue text-title mt-4">Stories</h2>
          <h1 className="font-epilogue text-title font-bold xs:text-[30px] xs:leading-[40px] ms:leading-[20px] xs:max-w-[500px] ms:max-w-[200px] mt-2">Agency is a business you hire to outsource</h1>
          <h2 className="font-epilogue text-title mt-2">5 Nov, 2023</h2>
        </div>
        <div className="flex flex-col">

        <div className="flex flex-col">
          {blog.map((blog) => (
            <div key={blog.id} className="mb-4 ms:mt-2">
              <img src={blog.img} className="cursor-pointer hover:opacity-90 transition-all md:max-w-[200px] ms:w-[400px] cursor-pointer"/>
              <h2 className="font-epilogue text-title mt-2">{blog.suptitle}</h2>
              <h1 className="font-epilogue text-title font-bold max-w-[200px] leading-[20px] mt-2">{blog.title}</h1>
              <h2 className="font-epilogue text-title mt-2">{blog.date}</h2>
            </div>
          ))}
        </div>
        </div>
      </div>

    <hr className="mt-10" style={{background: "#F3D1BF", height: "1px", border: "none"}}/>
    
      <div className="flex md:flex-row ms:flex-col justify-between md:mx-20 mt-10 pb-20">
        <div className="">
          <h1 className="font-epilogue text-title font-bold text-[20px]">Newsletter</h1>
          <p className="font-epilogue text-title mt-4">A digital agency is a business you hire to outsource</p>
        </div>
        <div className="flex md:flex-row ms:flex-col md:mt-2 mt-10">
          <input name="" className="border-[0.5px] border-red-400 rounded-[5px] md:w-[300px] h-[40px] pl-5" placeholder="Your Email"/>  
          <button className="font-epilogue font-bold text-title bg-white px-8 py-2 h-[38px] rounded-[5px] hover:text-red-400 transition-all md:mx-10 md:mt-0 ms:mt-4">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  )
}

export default Blog
 