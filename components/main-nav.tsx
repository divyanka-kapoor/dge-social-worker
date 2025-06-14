"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({ className }: { className?: string }) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-4 lg:gap-6", className)}>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Dashboard
      </Link>
      <Link
        href="/applications"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/applications" || pathname.startsWith("/applications/")
            ? "text-primary"
            : "text-muted-foreground",
        )}
      >
        Applications
      </Link>
      <Link
        href="/search"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/search" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Database
      </Link>
      {/* <Link
        href="/reports"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/reports" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Reports
      </Link> */}
      <Link
        href="/analytics"
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          pathname === "/analytics" ? "text-primary" : "text-muted-foreground",
        )}
      >
        Analytics
      </Link>
    </nav>
  )
}
