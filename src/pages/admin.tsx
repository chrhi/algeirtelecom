import React, { useState } from 'react'
import AppLayout from '~/components/layout'
import {columns} from "~/components/tables/users/columns"
import {DataTable} from "~/components/tables/users/data-table"
import { api } from '~/utils/api'


function Page() {

  const [data , setData] = useState<any[]>([])

  api.users.getUsers.useQuery(undefined , {
    onSuccess(data) {
      const DataFORMATED = data?.map((item) => {
        return{
          id: item.id,
          name : item.name , 
          status: "active",
          email : item.email , 
          type: item.type
        }
      })
      setData(DataFORMATED)
    },
  })

  return (
   <AppLayout auth = {true}>
       <div className='w-full max-w-lg flex justify-center mx-auto h-full  pt-12'>
        <DataTable data={data} columns={columns} />
       </div>
   </AppLayout>
  )
}

export default Page