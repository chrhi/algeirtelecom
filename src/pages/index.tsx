/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React from "react"
import AppLayout from "~/components/layout";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Icons } from "~/components/icons";
import { api } from "~/utils/api";
import { useToast } from "~/components/ui/use-toast";
import { useRouter } from "next/router";
import { userReducer } from "~/reducer/user-state";


export default function Home() {

  const router = useRouter()

  const { toast } = useToast()

  const setUser = userReducer(state => state.set_user)

  const userMutation = api.users.signInUser.useMutation({
    onSuccess : (data) => {
      setUser({
        email : data.email || "" , 
        name : data.name || "", 
        id : data.id , 
        photo : data.image || "",
        type : data.type
      })
      router.push("/admin")
      //todo handle that 
    },
    onError : (err) => {
      toast({
        className:"bg-red-500 text-white",
        variant: "destructive",
        title : "error",
        description : err.message
      })
    }
  })

 const [inputs , setInputs] = React.useState({
  email : "" , 
  password : ""
 })

 const handleSubmit = () => {
  if(!inputs.email || !inputs.password){
    toast({
      className:"bg-red-500 text-white",
      variant: "destructive", 
      title : "email and password are required"
    })
  }
  userMutation.mutate({
    email : inputs.email,
    password : inputs.password
  })
 }

  return (
   <AppLayout   auth={false}>
    
    <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl text-start font-semibold tracking-tight">
              S'identifier 
              </h1>
              <p className="text-sm text-start text-muted-foreground">
              Entrez votre email et votre mot de passe ci-dessous pour vous connecter à votre compte
              </p>
            </div>
          
        <div className="grid gap-2">
        
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
            E-mail
            </Label>
            <Input
              onChange={(e) => setInputs({...inputs , email :e.target.value})}
              value={inputs.email}
              id="email"
              placeholder="name@example.com"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          
           
              disabled={userMutation.isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
            mot de passe
            </Label>
            <Input
              onChange={(e) => setInputs({...inputs , password :e.target.value})}
              value={inputs.password}
              id="password"
              placeholder="*******"
              type="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              disabled={userMutation.isLoading}
            />
          </div>
          <Button 
                  onClick={handleSubmit}
                  disabled={userMutation.isLoading}
                  className=" text-white rounded-lg">
                  {userMutation.isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
           Se connecter avec un e-mail
          </Button>
        </div>

          
            
          </div>
        </div>
   
     
 
   </AppLayout>
  );
}