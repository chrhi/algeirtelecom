/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
    Dialog,
    DialogContent,
  } from "~/components/ui/dialog"

  
import{ useState, type FC } from 'react'
import { openUserProfile } from "~/reducer/light-models"
import { api } from "~/utils/api"
import { Loader2 } from "lucide-react"

const UserProfileModel: FC = () => {

    const isOpen = openUserProfile(state => state.showModel)
    const setIsOpen = openUserProfile(state => state.setShowModel)

    const id =  openUserProfile(state => state.id)

    const [client , setClient ] = useState<{
      id: string;
      name: string | null;
      password: string;
      following: string | null;
      type: string;
      bio: string | null;
      email: string | null;
      image: string | null;
      emailVerified: Date | null;
  } | null> (null)

    const [services , setService ] = useState<any[]>([])

    const [employees , setEmployees ] = useState<any[]>([])


    const {isLoading}  = api.profile.getProfile.useQuery({id }, {
      onSuccess(data) {
        setClient(data.user)
        setService(data.services)
        setEmployees(data.employees)
        console.log(data)
      },
    }) 




  return   <Dialog open={isOpen} onOpenChange={(val) => setIsOpen(val)}  >
  <DialogContent className="bg-white w-[360px] h-[600px]">
  <div className="w-full h-full flex flex-col items-start">
  {isLoading ?
   <div className="w-full h-full flex justify-center items-center ">
    <Loader2 className='mr-2 h-6 w-6 text-blue-500 animate-spin' /> 
    </div>
  :
   <>
     <h1 className="text-xl font-bold my-4">the services are used by  {client?.name}</h1>
    <div className="w-full min-h-[100px] h-fit flex gap-x-2 flex-wrap">
      {services.map(item => (
        <div key={item?.id} className="w-[100px] h-[80px] flex gap-x-2 items-center justify-between border">
            <img src={item?.image} alt="vatar" className="w-[45%]  rounded-lg " />
            <h1 className="text-sm">{item?.title}</h1>
        </div>
      ))}
    </div>
    <h1 className="text-xl font-bold my-4" >here are the employees working for {client?.name}</h1>
    <div className="w-full min-h-[100px] h-fit flex gap-x-2 flex-wrap">
    {employees.map(item => (
       <div key={item?.id} className="w-[100px] h-[80px] flex gap-x-2 items-center justify-between border">
            <img src={item?.image} alt="vatar" className="w-[45%]  rounded-lg " />
            <h1 className="text-sm">{item?.name}</h1>
       </div>
    ))}
    </div>
   </>
    }
    
   
    </div>
  </DialogContent>
</Dialog>

}

export default UserProfileModel