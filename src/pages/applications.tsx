/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import AppDeleteAlert from '~/components/alerts/delete-app'
import AppLayout from '~/components/layout'
import {columns} from "~/components/tables/service/columns"
import {DataTable} from "~/components/tables/service/data-table"
import { api } from '~/utils/api'


function Page() {

  const [data , setData] = useState<any[]>([])

  const {refetch} = api.services.getServices.useQuery(undefined , {
    onSuccess(data) {
      const DataFORMATED = data?.map((item) => {
        return{
          id: item.id,
          title : item.title , 
          description: item.description,
          url : item.url as string , 
        }
      })
      setData(DataFORMATED)
    },
  })

  return (
   <AppLayout commercial={false} auth = {true}>
    <AppDeleteAlert refetch={refetch} />
       <div className='w-full  flex flex-col items-start h-full  '>
       <div className="flex items-center justify-between mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">in here you can see and create all the application</h2>
            <p className="text-muted-foreground">
            Voici une liste de vos rapports !
            </p>
          </div>
          
        </div>
        <DataTable refetch={refetch} data={data}  columns={columns} />
       </div>
   </AppLayout>
  )
}

export default Page