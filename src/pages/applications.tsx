/* eslint-disable react/no-unescaped-entities */
import {  Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import AppDeleteAlert from '~/components/alerts/delete-app'
import AppLayout from '~/components/layout'
import {columns} from "~/components/tables/service/columns"
import {DataTable} from "~/components/tables/service/data-table"
import { api } from '~/utils/api'
import { Badge } from '~/components/ui/badge'

function Page() {

  const [data , setData] = useState<any[]>([])

  const {refetch , isFetching} = api.services.getServices.useQuery(undefined , {
    onSuccess(data) {
      const DataFORMATED = data?.map((item) => {
        return{
          id: item.id,
          title : item.title , 
          description: item.description,
          url : item.url as string , 
          cost : item.cost,
          image : item.image
        }
      })
      setData(DataFORMATED)
    },
  })

  return (
   <AppLayout  auth = {true}>
    <AppDeleteAlert refetch={refetch} />
       <div className='w-full  flex flex-col items-start h-full  '>
       <div className="flex items-center justify-between mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">ici vous pouvez voir et créer toutes les applications (services)</h2>
          
            <Badge color='bg-sky-300' className='bg-sky-50 border-blue-500   rounded-full font-normal text-blue-500' >
             
             {isFetching ? 
             <div className='flex gap-x-1'>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' /> loading...
             </div>
            
             :  
              "up to date"
             }
           </Badge>
          </div>
          
        </div>
        <DataTable refetch={refetch} data={data}  columns={columns} />
       </div>
   </AppLayout>
  )
}

export default Page