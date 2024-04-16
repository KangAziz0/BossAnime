"use client"
import { useRouter } from "next/navigation"
import {ArrowSquareLeft} from "@phosphor-icons/react"
const Header = ({title}) =>{
  const router = useRouter()
  const handleBack = (e) =>{
    e.preventDefault()
    router.back()
  }
  return (
    <div className="flex justify-between px-4 mt-4 font-bold text-2xl">
      <button onClick={handleBack}><ArrowSquareLeft size={36} /></button>
      <h3>{title}</h3>
    </div>
  )
}
export default Header