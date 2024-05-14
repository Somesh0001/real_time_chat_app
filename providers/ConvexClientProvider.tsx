"use client";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, AuthLoading, ConvexReactClient } from "convex/react";
import React from "react";
import LoadingLogo from "@/components/shared/LoadingLogo";
type Props = {
  children: React.ReactNode;
};

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL || "";

const convex = new ConvexReactClient(CONVEX_URL);

const ConvexClientProvider = ({ children }: Props) => {
  return (
    <ClerkProvider publishableKey="pk_test_c2V0dGxlZC1hbGllbi0xNC5jbGVyay5hY2NvdW50cy5kZXYk">
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        {/* <Authenticated>{children}</Authenticated> */}
        <AuthLoading>
          <LoadingLogo />
        </AuthLoading>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
