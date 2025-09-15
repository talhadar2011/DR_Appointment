import { createFileRoute } from '@tanstack/react-router'
import MyAppoinments from '../pages/MyAppoinments'

export const Route = createFileRoute('/appointments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MyAppoinments />
}
