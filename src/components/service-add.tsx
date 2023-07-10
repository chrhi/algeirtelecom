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

    const [isOpen , setIsOpen] = useState(false)
   

    const userMutation = api.services.createService.useMutation({
        onSuccess : async () => {
            await  refetch()
            setIsOpen(false)
        }, 
        onError :(err) => {
          setIsOpen(false)
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
        imageUrl : "",
        cost : ""
     
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
            url : `algeirtelecom.vercel.app//service/${inputs.title}`,
            imageUrl : inputs.imageUrl,
            cost : Number(inputs.cost)
        })
         
    }

  return (
    <Sheet open={isOpen} onOpenChange={val => setIsOpen(val)}>
      <SheetTrigger asChild>
        <Button variant="outline">ajouter un nouvel service</Button>
      </SheetTrigger>
      <SheetContent className="!bg-white w-[600px]">
        <SheetHeader>
          <SheetTitle>Ajouter un nouvel service</SheetTitle>
          <SheetDescription>
          vous pouvez ajouter un autre utilisateur de type client ou de type commercial
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
     
        <div className="flex flex-col items-start !w-full gap-4">
            <Label htmlFor="title" className="text-right">
              title
            </Label>
            <Input 
               id="title"
                value={inputs.title}
                onChange={e => setInputs({...inputs , title : e.target.value})}
               className="col-span-3" />
          </div>

          <div className="flex flex-col items-start !w-full gap-4">
            <Label htmlFor="title" className="text-right">
              image url
            </Label>
            <Input 
               id="title"
                value={inputs.imageUrl}
                onChange={e => setInputs({...inputs , imageUrl : e.target.value})}
               className="col-span-3" />
          </div>

          <div className="flex flex-col items-start !w-full gap-4">
            <Label htmlFor="title" className="text-right">
              cost
            </Label>
            <Input 
               id="title"
                value={inputs.cost}
                onChange={e => setInputs({...inputs , cost : e.target.value})}
               className="col-span-3" />
          </div>
        
          <div className="flex flex-col items-start !w-full gap-4">
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
       
            <Button isLoading={userMutation.isLoading} onClick={handleSubmit}>Créer un service</Button>
        
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
