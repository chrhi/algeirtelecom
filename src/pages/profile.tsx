/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

import AppLayout from '~/components/layout'
import { userReducer } from '~/reducer/user-state'



function Page() {

    const {email , name , photo , type } = userReducer()

  return (
   <AppLayout commercial={false} auth = {true}>
        <div className='w-full mx-auto max-w-4xl border p-8 flex flex-col gap-y-4 h-fit'>
        <h1 className='text-xl font-semibold'>your name : <span className='font-normal ml-4'>{name}</span></h1>
        <h1  className='text-xl font-semibold' >your email :  <span className='font-normal ml-4' > {email}</span> </h1>
        <h1  className='text-xl font-semibold' >your account type  : <span className='font-normal ml-4' >{type}</span> </h1>
        </div>
   </AppLayout>
  )
}

export default Page