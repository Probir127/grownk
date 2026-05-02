import React from 'react'
import chatbotUi from '../../assets/images/chatbot_ui.png'
import { Ri24HoursFill } from 'react-icons/ri'
import { FaWhatsapp } from 'react-icons/fa'
import { BsGraphUpArrow } from 'react-icons/bs'
import { VscRobot } from 'react-icons/vsc'
const Offer = () => {
  return (
    <>
      <div className="container px-[5%] rounded-2xl my-9 py-8 bg-radial-[at_80%_70%] from-gold/20 via-zinc-950 to-black">
        <div className=" grid grid-cols-3 items-center ">
          {/* -----------left side----------- */}
            <div className=" col-span-2">
                <h5 className='text-[12px] uppercase text-gold font-semibold font-body tracking-[3px] mb-6'>
                    Chapter III
                </h5>
                <h2 className="font-['Bebas_Neue'] text-[clamp(2.5rem,6vw,4rem)] text-main uppercase leading-none tracking-[1px] mb-6">
                    Turn Visitors Into
                    <span className="text-gold"> Paying Clients</span>
                </h2>
                <p className='text-muted text-[clamp(1rem,2vw,1.25rem)]'>
                    Turn your website visitors into paying customers automatically using AI Chatbots & WhatsApp Automation — working 24/7 even when you sleep. Businesses using AI automation are already getting 2–5x more leads than traditional methods.
                </p>
                <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-6 w-[50%]">
                  {/* item-1 */}
                  <div className="bg-gold/20 rounded-full p-2 inline-flex items-center gap-3 border border-gold text-gold">
                    <Ri24HoursFill className=' w-5 h-5'/>
                    <p className=' font-body font-light text-[12px]'>24/7 Auto Reply</p>
                  </div>
                  {/* item-2 */}
                  <div className="bg-gold/20 rounded-full p-2 inline-flex items-center gap-3 border border-gold text-gold">
                    <FaWhatsapp className=' w-5 h-5'/>
                    <p className=' font-body font-light text-[12px]'>WhatsApp Integration </p>
                  </div>
                  {/* item-3 */}
                  <div className="bg-gold/20 rounded-full p-2 inline-flex items-center gap-3 border border-gold text-gold">
                    <BsGraphUpArrow className=' w-5 h-5'/>
                    <p className=' font-body font-light text-[12px]'>More Leads</p>
                  </div>
                  {/* item-4 */}
                  <div className="bg-gold/20 rounded-full p-2 inline-flex items-center gap-3 border border-gold text-gold">
                    <VscRobot className=' w-5 h-5'/>
                    <p className=' font-body font-light text-[12px]'>AI Smart Responses</p>
                  </div>
                </div>
            </div>
            {/* ---------------right side--------------- */}
            <div className="mx-auto flex justify-center items-center relative">
              <div className=" border border-gold rounded-2xl shadow-[0_0_50px_rgba(245,166,35,0.12)] ">
                <img src={chatbotUi} alt="" className='h-[400px]  rounded-2xl'/>
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-4 -right-10 bg-[#f6a500] text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                AI Active Now
              </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default Offer
