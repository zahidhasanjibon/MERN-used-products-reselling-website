import { AiFillCodeSandboxCircle, AiOutlineIdcard, AiOutlineShoppingCart } from "react-icons/ai"
import { FaHandHoldingUsd } from "react-icons/fa"
import { TbTruckDelivery } from "react-icons/tb"

export default function HeroSection() {
  return (

    <div className="px-8">
 <div className='flex lg:flex-nowrap flex-wrap gap-12 justify-center bg-white drop-shadow-2xl p-8 mt-12'>

        
    <div className='w-11/12 text-center'>
      <div className="flex">
          <div>
          <TbTruckDelivery size={40} color="pink" />
          </div>
          <div className="ml-6">
            <h4 className="text-start font-semibold">Free Delivery</h4>
            <p className="text-pink-400">Free Shipping Worlwide</p>
          </div>
      </div>

    </div>
    <div className='w-11/12 text-center '>
    <div className="flex">
          <div>
          < AiOutlineShoppingCart size={40} color="pink"/>
          </div>
          <div className="ml-6">
            <h4 className="text-start font-semibold">Unlimited Cart</h4>
            <p className="text-pink-500">Collect Worlwide</p>
          </div>
      </div>
    </div>
    <div className='w-11/12 text-center'>
    <div className="flex">
          <div>
          <FaHandHoldingUsd size={40} color="pink"/>
          </div>
          <div className="ml-6">
            <h4 className="text-start font-semibold">Easy Transfer</h4>
            <p className="text-pink-400">Money easy Worlwide</p>
          </div>
      </div>
    </div>
    <div className='w-11/12 text-center'>
    <div className="flex">
          <div>
          <AiOutlineIdcard size={40} color="pink"/>
          </div>
          <div className="ml-6">
            <h4 className="text-start font-semibold">Card Supported</h4>
            <p className="text-pink-400">All over Worlwide</p>
          </div>
      </div>
    </div>
    <div className='w-11/12 text-center'>
    <div className="flex">
          <div>
          <AiFillCodeSandboxCircle size={40} color="pink"/>
          </div>
          <div className="ml-6">
            <h4 className="text-start font-semibold">Exclusive Delivery</h4>
            <p className="text-pink-400 text-start">Double Bonus</p>
          </div>
      </div>
    </div>




    </div>

    </div>
   
  )
}
