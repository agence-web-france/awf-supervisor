import { loginQuery } from "queries/login.query"
import { InputsLoginForm } from "types/InputLoginForm.type"
import { toast } from 'react-toastify';
import { useState } from "react";
import { useRouter } from "next/router";
import { useUserStore } from "store/user.store";


export default function useLogin() {
  const [loading, setLoading] = useState(false)
  const addUser = useUserStore(state => state.addUser)
  const router = useRouter()

  const handleLogin = async (inputs: InputsLoginForm) => {
    try {
      setLoading(true)
      const { data: { email, token } } = await loginQuery(inputs)
      setLoading(false)
      addUser({ email, token })
      router.push("/")
    } catch (error) {
      setLoading(false)
      toast("Impossible de se connecter, veuillez vérifier vos identifiants de connexion.", { type: "error", position: "top-center" })
    }
  }

  return { handleLogin, loading }
}