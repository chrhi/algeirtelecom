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
import { giveEmployee, giveService } from "~/reducer/light-models"
import { Label } from "../ui/label"
import { api } from "~/utils/api"
import { Button } from "../ui/button"

interface ReportRetailsAbdullahProps {
  refetch : () => Promise<any>
}

const AssignServiceModel: FC<ReportRetailsAbdullahProps> = ({refetch}) => {

  const isOpen = giveService(state => state.showModel)
  const setIsOpen = giveService(state => state.setShowModel)
  const id = giveService(state => state.id)

 const [value , setValue] = useState("")

 const [services , setServices] = useState<any[]>([])

 const mutation = api.deal.makeDeal.useMutation({
  onSuccess(){
    setIsOpen(false)
  }
 })

 const handleMutation = () => {
  mutation.mutate({
    employeeId : "" , 
    ServiceId : value,
    userId :id , 
    title : "making a deal"
  })
 }

 api.services.getServices.useQuery(undefined , {
  onSuccess(data) {
      setServices(data)
  },
 })
 


return   <Dialog open={isOpen} onOpenChange={(val) => setIsOpen(val)}  >
<DialogContent className="bg-white w-[400px] h-[250px]">
 <h1 className="text-2xl font-bold text-start text-slate-950">Sell a service to client for {services[0]?.cost}$</h1>
 <div className="flex flex-col items-start !w-full gap-4">
         <Label htmlFor="name" >
            please select a service
          </Label>
        <Select
        
        onValueChange={(value) => setValue(value)} defaultValue={services[0]?.id}>
              <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionnez un type" />
              </SelectTrigger>
              <SelectContent className="!bg-white w-full">
               <SelectGroup>
                 <SelectLabel>selected employee</SelectLabel>
                 {services.map(item => (
                   <SelectItem key={item?.id} value={item?.id}>{item?.title}</SelectItem>
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



export default AssignServiceModel