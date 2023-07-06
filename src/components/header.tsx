import type { FC } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import logo from "~/assets/lgog.png"
import { UserNav } from './user-nav'
import { useRouter } from 'next/router'

interface HeaderAbdullahProps {
  type : boolean
}

const Header: FC<HeaderAbdullahProps> = ({type}) => {

  

  return<div className='w-full h-[70px]  bg-black '>
    {
      type ? 
      <div className="flex justify-between items-center h-full  container ">
      <div className='h-full flex items-center justify-start w-[600px]'>
        <div className='w-[15%] flex items-center justify-start gap-x-2'>
          <Image
            src={logo}
            width={20} 
            height={20}
            alt='logo'
          />
          <h3 className='text-white text-xl mr-1 font-semibold'>Shawii</h3>
        </div>
             <Button variant="ghost" className='text-white w-fit flex'>
                    Les utilisatures
              </Button>
         </div>

         <UserNav />
      
      </div> 
  :
  <div className='container h-full flex justify-start gap-x-2 items-center'>
     <Image
            src={logo}
            width={20} 
            height={20}
            alt='logo'
      />
        <h3 className='text-white text-xl mr-1 font-semibold'>Shawii</h3>
  </div>
}
   </div>
}

export default Header