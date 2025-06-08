// "use client"

// import { useState } from "react"
// import { Calendar, Download, Search, SlidersHorizontal } from "lucide-react"

// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { DashboardHeader } from "@/components/dashboard-header"
// import { DashboardShell } from "@/components/dashboard-shell"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Slider } from "@/components/ui/slider"
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// export function SearchInterface() {
//   const [searchResults, setSearchResults] = useState(applications)

//   return (
//     <DashboardShell>
//       <DashboardHeader />
//       <div className="container mx-auto p-6">
//         <div className="flex items-center justify-between mb-6">
//           <h1 className="text-2xl font-bold">Search Applications</h1>
//           <div className="flex gap-2">
//             <Button variant="outline" size="sm">
//               <Download className="mr-2 h-4 w-4" />
//               Export Results
//             </Button>
//           </div>
//         </div>

//         <Card className="mb-6">
//           <CardHeader className="pb-3">
//             <CardTitle>Advanced Search</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//               <div>
//                 <Label htmlFor="search">Applicant Name/ID</Label>
//                 <div className="relative mt-1">
//                   <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                   <Input id="search" type="search" placeholder="Search..." className="pl-8" />
//                 </div>
//               </div>

//               <div>
//                 <Label htmlFor="application-type">Application Type</Label>
//                 <Select defaultValue="all">
//                   <SelectTrigger id="application-type" className="mt-1">
//                     <SelectValue placeholder="Select type" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Types</SelectItem>
//                     <SelectItem value="financial">Financial Aid</SelectItem>
//                     <SelectItem value="housing">Housing Support</SelectItem>
//                     <SelectItem value="healthcare">Healthcare Assistance</SelectItem>
//                     <SelectItem value="education">Education Support</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label htmlFor="status">Status</Label>
//                 <Select defaultValue="all">
//                   <SelectTrigger id="status" className="mt-1">
//                     <SelectValue placeholder="Select status" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Statuses</SelectItem>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="flagged">Flagged</SelectItem>
//                     <SelectItem value="approved">Approved</SelectItem>
//                     <SelectItem value="rejected">Rejected</SelectItem>
//                     <SelectItem value="auto-approved">Auto-Approved</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label htmlFor="location">Geographic Location</Label>
//                 <Select defaultValue="all">
//                   <SelectTrigger id="location" className="mt-1">
//                     <SelectValue placeholder="Select location" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="all">All Emirates</SelectItem>
//                     <SelectItem value="abudhabi">Abu Dhabi</SelectItem>
//                     <SelectItem value="dubai">Dubai</SelectItem>
//                     <SelectItem value="sharjah">Sharjah</SelectItem>
//                     <SelectItem value="ajman">Ajman</SelectItem>
//                     <SelectItem value="uaq">Umm Al Quwain</SelectItem>
//                     <SelectItem value="rak">Ras Al Khaimah</SelectItem>
//                     <SelectItem value="fujairah">Fujairah</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div>
//                 <Label>Family Size</Label>
//                 <div className="flex items-center gap-4 mt-3">
//                   <Select defaultValue="any">
//                     <SelectTrigger className="w-24">
//                       <SelectValue placeholder="Min" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="any">Any</SelectItem>
//                       <SelectItem value="1">1</SelectItem>
//                       <SelectItem value="2">2</SelectItem>
//                       <SelectItem value="3">3</SelectItem>
//                       <SelectItem value="4">4</SelectItem>
//                       <SelectItem value="5">5+</SelectItem>
//                     </SelectContent>
//                   </Select>
//                   <span>to</span>
//                   <Select defaultValue="any">
//                     <SelectTrigger className="w-24">
//                       <SelectValue placeholder="Max" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectItem value="any">Any</SelectItem>
//                       <SelectItem value="1">1</SelectItem>
//                       <SelectItem value="2">2</SelectItem>
//                       <SelectItem value="3">3</SelectItem>
//                       <SelectItem value="4">4</SelectItem>
//                       <SelectItem value="5">5</SelectItem>
//                       <SelectItem value="6">6</SelectItem>
//                       <SelectItem value="7">7</SelectItem>
//                       <SelectItem value="8">8+</SelectItem>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               <div>
//                 <Label>Income Range (AED)</Label>
//                 <div className="mt-6 px-2">
//                   <Slider defaultValue={[0, 20000]} min={0} max={30000} step={1000} />
//                   <div className="flex justify-between mt-2 text-xs text-muted-foreground">
//                     <span>0</span>
//                     <span>15,000</span>
//                     <span>30,000+</span>
//                   </div>
//                 </div>
//               </div>

