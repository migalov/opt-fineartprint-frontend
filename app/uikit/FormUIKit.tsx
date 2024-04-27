"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ru } from "date-fns/locale/ru"
import React, { useState } from "react";

import calendarIcon from "@/public/calendar.svg"
import arrowIcon from "@/public/arrow.svg"
import Image from "next/image";

const formSchema = z
  .object({
    emailAddress: z.string().email(),
    password: z.string().min(3),
    passwordConfirm: z.string(),
    accountType: z.enum(["personal", "company"]),
    companyName: z.string().optional(),
    printFormat: z.enum(["500x700", "520x720", "330x482"], {
      required_error: "Выберите формат печати.",
    }),
    date: z.date({
      required_error: "Дата заказа обязательна!",
    })
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  )
  .refine(
    (data) => {
      if (data.accountType === "company") {
        return !!data.companyName;
      }
      return true;
    },
    {
      message: "Company name is required",
      path: ["companyName"],
    }
  ).refine(
    (data) => {
      if(data.printFormat) {
        return true;
      }
    },
    {
      message: "Выберите формат печати",
      path: ["printFormat"]
    }
  )
  ;

export default function Home() {

  // const [publicValues, setPublicValues] = useState<any>();
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      password: "",
      passwordConfirm: "",
      companyName: "",
      printFormat: "500x700",
    }
  });

  const accountType = form.watch("accountType");

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  const showValues = (values: z.infer<typeof formSchema>) => {
    // setPublicValues({ values });
    console.log({ values });
    
  };

  const [date, setDate] = React.useState<Date>()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="max-w-md w-full flex flex-col gap-4"
        >
          <div>
          
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-row flex-wrap items-center gap-4">
                  <FormLabel>Date of birth</FormLabel>
                  {/* <Input
                    placeholder=""
                    value={field.value && format(field.value, "PPP")}
                  /> */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <Image
                            width={18}
                            height={18}
                            src={calendarIcon}
                            alt="Date"
                            className="mr-2"
                          />
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span></span>
                          )}
                          
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date <= new Date()
                        }
                        initialFocus
                        locale={ru}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    Your date of birth is used to calculate your age.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="printFormat"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Выберите формат печати</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="500x700" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          500x700
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="520x720" />
                        </FormControl>
                        <FormLabel className="font-normal">
                          520x720
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="330x482" />
                        </FormControl>
                        <FormLabel className="font-normal">330х482</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Email address"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="accountType"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Account type</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an account type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="personal">Personal</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            {accountType === "company" && (
              <FormField
                control={form.control}
                name="companyName"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Company name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            )}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={form.control}
              name="passwordConfirm"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Password confirm</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password confirm"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
          </div>
          <div>
            <h3>Итоги: </h3>
            <code>
              {/* {publicValues} */}
            </code>
            
          </div>

          
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </main>
  );
}