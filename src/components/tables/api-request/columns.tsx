/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable react/no-unescaped-entities */
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { Button } from "~/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"



// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.




export type ApiRequest  = {
  id: string
  status : string , 
  endPoint : string,
  responseTime  : string ,  
  apiKey    : string ,  
    
}

export const columns: ColumnDef<ApiRequest>[] = [
 
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "endPoint",
    header: "End Point",
  },
  {
    accessorKey: "responseTime",
    header: "response Time",
  },
  {
    accessorKey: "apiKey",
    header: "api Key",
  },
  
 
]
