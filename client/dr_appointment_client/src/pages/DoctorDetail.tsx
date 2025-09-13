import React from 'react'
import { Route } from '../routes'

export default function DoctorDetail() {
    const {id}=Route.useParams()
    console.log(id)
    return (
    <div>DoctorDetail</div>
  )
}
