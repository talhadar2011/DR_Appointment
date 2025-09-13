import { createFileRoute } from '@tanstack/react-router'
import DoctorDetail from '../../pages/DoctorDetail'

export const Route = createFileRoute('/doctor/$id')({
 
  component: RouteComponent,
})

function RouteComponent() {
  return <DoctorDetail/>
}
