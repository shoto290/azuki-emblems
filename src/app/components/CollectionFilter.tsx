"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
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
import { Emblem } from "@/lib/emblems/types";
import { emblems } from "@/lib/emblems/constants";

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select a language.",
  }),
});

interface CollectionFilterProps {
  selectedEmblem: Emblem;
  setSelectedEmblem: (emblem: Emblem) => void;
}

export default function CollectionFilter({
  selectedEmblem,
  setSelectedEmblem,
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
                        {selectedEmblem.icon && (
                          <Image
                            src={selectedEmblem.icon}
                            alt={selectedEmblem.name}
                            height={30}
                            width={30}
                          />
                        )}
                        {selectedEmblem.name}
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
                      {emblems.map((emblem) => (
                        <CommandItem
                          value={emblem.name}
                          key={emblem.name}
                          onSelect={() => {
                            setSelectedEmblem(emblem);
                          }}
                          className="flex gap-2"
                        >
                          {emblem.icon && (
                            <Image
                              src={emblem.icon}
                              alt={emblem.name}
                              height={50}
                              width={50}
                            />
                          )}
                          {emblem.name}
                          <CheckIcon
                            className={cn(
                              "ml-auto h-4 w-4",
                              selectedEmblem.name === emblem.name
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
