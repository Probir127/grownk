import React from 'react'
import chatbotUi from '../../assets/images/chatbot_ui.png'
const Offer = () => {
  return (
    <>
      <div className="container px-[5%]">
        <div className=" grid grid-cols-3 ">
            <div className=" col-span-2">
                <h5 className='text-[12px] uppercase text-gold font-semibold font-body tracking-[3px] mb-6'>
                    Chapter III
                </h5>
                <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,4rem)] text-main uppercase leading-none tracking-[1px] mb-6">
                    Turn Visitors Into
                    <span className="text-gold"> Paying Clients</span>
                </h2>
                <p className='text-muted text-[clamp(1rem,2vw,1.25rem)]'>
                    We now provide AI Chatbot & WhatsApp Automation services to help your business capture leads, answer customers instantly, and grow 24/7.
                </p>
            </div>
            <div className="mx-auto">
                <img src={chatbotUi} alt="" className='h-[350px]  rounded-2xl'/>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Offer
