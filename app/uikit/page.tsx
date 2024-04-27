"use client"
import { Switch } from "@/components/ui/switch"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm } from "react-hook-form"
import * as z from "zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import FormUIKit from "./FormUIKit"

const FormSchema = z.object({
  emailAddress: z.string().email()
})

const UIKit = () => {
  return (
      <FormUIKit />
    
  )
}

export default UIKit