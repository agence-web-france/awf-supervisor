import { LightningBoltIcon } from "@heroicons/react/solid";
import { Button, Loading, Popover, Text } from "@nextui-org/react";
import useRedeploy from "hooks/useRedeploy";
import React from "react";

type RedeployButtonProps = {
  url: string
}

function RedeployButton({ url }: RedeployButtonProps) {
  const { handleDeploy, loading } = useRedeploy()

  if (url.length === 0) {
    return <>
      <Popover>
        <Popover.Trigger>
          <Button auto icon={<LightningBoltIcon className="h-4 w-4 bg-white" />} className="bg-black my-8 float-right opacity-75 cursor-not-allowed">Redéployer</Button>
        </Popover.Trigger>
        <Popover.Content>
          <Text css={{ p: "$10" }}>Cette fonction n&apos;est pas disponible pour le moment.</Text>
        </Popover.Content>
      </Popover>
    </>
  }

  return (
    <Button onClick={() => { handleDeploy(url) }} auto icon={loading ? <Loading color="white" size="sm" /> : <LightningBoltIcon className="h-4 w-4 bg-white" />} className="bg-black my-8 float-right hover:bg-slate-600">Redéployer</Button>
  );
}

export default RedeployButton;
