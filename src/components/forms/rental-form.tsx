"use client";

import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { ErrorMessage } from "@hookform/error-message";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type CarRentalFormFields = {
  firstName: string;
  lastName: string;
  fromDate: Date;
  toDate: Date;
  message: string;
  carUrl: string;
};

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is a required field."),
  lastName: yup.string().required("Last Name is a required field."),
  fromDate: yup
    .date()
    .typeError("You must specify a date.")
    .required("Period From is a required field."),
  toDate: yup
    .date()
    .typeError("You must specify a date.")
    .required("Period To is a required field."),
  message: yup.string().required("Message is a required field."),
  carUrl: yup.string().required("Car URL is a required field."),
});

export function CarRentalForm() {
  const form = useForm<CarRentalFormFields>({
    resolver: yupResolver(schema),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  function onSubmit(data: CarRentalFormFields) {
    alert(data);
  }

  const pathname = usePathname();

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="hidden"
          value={`https://${pathname}` || ""}
          {...register("carUrl")}
          name="carUrl"
        />

        <div className="grid grid-cols-2 items-start gap-2">
          <div>
            <FormField
              control={control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>

                  <FormControl>
                    <Input type="text" placeholder="Mike" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>

                  <FormControl>
                    <Input type="text" placeholder="Rabar" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-2 mt-2">
          <FormField
            control={control}
            name="fromDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>From</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a start date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name="toDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>To</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick an end date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) => date < new Date("1900-01-01")}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-2">
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>

                <FormControl>
                  <Textarea
                    className="w-full"
                    rows={4}
                    cols={26}
                    {...field}
                    placeholder="Type your message here."
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-4 flex items-center justify-start">
          <Button type="submit">Reserve Car</Button>
        </div>
      </form>
    </Form>
  );
}
