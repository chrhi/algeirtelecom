import * as React from "react"

import { cn } from "~/lib/utils"

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "mt-1 block  transition  ease-in-out  w-full dark:bg-stone-900 dark:text-white !font-poppins  rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-stone-600 dark:border-stone-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:py-1.5 sm:text-sm sm:leading-6",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
