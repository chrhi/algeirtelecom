/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import {  Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import AppLayout from '~/components/layout'
import {columns} from "~/components/tables/api-request/columns"
import {DataTable} from "~/components/tables/api-request/data-table"
import { Badge } from '~/components/ui/badge'
import { api } from '~/utils/api'


function Page() {

  const [data , setData] = useState<any[]>([])

  const {refetch , isFetching} = api.apiRequest.getApiRequests.useQuery(undefined , {
    onSuccess(data) {
      const DataFORMATED = data?.map((item) => {
        return{
          id: item.id,
          status :  item.status, 
          endPoint :  item.endPoint,
          responseTime  :  item.responseTime,  
          apiKey    :  item.apiKey,  
        }
      })
      setData(DataFORMATED)
    },
  })

  return (
   <AppLayout auth = {true}>
      
       <div className='w-full  flex flex-col items-start h-full  '>
       <div className="flex items-center justify-between mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">All api requests in real time </h2>
            <p className="text-muted-foreground">
           here are all the reuest made to out api
            </p>
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