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
            <p className="text-muted-foreground">
            Here is a list of your services!
            </p>
          </div>
          
        </div>
        <DataTable refetch={refetch} data={data}  columns={columns} />
       </div>
   </AppLayout>
  )
}

export default Page