//               <div>
//                 <Label>Date Submitted</Label>
//                 <div className="grid grid-cols-2 gap-2 mt-1">
//                   <Button variant="outline" size="sm" className="justify-start">
//                     <Calendar className="mr-2 h-4 w-4" />
//                     <span>From</span>
//                   </Button>
//                   <Button variant="outline" size="sm" className="justify-start">
//                     <Calendar className="mr-2 h-4 w-4" />
//                     <span>To</span>
//                   </Button>
//                 </div>
//               </div>

//               <div>
//                 <Label>AI Confidence</Label>
//                 <div className="mt-6 px-2">
//                   <Slider defaultValue={[0, 100]} min={0} max={100} step={5} />
//                   <div className="flex justify-between mt-2 text-xs text-muted-foreground">
//                     <span>0%</span>
//                     <span>50%</span>
//                     <span>100%</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end mt-6">
//               <Button variant="outline" className="mr-2">
//                 Reset
//               </Button>
//               <Button>Search</Button>
//             </div>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader className="pb-3">
//             <div className="flex items-center justify-between">
//               <CardTitle>Search Results</CardTitle>
//               <div className="flex items-center gap-2">
//                 <span className="text-sm text-muted-foreground">{searchResults.length} results</span>
//                 <Popover>
//                   <PopoverTrigger asChild>
//                     <Button variant="outline" size="sm" className="h-8 gap-1">
//                       <SlidersHorizontal className="h-3.5 w-3.5" />
//                       <span>Columns</span>
//                     </Button>
//                   </PopoverTrigger>
//                   <PopoverContent className="w-72">
//                     <div className="grid gap-4">
//                       <div className="space-y-2">
//                         <h4 className="font-medium">Show Columns</h4>
//                         <div className="grid grid-cols-2 gap-2">
//                           {[
//                             "ID",
//                             "Name",
//                             "Type",
//                             "Status",
//                             "Date",
//                             "Location",
//                             "Family Size",
//                             "Income",
//                             "AI Confidence",
//                           ].map((column) => (
//                             <div key={column} className="flex items-center space-x-2">
//                               <Checkbox id={`column-${column}`} defaultChecked />
//                               <Label htmlFor={`column-${column}`}>{column}</Label>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </PopoverContent>
//                 </Popover>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             <div className="rounded-md border">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="w-12">
//                       <Checkbox />
//                     </TableHead>
//                     <TableHead>ID</TableHead>
//                     <TableHead>Name</TableHead>
//                     <TableHead>Type</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead>Date</TableHead>
//                     <TableHead>Location</TableHead>
//                     <TableHead>Family Size</TableHead>
//                     <TableHead>Income (AED)</TableHead>
//                     <TableHead>AI Confidence</TableHead>
//                     <TableHead className="w-12"></TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {searchResults.map((application) => (
//                     <TableRow key={application.id}>
//                       <TableCell>
//                         <Checkbox />
//                       </TableCell>
//                       <TableCell className="font-medium">{application.id}</TableCell>
//                       <TableCell>
//                         <div>
//                           <div>{application.name}</div>
//                           <div className="text-xs text-muted-foreground">{application.arabicName}</div>
//                         </div>
//                       </TableCell>
//                       <TableCell>{application.type}</TableCell>
//                       <TableCell>
//                         <StatusBadge status={application.status} />
//                       </TableCell>
//                       <TableCell>{application.date}</TableCell>
//                       <TableCell>{application.location}</TableCell>
//                       <TableCell>{application.familySize}</TableCell>
//                       <TableCell>{application.income}</TableCell>
//                       <TableCell>{application.aiConfidence}%</TableCell>
//                       <TableCell>
//                         <Button variant="ghost" size="sm">
//                           View
//                         </Button>
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>

