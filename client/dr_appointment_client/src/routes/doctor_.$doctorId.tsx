import { createFileRoute } from '@tanstack/react-router'
import DoctorDetail from '../pages/DoctorDetail'

export const Route = createFileRoute('/doctor_/$doctorId')({
 
  component: RouteComponent,
})

function RouteComponent() {
  const {doctorId} = Route.useParams()
  return <DoctorDetail doctorId={doctorId}/>
}
