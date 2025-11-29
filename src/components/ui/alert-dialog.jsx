import * as React from "react";
import { cn } from "./utils";

function AlertDialog({ children, ...props }) {
  return <div data-slot="alert-dialog" {...props}>{children}</div>;
}

function AlertDialogTrigger({ children, ...props }) {
  return <button data-slot="alert-dialog-trigger" {...props}>{children}</button>;
}

function AlertDialogPortal({ children, ...props }) {
  return <div data-slot="alert-dialog-portal" {...props}>{children}</div>;
}

function AlertDialogOverlay({ className, ...props }) {
  return (
    <div
      data-slot="alert-dialog-overlay"
      className={cn(
        "fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
}

function AlertDialogContent({ className, children, ...props }) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <div
        data-slot="alert-dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg bg-background",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({ className, children, ...props }) {
  return (
    <div data-slot="alert-dialog-header" className={cn("flex flex-col gap-2 text-center sm:text-left", className)} {...props}>
      {children}
    </div>
  );
}

function AlertDialogFooter({ className, children, ...props }) {
  return (
    <div data-slot="alert-dialog-footer" className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)} {...props}>
      {children}
    </div>
  );
}

function AlertDialogTitle({ className, children, ...props }) {
  return (
    <h2 data-slot="alert-dialog-title" className={cn("text-lg font-semibold", className)} {...props}>
      {children}
    </h2>
  );
}

function AlertDialogDescription({ className, children, ...props }) {
  return (
    <p data-slot="alert-dialog-description" className={cn("text-muted-foreground text-sm", className)} {...props}>
      {children}
    </p>
  );
}

function AlertDialogAction({ className, children, ...props }) {
  return (
    <button className={cn("bg-primary text-primary-foreground px-4 py-2 rounded-md", className)} {...props}>
      {children}
    </button>
  );
}

function AlertDialogCancel({ className, children, ...props }) {
  return (
    <button className={cn("border bg-background text-foreground px-4 py-2 rounded-md", className)} {...props}>
      {children}
    </button>
  );
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel
};
