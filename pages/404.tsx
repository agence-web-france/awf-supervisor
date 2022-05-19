import Link from "next/link";

export default function Custom404Page() {
  return (
    <>
      <main
        className="h-screen bg-cover bg-top sm:bg-top"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75")',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-48">
          <p className="text-sm font-semibold text-black text-opacity-50 uppercase tracking-wide">404 error</p>
          <h1 className=" max-w-3xl leading-snug mx-auto mt-2 text-4xl font-medium text-white tracking-tight sm:text-5xl">
            Il semble que la page que vous recherchez n&apos;existe pas.
          </h1>
          <div className="mt-6">
            <Link href={"/"} >
              <a
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black text-opacity-75 bg-white bg-opacity-75 sm:bg-opacity-25 sm:hover:bg-opacity-50"
              >
                Accéder à l&apos;interface d&apos;administration
              </a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}