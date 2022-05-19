import LoginForm from "components/LoginForm/LoginForm";
import Logo from "components/Logo/Logo";
import Image from "next/image";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Logo />
            <h2 className="mt-6 text-3xl font-medium text-gray-900">Accéder à l&apos;interface administrateur</h2>
          </div>
          <LoginForm />
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <div className="absolute inset-0 h-full w-full object-cover bg-black">
          <Image src={"/images/wallpaper-big.jpg"} layout="fill" alt="" />
        </div>
      </div>
    </div>
  )
}