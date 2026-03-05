import useAuth from "@/hooks/useAuth"
import type { ReactNode } from "react"
import { Navigate } from "react-router-dom"

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth()

  if (loading) return <div>로딩 중...</div>
  if (!user) return <Navigate to="/login" replace />

  return children
}

export default ProtectedRoute