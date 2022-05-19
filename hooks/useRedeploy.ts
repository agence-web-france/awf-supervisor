import { toast } from 'react-toastify';
import { useState } from "react";
import { deployQuery } from 'queries/deploy.query';


export default function useRedeploy() {
  const [loading, setLoading] = useState(false)

  const handleDeploy = async (url: string) => {
    try {
      setLoading(true)
      const request = await deployQuery(url)
      toast("Le déploiement est en cours", { type: "success", position: "top-center" })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      toast("Erreur lors du déploiement.", { type: "error", position: "top-center" })
    }
  }

  return { handleDeploy, loading }
}