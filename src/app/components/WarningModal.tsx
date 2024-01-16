"use client";

import { Button } from "@/lib/ui/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/lib/ui/components/ui/dialog";
import { useEffect, useState } from "react";

export function WarningModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const warning = localStorage.getItem("warning");

    if (warning !== "true") {
      setOpen(true);
    }
  }, []);

  return (
    <Dialog open={open}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Welcome to Garden Emblems!</DialogTitle>
        </DialogHeader>
        <DialogDescription className="flex flex-col gap-3">
          <p>
            Please note that our site is currently in beta, and while the points
            are fixed, errors in estimations may occur. The values displayed are
            based on available data, but inaccuracies in the points assigned to
            each NFT may exist.
          </p>
          <p>
            Your use of this beta version is invaluable in helping us correct
            these errors and improve the accuracy of our estimates.
          </p>
        </DialogDescription>
        <DialogFooter className="w-full">
          <DialogClose asChild>
            <Button
              onClick={() => {
                localStorage.setItem("warning", "true");
                setOpen(false);
              }}
              className="w-full"
              type="button"
              variant="secondary"
            >
              I understand
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
