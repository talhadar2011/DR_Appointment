import { createFileRoute } from '@tanstack/react-router'
import UserLogin from '../pages/UserLogin'

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UserLogin />
}
