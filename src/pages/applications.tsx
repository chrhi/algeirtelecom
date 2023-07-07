/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import AppLayout from '~/components/layout'
import {columns} from "~/components/tables/users/columns"
import {DataTable} from "~/components/tables/users/data-table"
import { api } from '~/utils/api'


function Page() {

  const [data , setData] = useState<any[]>([])

  const {refetch} = api.users.getUsers.useQuery(undefined , {
    onSuccess(data) {
      const DataFORMATED = data?.map((item) => {
        return{
          id: item.id,
          name : item.name , 
          status: "active",
          email : item.email , 
          type: item.type,
          password : item.password
        }
      })
      setData(DataFORMATED)
    },
  })

  return (
   <AppLayout commercial={false} auth = {true}>
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