/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { Editor } from '~/components/Editor'
import AppLayout from '~/components/layout'
import {columns} from "~/components/tables/users/columns"
import {DataTable} from "~/components/tables/users/data-table"
import { api } from '~/utils/api'


function Page() {



  return (
   <AppLayout commercial={false} auth = {true}>
        <div className='w-full  max-w-5xl h-fit'>
            <Editor />
        </div>
   </AppLayout>
  )
}

export default Page