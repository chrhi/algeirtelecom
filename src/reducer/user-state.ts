import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
type Reducer ={
   
   email : string ,
   id: string ,
   name  : string ,
   photo : string ,
   type : string ,
   set_user: (input : { email: string , photo: string , name : string , id : string , type : string}) => void 
}

export const userReducer = create<Reducer ,[["zustand/persist",unknown]]>(
    persist(
    (set) => ({
        type : "",
        email : "",
        photo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lgurxzZwpkDpQRks2gA5dSCJyoIzGrCyLQ&usqp=CAU" ,
        id: "",
        name : "" ,
        set_user:(input :{ email: string , photo: string , name : string , id : string , type : string}) => set({ 
             email : input.email ,
              photo: input.photo , name : input.name , id : input.id , type : input.type
            }),
    }),
    {
        name: 'app-projext-storage-HOME-user-needed-informations', 
        storage: createJSONStorage(() => sessionStorage)
      }
    )
)
