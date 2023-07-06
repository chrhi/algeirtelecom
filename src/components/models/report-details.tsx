import {
    Dialog,
    DialogContent,
  } from "~/components/ui/dialog"

  
import { FC } from 'react'
import { openModelReport } from "~/reducer/open-models"

interface ReportRetailsAbdullahProps {
    refetch : () => Promise<any>
}

const ReportDetails: FC<ReportRetailsAbdullahProps> = ({refetch}) => {

    const isOpen = openModelReport(state => state.showModel)
    const setIsOpen = openModelReport(state => state.setShowModel)

  
    const {Details , Request , Title , clientInformation } = openModelReport()



  return   <Dialog open={isOpen} onOpenChange={(val) => setIsOpen(val)}  >
  <DialogContent className="bg-white w-[360px] h-[600px]">
    <div className="w-full h-full flex flex-col items-start">
    <div>
      <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
        {Title}
      </h1>
      <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      informations du client
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
       {clientInformation}
      </p>
    
      <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      Détails
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      {Details}
      </p>
      <h3 className="mt-8 scroll-m-20 text-xl font-semibold tracking-tight">
      Demande
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
      {Request}
      </p>
     
      
    </div>

    </div>
  </DialogContent>
</Dialog>

}

export default ReportDetails