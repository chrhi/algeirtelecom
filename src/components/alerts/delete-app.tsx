import { FC } from "react"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "~/components/ui/alert-dialog"
  import { api } from "~/utils/api"
  import { Icons } from "~/components/icons";

import { deleteApplication, deleteUser } from "~/reducer/delete-actions"
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";

  interface ReportRetailsAbdullahProps {
    refetch : () => Promise<any>

}

const AppDeleteAlert: FC<ReportRetailsAbdullahProps> = ({refetch}) => {

    const isOpen = deleteApplication(state => state.showModel)
    const id = deleteApplication(state => state.id)
    const setIsOpen = deleteApplication(state => state.setShowModel)

    const {toast} = useToast()


    const mutation = api.services.deleteService.useMutation({
        onSuccess : async () => {
            await refetch()
            setIsOpen(false)
            toast({
                className:"bg-green-500 text-white",
                variant: "destructive",
                title : "supprimé avec succès",
              
              })
             
        }, 
        onError : () => {
            setIsOpen(false)
            
            toast({
                className:"bg-red-500 text-white",
                variant: "destructive",
                title : "une erreur s'est produite",
              
              })
        }
    })

    const handleSubmite = () => {
        mutation.mutate({id})
    }

  return   (
    <AlertDialog open={isOpen} onOpenChange={(val) => setIsOpen(val)} >
      
      <AlertDialogContent className="bg-white">
       <AlertDialogHeader>
             <AlertDialogTitle>Êtes-vous absolument sûr?</AlertDialogTitle>
             <AlertDialogDescription>
                  Cette action ne peut pas être annulée. Cela supprimera définitivement votre article
                   et supprimer vos données de nos serveurs.
              </AlertDialogDescription>
        </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Annuler</AlertDialogCancel>
      <Button
        onClick={handleSubmite}
         disabled={mutation.isLoading}
         className="bg-green-500 text-white rounded-lg">
         {mutation.isLoading && (
     <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
   )}
      Continuer</Button>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

  )
}

export default AppDeleteAlert