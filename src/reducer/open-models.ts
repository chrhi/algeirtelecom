import { create } from 'zustand'

type OpenModelReport ={
    id : string,
    showModel: boolean,
    Title : string , 
    clientInformation : string , 
    Details : string , 
    Request : string , 
    Date : string ,
    setShowModel : (input :boolean) => void,
    setId : (input:string) => void,
    setData : ({
        id ,
        showModel,
        Title  , 
        clientInformation  , 
        Details , 
        Request  , 
        Date  ,
    }:{
        id : string,
        showModel: boolean,
        Title : string , 
        clientInformation : string , 
        Details : string , 
        Request : string , 
        Date : string ,
    }) => void 
   
}
export const openModelReport = create<OpenModelReport>(

    (set) => ({
        id : "",
        showModel:false,
        Title : "" , 
        clientInformation :  "" , 
        Details :  "" ,  
        Request :  "" , 
        Date :  "" , 
        setShowModel:(input :boolean ) => set({showModel : input}),
        setId : (input : string) => set({id : input}),
        setData : ({
            id ,
            showModel,
            Title  , 
            clientInformation  , 
            Details , 
            Request  , 
            Date  ,
        }:{
            id : string,
            showModel: boolean,
            Title : string , 
            clientInformation : string , 
            Details : string , 
            Request : string , 
            Date : string ,
        }) => set({id  ,  showModel, Title  ,  clientInformation  ,   Details ,  Request  ,  Date }),
    }),
)