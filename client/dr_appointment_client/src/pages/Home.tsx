
import { lazy, Suspense } from "react";
const Header = lazy(() => import('../components/Header'))
const SpecialistMenu = lazy(() => import('../components/SpecialistMenu'))
const Footer = lazy(() => import('../components/Footer'))
export default function Home() {

  return (
    <>
    
    <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <SpecialistMenu />
      <Footer/>
    </Suspense>  
      </>
  
  )
}
