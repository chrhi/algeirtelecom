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

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "~/components/ui/select"

import { useToast } from "./ui/use-toast"

type Props = {
    refetch : () => Promise<any>
  }

export function UserAdd({refetch}:Props) {

    const {toast} = useToast()

    const [Appkications , setApplications] = useState<{id : string , title : string}[]>([])

    api.services.getServices.useQuery(undefined , {
      onSuccess(data) {
        const DataFORMATED = data?.map((item) => {
          return{
            id: item.id,
            title : item.title   as string
          }
        })
        setApplications(DataFORMATED)
      },
    })
  
   

    const userMutation = api.users.createUser.useMutation({
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
        name : "",
        password : "" ,
        email : "", 
        bio : "",
        type : "client",
        allocateApplications : "",
        imageUrl : ""
    })
  

    const handleSubmit =  () => {

        if(!inputs.name || !inputs.bio || !inputs.email || !inputs.password || !inputs.type){
            toast({
                className:"bg-red-500 text-white",
                variant: "destructive",
                title : "error",
                description : "all inputs are required"
              })
        }
        userMutation.mutate({
            bio : inputs.bio , 
            email : inputs.email , 
            image : inputs.imageUrl , 
            name : inputs.name , 
            password : inputs.password , 
            type :inputs.type ,
            allocateApplications : inputs.allocateApplications
        })
         
    }

  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="outline">ajouter un nouvel utilisateur</Button>
      </SheetTrigger>
      <SheetContent 
      
      className="!w-[700px]  !bg-white "
     >
        <SheetHeader >
          <SheetTitle>Ajouter un nouvel utilisateur</SheetTitle>
          <SheetDescription>
          vous pouvez ajouter un autre utilisateur de type client ou de type commercial
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
        <div className="flex flex-col items-start !w-full gap-4">
           <Label htmlFor="name" >
              Type
            </Label>
          <Select
          
          onValueChange={(value) => setInputs({...inputs , type : value})} defaultValue="client">
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent className="!bg-white w-full">
                 <SelectGroup>
                   <SelectLabel>les types</SelectLabel>
                   <SelectItem value="client">client</SelectItem>
                   <SelectItem value="admin">admin</SelectItem>
                   <SelectItem value="employee">employee</SelectItem>
                 </SelectGroup>
                </SelectContent>
          </Select>
          </div>
        
            <div className="flex flex-col items-start !w-full gap-4">
            <Label htmlFor="name" >
              Name
            </Label>
            <Input 
               id="name"
                value={inputs.name}
                onChange={e => setInputs({...inputs , name : e.target.value})}
               className="col-span-3" />
          </div>
          <div className="flex flex-col items-start !w-full gap-4">
            <Label htmlFor="PASSWORD" >
              password
            </Label>
            <Input 
                value={inputs.password}
                id="PASSWORD" 
                type="password"
                onChange={e => setInputs({...inputs , password : e.target.value})}
                className="col-span-3" 
             />
          </div>
          <div className="flex flex-col items-start !w-full gap-4">
            <Label htmlFor="PASSWORD" >
             email
            </Label>
            <Input 
                value={inputs.email}
                id="PASSWORD" 
                
                onChange={e => setInputs({...inputs , email : e.target.value})}
                className="col-span-3" 
             />
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
            <Label htmlFor="bio" >
              bio
            </Label>
            <Textarea 
                 value={inputs.bio}
                 onChange={e => setInputs({...inputs , bio : e.target.value})}
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
