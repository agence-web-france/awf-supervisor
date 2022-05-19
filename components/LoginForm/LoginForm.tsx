import { Button, Loading } from "@nextui-org/react";
import useLogin from "hooks/useLogin";
import { useForm, SubmitHandler } from "react-hook-form";
import { InputsLoginForm } from "types/InputLoginForm.type";

export default function LoginForm() {
  const { register, handleSubmit } = useForm<InputsLoginForm>();
  const { handleLogin, loading } = useLogin();
  const onSubmit: SubmitHandler<InputsLoginForm> = handleLogin;
  return (
    <div className="mt-8">
      <div className="mt-6">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Adresse e-mail
            </label>
            <div className="mt-1">
              <input
                {...register("email", { required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <div className="mt-1">
              <input
                {...register("password", { required: true })}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-black focus:border-black sm:text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-slate-600 focus:ring-black border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Se souvenir de moi
              </label>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={loading}
              className="bg-black w-full"
            >
              {loading ? <Loading color="white" size="sm" /> : "Se connecter"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}