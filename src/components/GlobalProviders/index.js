"use client";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import fetcher from "@/utils/fetcher";
import { SWRConfig } from "swr";
const GlobalProviders = ({ children, session }) => {


  function localStorageProvider() {
    // When initializing, we restore the data from `localStorage` into a map.
    if (typeof window !== "undefined") {
      const map = new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"));
  
      // Before unloading the app, we write back all the data into `localStorage`.
      window.addEventListener("beforeunload", () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        localStorage.setItem("app-cache", appCache);
      });
  
      // We still use the map for write & read for performance.
      return map;
    }
  }

  


  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        fetcher: (resource, init) => fetcher(resource, init),
        ...(typeof window !== "undefined" && {
          provider: localStorageProvider,
        }),
      }}
    >
    <SessionProvider session={session}>
      <RecoilRoot>{children}</RecoilRoot>
    </SessionProvider>
    </SWRConfig>
  );
};

export default GlobalProviders;
