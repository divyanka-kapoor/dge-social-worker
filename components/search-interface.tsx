"use client"

import { useState } from "react"
import { Calendar, Download, Search, SlidersHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function SearchInterface() {
  const [searchResults, setSearchResults] = useState(applications)

  return (
    <DashboardShell>
      <DashboardHeader />
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Search Applications</h1>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export Results
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-3">
            <CardTitle>Advanced Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <Label htmlFor="search">Applicant Name/ID</Label>
                <div className="relative mt-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search" type="search" placeholder="Search..." className="pl-8" />
                </div>
              </div>

              <div>
                <Label htmlFor="application-type">Application Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="application-type" className="mt-1">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="financial">Financial Aid</SelectItem>
                    <SelectItem value="housing">Housing Support</SelectItem>
                    <SelectItem value="healthcare">Healthcare Assistance</SelectItem>
                    <SelectItem value="education">Education Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status">Status</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="status" className="mt-1">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="flagged">Flagged</SelectItem>
                    <SelectItem value="approved">Approved</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                    <SelectItem value="auto-approved">Auto-Approved</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="location">Geographic Location</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="location" className="mt-1">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Emirates</SelectItem>
                    <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                    <SelectItem value="sharjah">Sharjah</SelectItem>
                    <SelectItem value="ajman">Ajman</SelectItem>
                    <SelectItem value="uaq">Umm Al Quwain</SelectItem>
                    <SelectItem value="rak">Ras Al Khaimah</SelectItem>
                    <SelectItem value="fujairah">Fujairah</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Family Size</Label>
                <div className="flex items-center gap-4 mt-3">
                  <Select defaultValue="any">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                  <span>to</span>
                  <Select defaultValue="any">
                    <SelectTrigger className="w-24">
                      <SelectValue placeholder="Max" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                      <SelectItem value="7">7</SelectItem>
                      <SelectItem value="8">8+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Income Range (AED)</Label>
                <div className="mt-6 px-2">
                  <Slider defaultValue={[0, 20000]} min={0} max={30000} step={1000} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>0</span>
                    <span>15,000</span>
                    <span>30,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <Label>Date Submitted</Label>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <Button variant="outline" size="sm" className="justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>From</span>
                  </Button>
                  <Button variant="outline" size="sm" className="justify-start">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>To</span>
                  </Button>
                </div>
              </div>

              <div>
                <Label>AI Confidence</Label>
                <div className="mt-6 px-2">
                  <Slider defaultValue={[0, 100]} min={0} max={100} step={5} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <Button variant="outline" className="mr-2">
                Reset
              </Button>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Search Results</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{searchResults.length} results</span>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <SlidersHorizontal className="h-3.5 w-3.5" />
                      <span>Columns</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-72">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Show Columns</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            "ID",
                            "Name",
                            "Type",
                            "Status",
                            "Date",
                            "Location",
                            "Family Size",
                            "Income",
                            "AI Confidence",
                          ].map((column) => (
                            <div key={column} className="flex items-center space-x-2">
                              <Checkbox id={`column-${column}`} defaultChecked />
                              <Label htmlFor={`column-${column}`}>{column}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox />
                    </TableHead>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Family Size</TableHead>
                    <TableHead>Income (AED)</TableHead>
                    <TableHead>AI Confidence</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {searchResults.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell>
                        <Checkbox />
                      </TableCell>
                      <TableCell className="font-medium">{application.id}</TableCell>
                      <TableCell>
                        <div>
                          <div>{application.name}</div>
                          <div className="text-xs text-muted-foreground">{application.arabicName}</div>
                        </div>
                      </TableCell>
                      <TableCell>{application.type}</TableCell>
                      <TableCell>
                        <StatusBadge status={application.status} />
                      </TableCell>
                      <TableCell>{application.date}</TableCell>
                      <TableCell>{application.location}</TableCell>
                      <TableCell>{application.familySize}</TableCell>
                      <TableCell>{application.income}</TableCell>
                      <TableCell>{application.aiConfidence}%</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">
                Showing <strong>1-10</strong> of <strong>{searchResults.length}</strong> results
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
                <Select defaultValue="10">
                  <SelectTrigger className="w-20 h-8">
                    <SelectValue placeholder="Per page" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="100">100</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  )
}

function StatusBadge({ status }: { status: string }) {
  let bgColor = "bg-gray-100 text-gray-800"

  if (status === "Pending") {
    bgColor = "bg-amber-100 text-amber-800"
  } else if (status === "Approved") {
    bgColor = "bg-green-100 text-green-800"
  } else if (status === "Flagged") {
    bgColor = "bg-red-100 text-red-800"
  } else if (status === "Auto-Approved") {
    bgColor = "bg-blue-100 text-blue-800"
  }

  return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>
}

const applications = [
  {
    id: "UAE-2023-78945",
    name: "Ahmed Mohammed Al-Zahrani",
    arabicName: "أحمد محمد الزهراني",
    type: "Housing Support",
    status: "Pending",
    date: "May 26, 2023",
    location: "Dubai",
    familySize: 4,
    income: "7,500",
    aiConfidence: 87,
  },
  {
    id: "UAE-2023-78946",
    name: "Fatima Ali Al-Saadi",
    arabicName: "فاطمة علي السعدي",
    type: "Financial Aid",
    status: "Auto-Approved",
    date: "May 26, 2023",
    location: "Abu Dhabi",
    familySize: 3,
    income: "5,200",
    aiConfidence: 95,
  },
  {
    id: "UAE-2023-78947",
    name: "Mohammed Abdullah Al-Mansoori",
    arabicName: "محمد عبدالله المنصوري",
    type: "Healthcare Assistance",
    status: "Flagged",
    date: "May 25, 2023",
    location: "Sharjah",
    familySize: 5,
    income: "6,500",
    aiConfidence: 76,
  },
  {
    id: "UAE-2023-78948",
    name: "Aisha Khalid Al-Hashimi",
    arabicName: "عائشة خالد الهاشمي",
    type: "Education Support",
    status: "Approved",
    date: "May 25, 2023",
    location: "Ajman",
    familySize: 6,
    income: "8,200",
    aiConfidence: 92,
  },
  {
    id: "UAE-2023-78949",
    name: "Khalid Saeed Al-Shamsi",
    arabicName: "خالد سعيد الشامسي",
    type: "Financial Aid",
    status: "Pending",
    date: "May 24, 2023",
    location: "Ras Al Khaimah",
    familySize: 2,
    income: "4,800",
    aiConfidence: 85,
  },
  {
    id: "UAE-2023-78950",
    name: "Maryam Yousuf Al-Zaabi",
    arabicName: "مريم يوسف الزعابي",
    type: "Housing Support",
    status: "Flagged",
    date: "May 24, 2023",
    location: "Fujairah",
    familySize: 7,
    income: "9,100",
    aiConfidence: 79,
  },
  {
    id: "UAE-2023-78951",
    name: "Saeed Rashid Al-Nuaimi",
    arabicName: "سعيد راشد النعيمي",
    type: "Healthcare Assistance",
    status: "Auto-Approved",
    date: "May 23, 2023",
    location: "Dubai",
    familySize: 4,
    income: "6,300",
    aiConfidence: 96,
  },
  {
    id: "UAE-2023-78952",
    name: "Noura Ahmed Al-Mazrouei",
    arabicName: "نورة أحمد المزروعي",
    type: "Education Support",
    status: "Pending",
    date: "May 23, 2023",
    location: "Abu Dhabi",
    familySize: 5,
    income: "7,200",
    aiConfidence: 88,
  },
  {
    id: "UAE-2023-78953",
    name: "Hamad Jassim Al-Falasi",
    arabicName: "حمد جاسم الفلاسي",
    type: "Financial Aid",
    status: "Approved",
    date: "May 22, 2023",
    location: "Sharjah",
    familySize: 3,
    income: "5,500",
    aiConfidence: 91,
  },
  {
    id: "UAE-2023-78954",
    name: "Latifa Mohammed Al-Qasimi",
    arabicName: "لطيفة محمد القاسمي",
    type: "Housing Support",
    status: "Auto-Approved",
    date: "May 22, 2023",
    location: "Umm Al Quwain",
    familySize: 4,
    income: "6,800",
    aiConfidence: 94,
  },
]
