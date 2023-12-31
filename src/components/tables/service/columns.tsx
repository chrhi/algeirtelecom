/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/no-unescaped-entities */
"use client"

import type { ColumnDef } from "@tanstack/react-table"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"
import {  MoreHorizontal } from "lucide-react"

import { deleteApplication,  } from "~/reducer/delete-actions"
import { Badge } from "~/components/ui/badge"


// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type report  = {
  id: string
  title : string , 
  description: string,
  url : string,
  cost : string,
  image : string
}

export const columns: ColumnDef<report>[] = [
 
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "url",
    header: "Url",
    cell : ({row}) => 
      <button className="border-non hover:text-blue-500 hover:underline truncate cursor-pointer">{row.original.url}</button>
  },
  {
    accessorKey: "cost",
    header: "Cout",
    cell: ({row}) => 
      <Badge color="bg-yellow-500">{row.original.cost} $</Badge>
    
  },
 
  {
    id: "actions",
    cell: ({ row }) => {
     
    //  const setData = openModelReport(state => state.setData)

   const setIsOpen = deleteApplication(state => state.setShowModel)
     const setId = deleteApplication(state => state.setId)

    //  const handleOpenModel = () => {
    //   setData({
    //     Date : row.original.Date , 
    //     clientInformation : row.original.clientInformation , 
    //     Details : row.original.Details , 
    //     Request : row.original.Request ,  
    //     showModel : true , 
    //     Title : row.original.title ,  
    //     id : row.original.id , 
    //   })
    //  }

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
             Copier l'ID 
            </DropdownMenuItem>
            <DropdownMenuSeparator />

         
            
            <DropdownMenuItem 
        
            className="cursor-pointer !hover:bg-red-300" onClick={handleDeleteRow} >Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
