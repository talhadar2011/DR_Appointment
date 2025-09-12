import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Navbar from '../components/Navbar'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <React.Fragment>
      <div className='mx-4 sm:mx-[10%]'>
        <Navbar/>
        <Outlet />

      </div>
    </React.Fragment>
  )
}
