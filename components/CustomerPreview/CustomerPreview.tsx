import useCustomers from "hooks/useCustomer";
import { useRouter } from "next/router";
import React, { useRef } from "react";

function CustomerPreview() {
  const router = useRouter()
  const { slug } = router.query
  const { getCustomerBySlug } = useCustomers()
  const customer = getCustomerBySlug(slug as string)
  const iframeEl = useRef<HTMLIFrameElement>(null);
  return (
    <>
      <h2 className="my-3 text-xl font-medium">Prévisualisation</h2>
      <iframe ref={iframeEl} style={{ height: `${iframeEl.current?.clientWidth}px` }} className="w-full mb-8" src={customer?.url} frameBorder="0"></iframe>
    </>
  );
}

export default CustomerPreview;
