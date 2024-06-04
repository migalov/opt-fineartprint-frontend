'use client'

import React from "react"
import UsersProvider from "./components/UsersProvider"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

const SandboxForm = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UsersProvider />
        </QueryClientProvider>
        
    )
}

export default SandboxForm
