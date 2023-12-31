/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/no-unescaped-entities */
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { openModelReport } from "~/reducer/open-models"
import { deleteReport } from "~/reducer/delete-actions"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type report  = {
  id: string
  title : string , 
  clientInformation: string,
  Date : string , 
  Details: string,
  Request : string
}

export const columns: ColumnDef<report>[] = [
 
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "clientInformation",
    header: "clientInformation",
  },
  {
    accessorKey: "Details",
    header: "Details",
  },
  {
    accessorKey: "Request",
    header: "Request",
  },
  {
    accessorKey: "Date",
    header: "Date",
  },
  {
    id: "actions",
    cell: ({ row }) => {
     
     const setData = openModelReport(state => state.setData)

     const setIsOpen = deleteReport(state => state.setShowModel)
     const setId = deleteReport(state => state.setId)

     const handleOpenModel = () => {
      setData({
        Date : row.original.Date , 
        clientInformation : row.original.clientInformation , 
        Details : row.original.Details , 
        Request : row.original.Request ,  
        showModel : true , 
        Title : row.original.title ,  
        id : row.original.id , 
      })
     }

     const handleDeleteRow = () => {
      setId(row.original.id)
      setIsOpen(true)
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
        
        className="cursor-pointer !hover:bg-red-300" onClick={handleOpenModel} >Voir les details</DropdownMenuItem>
            
            <DropdownMenuItem 
        
            className="cursor-pointer !hover:bg-red-300" onClick={handleDeleteRow}>Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
