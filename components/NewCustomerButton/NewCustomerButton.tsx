import { PlusCircleIcon } from "@heroicons/react/solid";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function NewCustomerButton() {
  return (
    <>
      <Link href={"/new-customer"}>
        <a>
          <Button auto icon={<PlusCircleIcon className="h-4 w-4 bg-white" />} className="bg-black my-8 float-right hover:bg-slate-600">Créer un site</Button>
        </a>
      </Link>
    </>
  );
}

export default NewCustomerButton;
