import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet"

import { useState } from "react"
import { Textarea } from "./ui/textarea"
import { api } from "~/utils/api"



import { useToast } from "./ui/use-toast"

type Props = {
    refetch : () => Promise<any>
  }

export function RapportAdd({refetch}:Props) {

    const {toast} = useToast()

    
   

    const userMutation = api.report.createReport.useMutation({
        onSuccess : async () => {
            await  refetch()
        }, 
        onError :(err) => {
            toast({
                className:"bg-red-500 text-white",
                variant: "destructive",
                title : "error",
                description : err.message
              })
        }
    })

    const [inputs , setInputs] = useState({
        title : "",
        request : "" ,
        clientInformations : "", 
        details : "",
    })
  

    const handleSubmit =  () => {

        if(!inputs.title || !inputs.request || !inputs.clientInformations || !inputs.details ){
            toast({
                className:"bg-red-500 text-white",
                variant: "destructive",
                title : "error",
                description : "all inputs are required"
              })
        }
        userMutation.mutate({
            ClientInformation : inputs.clientInformations , 
            Details : inputs.details , 
            Request : inputs.request , 
            title : inputs.title ,
            userId : ""
        })
         
    }

  return (
    <Sheet  >
      <SheetTrigger asChild>
        <Button >Créer un rapport commercial</Button>
      </SheetTrigger>
      <SheetContent className="!bg-white " >
        <SheetHeader>
          <SheetTitle>Ajouter un rapport commercial</SheetTitle>
          <SheetDescription>
          à ce niveau, vous pouvez créer de nouveaux rapports
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
        
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="client-info" className="text-right">
              le titre
            </Label>
            <Textarea 
                 value={inputs.title}
                 onChange={e => setInputs({...inputs , title : e.target.value})}
                 id="client-info" 
                 className="col-span-3" />
          </div>
        
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="client-info" className="text-right">
              les informations de client
            </Label>
            <Textarea 
                 value={inputs.clientInformations}
                 onChange={e => setInputs({...inputs , clientInformations : e.target.value})}
                 id="client-info" 
                 className="col-span-3" />
          </div>

         
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="client-info" className="text-right">
            la demande
            </Label>
            <Textarea 
                 value={inputs.request}
                 onChange={e => setInputs({...inputs , request : e.target.value})}
                 id="client-info" 
                 className="col-span-3" />
          </div>
         
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="details" className="text-right">
              les details
            </Label>
            <Textarea 
                 value={inputs.details}
                 onChange={e => setInputs({...inputs , details : e.target.value})}
                 id="details" 
                 className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleSubmit}>Créer un utilisateur</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
