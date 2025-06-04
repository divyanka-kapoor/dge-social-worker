"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bell, ChevronDown, Globe, Menu, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MainNav } from "@/components/main-nav"

export function DashboardHeader() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-4 lg:gap-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  width={32}
                  height={32}
                  alt="UAE Government Logo"
                  className="rounded"
                />
                <span>Social Support System</span>
              </Link>
              <Link href="/" className="hover:text-primary">
                Dashboard
              </Link>
              <Link href="/applications" className="hover:text-primary">
                Applications
              </Link>
              <Link href="/search" className="hover:text-primary">
                Search
              </Link>
              <Link href="/reports" className="hover:text-primary">
                Reports
              </Link>
              <Link href="/settings" className="hover:text-primary">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="hidden items-center gap-2 md:flex">
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="UAE Government Logo"
            className="rounded"
          />
          <span className="text-lg font-semibold">Social Support Management System</span>
        </Link>
        <MainNav className="hidden md:flex" />
      </div>
      <div className="flex items-center gap-4">
        <form className="hidden md:flex">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search applications..."
              className="w-64 rounded-lg bg-background pl-8 md:w-80"
            />
          </div>
        </form>
        <Button
          variant="ghost"
          size="icon"
          className="relative"
          onClick={() => {
            // Handle notifications
          }}
        >
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setLanguage(language === "en" ? "ar" : "en")}>
          <Globe className="h-5 w-5" />
          <span className="sr-only">Toggle language</span>
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="gap-1">
              <Image
                src="/placeholder.svg?height=32&width=32"
                width={32}
                height={32}
                alt="User"
                className="rounded-full"
              />
              <span className="hidden md:inline-flex">Ahmed Hassan</span>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Help</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
