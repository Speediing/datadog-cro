"use client";

import dynamic from "next/dynamic";

const NightRocket = dynamic(() => import("@/components/NightRocket"), {
  ssr: false,
});

export function NightRocketMount() {
  return <NightRocket />;
}
