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

export function ServiceAdd({refetch}:Props) {

    const {toast} = useToast()
   

    const userMutation = api.services.createService.useMutation({
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
        description : "" ,
     
    })
  

    const handleSubmit =  () => {

        if(!inputs.title || !inputs.description  ){
            toast({
                className:"bg-red-500 text-white",
                variant: "destructive",
                title : "error",
                description : "all inputs are required"
              })
        }
        userMutation.mutate({
            title : inputs.title , 
            description : inputs.description , 
            url : `algeirtelecom.vercel.app//service/${inputs.title}`
        })
         
    }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">ajouter un nouvel service</Button>
      </SheetTrigger>
      <SheetContent className="!bg-white">
        <SheetHeader>
          <SheetTitle>Ajouter un nouvel service</SheetTitle>
          <SheetDescription>
          vous pouvez ajouter un autre utilisateur de type client ou de type commercial
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
     
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              title
            </Label>
            <Input 
               id="title"
                value={inputs.title}
                onChange={e => setInputs({...inputs , title : e.target.value})}
               className="col-span-3" />
          </div>
        
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              description
            </Label>
            <Textarea 
                 value={inputs.description}
                 onChange={e => setInputs({...inputs , description : e.target.value})}
                 id="bio" 
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
