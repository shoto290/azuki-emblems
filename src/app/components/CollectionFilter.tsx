"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { set, useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/lib/ui/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/lib/ui/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/lib/ui/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/lib/ui/components/ui/popover";
import { collections } from "@/constants";
import { Filter } from "@/types";
import { useEffect, useState } from "react";

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
});

interface CollectionFilterProps {
  selectedBadge: Filter;
  setSelectedBadge: (filter: Filter) => void;
}

export default function CollectionFilter({
  selectedBadge,
  setSelectedBadge,
}: CollectionFilterProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className="space-y-6">
        <FormField
          control={form.control}
          name="language"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      role="combobox"
                      className={cn("w-[200px] justify-between")}
                    >
                      <div className="flex gap-2 items-center">
                        {selectedBadge.icon && (
                          <Image
                            src={selectedBadge.icon}
                            alt={selectedBadge.name}
                            height={30}
                            width={30}
                          />
                        )}
                        {selectedBadge.name}
                      </div>
                      <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput
                      placeholder="Search emblem..."
                      className="h-9"
                    />
                    <CommandEmpty>No emblem found.</CommandEmpty>
                    <CommandGroup>
                      {collections.map((collection) => (
                        <CommandItem
                          value={collection.name}
                          key={collection.name}
                          onSelect={() => {
                            setSelectedBadge(collection);
                          }}
                          className="flex gap-2"
                        >
                          {collection.icon && (
                            <Image
                              src={collection.icon}
                              alt={collection.name}
                              height={50}
                              width={50}
                            />
                          )}
                          {collection.name}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              selectedBadge.name === collection.name
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
