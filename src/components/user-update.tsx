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
import { openModelUser } from "~/reducer/edit-user-state"

type Props = {
    refetch : () => Promise<any>
  }

export function UserUpdate({refetch}:Props) {

    const {toast} = useToast()

    const [Appkications , setApplications] = useState<{id : string , title : string}[]>([])

    const userInfo = openModelUser()
    const isOpen = openModelUser(state => state.showModel)

    const setIsOpen = openModelUser(state => state.setShowModel)


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
  
   

    const userMutation = api.users.updateUser.useMutation({
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
        name : userInfo.Name,
        password : userInfo.Password ,
        email : userInfo.Email, 
        bio : userInfo.bio,
        type : userInfo.Type,
        allocateApplications : ""
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
          id : userInfo.id ,
            bio : inputs.bio , 
            email : inputs.email , 
            image : "" , 
            name : inputs.name , 
            password : inputs.password , 
            type : inputs.type ,
          
        })
         
    }

  return (
    <Sheet open={isOpen} onOpenChange={val => setIsOpen(val)} >
   
      <SheetContent 
      
      className="!w-[700px]  !bg-white "
     >
        <SheetHeader >
          <SheetTitle>Modifier un nouvel utilisateur</SheetTitle>
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
          
          onValueChange={(value) => setInputs({...inputs , type : value})} defaultValue={userInfo.Type || "client"}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent className="!bg-white w-full">
                 <SelectGroup>
                   <SelectLabel>les types</SelectLabel>
                   <SelectItem value="client">client</SelectItem>
                   <SelectItem value="commercial">commercial</SelectItem>
                   <SelectItem value="employee">employee</SelectItem>
                 </SelectGroup>
                </SelectContent>
          </Select>
          </div>
          {inputs.type === "employee" &&
          <div className="flex flex-col items-start !w-full gap-4">
          <Label htmlFor="name" >
             allocate application
           </Label>
         <Select onValueChange={(value) => setInputs({...inputs , allocateApplications : value})} defaultValue="">
               <SelectTrigger className="w-full">
                   <SelectValue placeholder="Sélectionnez un application " />
               </SelectTrigger>
               <SelectContent className="!bg-white">
                <SelectGroup>
                  <SelectLabel>les applications</SelectLabel>
                  {Appkications.map(item => (
                       <SelectItem key={item?.id} value={item?.id}>{item?.title}</SelectItem>
                  ))}
                 
                </SelectGroup>
               </SelectContent>
         </Select>
         </div>
        }
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
                type="email"
                onChange={e => setInputs({...inputs , email : e.target.value})}
                className="col-span-3" 
             />
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
