/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/no-unescaped-entities */
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { deleteUser } from "~/reducer/delete-actions"
import { openModelUser } from "~/reducer/edit-user-state"
import { giveEmployee, giveService } from "~/reducer/light-models"



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type user = {
  id: string
  name : string , 
  status: string,
  email : string , 
  type: string,
  password : string
}

export const columns: ColumnDef<user>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "status",
    header: "Statut",
  },
  {
    accessorKey: "email",
    header: "E-mail",
  },
  {
    accessorKey: "name",
    header: "Nom",
  },
  {
    accessorKey: "type",
    header: "Le type",
  },
  {
    accessorKey: "password",
    header: "Mot de passe",
  },
  {
    id: "actions",
    cell: ({ row }) => {
     
     
      const setIsOpen = deleteUser(state => state.setShowModel)
      const setId = deleteUser(state => state.setId)

      const setData  = openModelUser(state => state.setData)

      const handleOpenDeleteAlert = () => {
        setId(row.original.id)
        setIsOpen(true)
        
      }


      //this for openning the model of giving a service
      const openServiceModel = giveService(state => state.setShowModel)
      const setIdForServiceModel = giveService(state => state.setId)
      const openService = () => {
        setIdForServiceModel(row.original.id)
        openServiceModel(true)
      }
      //this for openning the model of giving a emoloyee
      const openEmoloyeeModel = giveEmployee(state => state.setShowModel)
      const setIdForEmoloyeeModel = giveEmployee(state => state.setId)
      const openEmployee = () => {
        setIdForEmoloyeeModel(row.original.id)
        openEmoloyeeModel(true)
      }

      const updateUser = () => {
        setData({
          bio : "" , 
          Email : row.original.email , 
          Name : row.original.name , 
          Password : row.original.password , 
          Status : row.original.status , 
          id : row.original.id , 
          Type : row.original.type , 
          showModel : true
        })
      }
     
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="!bg-white">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(row.original.id)}
            >
             Copier l'ID utilisateur
            </DropdownMenuItem>
            <DropdownMenuSeparator />

          <DropdownMenuItem 
            className="cursor-pointer !hover:bg-red-300" onClick={updateUser} >
            Modifier l'utilisateur
          </DropdownMenuItem>
          
          <DropdownMenuItem 
              className="cursor-pointer !hover:bg-red-300" onClick={openEmployee} >
              give employee
          </DropdownMenuItem>

          <DropdownMenuItem 
              className="cursor-pointer !hover:bg-red-300" onClick={openService} >
              give applications
          </DropdownMenuItem>
            
          <DropdownMenuItem 
              className="cursor-pointer !hover:bg-red-300"
              onClick={handleOpenDeleteAlert} >Supprimer</DropdownMenuItem>
           </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
