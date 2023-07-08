/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import type { FC } from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import logo from "~/assets/lgog.png"
import { UserNav } from './user-nav'
import { useRouter } from 'next/router'

interface CommercialHeaderProps {
  type : boolean
}

const CommercialHeader: FC<CommercialHeaderProps> = ({type}) => {

    const router = useRouter()

  return<div className='w-full h-[70px]  bg-black '>
    {
      type ? 
      <div className="flex justify-between items-center h-full  container ">
      <div className='h-full flex items-center gap-x-4 justify-start w-[600px]'>
        <div className='w-[15%] flex items-center justify-start gap-x-2'>
          <Image
            src={logo}
            width={20} 
            height={20}
            alt='logo'
          />
          <h3 className='text-white text-xl mr-1 font-semibold'>Shawii</h3>
        </div>
             <Button 
             onClick={() => router.push("/commercial")}
             variant="ghost" 
             className={` cursor-pointer p-1 mr-4 text-zinc-100 rounded-lg ${
              //@ts-ignore
              router.asPath.split("?")[0].split("/").slice(0, 3).join("/") ===
              "/commercial"
              ? " text-white font-semibold"
              : "border-transparent text-gray-300 hover:text-gray-50"
            }`}
             >
             Les rapport
              </Button>
              <Button
               className={` cursor-pointer p-1 mr-4 text-zinc-100 rounded-lg ${
                //@ts-ignore
                router.asPath.split("?")[0].split("/").slice(0, 3).join("/") ===
                "/commercial/dommonds"
                ? " text-white font-semibold"
                : "border-transparent text-gray-300 hover:text-gray-50"
              }`}
              onClick={() => router.push("/commercial/dommonds")}
              variant="ghost" >
              Les dommands
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

export default CommercialHeader