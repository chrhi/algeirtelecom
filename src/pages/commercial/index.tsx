import React ,  { useState } from 'react'
import AppLayout from '~/components/layout'
import { columns } from '~/components/tables/reports/columns'
import { DataTable } from '~/components/tables/reports/data-table'
import { api } from '~/utils/api'
import dynamic from 'next/dynamic';
const ReportDetails = dynamic(() => import('~/components/models/report-details'), {
  ssr: false,
});

const ReportDeleteAlert = dynamic(() => import('~/components/alerts/delete-report'), {
  ssr: false,
});


function Page() {
  
  const [data , setData] = useState<any[]>([])

  const {refetch} = api.report.getReports.useQuery(undefined , {
    onSuccess(data) {
      const DataFORMATED = data?.map((item) => {
        return{
          id: item.id,
          title : item.title , 
          clientInformation: item.ClientInformation,
      
          Details: item.Details,
          Request : item.Request
        }
      })
      setData(DataFORMATED)
    },
  })
  return (
   <AppLayout commercial auth = {true}>
   <ReportDetails refetch={refetch}/>
   <ReportDeleteAlert  refetch={refetch}/>
      <div className='w-full  flex flex-col items-start h-full  '>
       <div className="flex items-center justify-between mb-6 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Tableau des utilisateurs pour commercial</h2>
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