"use client";
import { useLayoutEffect } from "react";

export function SsrScript(props: { script: () => void, nonce?: string }) {
  useLayoutEffect(() => {
    // Directly execute the function passed in as script
    props.script();
  }, []);

  return (
    <script
      suppressHydrationWarning
      nonce={props.nonce}
    />
  );
}
