import { ArrowLeftIcon } from "@heroicons/react/solid";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function GoToHomeButton() {
  return <>
    <div className='mt-6'>
      <Link href={"/"}>
        <Button icon={<ArrowLeftIcon className="h-4 w-4 bg-white" />} className='bg-black hover:bg-slate-500'>
          Revenir à l&apos;accueil
        </Button>
      </Link>
    </div>
  </>
}