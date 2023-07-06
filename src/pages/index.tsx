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


export default function Home() {

  const router = useRouter()

  const { toast } = useToast()

  const userMutation = api.users.signInUser.useMutation({
    onSuccess : (data) => {
      if(data.type === "admin"){
        router.push("/admin")
      }else{
        router.push("/commercial")
      }
      //todo handle that 
    },
    onError : (err) => {
      toast({
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
      title : "email and password are required"
    })
  }
  userMutation.mutate({
    email : inputs.email,
    password : inputs.password
  })
 }

  return (
   <AppLayout auth={false}>
    
    <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl text-start font-semibold tracking-tight">
                Sign in  
              </h1>
              <p className="text-sm text-start text-muted-foreground">
                Enter your email and password below to sign in to your account
              </p>
            </div>
          
        <div className="grid gap-2">
        
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              onChange={(e) => setInputs({...inputs , email :e.target.value})}
              value={inputs.email}
              id="email"
              placeholder="name@example.com"
              
          
           
              disabled={userMutation.isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              password
            </Label>
            <Input
              onChange={(e) => setInputs({...inputs , password :e.target.value})}
              value={inputs.password}
              id="password"
              placeholder="*******"
              type="password"
           
              disabled={userMutation.isLoading}
            />
          </div>
          <Button 
                  onClick={handleSubmit}
                  disabled={userMutation.isLoading}
                  className="bg-emerald-600 text-white rounded-lg">
                  {userMutation.isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>

          
            
          </div>
        </div>
   
     
 
   </AppLayout>
  );
}
