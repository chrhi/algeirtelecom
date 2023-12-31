/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
    Dialog,
    DialogContent,
  } from "~/components/ui/dialog"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select"
import { useState, type FC } from 'react'
import { giveEmployee } from "~/reducer/light-models"
import { Label } from "../ui/label"
import { api } from "~/utils/api"
import { Button } from "../ui/button"

interface ReportRetailsAbdullahProps {
    refetch : () => Promise<any>
}


type userType = {
  id: string;
  name: string | null;
  password: string;
  following: string | null;
  type: string;
  bio: string | null;
  email: string | null;
  image: string | null;
  emailVerified: Date | null;
} | null

const GiveEmployeeModel: FC<ReportRetailsAbdullahProps> = ({refetch}) => {

    const isOpen = giveEmployee(state => state.showModel)
    const setIsOpen = giveEmployee(state => state.setShowModel)
    const id = giveEmployee(state => state.id)
  
   const [value , setValue] = useState("")

   const [employees , setEmployees] = useState<any[]>([])

   const [user , setUser] = useState<userType>({} as userType)

   
 const Firstmutation = api.users.getOneUser.useMutation({
  onSuccess(data) {
    mutation.mutate({
      clientId : id , 
      employeeId : value,
      bio :   data?.bio || "",
      email :  data?.email || "",
      following :   data?.following || "",
      image :  data?.image || "",
      name : data?.name|| "",
      password :  data?.password || "",
      type : data?.type || "",
    })
  },
 })

   const mutation = api.contract.createWorkContract.useMutation({
    onSuccess(data){
      console.log("employee contract")
      console.log(data)
      setIsOpen(false)
    }
   })

   const handleMutation = () => {
    Firstmutation.mutate({
      id : value
    })
  
   }

   api.users.getUsers.useQuery(undefined , {
    onSuccess(data) {
        const prepare = data.filter(item => item.type === "employee")
        setEmployees(prepare)
    },
   })
   


  return   <Dialog open={isOpen} onOpenChange={(val) => setIsOpen(val)}  >
  <DialogContent className="bg-white w-[400px] h-[250px]">
   <h1 className="text-2xl font-bold text-start text-slate-950">sell a service to client</h1>
   <div className="flex flex-col items-start !w-full gap-4">
           <Label htmlFor="name" >
              the current employee
            </Label>
          <Select
          
          onValueChange={(value) => setValue(value)} defaultValue={employees[0]?.id}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent className="!bg-white w-full">
                 <SelectGroup>
                   <SelectLabel>selected employee</SelectLabel>
                   {employees.map(item => (
                     <SelectItem key={item?.id} value={item?.id}>{item?.name}</SelectItem>
                   ))
                     }

                 </SelectGroup>
                </SelectContent>
          </Select>
          </div>
          <div className="w-full h-[70px] flex items-center justify-end gap-x-4">
                <Button variant="outline">
                   Cancel
                </Button>
                <Button
                disabled={mutation.isLoading}
                onClick={handleMutation}>
                    Assign
                </Button>
               
          </div>
  </DialogContent>
</Dialog>

}

export default GiveEmployeeModel