//             <div className="flex items-center justify-between mt-4">
//               <div className="text-sm text-muted-foreground">
//                 Showing <strong>1-10</strong> of <strong>{searchResults.length}</strong> results
//               </div>
//               <div className="flex items-center gap-2">
//                 <Button variant="outline" size="sm" disabled>
//                   Previous
//                 </Button>
//                 <Button variant="outline" size="sm">
//                   Next
//                 </Button>
//                 <Select defaultValue="10">
//                   <SelectTrigger className="w-20 h-8">
//                     <SelectValue placeholder="Per page" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="10">10</SelectItem>
//                     <SelectItem value="20">20</SelectItem>
//                     <SelectItem value="50">50</SelectItem>
//                     <SelectItem value="100">100</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </DashboardShell>
//   )
// }

// function StatusBadge({ status }: { status: string }) {
//   let bgColor = "bg-gray-100 text-gray-800"

//   if (status === "Pending") {
//     bgColor = "bg-amber-100 text-amber-800"
//   } else if (status === "Approved") {
//     bgColor = "bg-green-100 text-green-800"
//   } else if (status === "Flagged") {
//     bgColor = "bg-red-100 text-red-800"
//   } else if (status === "Auto-Approved") {
//     bgColor = "bg-blue-100 text-blue-800"
//   }

//   return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>
// }

