import { create } from 'zustand'

type OpenModel ={
    id : string,
    showModel: boolean,
    setShowModel : (input :boolean) => void,
    setId : (input:string) => void,
   
}


export const giveEmployee = create<OpenModel>(

    (set) => ({
        id : "",
        showModel:false,
        setShowModel:(input :boolean ) => set({showModel : input}),
        setId : (input : string) => set({id : input}),
       
    }),
)

export const giveService = create<OpenModel>(

    (set) => ({
        id : "",
        showModel:false,
        setShowModel:(input :boolean ) => set({showModel : input}),
        setId : (input : string) => set({id : input}),
       
    }),
)
