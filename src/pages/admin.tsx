import React from 'react'
import AppLayout from '~/components/layout'

function Page() {
  return (
   <AppLayout auth = {true}>
    <h1>this is the admin page</h1>
   </AppLayout>
  )
}

export default Page