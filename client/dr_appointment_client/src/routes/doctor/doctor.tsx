import { createFileRoute } from '@tanstack/react-router'
import Doctors from '../../pages/Doctors'

export const Route = createFileRoute('/doctor/doctor')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Doctors/>
}