// const applications = [
//   {
//     id: "UAE-2023-78945",
//     name: "Ahmed Mohammed Al-Zahrani",
//     arabicName: "أحمد محمد الزهراني",
//     type: "Housing Support",
//     status: "Pending",
//     date: "May 26, 2023",
//     location: "Dubai",
//     familySize: 4,
//     income: "7,500",
//     aiConfidence: 87,
//   },
//   {
//     id: "UAE-2023-78946",
//     name: "Fatima Ali Al-Saadi",
//     arabicName: "فاطمة علي السعدي",
//     type: "Financial Aid",
//     status: "Auto-Approved",
//     date: "May 26, 2023",
//     location: "Abu Dhabi",
//     familySize: 3,
//     income: "5,200",
//     aiConfidence: 95,
//   },
//   {
//     id: "UAE-2023-78947",
//     name: "Mohammed Abdullah Al-Mansoori",
//     arabicName: "محمد عبدالله المنصوري",
//     type: "Healthcare Assistance",
//     status: "Flagged",
//     date: "May 25, 2023",
//     location: "Sharjah",
//     familySize: 5,
//     income: "6,500",
//     aiConfidence: 76,
//   },
//   {
//     id: "UAE-2023-78948",
//     name: "Aisha Khalid Al-Hashimi",
//     arabicName: "عائشة خالد الهاشمي",
//     type: "Education Support",
//     status: "Approved",
//     date: "May 25, 2023",
//     location: "Ajman",
//     familySize: 6,
//     income: "8,200",
//     aiConfidence: 92,
//   },
//   {
//     id: "UAE-2023-78949",
//     name: "Khalid Saeed Al-Shamsi",
//     arabicName: "خالد سعيد الشامسي",
//     type: "Financial Aid",
//     status: "Pending",
//     date: "May 24, 2023",
//     location: "Ras Al Khaimah",
//     familySize: 2,
//     income: "4,800",
//     aiConfidence: 85,
//   },
//   {
//     id: "UAE-2023-78950",
//     name: "Maryam Yousuf Al-Zaabi",
//     arabicName: "مريم يوسف الزعابي",
//     type: "Housing Support",
//     status: "Flagged",
//     date: "May 24, 2023",
//     location: "Fujairah",
//     familySize: 7,
//     income: "9,100",
//     aiConfidence: 79,
//   },
//   {
//     id: "UAE-2023-78951",
//     name: "Saeed Rashid Al-Nuaimi",
//     arabicName: "سعيد راشد النعيمي",
//     type: "Healthcare Assistance",
//     status: "Auto-Approved",
//     date: "May 23, 2023",
//     location: "Dubai",
//     familySize: 4,
//     income: "6,300",
//     aiConfidence: 96,
//   },
//   {
//     id: "UAE-2023-78952",
//     name: "Noura Ahmed Al-Mazrouei",
//     arabicName: "نورة أحمد المزروعي",
//     type: "Education Support",
//     status: "Pending",
//     date: "May 23, 2023",
//     location: "Abu Dhabi",
//     familySize: 5,
//     income: "7,200",
//     aiConfidence: 88,
//   },
//   {
//     id: "UAE-2023-78953",
//     name: "Hamad Jassim Al-Falasi",
//     arabicName: "حمد جاسم الفلاسي",
//     type: "Financial Aid",
//     status: "Approved",
//     date: "May 22, 2023",
//     location: "Sharjah",
//     familySize: 3,
//     income: "5,500",
//     aiConfidence: 91,
//   },
//   {
//     id: "UAE-2023-78954",
//     name: "Latifa Mohammed Al-Qasimi",
//     arabicName: "لطيفة محمد القاسمي",
//     type: "Housing Support",
//     status: "Auto-Approved",
//     date: "May 22, 2023",
//     location: "Umm Al Quwain",
//     familySize: 4,
//     income: "6,800",
//     aiConfidence: 94,
//   },
// ]
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
      <div className="container mx-auto px-6 py-8"> {/* Adjusted padding */}
        <div className="flex items-center justify-between mb-8"> {/* Increased margin-bottom */}
          <h1 className="text-3xl font-semibold text-gray-900">Search Applications</h1> {/* Larger, semi-bold, darker text */}
          <div className="flex gap-3"> {/* Increased gap */}
            <Button variant="outline" size="lg" className="rounded-lg text-gray-700 hover:bg-gray-50 border-gray-200"> {/* Larger, rounded, subtle hover */}
              <Download className="mr-2 h-5 w-5 text-gray-600" /> {/* Larger icon, muted color */}
              Export Results
            </Button>
          </div>
        </div>

        <Card className="mb-8 rounded-xl shadow-md border border-gray-100"> {/* More rounded, subtle shadow and border */}
          <CardHeader className="px-6 py-5 border-b border-gray-100"> {/* Adjusted padding, added bottom border */}
            <CardTitle className="text-lg font-semibold text-gray-800">Advanced Search</CardTitle> {/* Refined title */}
          </CardHeader>
          <CardContent className="p-6"> {/* Adjusted padding */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-1">Applicant Name/ID</Label> {/* Refined label styling */}
                <div className="relative mt-2"> {/* Adjusted margin-top */}
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" /> {/* Centered icon, lighter color */}
                  <Input
                    id="search"
                    type="search"
                    placeholder="Search by name or ID..."
                    className="pl-10 h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800" /* Wider padding, rounded, focus styles */
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="application-type" className="text-sm font-medium text-gray-700 mb-1">Application Type</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="application-type" className="mt-2 h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-gray-200 shadow-sm">
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="financial">Financial Aid</SelectItem>
                    <SelectItem value="housing">Housing Support</SelectItem>
                    <SelectItem value="healthcare">Healthcare Assistance</SelectItem>
                    <SelectItem value="education">Education Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="status" className="text-sm font-medium text-gray-700 mb-1">Status</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="status" className="mt-2 h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-gray-200 shadow-sm">
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
                <Label htmlFor="location" className="text-sm font-medium text-gray-700 mb-1">Geographic Location</Label>
                <Select defaultValue="all">
                  <SelectTrigger id="location" className="mt-2 h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-gray-200 shadow-sm">
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
                <Label className="text-sm font-medium text-gray-700 mb-1">Family Size</Label>
                <div className="flex items-center gap-4 mt-2">
                  <Select defaultValue="any">
                    <SelectTrigger className="w-28 h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"> {/* Wider, rounded */}
                      <SelectValue placeholder="Min" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-gray-200 shadow-sm">
                      <SelectItem value="any">Any</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5+</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-gray-600">to</span>
                  <Select defaultValue="any">
                    <SelectTrigger className="w-28 h-11 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 text-gray-800"> {/* Wider, rounded */}
                      <SelectValue placeholder="Max" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg border-gray-200 shadow-sm">
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
                <Label className="text-sm font-medium text-gray-700 mb-1">Income Range (AED)</Label>
                <div className="mt-4 px-1"> {/* Adjusted margin-top, padding */}
                  <Slider
                    defaultValue={[0, 20000]}
                    min={0}
                    max={30000}
                    step={1000}
                    className="[&>span:first-child]:h-2 [&>span:first-child]:bg-blue-100 [&>span:first-child>span]:bg-blue-600 [&>span:first-child>span>span]:h-5 [&>span:first-child>span>span]:w-5 [&>span:first-child>span>span]:rounded-full [&>span:first-child>span>span]:border-2 [&>span:first-child>span>span]:border-blue-600 [&>span:first-child>span>span]:bg-white"
                  /> {/* Custom slider styling for Apple-like look */}
                  <div className="flex justify-between mt-3 text-xs text-gray-500"> {/* Darker muted text */}
                    <span>0</span>
                    <span>15,000</span>
                    <span>30,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-1">Date Submitted</Label>
                <div className="grid grid-cols-2 gap-3 mt-2"> {/* Increased gap */}
                  <Button variant="outline" size="lg" className="justify-start rounded-lg border-gray-300 text-gray-800 hover:bg-gray-50"> {/* Larger, rounded, subtle hover */}
                    <Calendar className="mr-2 h-5 w-5 text-gray-500" /> {/* Larger icon, muted color */}
                    <span>From</span>
                  </Button>
                  <Button variant="outline" size="lg" className="justify-start rounded-lg border-gray-300 text-gray-800 hover:bg-gray-50"> {/* Larger, rounded, subtle hover */}
                    <Calendar className="mr-2 h-5 w-5 text-gray-500" /> {/* Larger icon, muted color */}
                    <span>To</span>
                  </Button>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-1">AI Confidence</Label>
                <div className="mt-4 px-1"> {/* Adjusted margin-top, padding */}
                  <Slider
                    defaultValue={[0, 100]}
                    min={0}
                    max={100}
                    step={5}
                    className="[&>span:first-child]:h-2 [&>span:first-child]:bg-blue-100 [&>span:first-child>span]:bg-blue-600 [&>span:first-child>span>span]:h-5 [&>span:first-child>span>span]:w-5 [&>span:first-child>span>span]:rounded-full [&>span:first-child>span>span]:border-2 [&>span:first-child>span>span]:border-blue-600 [&>span:first-child>span>span]:bg-white"
                  /> {/* Custom slider styling for Apple-like look */}
                  <div className="flex justify-between mt-3 text-xs text-gray-500"> {/* Darker muted text */}
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-8 border-t border-gray-100 pt-6"> {/* Increased margin-top, added top border, padding-top */}
              <Button variant="outline" className="mr-3 rounded-lg text-gray-700 hover:bg-gray-50 border-gray-200"> {/* Rounded, subtle hover */}
                Reset
              </Button>
              <Button className="rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm">Search</Button> {/* Blue, rounded, shadow */}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-xl shadow-md border border-gray-100"> {/* More rounded, subtle shadow and border */}
          <CardHeader className="px-6 py-5 border-b border-gray-100"> {/* Adjusted padding, added bottom border */}
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold text-gray-800">Search Results</CardTitle> {/* Refined title */}
              <div className="flex items-center gap-3"> {/* Increased gap */}
                <span className="text-sm text-gray-600">{searchResults.length} results</span> {/* Darker muted text */}
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" size="sm" className="h-9 rounded-lg text-gray-700 hover:bg-gray-50 border-gray-200"> {/* Rounded, subtle hover */}
                      <SlidersHorizontal className="mr-2 h-4 w-4 text-gray-500" /> {/* Muted icon */}
                      <span>Columns</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-72 p-4 rounded-lg border-gray-200 shadow-lg"> {/* Rounded, larger padding, subtle shadow */}
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-800">Show Columns</h4> {/* Refined heading */}
                        <div className="grid grid-cols-2 gap-3"> {/* Increased gap */}
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
                              <Checkbox id={`column-${column}`} defaultChecked className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white" /> {/* Blue checkbox */}
                              <Label htmlFor={`column-${column}`} className="text-gray-700">{column}</Label> {/* Darker label */}
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
          <CardContent className="p-0"> {/* Removed padding to allow table to fill */}
            <div className="rounded-b-xl overflow-hidden border-t-0"> {/* Rounded bottom, hidden overflow */}
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b border-gray-100"> {/* Light gray header background */}
                    <TableHead className="w-16 px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"> {/* Adjusted padding, font, color */}
                      <Checkbox className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white" />
                    </TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">ID</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Type</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Location</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Family Size</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Income (AED)</TableHead>
                    <TableHead className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">AI Confidence</TableHead>
                    <TableHead className="w-20 px-4 py-3"></TableHead> {/* Adjusted width */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {searchResults.map((application) => (
                    <TableRow key={application.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors"> {/* Subtle row border, hover effect */}
                      <TableCell className="px-4 py-3"> {/* Adjusted padding */}
                        <Checkbox className="border-gray-300 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white" />
                      </TableCell>
                      <TableCell className="font-medium text-gray-900 px-4 py-3">{application.id}</TableCell> {/* Darker text */}
                      <TableCell className="px-4 py-3">
                        <div className="text-gray-800">{application.name}</div> {/* Darker text */}
                        <div className="text-xs text-gray-500">{application.arabicName}</div> {/* Darker muted text */}
                      </TableCell>
                      <TableCell className="text-gray-700 px-4 py-3">{application.type}</TableCell> {/* Darker text */}
                      <TableCell className="px-4 py-3">
                        <StatusBadge status={application.status} />
                      </TableCell>
                      <TableCell className="text-gray-700 px-4 py-3">{application.date}</TableCell>
                      <TableCell className="text-gray-700 px-4 py-3">{application.location}</TableCell>
                      <TableCell className="text-gray-700 px-4 py-3">{application.familySize}</TableCell>
                      <TableCell className="text-gray-700 px-4 py-3">{application.income}</TableCell>
                      <TableCell className="text-gray-700 px-4 py-3">{application.aiConfidence}%</TableCell>
                      <TableCell className="px-4 py-3">
                        <Button variant="ghost" size="sm" className="rounded-md text-blue-600 hover:bg-blue-50"> {/* Blue ghost button, subtle hover */}
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="flex items-center justify-between mt-6 px-6 pb-6"> {/* Adjusted padding */}
              <div className="text-sm text-gray-600"> {/* Darker muted text */}
                Showing <strong>1-10</strong> of <strong>{searchResults.length}</strong> results
              </div>
              <div className="flex items-center gap-3"> {/* Increased gap */}
                <Button variant="outline" size="sm" disabled className="rounded-md border-gray-200 text-gray-500"> {/* Rounded, muted disabled */}
                  Previous
                </Button>
                <Button variant="outline" size="sm" className="rounded-md border-gray-200 text-gray-700 hover:bg-gray-50"> {/* Rounded, subtle hover */}
                  Next
                </Button>
                <Select defaultValue="10">
                  <SelectTrigger className="w-24 h-9 rounded-md border-gray-200 text-gray-700"> {/* Rounded, refined size */}
                    <SelectValue placeholder="Per page" />
                  </SelectTrigger>
                  <SelectContent className="rounded-lg border-gray-200 shadow-sm">
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
  let bgColor = "bg-gray-100 text-gray-700" // Default for unknown/general status

  if (status === "Pending") {
    bgColor = "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20" // Softer amber, ring for clarity
  } else if (status === "Approved") {
    bgColor = "bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20" // Softer green, ring
  } else if (status === "Flagged") {
    bgColor = "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/20" // Softer red, ring
  } else if (status === "Auto-Approved") {
    bgColor = "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-600/20" // Softer blue, ring
  }

  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${bgColor}`}>{status}</span> // Inline-flex, padding
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