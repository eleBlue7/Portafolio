import * as React from "react"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md shadow-lg",
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }) {
  return <div className={cn("mb-4", className)} {...props} />
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-lg font-semibold text-white", className)}
      {...props}
    />
  )
}

export function CardContent({ className, ...props }) {
  return <div className={cn("text-gray-300", className)} {...props} />
}
