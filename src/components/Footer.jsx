import {footer1, footer2, footer3} from '../constants';

const Footer = () => {
  return (
    <section className='pb-20'>
      <div className='pt-20 flex md:flex-row ms:flex-col justify-center md:items-start md:text-start ms:items-center ms:text-center'>
        <div className='md:mr-40'>
          <h1 className='font-epilogue font-bold text-[30px] text-white'>Personal</h1>
        </div>

        <div className='flex flex-col md:mr-40 md:pt-2 ms:pt-8'>
          <h2 className='font-epilogue text-suptitle text-[20px] pb-6'>MENU</h2>
          {footer1.map((footer1) => (
            <div key={footer1.id} className='pt-2'>
              <a href='/' className='font-epilogue text-white text-[15px] hover:text-red-400 transition-all'>{footer1.link}</a>
            </div>
          ))}
        </div>

        <div className='flex flex-col md:mr-60 md:pt-2 ms:pt-8'>
          <h2 className='font-epilogue text-suptitle text-[20px] pb-6'>SERVICES</h2>
          {footer2.map((footer2) => (
            <div key={footer2.id} className='pt-2'>
              <a href='/' className='font-epilogue text-white text-[15px] hover:text-red-400 transition-all'>{footer2.link}</a>
            </div>
          ))}
        </div>

        <div className='flex flex-row relative bottom-2'>
            {footer3.map((footer3) => (
              <div key={footer3.id} className='md:pt-2 ms:pt-8'>
                <img src={footer3.img} className='cursor-pointer'/>
              </div>
            ))}
        </div> 
      </div>

      <hr className="mt-10" style={{background: "#3A3C56", height: "2px", border: "none"}}/>

      <div className='flex justify-between md:flex-row ms:flex-col'>
        <div className=''>
          <h2 className='font-epilogue text-[15px] text-gray-400 mt-10 ms:text-center'>Copyright © 2024 Ахмеджанов. All Rights Reserved.</h2>
        </div>

        <div className='flex justify-between mt-10 md:ml-[400px]'>
          <a href='/' className='font-epilogue text-white hover:text-red-400 transition-all md:mr-10'>Terms of Use</a>
          <a href='/' className='font-epilogue text-white hover:text-red-400 transition-all'>Privacy Policy</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
