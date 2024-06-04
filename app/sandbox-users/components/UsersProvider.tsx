import { FormProvider, useForm } from "react-hook-form"
import { Users } from './Users'
import React from "react"
import { zodResolver } from "@hookform/resolvers/zod";
import { Schema, defaultValues, schema } from "../types/schema";
import { DevTool } from '@hookform/devtools'

const UsersProvider = () => {

    const methods = useForm<Schema>({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues
    });

    return (
        <FormProvider {...methods}>
            <Users />
            <DevTool control={methods.control} />
        </FormProvider>
    )

}

export default UsersProvider
