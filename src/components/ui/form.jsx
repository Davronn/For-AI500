"use client";

import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./form";

export default function DemoForm() {
  const form = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl asChild>
                <input type="email" {...field} />
              </FormControl>
              <FormDescription>Biz sizga xabar yuboramiz</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Parol</FormLabel>
              <FormControl asChild>
                <input type="password" {...field} />
              </FormControl>
              <FormDescription>Kamida 6 ta belgi</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </Form>
  );
}
