"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
const GlobalProviders = ({ children, session }) => {

  return (
    <SessionProvider session={session}>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
  );
};

export default GlobalProviders;
