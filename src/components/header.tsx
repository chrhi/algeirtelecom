/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
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

  const router = useRouter();

  

  return<div className='w-full h-[70px] border-b bg-white  '>
    {
      type ? 
      <div className="flex justify-between items-center h-full  container ">
      <div className='h-full flex items-center gap-x-4 justify-start w-[700px]'>
        <div className='w-[35%] flex items-center justify-start gap-x-2'>
          <Image
            src={logo}
            width={30} 
            height={30}
            alt='logo'
          />
          <h3 className='text-gray-900 text-xl mr-1 font-semibold'>Algérie Télécom</h3>
        </div>
          
         </div>

         <UserNav />
      
      </div> 
  :
  <div className='container h-full flex justify-start gap-x-2 items-center'>
     <Image
            src={logo}
            width={30} 
            height={30}
            alt='logo'
      />
          <h3 className='text-gray-900 text-xl mr-1 font-semibold'>Algérie Télécom</h3>
  </div>
}
   </div>
}

export default Header