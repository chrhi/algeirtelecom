import { create } from 'zustand'

type OpenModelReport ={
    id : string,
    showModel: boolean,
    Status : string , 
    Email : string , 
    Name : string , 
    Type : string , 
    Password : string ,
    bio : string
    setShowModel : (input :boolean) => void,
    setId : (input:string) => void,
    setData : ({
        id ,
        showModel,
        Status  , 
        Email , 
        Name , 
        Type  , 
        Password ,
        bio ,
    }:{
        id : string,
        showModel: boolean,
        Status : string , 
        Email : string , 
        Name : string , 
        Type : string , 
        Password : string ,
        bio : string
    }) => void 
   
}
export const openModelUser = create<OpenModelReport>(

    (set) => ({
        id : "",
        showModel:false,
        Status : "" , 
        Email : "" , 
        Name : "" , 
        Type : "" , 
        Password : "" ,
        bio : "",
        setShowModel:(input :boolean ) => set({showModel : input}),
        setId : (input : string) => set({id : input}),
        setData : ({
            id ,
        showModel,
        Status  , 
        Email , 
        Name , 
        Type  , 
        Password ,
        bio
        }:{
            id : string,
            showModel: boolean,
            Status : string , 
            Email : string , 
            Name : string , 
            Type : string , 
            Password : string ,
            bio : string 
        }) => set({id  ,  showModel, Status  ,  Email  ,   Type ,  Name  ,  Password , bio }),
    }),
)