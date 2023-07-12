/* eslint-disable react/no-unescaped-entities */
import { Loader2 } from 'lucide-react'
import React, { useState } from 'react'
import UserDeleteAlert from '~/components/alerts/delete-user'
import AppLayout from '~/components/layout'
import AssignServiceModel from '~/components/models/assign-service'
import GiveEmployeeModel from '~/components/models/give-employee'
import UserProfileModel from '~/components/models/user-profile'
import {columns} from "~/components/tables/users/columns"
import {DataTable} from "~/components/tables/users/data-table"
import { Badge } from '~/components/ui/badge'
import { UserUpdate } from '~/components/user-update'
import { api } from '~/utils/api'


function Page() {

  const [data , setData] = useState<any[]>([])

  const {refetch , isFetching} = api.users.getUsers.useQuery(undefined , {
    onSuccess(data) {
      const DataFORMATED = data?.map((item) => {
        return{
          id: item.id,
          name : item.name , 
          status: "active",
          email : item.email , 
          type: item.type,
          password : item.password,
          image : item.image
        }
      })
      setData(DataFORMATED)
    },
  })

  return (
   <AppLayout auth = {true}>
       <UserDeleteAlert refetch={refetch} />
       <UserUpdate refetch={refetch} />
       <AssignServiceModel refetch={refetch} />
       <GiveEmployeeModel refetch={refetch} />
       <UserProfileModel  />
       <div className='w-full  flex flex-col items-start h-full  '>
       <div className="flex items-center justify-between mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Tableau des utilisateurs pour l'Admin</h2>
          
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