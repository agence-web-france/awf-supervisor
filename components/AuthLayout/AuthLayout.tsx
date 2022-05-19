import { useRouter } from "next/router"
import { useEffect } from "react"
import { useUserStore } from "store/user.store"

export default function AuthLayout({ children }: { children: JSX.Element }) {
  const user = useUserStore(state => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user.email !== process.env.NEXT_PUBLIC_BASIC_AUTH_USER_EMAIL && user.token !== process.env.NEXT_PUBLIC_BASIC_AUTH_TOKEN) {
      router.push("/login")
    }
  }, [router, user])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  )
}