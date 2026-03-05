import { supabase } from "@/api/supabase"
import { type User } from "@supabase/supabase-js"
import { useEffect, useState } from "react"
import { data } from "react-router-dom"

const useAuth = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        supabase.auth.getSession().then(({data: {session}}) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })
    // 2) Auth 상태 변화 구독 (로그인/로그아웃 감지)
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null)
      }
    )

    // 3) 클린업
    return () => subscription.unsubscribe()
  }, [])

  return { user, loading }

}

export default useAuth