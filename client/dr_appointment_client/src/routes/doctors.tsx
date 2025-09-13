import { createFileRoute } from '@tanstack/react-router'
import Doctors from '../pages/Doctors'

export const Route = createFileRoute('/doctors')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Doctors/>
}
