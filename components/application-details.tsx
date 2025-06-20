// // "use client"
// // import Image from "next/image"
// // import { ChevronLeft, Download, Printer } from "lucide-react"

// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent } from "@/components/ui/card"
// // import { DashboardHeader } from "@/components/dashboard-header"
// // import { DashboardShell } from "@/components/dashboard-shell"
// // import { Label } from "@/components/ui/label";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// // import { Textarea } from "@/components/ui/textarea";
// // import { Progress } from "@/components/ui/progress"; // Re-added Progress import

// // // --- Inline SVG Icons (ensure these are visually intuitive from your source) ---
// // const CheckCircleIcon = ({ className = '', size = 24 }) => (
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     viewBox="0 0 24 24"
// //     fill="currentColor"
// //     className={className}
// //     width={size}
// //     height={size}
// //   >
// //     <path
// //       fillRule="evenodd"
// //       d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.538l-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.135-.084l3.75-5.25Z"
// //       clipRule="evenodd"
// //     />
// //   </svg>
// // );

// // const ExclamationTriangleIcon = ({ className = '', size = 24 }) => (
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     viewBox="0 0 24 24"
// //     fill="currentColor"
// //     className={className}
// //     width={size}
// //     height={size}
// //   >
// //     <path
// //       fillRule="evenodd"
// //       d="M9.401 3.003c1.155-2.004 4.017-2.004 5.173 0L21.41 12.003c1.155 2.004-.305 4.503-2.583 4.503H5.174c-2.278 0-3.733-2.499-2.582-4.503L9.401 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
// //       clipRule="evenodd"
// //     />
// //   </svg>
// // );

// // const MedicalEmergencyIcon = ({ className = '', size = 24 }) => (
// //   <svg
// //     xmlns="http://www.w3.org/2000/svg"
// //     viewBox="0 0 24 24"
// //     fill="currentColor"
// //     className={className}
// //     width={size}
// //     height={size}
// //   >
// //     <path
// //       fillRule="evenodd"
// //       d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
// //       clipRule="evenodd"
// //     />
// //   </svg>
// // );
// // // --- End Inline SVG Icons ---

// // // Placeholder for `id` variable, replace with actual prop or state
// // const id = "HSG-2024-001234";

// // export function ApplicationDetails({ id }: { id: string }) {
// //   return (
// //     <DashboardShell>
// //       {/* Consolidated Dashboard Header */}
// //       <DashboardHeader
// //         heading="Application Details"
// //       // Removed `text` prop as it expects a string, and we're passing an element.
// //       // The badge and buttons are now passed as children.
// //       >
// //         <div className="flex items-center gap-2">
// //           {/* Status Badge */}
// //           <div className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
// //             Pending - Urgent
// //           </div>
// //           {/* Action Buttons */}
// //           <Button variant="outline" size="icon">
// //             <ChevronLeft className="h-4 w-4" />
// //           </Button>
// //           <Button variant="outline" size="sm">
// //             <Printer className="mr-2 h-4 w-4" />
// //             Print
// //           </Button>
// //           <Button variant="outline" size="sm">
// //             <Download className="mr-2 h-4 w-4" />
// //             Export
// //           </Button>
// //         </div>
// //       </DashboardHeader>

// //       <div className="container mx-auto p-6 pt-0"> {/* Added pt-0 to prevent double padding with DashboardHeader */}

// //         {/* Applicant Details & Decision Cards - Two Columns */}
// //         <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 mb-6">
// //           {/* Applicant Details Card - Occupies 70% width on medium screens and up */}
// //           <Card className="md:col-span-1">
// //             <CardContent className="p-6">
// //               <div className="flex flex-col md:flex-row gap-6">
// //                 <div className="flex-shrink-0">
// //                   <Image
// //                     src="/aisha.png?height=170&width=170" // Ensure this path is correct
// //                     width={170}
// //                     height={170}
// //                     alt="Applicant Photo"
// //                     className="rounded-lg border"
// //                   />
// //                 </div>
// //                 <div className="flex-1">
// //                   <h2 className="text-2xl font-bold mb-1">Aisha Al-Mansouri</h2> {/* Consistent h2 */}
// //                   <h3 className="text-lg text-muted-foreground mb-4"> عائشة المنصوري </h3> {/* Consistent h3 */}

// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                     <div>
// //                       <div className="text-sm text-muted-foreground">Application ID</div>
// //                       <div className="font-medium">{id}</div>
// //                     </div>
// //                     <div>
// //                       <div className="text-sm text-muted-foreground">Emirates ID</div>
// //                       <div className="font-medium">784-1985-1234567-8</div>
// //                     </div>
// //                     <div>
// //                       <div className="text-sm text-muted-foreground">Application Type</div>
// //                       <div className="font-medium">Healthcare Assistance</div>
// //                     </div>
// //                     <div>
// //                       <div className="text-sm text-muted-foreground">Submission Date</div>
// //                       <div className="font-medium">May 25, 2023</div>
// //                     </div>
// //                     <div>
// //                       <div className="text-sm text-muted-foreground">Contact</div>
// //                       <div className="font-medium">+971 50 123 4567</div>
// //                     </div>
// //                     <div>
// //                       <div className="text-sm text-muted-foreground">AI Confidence</div>
// //                       <div className="font-medium">76%</div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </CardContent>
// //           </Card>

// //           {/* Decision Card - Occupies 30% width on medium screens and up */}
// //           <Card className="md:col-span-1">
// //             <CardContent className="p-6">
// //               <h3 className="text-lg font-bold mb-4">Decision</h3> {/* Consistent h3 */}

// //               <div className="space-y-4">
// //                 <Button className="w-full bg-green-600 hover:bg-green-700">Approve Application</Button>
// //                 <Button
// //                   className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
// //                   variant="outline"
// //                 >
// //                   Reject Application
// //                 </Button>
// //                 <Button className="w-full" variant="outline"> {/* Using variant="outline" for secondary action */}
// //                   Request Additional Information
// //                 </Button>
// //                 <Button className="w-full" variant="outline"> {/* Using variant="outline" for secondary action */}
// //                   Escalate to Supervisor
// //                 </Button>
// //               </div>

// //               <div className="mt-4">
// //                 <Label htmlFor="comments" className="text-sm font-medium">Comments</Label> {/* Consistent label style */}
// //                 <Textarea id="comments" placeholder="Add your comments here..." className="mt-1" />
// //               </div>

// //               <div className="mt-4">
// //                 <Label htmlFor="reason" className="text-sm font-medium">Decision Reasoning</Label> {/* Consistent label style */}
// //                 <Select>
// //                   <SelectTrigger id="reason">
// //                     <SelectValue placeholder="Select reason" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     <SelectItem value="eligible">Meets all eligibility criteria</SelectItem>
// //                     <SelectItem value="partial">Partially meets criteria</SelectItem>
// //                     <SelectItem value="income">Income verification issues</SelectItem>
// //                     <SelectItem value="documents">Incomplete documentation</SelectItem>
// //                     <SelectItem value="previous">Previous support considerations</SelectItem>
// //                     <SelectItem value="other">Other (specify in comments)</SelectItem>
// //                   </SelectContent>
// //                 </Select>
// //               </div>
// //             </CardContent>
// //           </Card>
// //         </div> {/* End of the two-column grid div */}

// //         {/* Tabs Section */}
// //         <Tabs defaultValue="ai-analysis"> {/* Changed defaultValue to "ai-analysis" */}
// //           <TabsList className="grid grid-cols-4 mb-6">
// //             <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
// //             <TabsTrigger value="personal">Personal Information</TabsTrigger>
// //             <TabsTrigger value="documents">Documents</TabsTrigger>
// //             <TabsTrigger value="history">History</TabsTrigger>
// //           </TabsList>

// //           <TabsContent value="ai-analysis">
// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //               <Card className="lg:col-span-2">
// //                 <CardContent className="p-6">
// //                   <h3 className="text-lg font-bold mb-4">AI Recommendation</h3> {/* Consistent h3 */}
// //                   <div className="p-4 border rounded-md mb-6"> {/* Added mb-6 for spacing */}
// //                     <p className="text-sm text-gray-800"> {/* Ensured text-gray-800 for readability */}
// //                       Aisha was divorced on May 20, 2025.
// //                       <br />
// //                       <br />
// //                       She meets most eligibility criteria for financial-aid assistance. Her family's income is
// //                       significantly below the threshold, and the medical necessity is well-documented. The family size
// //                       and composition also qualify for additional support.
// //                     </p>
// //                     <p className="text-sm mt-3 text-gray-800">However, <b className="text-red-700">manual review is recommended</b> due to two factors:</p> {/* text-red-700 for accessibility */}
// //                     <ol className="list-disc list-inside text-sm mt-2 space-y-1 text-gray-800">
// //                       <li>Housing verification for the "Family Support" source requires additional documentation</li>
// //                       <li>
// //                         Previous financial aid was received within the past 12 months, requiring assessment of ongoing
// //                         need.
// //                       </li>
// //                     </ol>
// //                     <p className="text-sm mt-3 text-gray-800">
// //                       The AI system recommends approval with verification of the housing documentation.
// //                     </p>
// //                   </div>

// //                   <div className="border rounded-md p-3 space-y-6">
// //                     <h3 className="text-lg font-bold mb-4">Eligibility Assessment</h3> {/* Consistent h3 */}
// //                     <div className="space-y-6">

// //                       {/* Income Threshold - Eligible */}
// //                       <div className="flex items-start space-x-3">
// //                         <CheckCircleIcon size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
// //                         <div className="flex-grow">
// //                           <span className="font-bold text-gray-900">Income Threshold</span> {/* Consistent font-bold */}
// //                           <div className="text-sm text-gray-600">
// //                             Family income (AED 6,500) is below the threshold (AED 10,000) for healthcare assistance.
// //                           </div>
// //                         </div>
// //                         <span className="ml-auto font-medium text-green-700 text-right">Eligible</span> {/* text-green-700 for accessibility */}
// //                       </div>

// //                       {/* Family Size Criteria - Eligible */}
// //                       <div className="flex items-start space-x-3">
// //                         <CheckCircleIcon size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
// //                         <div className="flex-grow">
// //                           <span className="font-bold text-gray-900">Family Size Criteria</span> {/* Consistent font-bold */}
// //                           <div className="text-sm text-gray-600">
// //                             Family size (3 members) meets criteria for additional support.
// //                           </div>
// //                         </div>
// //                         <span className="ml-auto font-medium text-green-700 text-right">Eligible</span> {/* text-green-700 for accessibility */}
// //                       </div>

// //                       {/* Residency Requirements - Eligible */}
// //                       <div className="flex items-start space-x-3">
// //                         <CheckCircleIcon size={24} className="text-green-500 flex-shrink-0 mt-0.5" />
// //                         <div className="flex-grow">
// //                           <span className="font-bold text-gray-900">Residency Requirements</span> {/* Consistent font-bold */}
// //                           <div className="text-sm text-gray-600">
// //                             UAE citizen with valid Emirates ID and family book.
// //                           </div>
// //                         </div>
// //                         <span className="ml-auto font-medium text-green-700 text-right">Eligible</span> {/* text-green-700 for accessibility */}
// //                       </div>

// //                       {/* Previous Support - Review Needed (Changed icon and color to red) */}
// //                       <div className="flex items-start space-x-3">
// //                         <ExclamationTriangleIcon size={24} className="text-red-500 flex-shrink-0 mt-0.5" /> {/* text-red-500 for icon */}
// //                         <div className="flex-grow">
// //                           <span className="font-bold text-gray-900">Previous Support</span> {/* Consistent font-bold */}
// //                           <div className="text-sm text-gray-600">
// //                             Received financial aid 8 months ago (AED 15,000).
// //                           </div>
// //                         </div>
// //                         <span className="ml-auto font-medium text-red-700 text-right">Review Needed</span> {/* text-red-700 for accessibility */}
// //                       </div>

// //                       {/* Medical Necessity - Emergency/Urgency (New icon and color) */}
// //                       <div className="flex items-start space-x-3">
// //                         <MedicalEmergencyIcon size={24} className="text-blue-500 flex-shrink-0 mt-0.5" />
// //                         <div className="flex-grow">
// //                           <span className="font-bold text-gray-900">Medical Necessity</span> {/* Consistent font-bold */}
// //                           <div className="text-sm text-gray-600">
// //                             Medical records confirm chronic condition requiring ongoing treatment.
// //                           </div>
// //                         </div>
// //                         <span className="ml-auto font-medium text-blue-700 text-right">High Need</span> {/* text-blue-700 for accessibility */}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               <div className="space-y-6">
// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Risk Assessment</h3> {/* Consistent h3 */}
// //                     <div className="space-y-4">
// //                       <div className="border rounded-md p-3">
// //                         <div className="flex items-center justify-between">
// //                           <div className="font-medium">Overall Risk</div>
// //                           <div className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium"> {/* Changed to yellow */}
// //                             Medium
// //                           </div>
// //                         </div>
// //                       </div>

// //                       <div className="grid grid-cols-2 gap-3">
// //                         <div className="border rounded-md p-3">
// //                           <div className="text-sm font-medium">Document Consistency</div>
// //                           <div className="mt-1 flex items-center">
// //                             <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
// //                             <span className="text-sm text-gray-800">Low Risk</span> {/* Consistent text-gray-800 */}
// //                           </div>
// //                         </div>
// //                         <div className="border rounded-md p-3">
// //                           <div className="text-sm font-medium">Identity Verification</div>
// //                           <div className="mt-1 flex items-center">
// //                             <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
// //                             <span className="text-sm text-gray-800">Low Risk</span> {/* Consistent text-gray-800 */}
// //                           </div>
// //                         </div>
// //                         <div className="border rounded-md p-3">
// //                           <div className="text-sm font-medium">Housing Verification</div>
// //                           <div className="mt-1 flex items-center">
// //                             <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div> {/* Consistent yellow-500 */}
// //                             <span className="text-sm text-gray-800">Medium Risk</span> {/* Consistent text-gray-800 */}
// //                           </div>
// //                         </div>
// //                         <div className="border rounded-md p-3">
// //                           <div className="text-sm font-medium">Duplicate Applications</div>
// //                           <div className="mt-1 flex items-center">
// //                             <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
// //                             <span className="text-sm text-gray-800">Low Risk</span> {/* Consistent text-gray-800 */}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>

// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Cross-Reference Results</h3> {/* Consistent h3 */}
// //                     <div className="space-y-3">
// //                       <div className="flex items-center justify-between border-b pb-2">
// //                         <span className="text-sm text-gray-800">Ministry of Interior</span> {/* Consistent text-gray-800 */}
// //                         <span className="text-sm font-medium text-green-700">Verified</span> {/* text-green-700 for accessibility */}
// //                       </div>
// //                       <div className="flex items-center justify-between border-b pb-2">
// //                         <span className="text-sm text-gray-800">Ministry of Health</span> {/* Consistent text-gray-800 */}
// //                         <span className="text-sm font-medium text-green-700">Verified</span> {/* text-green-700 for accessibility */}
// //                       </div>
// //                       <div className="flex items-center justify-between border-b pb-2">
// //                         <span className="text-sm text-gray-800">Ministry of Education</span> {/* Consistent text-gray-800 */}
// //                         <span className="text-sm font-medium text-green-700">Verified</span> {/* text-green-700 for accessibility */}
// //                       </div>
// //                       <div className="flex items-center justify-between border-b pb-2">
// //                         <span className="text-sm text-gray-800">Previous Support Database</span> {/* Consistent text-gray-800 */}
// //                         <span className="text-sm font-medium text-red-700">Review Needed</span> {/* text-red-700 for accessibility */}
// //                       </div>
// //                       <div className="flex items-center justify-between pb-2">
// //                         <span className="text-sm text-gray-800">Financial Institutions</span> {/* Consistent text-gray-800 */}
// //                         <span className="text-sm font-medium text-green-700">Verified</span> {/* text-green-700 for accessibility */}
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>

// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">AI Confidence</h3> {/* Consistent h3 */}
// //                     <div className="space-y-2">
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Overall Confidence</span> {/* Consistent text-gray-800 */}
// //                         <span className="text-sm font-medium">76%</span>
// //                       </div>
// //                       {/* Using Progress here for AI Confidence visually */}
// //                       <Progress value={76} className="h-2" />
// //                       <div className="text-xs text-muted-foreground">
// //                         Medium confidence due to income verification issues
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </div>
// //           </TabsContent>

// //           <TabsContent value="personal">
// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //               <Card className="lg:col-span-2">
// //                 <CardContent className="p-6">
// //                   <h3 className="text-lg font-bold mb-4">Family Tree</h3> {/* Consistent h3 */}
// //                   <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
// //                     <span className="text-muted-foreground">Family Tree Visualization</span>
// //                   </div>

// //                   <h3 className="text-lg font-bold mt-6 mb-4">Family Members</h3> {/* Consistent h3 */}
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <PersonCard
// //                       name="Aisha Al-Mansouri"
// //                       relation="Self"
// //                       age={32}
// //                       occupation="Unemployed"
// //                       emiratesId="784-1985-1234567-8"
// //                     />
// //                     <PersonCard
// //                       name="Hamad Al-Mansoori"
// //                       relation="Son"
// //                       age={3}
// //                       occupation="Student"
// //                       emiratesId="784-2011-9876543-2"
// //                     />
// //                     <PersonCard
// //                       name="Fatima Al-Mansoori"
// //                       relation="Daughter"
// //                       age={7}
// //                       occupation="Student"
// //                       emiratesId="784-2013-5432109-8"
// //                     />
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               <div className="space-y-6">
// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Income Sources</h3> {/* Consistent h3 */}
// //                     <div className="space-y-4">
// //                       <div className="flex justify-between items-center">
// //                         <div>
// //                           <div className="font-medium text-gray-800">Previous Employment</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-sm text-muted-foreground">Monthly</div>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="font-medium text-gray-800">AED 4,500</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-green-700">Verified</div> {/* text-green-700 for accessibility */}
// //                         </div>
// //                       </div>
// //                       <div className="flex justify-between items-center">
// //                         <div>
// //                           <div className="font-medium text-gray-800">Family Support</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-sm text-muted-foreground">Monthly</div>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="font-medium text-gray-800">AED 2,000</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-yellow-700">Pending Verification</div> {/* text-yellow-700 for accessibility */}
// //                         </div>
// //                       </div>
// //                       <div className="pt-2 border-t">
// //                         <div className="flex justify-between items-center">
// //                           <div className="font-bold text-gray-900">Total Monthly Income</div> {/* Consistent font-bold */}
// //                           <div className="font-bold text-gray-900">AED 6,500</div> {/* Consistent font-bold */}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>

// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Assets Summary</h3> {/* Consistent h3 */}
// //                     <div className="space-y-3">
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Bank Accounts</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">AED 12,500</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Vehicles</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">1 (2015 Toyota)</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Properties</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">None</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Investments</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">None</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>

// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Housing Situation</h3> {/* Consistent h3 */}
// //                     <div className="space-y-3">
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Housing Type</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">Rented Apartment</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Monthly Rent</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">AED 5,500</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Location</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">Al Nahda, Sharjah</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <span className="text-sm text-gray-800">Contract Expiry</span> {/* Consistent text-gray-800 */}
// //                         <span className="font-medium text-gray-900">March 15, 2024</span> {/* Consistent text-gray-900 */}
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </div>
// //           </TabsContent>

// //           <TabsContent value="documents">
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               <DocumentCard
// //                 title="Emirates ID"
// //                 status="Verified"
// //                 confidence={98}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Family Book"
// //                 status="Verified"
// //                 confidence={95}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Medical Records"
// //                 status="Verified"
// //                 confidence={92}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Income Statement"
// //                 status="Needs Review"
// //                 confidence={76}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Rental Agreement"
// //                 status="Verified"
// //                 confidence={94}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Previous Support Documents"
// //                 status="Needs Review"
// //                 confidence={82}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Bank Statements"
// //                 status="Verified"
// //                 confidence={90}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Medical Insurance Card"
// //                 status="Verified"
// //                 confidence={96}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //               <DocumentCard
// //                 title="Utility Bills"
// //                 status="Verified"
// //                 confidence={88}
// //                 previewUrl="/placeholder.svg?height=200&width=320"
// //               />
// //             </div>
// //           </TabsContent>

// //           <TabsContent value="history">
// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //               <Card className="lg:col-span-2">
// //                 <CardContent className="p-6">
// //                   <h3 className="text-lg font-bold mb-4">Application Timeline</h3> {/* Consistent h3 */}
// //                   <div className="space-y-6">
// //                     <TimelineItem
// //                       date="May 25, 2023"
// //                       time="09:15 AM"
// //                       title="Application Submitted"
// //                       description="Initial application for healthcare assistance submitted through online portal"
// //                       status="completed"
// //                     />
// //                     <TimelineItem
// //                       date="May 25, 2023"
// //                       time="09:30 AM"
// //                       title="Documents Uploaded"
// //                       description="All required documents uploaded to the system"
// //                       status="completed"
// //                     />
// //                     <TimelineItem
// //                       date="May 25, 2023"
// //                       time="10:45 AM"
// //                       title="Initial AI Processing"
// //                       description="Automated verification of identity and document authenticity"
// //                       status="completed"
// //                     />
// //                     <TimelineItem
// //                       date="May 26, 2023"
// //                       time="08:30 AM"
// //                       title="AI Eligibility Assessment"
// //                       description="Automated assessment of eligibility criteria and cross-reference verification"
// //                       status="completed"
// //                     />
// //                     <TimelineItem
// //                       date="May 26, 2023"
// //                       time="09:15 AM"
// //                       title="Flagged for Review"
// //                       description="Application flagged for human review due to income verification and previous support history"
// //                       status="completed"
// //                     />
// //                     <TimelineItem
// //                       date="May 27, 2023"
// //                       time="11:30 AM"
// //                       title="Assigned to Social Worker"
// //                       description="Application assigned to Saeed Al-Mansouri for review"
// //                       status="current"
// //                     />
// //                     <TimelineItem
// //                       date="Pending"
// //                       time=""
// //                       title="Decision"
// //                       description="Final decision on application"
// //                       status="upcoming"
// //                     />
// //                     <TimelineItem
// //                       date="Pending"
// //                       time=""
// //                       title="Notification"
// //                       description="Applicant notification of decision"
// //                       status="upcoming"
// //                     />
// //                   </div>
// //                 </CardContent>
// //               </Card>

// //               <div className="space-y-6">
// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Previous Applications</h3> {/* Consistent h3 */}
// //                     <div className="space-y-4">
// //                       <div className="border rounded-md p-3">
// //                         <div className="flex justify-between">
// //                           <div className="font-medium text-gray-800">Financial Aid</div> {/* Consistent text-gray-800 */}
// //                           <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
// //                             Approved
// //                           </div>
// //                         </div>
// //                         <div className="text-sm text-muted-foreground mt-1">
// //                           September 15, 2022 • ID: UAE-2022-45678
// //                         </div>
// //                         <div className="text-sm mt-2 text-gray-800">One-time financial assistance of AED 15,000</div> {/* Consistent text-gray-800 */}
// //                       </div>
// //                       <div className="border rounded-md p-3">
// //                         <div className="flex justify-between">
// //                           <div className="font-medium text-gray-800">Education Support</div> {/* Consistent text-gray-800 */}
// //                           <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
// //                             Approved
// //                           </div>
// //                         </div>
// //                         <div className="text-sm text-muted-foreground mt-1">August 10, 2021 • ID: UAE-2021-34567</div>
// //                         <div className="text-sm mt-2 text-gray-800">School fees assistance for 3 children</div> {/* Consistent text-gray-800 */}
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>

// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Payment History</h3> {/* Consistent h3 */}
// //                     <div className="space-y-3">
// //                       <div className="flex justify-between border-b pb-2">
// //                         <div>
// //                           <div className="text-sm font-medium text-gray-800">Financial Aid</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-muted-foreground">September 20, 2022</div>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="font-medium text-gray-900">AED 15,000</div> {/* Consistent text-gray-900 */}
// //                           <div className="text-xs text-green-700">Disbursed</div> {/* text-green-700 for accessibility */}
// //                         </div>
// //                       </div>
// //                       <div className="flex justify-between border-b pb-2">
// //                         <div>
// //                           <div className="text-sm font-medium text-gray-800">Education Support</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-muted-foreground">August 15, 2021</div>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="font-medium text-gray-900">AED 12,000</div> {/* Consistent text-gray-900 */}
// //                           <div className="text-xs text-green-700">Disbursed</div> {/* text-green-700 for accessibility */}
// //                         </div>
// //                       </div>
// //                       <div className="flex justify-between">
// //                         <div>
// //                           <div className="text-sm font-medium text-gray-800">Education Support</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-muted-foreground">January 10, 2022</div>
// //                         </div>
// //                         <div className="text-right">
// //                           <div className="font-medium text-gray-900">AED 12,000</div> {/* Consistent text-gray-900 */}
// //                           <div className="text-xs text-green-700">Disbursed</div> {/* text-green-700 for accessibility */}
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>

// //                 <Card>
// //                   <CardContent className="p-6">
// //                     <h3 className="text-lg font-bold mb-4">Case Notes</h3> {/* Consistent h3 */}
// //                     <div className="space-y-4">
// //                       <div className="border-b pb-3">
// //                         <div className="flex justify-between">
// //                           <div className="font-medium text-sm text-gray-800">Fatima Al-Zaabi</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-muted-foreground">September 18, 2022</div>
// //                         </div>
// //                         <p className="text-sm mt-1 text-gray-800"> {/* Consistent text-gray-800 */}
// //                           Applicant demonstrated significant financial need due to job loss. Recommended approval for
// //                           one-time financial assistance.
// //                         </p>
// //                       </div>
// //                       <div className="border-b pb-3">
// //                         <div className="flex justify-between">
// //                           <div className="font-medium text-sm text-gray-800">Ahmed Al-Suwaidi</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-muted-foreground">August 8, 2021</div>
// //                         </div>
// //                         <p className="text-sm mt-1 text-gray-800"> {/* Consistent text-gray-800 */}
// //                           Family has three school-aged children with education expenses exceeding current income.
// //                           Approved for education support program.
// //                         </p>
// //                       </div>
// //                       <div>
// //                         <div className="flex justify-between">
// //                           <div className="font-medium text-sm text-gray-800">System Note</div> {/* Consistent text-gray-800 */}
// //                           <div className="text-xs text-muted-foreground">May 26, 2023</div>
// //                         </div>
// //                         <p className="text-sm mt-1 text-gray-800"> {/* Consistent text-gray-800 */}
// //                           AI system flagged application for human review due to income verification issues and previous
// //                           support history.
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </div>
// //           </TabsContent>
// //         </Tabs>
// //       </div>
// //     </DashboardShell>
// //   )
// // }

// // function PersonCard({
// //   name,
// //   relation,
// //   age,
// //   occupation,
// //   emiratesId,
// // }: { name: string; relation: string; age: number; occupation: string; emiratesId: string }) {
// //   return (
// //     <div className="border rounded-md p-3">
// //       <div className="font-medium text-gray-900">{name}</div> {/* Consistent text-gray-900 for names */}
// //       <div className="text-sm text-muted-foreground">{relation}</div>
// //       <div className="mt-2 text-sm text-gray-800"> {/* Consistent text-gray-800 for details */}
// //         <div>Age: {age}</div>
// //         <div>Occupation: {occupation}</div>
// //         <div className="text-xs text-muted-foreground mt-1">ID: {emiratesId}</div>
// //       </div>
// //     </div>
// //   )
// // }

// // function DocumentCard({
// //   title,
// //   status,
// //   confidence,
// //   previewUrl,
// // }: { title: string; status: string; confidence: number; previewUrl: string }) {
// //   return (
// //     <div className="border rounded-md overflow-hidden">
// //       <div className="aspect-video bg-slate-100 relative">
// //         <Image src={previewUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
// //       </div>
// //       <div className="p-4">
// //         <div className="flex justify-between items-start">
// //           <div className="font-medium text-gray-900">{title}</div> {/* Consistent text-gray-900 for titles */}
// //           <StatusBadge status={status} />
// //         </div>
// //         <div className="mt-2 flex items-center justify-between">
// //           <span className="text-sm text-muted-foreground">AI Confidence</span>
// //           <span className="text-sm font-medium text-gray-900">{confidence}%</span> {/* Consistent text-gray-900 */}
// //         </div>
// //         <Progress value={confidence} className="h-1 mt-1" />
// //         <div className="mt-3 flex justify-between">
// //           <Button variant="outline" size="sm">
// //             View Full Document
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // function StatusBadge({ status }: { status: string }) {
// //   let bgColor = "bg-gray-100 text-gray-800"

// //   if (status === "Pending") {
// //     bgColor = "bg-yellow-100 text-yellow-800" // Adjusted to yellow for "Pending"
// //   } else if (status === "Approved") {
// //     bgColor = "bg-green-100 text-green-800"
// //   } else if (status === "Flagged") {
// //     bgColor = "bg-red-100 text-red-800"
// //   } else if (status === "Auto-Approved") {
// //     bgColor = "bg-blue-100 text-blue-800"
// //   } else if (status === "Needs Review") {
// //     bgColor = "bg-red-100 text-red-800" // Explicitly red for "Needs Review" in badges
// //   } else if (status === "Verified") {
// //     bgColor = "bg-green-100 text-green-800"
// //   }

// //   return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>
// // }

// // function TimelineItem({
// //   date,
// //   time,
// //   title,
// //   description,
// //   status,
// // }: { date: string; time?: string; title: string; description: string; status: "completed" | "current" | "upcoming" }) {
// //   let statusColor = "bg-gray-200"
// //   if (status === "completed") statusColor = "bg-green-500"
// //   if (status === "current") statusColor = "bg-blue-600"

// //   return (
// //     <div className="flex gap-4">
// //       <div className="flex flex-col items-center">
// //         <div className={`h-4 w-4 rounded-full ${statusColor}`}></div>
// //         {status !== "upcoming" && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
// //       </div>
// //       <div className="pb-6">
// //         <div className="text-xs text-muted-foreground">
// //           {date} {time && `• ${time}`}
// //         </div>
// //         <div className="font-medium text-gray-900">{title}</div> {/* Consistent text-gray-900 for titles */}
// //         <div className="text-sm text-muted-foreground">{description}</div>
// //       </div>
// //     </div>
// //   )
// // }

// "use client"
// import Image from "next/image"
// import { ChevronLeft, Download, Printer, Phone, Video, CalendarDays, Send } from "lucide-react" // Added Phone, Video, CalendarDays, Send icons

// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { DashboardHeader } from "@/components/dashboard-header"
// import { DashboardShell } from "@/components/dashboard-shell"
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Textarea } from "@/components/ui/textarea";
// import { Progress } from "@/components/ui/progress";
// import { Input } from "@/components/ui/input"; // Added Input for chat

// // --- Inline SVG Icons (ensure these are visually intuitive from your source) ---
// const CheckCircleIcon = ({ className = '', size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//     width={size}
//     height={size}
//   >
//     <path
//       fillRule="evenodd"
//       d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.538l-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.135-.084l3.75-5.25Z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const ExclamationTriangleIcon = ({ className = '', size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//     width={size}
//     height={size}
//   >
//     <path
//       fillRule="evenodd"
//       d="M9.401 3.003c1.155-2.004 4.017-2.004 5.173 0L21.41 12.003c1.155 2.004-.305 4.503-2.583 4.503H5.174c-2.278 0-3.733-2.499-2.582-4.503L9.401 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

// const MedicalEmergencyIcon = ({ className = '', size = 24 }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     fill="currentColor"
//     className={className}
//     width={size}
//     height={size}
//   >
//     <path
//       fillRule="evenodd"
//       d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
//       clipRule="evenodd"
//     />
//   </svg>
// );
// // --- End Inline SVG Icons ---

// // Placeholder for `id` variable, replace with actual prop or state
// const id = "HSG-2024-001234";

// export function ApplicationDetails({ id }: { id: string }) {
//   return (
//     <DashboardShell>
//       {/* Consolidated Dashboard Header */}
//       <DashboardHeader />
//         <div className="flex items-center gap-2">
//           {/* Status Badge */}
//           <div className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
//             Pending - Urgent
//           </div>
//           {/* Action Buttons */}
//           <Button variant="outline" size="icon">
//             <ChevronLeft className="h-4 w-4" />
//           </Button>
//           <Button variant="outline" size="sm">
//             <Printer className="mr-2 h-4 w-4" />
//             Print
//           </Button>
//           <Button variant="outline" size="sm">
//             <Download className="mr-2 h-4 w-4" />
//             Export
//           </Button>
//         </div>

//       <div className="container mx-auto p-6 pt-0"> {/* Added pt-0 to prevent double padding with DashboardHeader */}

//         {/* Applicant Details & Decision Cards - Two Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 mb-6">
//           {/* Applicant Details Card - Occupies 70% width on medium screens and up */}
          
//           {/* old view of the top section of the card */}


//    {/* <Card className="md:col-span-1"> 
//             <CardContent className="p-6">
//               <div className="flex flex-col md:flex-row gap-6">
//                 <div className="flex-shrink-0">
//                   <Image
//                     src="/aisha.png?height=170&width=170" // Ensure this path is correct
//                     width={170}
//                     height={170}
//                     alt="Applicant Photo"
//                     className="rounded-lg border"
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h2 className="text-2xl font-bold mb-1">Aisha Al-Mansouri</h2> 
//                   <h3 className="text-lg text-muted-foreground mb-4"> عائشة المنصوري </h3> 

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <div className="text-sm text-muted-foreground">Application ID</div>
//                       <div className="font-medium">{id}</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground">Emirates ID</div>
//                       <div className="font-medium">784-1985-1234567-8</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground">Application Type</div>
//                       <div className="font-medium">Financial Assistance</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground">Submission Date</div>
//                       <div className="font-medium">May 25, 2023</div>
//                     </div>
//                     <div>
//                       <div className="text-sm text-muted-foreground">Contact</div>
//                       <div className="font-medium">+971 50 123 4567</div>
//                     </div>                  
//                     <div className="col-span-1 md:col-span-3">
//                       <div className="text-sm text-muted-foreground">AI Confidence</div>
//                       <div className="space-y-2">
//                         <div className="flex justify-between">
//                           <span className="text-sm font-medium">Overall Confidence</span>
//                           <span className="text-sm font-medium">76%</span>
//                         </div>
//                         <Progress value={76} className="h-2" />
//                         <div className="text-xs text-muted-foreground">
//                           Medium confidence due to income verification issues
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card> */} 
//           <Card className="md:col-span-1">
//             <CardContent className="p-6">
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-6"> {/* items-start for top alignment on small, items-center for better alignment on large */}
//                 <div className="flex-shrink-0 relative"> {/* Added relative for potential future badges on image */}
//                   <Image
//                     src="/aisha.png?height=170&width=170" // Ensure this path is correct
//                     width={120} // Slightly reduced image size for better balance on smaller cards
//                     height={120} // Adjusted height to match width
//                     alt="Applicant Photo"
//                     className="rounded-full border-2 border-gray-200 object-cover w-32 h-32" // Rounded photo, subtle border, fixed size
//                   />
//                 </div>
//                 <div className="flex-1 min-w-0"> {/* min-w-0 to prevent overflow in flex container */}
//                   <h2 className="text-3xl font-extrabold text-gray-900 mb-0.5">Aisha Al-Mansouri</h2> {/* Larger, bolder name */}
//                   <h3 className="text-lg text-gray-600 font-medium mb-4"> عائشة المنصوري </h3> {/* Slightly darker muted-foreground */}
//                   <div className="flex items-center text-sm text-gray-600">
//                     <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mr-2"></span> {/* Status indicator dot */}
//                     <span className="font-medium">Application Status: Pending - Urgent</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Section for application details, separated visually */}
//               <div className="mt-6 border-t border-gray-200 pt-6"> {/* Separator line for better hierarchy */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-4">Application Overview</h3> {/* Sub-heading for this section */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6"> {/* Adjusted grid layout for better spacing */}
//                   <div className="pb-2 border-b border-gray-100"> {/* Subtle bottom border for each item */}
//                     <div className="text-sm text-gray-500">Application ID</div> {/* Slightly darker muted-foreground */}
//                     <div className="font-semibold text-gray-900">{id}</div> {/* Bolder value */}
//                   </div>
//                   <div className="pb-2 border-b border-gray-100">
//                     <div className="text-sm text-gray-500">Emirates ID</div>
//                     <div className="font-semibold text-gray-900">784-1985-1234567-8</div>
//                   </div>
//                   <div className="pb-2 border-b border-gray-100">
//                     <div className="text-sm text-gray-500">Application Type</div>
//                     <div className="font-semibold text-gray-900">Financial Assistance</div>
//                   </div>
//                   <div className="pb-2 border-b border-gray-100">
//                     <div className="text-sm text-gray-500">Submission Date</div>
//                     <div className="font-semibold text-gray-900">May 25, 2023</div>
//                   </div>
//                   <div className="pb-2 border-b border-gray-100">
//                     <div className="text-sm text-gray-500">Contact Phone</div>
//                     <div className="font-semibold text-gray-900">+971 50 123 4567</div>
//                   </div>
//                   {/* AI Confidence section integrated here */}
//                   <div className="col-span-full mt-2"> {/* Ensure it takes full width below basic info */}
//                     <div className="text-sm text-gray-500 mb-2">AI Confidence</div>
//                     <div className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <span className="text-base font-semibold text-gray-800">Overall Confidence</span> {/* Adjusted size/weight */}
//                         <span className="text-base font-bold text-gray-900">76%</span> {/* Adjusted size/weight */}
//                       </div>
//                       <Progress value={76} className="h-2 bg-gray-200 [&>div]:bg-blue-500" /> {/* Blue progress bar */}
//                       <div className="text-xs text-gray-600">
//                         Medium confidence due to income verification issues and housing documentation.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Decision Card - Occupies 30% width on medium screens and up */}
//           <Card className="md:col-span-1">
//             <CardContent className="p-6">
//               <h3 className="text-lg font-bold mb-4">Decision</h3> {/* Consistent h3 */}

//               {/* Optimized button layout */}
//               <div className="grid grid-cols-2 gap-4 mb-4"> {/* Changed to grid for optimized space */}
//                 <Button className="w-full bg-green-600 hover:bg-green-700">Approve</Button>
//                 <Button
//                   className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
//                   variant="outline"
//                 >
//                   Reject
//                 </Button>
//                 <Button className="w-full" variant="outline"> {/* Using variant="outline" for secondary action */}
//                   Request Info
//                 </Button>
//                 <Button className="w-full" variant="outline"> {/* Using variant="outline" for secondary action */}
//                   Escalate
//                 </Button>
//               </div>

//               <div className="mt-4">
//                 <Label htmlFor="reason" className="text-sm font-medium">Decision Reasoning</Label> {/* Consistent label style */}
//                 <Select>
//                   <SelectTrigger id="reason">
//                     <SelectValue placeholder="Select reason" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="eligible">Meets all eligibility criteria</SelectItem>
//                     <SelectItem value="partial">Partially meets criteria</SelectItem>
//                     <SelectItem value="income">Income verification issues</SelectItem>
//                     <SelectItem value="documents">Incomplete documentation</SelectItem>
//                     <SelectItem value="previous">Previous support considerations</SelectItem>
//                     <SelectItem value="other">Other (specify in comments)</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="mt-4">
//                 <Label htmlFor="comments" className="text-sm font-medium">Comments</Label> {/* Consistent label style */}
//                 <Textarea id="comments" placeholder="Add your comments here..." className="mt-1" />
//               </div>
//               <div className="mt-4">
//                 <Button className="w-full"> 
//                   Submit
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div> {/* End of the two-column grid div */}

//         {/* Tabs Section */}
//         <Tabs defaultValue="ai-analysis" className="mt-6"> {/* Added margin-top for separation from the top section */}
//           <TabsList className="grid grid-cols-5 w-full h-12 p-1 bg-gray-100 rounded-lg shadow-sm"> 
//             <TabsTrigger
//               value="ai-analysis"
//               className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
//                          data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
//                          hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" 
//             >
//               AI Analysis
//             </TabsTrigger>
//             <TabsTrigger
//               value="personal"
//               className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
//                          data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
//                          hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//             >
//               Personal Info
//             </TabsTrigger>
//             <TabsTrigger
//               value="documents"
//               className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
//                          data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
//                          hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//             >
//               Documents
//             </TabsTrigger>
//             <TabsTrigger
//               value="history"
//               className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
//                          data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
//                          hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//             >
//               History
//             </TabsTrigger>
//             <TabsTrigger
//               value="communication"
//               className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
//                          data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
//                          hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//             >
//               Communication
//             </TabsTrigger>
//           </TabsList>

//           <TabsContent value="ai-analysis" className="mt-6"> {/* Added margin-top to content */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <Card className="lg:col-span-2 shadow-sm rounded-lg"> {/* Added shadow and rounded corners */}
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4 text-gray-800">AI Recommendation</h3> {/* Larger heading, darker text */}
//                   <div className="p-4 border border-gray-200 rounded-md bg-blue-50/50 mb-6 text-gray-800 leading-relaxed"> {/* Lighter background, better text color, leading */}
//                     <p className="mb-3">
//                       Aisha was divorced on May 20, 2025.
//                     </p>
//                     <p className="mb-3">
//                       She meets most eligibility criteria for financial-aid assistance. Her family's income is
//                       significantly below the threshold, and the medical necessity is well-documented. The family size
//                       and composition also qualify for additional support.
//                     </p>
//                     <p className="font-semibold text-red-700 mb-2">However, manual review is recommended due to two factors:</p> {/* Bolded and red for emphasis */}
//                     <ol className="list-disc list-inside text-sm space-y-1 pl-4"> {/* Indented list */}
//                       <li>Housing verification for the "Family Support" source requires additional documentation.</li>
//                       <li>
//                         Previous financial aid was received within the past 12 months, requiring assessment of ongoing
//                         need.
//                       </li>
//                     </ol>
//                     <p className="mt-3">
//                       The AI system recommends approval with verification of the housing documentation.
//                     </p>
//                   </div>

//                   <div className="border border-gray-200 rounded-md p-6 space-y-6"> {/* Bordered section */}
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Eligibility Assessment</h3> {/* Larger heading, darker text */}
//                     <div className="space-y-6">

//                       {/* Income Threshold - Eligible */}
//                       <div className="flex items-start space-x-3">
//                         <CheckCircleIcon size={24} className="text-green-600 flex-shrink-0 mt-0.5" /> {/* Darker green */}
//                         <div className="flex-grow">
//                           <span className="font-semibold text-gray-900">Income Threshold</span>
//                           <div className="text-sm text-gray-600">
//                             Family income (AED 6,500) is below the threshold (AED 10,000) for healthcare assistance.
//                           </div>
//                         </div>
//                         <span className="ml-auto font-medium text-green-700 text-right">Eligible</span>
//                       </div>

//                       {/* Family Size Criteria - Eligible */}
//                       <div className="flex items-start space-x-3">
//                         <CheckCircleIcon size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
//                         <div className="flex-grow">
//                           <span className="font-semibold text-gray-900">Family Size Criteria</span>
//                           <div className="text-sm text-gray-600">
//                             Family size (3 members) meets criteria for additional support.
//                           </div>
//                         </div>
//                         <span className="ml-auto font-medium text-green-700 text-right">Eligible</span>
//                       </div>

//                       {/* Residency Requirements - Eligible */}
//                       <div className="flex items-start space-x-3">
//                         <CheckCircleIcon size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
//                         <div className="flex-grow">
//                           <span className="font-semibold text-gray-900">Residency Requirements</span>
//                           <div className="text-sm text-gray-600">
//                             UAE citizen with valid Emirates ID and family book.
//                           </div>
//                         </div>
//                         <span className="ml-auto font-medium text-green-700 text-right">Eligible</span>
//                       </div>

//                       {/* Previous Support - Review Needed */}
//                       <div className="flex items-start space-x-3">
//                         <ExclamationTriangleIcon size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
//                         <div className="flex-grow">
//                           <span className="font-semibold text-gray-900">Previous Support</span>
//                           <div className="text-sm text-gray-600">
//                             Received financial aid 8 months ago (AED 15,000).
//                           </div>
//                         </div>
//                         <span className="ml-auto font-medium text-red-700 text-right">Review Needed</span>
//                       </div>

//                       {/* Medical Necessity - Emergency/Urgency */}
//                       <div className="flex items-start space-x-3">
//                         <MedicalEmergencyIcon size={24} className="text-blue-600 flex-shrink-0 mt-0.5" /> {/* Darker blue */}
//                         <div className="flex-grow">
//                           <span className="font-semibold text-gray-900">Medical Necessity</span>
//                           <div className="text-sm text-gray-600">
//                             Medical records confirm chronic condition requiring ongoing treatment.
//                           </div>
//                         </div>
//                         <span className="ml-auto font-medium text-blue-700 text-right">High Need</span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>

//               <div className="space-y-6">
//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Risk Assessment</h3> {/* Larger heading, darker text */}
//                     <div className="space-y-4">
//                       <div className="border border-gray-200 rounded-md p-3 bg-yellow-50/50"> {/* Subtle yellow background */}
//                         <div className="flex items-center justify-between">
//                           <div className="font-semibold text-gray-900">Overall Risk</div>
//                           <div className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
//                             Medium
//                           </div>
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-2 gap-3">
//                         <div className="border border-gray-200 rounded-md p-3">
//                           <div className="text-sm font-semibold text-gray-800">Document Consistency</div>
//                           <div className="mt-1 flex items-center">
//                             <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                             <span className="text-sm text-gray-700">Low Risk</span>
//                           </div>
//                         </div>
//                         <div className="border border-gray-200 rounded-md p-3">
//                           <div className="text-sm font-semibold text-gray-800">Identity Verification</div>
//                           <div className="mt-1 flex items-center">
//                             <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                             <span className="text-sm text-gray-700">Low Risk</span>
//                           </div>
//                         </div>
//                         <div className="border border-gray-200 rounded-md p-3 bg-yellow-50/50"> {/* Subtle yellow background */}
//                           <div className="text-sm font-semibold text-gray-800">Housing Verification</div>
//                           <div className="mt-1 flex items-center">
//                             <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
//                             <span className="text-sm text-gray-700">Medium Risk</span>
//                           </div>
//                         </div>
//                         <div className="border border-gray-200 rounded-md p-3">
//                           <div className="text-sm font-semibold text-gray-800">Duplicate Applications</div>
//                           <div className="mt-1 flex items-center">
//                             <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
//                             <span className="text-sm text-gray-700">Low Risk</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Cross-Reference Results</h3> {/* Larger heading, darker text */}
//                     <div className="space-y-3">
//                       <div className="flex items-center justify-between border-b pb-2">
//                         <span className="text-sm text-gray-700">Ministry of Interior</span>
//                         <span className="text-sm font-medium text-green-700">Verified</span>
//                       </div>
//                       <div className="flex items-center justify-between border-b pb-2">
//                         <span className="text-sm text-gray-700">Ministry of Health</span>
//                         <span className="text-sm font-medium text-green-700">Verified</span>
//                       </div>
//                       <div className="flex items-center justify-between border-b pb-2">
//                         <span className="text-sm text-gray-700">Ministry of Education</span>
//                         <span className="text-sm font-medium text-green-700">Verified</span>
//                       </div>
//                       <div className="flex items-center justify-between border-b pb-2">
//                         <span className="text-sm text-gray-700">Previous Support Database</span>
//                         <span className="text-sm font-medium text-red-700">Review Needed</span>
//                       </div>
//                       <div className="flex items-center justify-between pb-2">
//                         <span className="text-sm text-gray-700">Financial Institutions</span>
//                         <span className="text-sm font-medium text-green-700">Verified</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value="personal" className="mt-6"> {/* Added margin-top to content */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <Card className="lg:col-span-2 shadow-sm rounded-lg">
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4 text-gray-800">Family Tree</h3>
//                   <div className="bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center text-center text-sm font-mono whitespace-pre-wrap">
//                     {/* Dummy Family Tree Visualization */}
//                     {`
//                       +----------+
//                       |  Aisha   |
//                       | (Self)   |
//                       +----+-----+
//                      |
//                      |
//                    +-------+-------+
//                    |               |
//              +-----+-----+   +-----+-----+
//              |   Hamad   |   |  Fatima   |
//              |  (Son)    |   | (Daughter)|
//              +-----------+   +-----------+
//                     `}
//                     <p className="mt-4 text-muted-foreground text-xs">
//                       A simplified representation of Aisha and her two children.
//                     </p>
//                   </div>

//                   <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Family Members</h3>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <PersonCard
//                       name="Aisha Al-Mansouri"
//                       relation="Self"
//                       age={32}
//                       occupation="Unemployed"
//                       emiratesId="784-1985-1234567-8"
//                     />
//                     <PersonCard
//                       name="Hamad Al-Mansoori"
//                       relation="Son"
//                       age={3}
//                       occupation="Student"
//                       emiratesId="784-2011-9876543-2"
//                     />
//                     <PersonCard
//                       name="Fatima Al-Mansoori"
//                       relation="Daughter"
//                       age={7}
//                       occupation="Student"
//                       emiratesId="784-2013-5432109-8"
//                     />
//                   </div>
//                 </CardContent>
//               </Card>

//               <div className="space-y-6">
//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Income Sources</h3>
//                     <div className="space-y-4">
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <div>
//                           <div className="font-medium text-gray-800">Previous Employment</div>
//                           <div className="text-sm text-muted-foreground">Monthly</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-medium text-gray-800">AED 4,500</div>
//                           <div className="text-xs text-green-700">Verified</div>
//                         </div>
//                       </div>
//                       <div className="flex justify-between items-center pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <div>
//                           <div className="font-medium text-gray-800">Family Support</div>
//                           <div className="text-sm text-muted-foreground">Monthly</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-medium text-gray-800">AED 2,000</div>
//                           <div className="text-xs text-yellow-700">Pending Verification</div>
//                         </div>
//                       </div>
//                       <div className="pt-2">
//                         <div className="flex justify-between items-center">
//                           <div className="font-bold text-gray-900">Total Monthly Income</div>
//                           <div className="font-bold text-gray-900">AED 6,500</div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Assets Summary</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <span className="text-sm text-gray-800">Bank Accounts</span>
//                         <span className="font-medium text-gray-900">AED 12,500</span>
//                       </div>
//                       <div className="flex justify-between pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <span className="text-sm text-gray-800">Vehicles</span>
//                         <span className="font-medium text-gray-900">1 (2015 Toyota)</span>
//                       </div>
//                       <div className="flex justify-between pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <span className="text-sm text-gray-800">Properties</span>
//                         <span className="font-medium text-gray-900">None</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-sm text-gray-800">Investments</span>
//                         <span className="font-medium text-gray-900">None</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Housing Situation</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <span className="text-sm text-gray-800">Housing Type</span>
//                         <span className="font-medium text-gray-900">Rented Apartment</span>
//                       </div>
//                       <div className="flex justify-between pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <span className="text-sm text-gray-800">Monthly Rent</span>
//                         <span className="font-medium text-gray-900">AED 5,500</span>
//                       </div>
//                       <div className="flex justify-between pb-2 border-b border-gray-100"> {/* Added border-b */}
//                         <span className="text-sm text-gray-800">Location</span>
//                         <span className="font-medium text-gray-900">Al Nahda, Sharjah</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-sm text-gray-800">Contract Expiry</span>
//                         <span className="font-medium text-gray-900">March 15, 2024</span>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </TabsContent>

//           <TabsContent value="documents" className="mt-6"> {/* Added margin-top to content */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               <DocumentCard
//                 title="Rental Agreement"
//                 status="Needs Review"
//                 confidence={78}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Rental+Agreement+Preview" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Previous Support Documents"
//                 status="Needs Review"
//                 confidence={82}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Previous+Support+Preview" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Emirates ID"
//                 status="Verified"
//                 confidence={98}
//                 previewUrl="https://media.assettype.com/gulfnews%2Fimport%2F2009%2F7%2F4%2F1_16a0826b4af.141022_2849104373_16a0826b4af_large.jpg" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Medical Records"
//                 status="Verified"
//                 confidence={92}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Medical+Records+Preview" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Income Statement"
//                 status="Verified"
//                 confidence={96}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Income+Statement+Preview" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Bank Statements"
//                 status="Verified"
//                 confidence={90}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Bank+Statements+Preview" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Medical Insurance Card"
//                 status="Verified"
//                 confidence={96}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Insurance+Card+Preview" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Utility Bills"
//                 status="Verified"
//                 confidence={88}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Utility+Bills+Preview" // Distinct placeholder
//               />
//               <DocumentCard
//                 title="Family Book"
//                 status="Verified"
//                 confidence={95}
//                 previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Family+Book+Preview" // Distinct placeholder
//               />
//             </div>
//           </TabsContent>

//           <TabsContent value="history" className="mt-6"> {/* Added margin-top to content */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <Card className="lg:col-span-2 shadow-sm rounded-lg">
//                 <CardContent className="p-6">
//                   <h3 className="text-xl font-bold mb-4 text-gray-800">Application Timeline</h3>
//                   <div className="space-y-6">
//                     <TimelineItem
//                       date="May 23, 2023"
//                       time="12:15 PM"
//                       title="Application Triggered with Divorce filing"
//                       description="Initial application for financial assistance triggered"
//                       status="completed"
//                     />
//                     <TimelineItem
//                       date="May 23, 2023"
//                       time="12:15 PM"
//                       title="Assigned to Social Worker"
//                       description="Application assigned to Saeed Al-Mansouri for review"
//                       status="completed"
//                     />
//                     <TimelineItem
//                       date="May 25, 2023"
//                       time="09:15 AM"
//                       title="Application Submitted"
//                       description="Application for financial assistance submitted by Aisha"
//                       status="completed"
//                     />
//                     <TimelineItem
//                       date="May 25, 2023"
//                       time="09:15 AM"
//                       title="Documents Attached"
//                       description="All required documents attached to the system"
//                       status="completed"
//                     />
//                     <TimelineItem
//                       date="May 25, 2023"
//                       time="09:16 AM"
//                       title="Initial AI Processing"
//                       description="Automated verification of identity and document authenticity"
//                       status="completed"
//                     />
//                     <TimelineItem
//                       date="May 25, 2023"
//                       time="09:16 AM"
//                       title="AI Eligibility Assessment"
//                       description="Automated assessment of eligibility criteria and cross-reference verification"
//                       status="completed"
//                     />
//                     <TimelineItem
//                       date="May 25, 2023"
//                       time="09:16 AM"
//                       title="Flagged for Review"
//                       description="Application flagged for human review due to housing verification and previous support history"
//                       status="completed"
//                     />
//                     <TimelineItem
//                       date="May 25, 2023"
//                       time="09:16 AM"
//                       title="Pending Social Worker Review"
//                       description="Application assigned to Ahmed Hassan for review"
//                       status="current"
//                     />
//                     <TimelineItem
//                       date="Pending"
//                       time=""
//                       title="Decision"
//                       description="Final decision on application"
//                       status="upcoming"
//                     />
//                     <TimelineItem
//                       date="Pending"
//                       time=""
//                       title="Notification"
//                       description="Applicant notification of decision"
//                       status="upcoming"
//                     />
//                   </div>
//                 </CardContent>
//               </Card>

//               <div className="space-y-6">
//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Previous Applications</h3>
//                     <div className="space-y-4">
//                       <div className="border rounded-md p-3">
//                         <div className="flex justify-between">
//                           <div className="font-medium text-gray-800">Financial Aid</div>
//                           <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
//                             Approved
//                           </div>
//                         </div>
//                         <div className="text-sm text-muted-foreground mt-1">
//                           September 15, 2022 • ID: UAE-2022-45678
//                         </div>
//                         <div className="text-sm mt-2 text-gray-800">One-time financial assistance of AED 15,000</div>
//                       </div>
//                       <div className="border rounded-md p-3">
//                         <div className="flex justify-between">
//                           <div className="font-medium text-gray-800">Education Support</div>
//                           <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
//                             Approved
//                           </div>
//                         </div>
//                         <div className="text-sm text-muted-foreground mt-1">August 10, 2021 • ID: UAE-2021-34567</div>
//                         <div className="text-sm mt-2 text-gray-800">School fees assistance for 3 children</div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Payment History</h3>
//                     <div className="space-y-3">
//                       <div className="flex justify-between border-b pb-2"> {/* Added border-b */}
//                         <div>
//                           <div className="text-sm font-medium text-gray-800">Financial Aid</div>
//                           <div className="text-xs text-muted-foreground">September 20, 2022</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-medium text-gray-900">AED 15,000</div>
//                           <div className="text-xs text-green-700">Disbursed</div>
//                         </div>
//                       </div>
//                       <div className="flex justify-between border-b pb-2"> {/* Added border-b */}
//                         <div>
//                           <div className="text-sm font-medium text-gray-800">Education Support</div>
//                           <div className="text-xs text-muted-foreground">August 15, 2021</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-medium text-gray-900">AED 12,000</div>
//                           <div className="text-xs text-green-700">Disbursed</div>
//                         </div>
//                       </div>
//                       <div className="flex justify-between">
//                         <div>
//                           <div className="text-sm font-medium text-gray-800">Education Support</div>
//                           <div className="text-xs text-muted-foreground">January 10, 2022</div>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-medium text-gray-900">AED 12,000</div>
//                           <div className="text-xs text-green-700">Disbursed</div>
//                         </div>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Case Notes</h3>
//                     <div className="space-y-4">
//                       <div className="border-b pb-3"> {/* Added border-b */}
//                         <div className="flex justify-between">
//                           <div className="font-medium text-sm text-gray-800">Fatima Al-Zaabi</div>
//                           <div className="text-xs text-muted-foreground">September 18, 2022</div>
//                         </div>
//                         <p className="text-sm mt-1 text-gray-800">
//                           Applicant demonstrated significant financial need due to job loss. Recommended approval for
//                           one-time financial assistance.
//                         </p>
//                       </div>
//                       <div className="border-b pb-3"> {/* Added border-b */}
//                         <div className="flex justify-between">
//                           <div className="font-medium text-sm text-gray-800">Ahmed Al-Suwaidi</div>
//                           <div className="text-xs text-muted-foreground">August 8, 2021</div>
//                         </div>
//                         <p className="text-sm mt-1 text-gray-800">
//                           Family has three school-aged children with education expenses exceeding current income.
//                           Approved for education support program.
//                         </p>
//                       </div>
//                       <div>
//                         <div className="flex justify-between">
//                           <div className="font-medium text-sm text-gray-800">System Note</div>
//                           <div className="text-xs text-muted-foreground">May 26, 2023</div>
//                         </div>
//                         <p className="text-sm mt-1 text-gray-800">
//                           AI system flagged application for human review due to income verification issues and previous
//                           support history.
//                         </p>
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </TabsContent>

//           {/* Communication Tab Content */}
//           <TabsContent value="communication" className="mt-6"> {/* Added margin-top to content */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//               <Card className="lg:col-span-2 shadow-sm rounded-lg">
//                 <CardContent className="p-6 h-[500px] flex flex-col">
//                   <h3 className="text-xl font-bold mb-4 text-gray-800">Chat with Aisha Al-Mansouri</h3>
//                   <div className="flex-1 overflow-y-auto space-y-4 p-4 border rounded-md bg-gray-50 mb-4">
//                     {/* Dummy Chat Messages */}
//                     <div className="flex justify-start">
//                       <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-[70%]">
//                         <p className="font-medium">Aisha:</p>
//                         <p className="text-sm">Hi, I wanted to follow up on my application. Is there any update?</p>
//                         <p className="text-xs text-gray-500 text-right mt-1">May 27, 2023, 09:00 AM</p>
//                       </div>
//                     </div>
//                     <div className="flex justify-end">
//                       <div className="bg-green-100 text-green-800 p-3 rounded-lg max-w-[70%]">
//                         <p className="font-medium">Social Worker:</p>
//                         <p className="text-sm">Hello Aisha, your application is currently under review. We might need some additional documentation regarding your housing verification.</p>
//                         <p className="text-xs text-gray-500 text-right mt-1">May 27, 2023, 09:10 AM</p>
//                       </div>
//                     </div>
//                     <div className="flex justify-start">
//                       <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-[70%]">
//                         <p className="font-medium">Aisha:</p>
//                         <p className="text-sm">Okay, what exactly do you need for housing verification?</p>
//                         <p className="text-xs text-gray-500 text-right mt-1">May 27, 2023, 09:12 AM</p>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex gap-2">
//                     <Input placeholder="Type your message here..." className="flex-1" />
//                     <Button size="icon">
//                       <Send className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>

//               <div className="space-y-6">
//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Schedule Communication</h3>
//                     <div className="space-y-3">
//                       <Button className="w-full" variant="outline">
//                         <Phone className="mr-2 h-4 w-4" /> Schedule Call
//                       </Button>
//                       <Button className="w-full" variant="outline">
//                         <Video className="mr-2 h-4 w-4" /> Schedule Video Call
//                       </Button>
//                       <Button className="w-full" variant="outline">
//                         <CalendarDays className="mr-2 h-4 w-4" /> Schedule In-person Visit
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>

//                 <Card className="shadow-sm rounded-lg">
//                   <CardContent className="p-6">
//                     <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
//                     <div className="space-y-2 text-base"> {/* Adjusted text size */}
//                       <p><span className="font-semibold text-gray-900">Phone:</span> +971 50 123 4567</p> {/* Darker text, bolder label */}
//                       <p><span className="font-semibold text-gray-900">Email:</span> aisha.mansouri@example.com</p>
//                       <p><span className="font-semibold text-gray-900">Preferred Method:</span> Phone</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </TabsContent>

//         </Tabs>
//       </div>
//     </DashboardShell>
//   )
// }

// function PersonCard({
//   name,
//   relation,
//   age,
//   occupation,
//   emiratesId,
// }: { name: string; relation: string; age: number; occupation: string; emiratesId: string }) {
//   return (
//     <div className="border rounded-md p-3">
//       <div className="font-medium text-gray-900">{name}</div> {/* Consistent text-gray-900 for names */}
//       <div className="text-sm text-muted-foreground">{relation}</div>
//       <div className="mt-2 text-sm text-gray-800"> {/* Consistent text-gray-800 for details */}
//         <div>Age: {age}</div>
//         <div>Occupation: {occupation}</div>
//         <div className="text-xs text-muted-foreground mt-1">ID: {emiratesId}</div>
//       </div>
//     </div>
//   )
// }

// function DocumentCard({
//   title,
//   status,
//   confidence,
//   previewUrl,
// }: { title: string; status: string; confidence: number; previewUrl: string }) {
//   return (
//     <div className="border rounded-md overflow-hidden">
//       <div className="aspect-video bg-slate-100 relative">
//         <Image src={previewUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
//       </div>
//       <div className="p-4">
//         <div className="flex justify-between items-start">
//           <div className="font-medium text-gray-900">{title}</div> {/* Consistent text-gray-900 for titles */}
//           <StatusBadge status={status} />
//         </div>
//         <div className="mt-2 flex items-center justify-between">
//           <span className="text-sm text-muted-foreground">AI Confidence</span>
//           <span className="text-sm font-medium text-gray-900">{confidence}%</span> {/* Consistent text-gray-900 */}
//         </div>
//         <Progress value={confidence} className="h-1 mt-1" />
//         <div className="mt-3 flex justify-between">
//           <Button variant="outline" size="sm">
//             View Full Document
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// function StatusBadge({ status }: { status: string }) {
//   let bgColor = "bg-gray-100 text-gray-800"

//   if (status === "Pending") {
//     bgColor = "bg-yellow-100 text-yellow-800" // Adjusted to yellow for "Pending"
//   } else if (status === "Approved") {
//     bgColor = "bg-green-100 text-green-800"
//   } else if (status === "Flagged") {
//     bgColor = "bg-red-100 text-red-800"
//   } else if (status === "Auto-Approved") {
//     bgColor = "bg-blue-100 text-blue-800"
//   } else if (status === "Needs Review") {
//     bgColor = "bg-red-100 text-red-800" // Explicitly red for "Needs Review" in badges
//   } else if (status === "Verified") {
//     bgColor = "bg-green-100 text-green-800"
//   }

//   return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>
// }

// function TimelineItem({
//   date,
//   time,
//   title,
//   description,
//   status,
// }: { date: string; time?: string; title: string; description: string; status: "completed" | "current" | "upcoming" }) {
//   let statusColor = "bg-gray-200"
//   if (status === "completed") statusColor = "bg-green-500"
//   if (status === "current") statusColor = "bg-blue-600"

//   return (
//     <div className="flex gap-4">
//       <div className="flex flex-col items-center">
//         <div className={`h-4 w-4 rounded-full ${statusColor}`}></div>
//         {status !== "upcoming" && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
//       </div>
//       <div className="pb-6">
//         <div className="text-xs text-muted-foreground">
//           {date} {time && `• ${time}`}
//         </div>
//         <div className="font-medium text-gray-900">{title}</div> {/* Consistent text-gray-900 for titles */}
//         <div className="text-sm text-muted-foreground">{description}</div>
//       </div>
//     </div>
//   )
// }

"use client"
import Image from "next/image"
import { ChevronLeft, Download, Printer, Phone, Video, CalendarDays, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

// --- Inline SVG Icons (ensure these are visually intuitive from your source) ---
const CheckCircleIcon = ({ className = '', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.538l-1.606-1.606a.75.75 0 1 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.135-.084l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

const ExclamationTriangleIcon = ({ className = '', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2.004 4.017-2.004 5.173 0L21.41 12.003c1.155 2.004-.305 4.503-2.583 4.503H5.174c-2.278 0-3.733-2.499-2.582-4.503L9.401 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 12a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const MedicalEmergencyIcon = ({ className = '', size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    width={size}
    height={size}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
      clipRule="evenodd"
    />
  </svg>
);
// --- End Inline SVG Icons ---

function PersonCard({
  name,
  relation,
  age,
  occupation,
  emiratesId,
}: { name: string; relation: string; age: number; occupation: string; emiratesId: string }) {
  return (
    <div className="border rounded-md p-3">
      <div className="font-medium text-gray-900">{name}</div>
      <div className="text-sm text-muted-foreground">{relation}</div>
      <div className="mt-2 text-sm text-gray-800">
        <div>Age: {age}</div>
        <div>Occupation: {occupation}</div>
        <div className="text-xs text-muted-foreground mt-1">ID: {emiratesId}</div>
      </div>
    </div>
  )
}

function DocumentCard({
  title,
  status,
  confidence,
  previewUrl,
}: { title: string; status: string; confidence: number; previewUrl: string }) {
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="aspect-video bg-slate-100 relative">
        <Image src={previewUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="font-medium text-gray-900">{title}</div>
          <StatusBadge status={status} />
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">AI Confidence</span>
          <span className="text-sm font-medium text-gray-900">{confidence}%</span>
        </div>
        <Progress value={confidence} className="h-1 mt-1" />
        <div className="mt-3 flex justify-between">
          <Button variant="outline" size="sm">
            View Full Document
          </Button>
        </div>
      </div>
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  let bgColor = "bg-gray-100 text-gray-800"

  if (status === "Pending") {
    bgColor = "bg-yellow-100 text-yellow-800"
  } else if (status === "Approved") {
    bgColor = "bg-green-100 text-green-800"
  } else if (status === "Flagged") {
    bgColor = "bg-red-100 text-red-800"
  } else if (status === "Auto-Approved") {
    bgColor = "bg-blue-100 text-blue-800"
  } else if (status === "Needs Review") {
    bgColor = "bg-red-100 text-red-800"
  } else if (status === "Verified") {
    bgColor = "bg-green-100 text-green-800"
  }

  return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>
}

function TimelineItem({
  date,
  time,
  title,
  description,
  status,
}: { date: string; time?: string; title: string; description: string; status: "completed" | "current" | "upcoming" }) {
  let statusColor = "bg-gray-200"
  if (status === "completed") statusColor = "bg-green-500"
  if (status === "current") statusColor = "bg-blue-600"

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`h-4 w-4 rounded-full ${statusColor}`}></div>
        {status !== "upcoming" && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
      </div>
      <div className="pb-6">
        <div className="text-xs text-muted-foreground">
          {date} {time && `• ${time}`}
        </div>
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}

// Placeholder for `id` variable, replace with actual prop or state
const id = "HSG-2024-001234";

export function ApplicationDetails({ id }: { id: string }) {
  return (
    <DashboardShell>
      {/* Consolidated Dashboard Header */}
      <DashboardHeader heading="Application Details">
        <div className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
          Pending - Urgent
        </div>
      </DashboardHeader>

      <div className="container mx-auto p-6 pt-0">

        {/* Applicant Details & Decision Cards - Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 mb-6">
          {/* Applicant Details Card - Occupies 70% width on medium screens and up */}
          <Card className="md:col-span-1">
            <CardContent className="p-6">
              {/* Main flex container for top row of the card: Back Button, Applicant Info, Print/Export Buttons */}
              <div className="relative flex flex-wrap items-start justify-between"> {/* Added relative for absolute positioning */}
                {/* Back Button (left corner) */}
                <Button variant="outline" size="icon" className="absolute top-0 left-0"> {/* Positioned absolutely */}
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                {/* Applicant Info */}
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 flex-grow pl-12 md:pl-0"> {/* Added left padding for back button */}
                  <div className="flex-shrink-0 relative">
                    <Image
                      src="/aisha.png?height=170&width=170" // Ensure this path is correct
                      width={120}
                      height={120}
                      alt="Applicant Photo"
                      className="rounded-full border-2 border-gray-200 object-cover w-32 h-32"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-0.5">Aisha Al-Mansouri</h2>
                    <h3 className="text-lg text-gray-600 font-medium mb-4"> عائشة المنصوري </h3>
                    {/* Status is now primarily in the DashboardHeader, but could be repeated here if desired */}
                    {/* <div className="flex items-center text-sm text-gray-600">
                      <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                      <span className="font-medium">Application Status: Pending - Urgent</span>
                    </div> */}
                  </div>
                </div>

                {/* Print and Export Buttons (right-aligned, same y as image) */}
                <div className="flex gap-2 items-start absolute top-0 right-0"> {/* Positioned absolutely */}
                  <Button variant="outline" size="sm">
                    <Printer className="mr-2 h-4 w-4" />
                    Print
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>

              {/* Section for application details, separated visually */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Application Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                  <div className="pb-2 border-b border-gray-100">
                    <div className="text-sm text-gray-500">Application ID</div>
                    <div className="font-semibold text-gray-900">{id}</div>
                  </div>
                  <div className="pb-2 border-b border-gray-100">
                    <div className="text-sm text-gray-500">Emirates ID</div>
                    <div className="font-semibold text-gray-900">784-1985-1234567-8</div>
                  </div>
                  <div className="pb-2 border-b border-gray-100">
                    <div className="text-sm text-gray-500">Application Type</div>
                    <div className="font-semibold text-gray-900">Financial Assistance</div>
                  </div>
                  <div className="pb-2 border-b border-gray-100">
                    <div className="text-sm text-gray-500">Submission Date</div>
                    <div className="font-semibold text-gray-900">May 25, 2023</div>
                  </div>
                  <div className="pb-2 border-b border-gray-100">
                    <div className="text-sm text-gray-500">Contact Phone</div>
                    <div className="font-semibold text-gray-900">+971 50 123 4567</div>
                  </div>
                  {/* AI Confidence section integrated here */}
                  <div className="col-span-full mt-2">
                    <div className="text-sm text-gray-500 mb-2">AI Confidence</div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-base font-semibold text-gray-800">Overall Confidence</span>
                        <span className="text-base font-bold text-gray-900">76%</span>
                      </div>
                      <Progress value={76} className="h-2 bg-gray-200 [&>div]:bg-blue-500" />
                      <div className="text-xs text-gray-600">
                        Medium confidence due to income verification issues and housing documentation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Decision Card - Occupies 30% width on medium screens and up */}
          <Card className="md:col-span-1">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-4">Decision</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <Button className="w-full bg-green-600 hover:bg-green-700">Approve</Button>
                <Button
                  className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  variant="outline"
                >
                  Reject
                </Button>
                <Button className="w-full" variant="outline">
                  Request Info
                </Button>
                <Button className="w-full" variant="outline">
                  Escalate
                </Button>
              </div>

              <div className="mt-4">
                <Label htmlFor="reason" className="text-sm font-medium">Triage to another department</Label>
                <Select>
                  <SelectTrigger id="reason">
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eligible">Financial Aid</SelectItem>
                    <SelectItem value="partial">Housing Support</SelectItem>
                    <SelectItem value="income">Healthcare Department</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4">
                <Label htmlFor="reason" className="text-sm font-medium">Decision Reasoning</Label>
                <Select>
                  <SelectTrigger id="reason">
                    <SelectValue placeholder="Select reason" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eligible">Meets all eligibility criteria</SelectItem>
                    <SelectItem value="partial">Partially meets criteria</SelectItem>
                    <SelectItem value="income">Income verification issues</SelectItem>
                    <SelectItem value="documents">Incomplete documentation</SelectItem>
                    <SelectItem value="previous">Previous support considerations</SelectItem>
                    <SelectItem value="other">Other (specify in comments)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="mt-4">
                <Label htmlFor="comments" className="text-sm font-medium">Comments</Label>
                <Textarea id="comments" placeholder="Add your comments here..." className="mt-1" />
              </div>
              <div className="mt-4">
                <Button className="w-full">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="ai-analysis" className="mt-6">
          <TabsList className="grid grid-cols-5 w-full h-12 p-1 bg-gray-100 rounded-lg shadow-sm">
            <TabsTrigger
              value="ai-analysis"
              className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
                         data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
                         hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              AI Analysis
            </TabsTrigger>
            <TabsTrigger
              value="personal"
              className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
                         data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
                         hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Personal Info
            </TabsTrigger>
            <TabsTrigger
              value="documents"
              className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
                         data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
                         hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Documents
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
                         data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
                         hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              History
            </TabsTrigger>
            <TabsTrigger
              value="communication"
              className="relative rounded-md px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200
                         data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow
                         hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              Communication
            </TabsTrigger>
          </TabsList>

          <TabsContent value="ai-analysis" className="mt-6">
            {/* Changed grid-cols to reflect new layout: 1 column for Eligibility, 2 columns for the rest */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column (lg:col-span-1) - Now only Eligibility Assessment */}
              <Card className="lg:col-span-1 shadow-sm rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Eligibility Assessment</h3>
                  <div className="space-y-6">

                    {/* Income Threshold - Eligible */}
                    <div className="flex items-start space-x-3">
                      <CheckCircleIcon size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-900">Income Threshold</span>
                        <div className="text-sm text-gray-600">
                          Family income (AED 6,500) is below the threshold (AED 10,000) for healthcare assistance.
                        </div>
                      </div>
                      <span className="ml-auto font-medium text-green-700 text-right">Eligible</span>
                    </div>

                    {/* Family Size Criteria - Eligible */}
                    <div className="flex items-start space-x-3">
                      <CheckCircleIcon size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-900">Family Size Criteria</span>
                        <div className="text-sm text-gray-600">
                          Family size (3 members) meets criteria for additional support.
                        </div>
                      </div>
                      <span className="ml-auto font-medium text-green-700 text-right">Eligible</span>
                    </div>

                    {/* Residency Requirements - Eligible */}
                    <div className="flex items-start space-x-3">
                      <CheckCircleIcon size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-900">Residency Requirements</span>
                        <div className="text-sm text-gray-600">
                          UAE citizen with valid Emirates ID and family book.
                        </div>
                      </div>
                      <span className="ml-auto font-medium text-green-700 text-right">Eligible</span>
                    </div>

                    {/* Housing Documentation - Review Needed */}
                    <div className="flex items-start space-x-3">
                      <ExclamationTriangleIcon size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-900">Housing Documentation</span>
                        <div className="text-sm text-gray-600">
                          Housing documentation may need additional verification.
                        </div>
                      </div>
                      <span className="ml-auto font-medium text-red-700 text-right">Review Needed</span>
                    </div>


                    {/* Previous Support - Review Needed */}
                    <div className="flex items-start space-x-3">
                      <ExclamationTriangleIcon size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-900">Previous Support</span>
                        <div className="text-sm text-gray-600">
                          Received financial aid 8 months ago (AED 15,000).
                        </div>
                      </div>
                      <span className="ml-auto font-medium text-red-700 text-right">Review Needed</span>
                    </div>

                    {/* Medical Necessity - Emergency/Urgency */}
                    <div className="flex items-start space-x-3">
                      <MedicalEmergencyIcon size={24} className="text-blue-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-grow">
                        <span className="font-semibold text-gray-900">Medical Necessity</span>
                        <div className="text-sm text-gray-600">
                          Medical records confirm chronic condition requiring ongoing treatment.
                        </div>
                      </div>
                      <span className="ml-auto font-medium text-blue-700 text-right">High Need</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Columns (lg:col-span-2) - Now contains AI Recommendation, Cross-Reference, Risk Assessment, AI Confidence */}
              <div className="lg:col-span-2 space-y-6">
                {/* AI Recommendation (Moved here) */}
                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">AI Recommendation</h3>
                    <div className="p-4 border border-gray-200 rounded-md bg-blue-50/50 mb-6 text-gray-800 leading-relaxed">
                      <p className="mb-3">
                        Aisha was divorced on May 23, 2025.
                      </p>
                      <p className="mb-3">
                        She meets most eligibility criteria for financial-aid assistance. Her family's income is
                        significantly below the threshold, and the medical necessity is well-documented. The family size
                        and composition also qualify for additional support.
                      </p>
                      <p className="font-semibold text-red-700 mb-2">However, manual review is recommended due to two factors:</p>
                      <ol className="list-disc list-inside text-medium space-y-1 pl-4">
                        <li>Housing verification for the "Family Support" source requires additional documentation.</li>
                        <li>
                          Previous financial aid was received within the past 12 months, requiring assessment of ongoing
                          need.
                        </li>
                      </ol>
                      <p className="mt-3">
                        The AI system recommends approval with verification of the housing documentation.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Cross-Reference Results (Moved to be second) */}
                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Cross-Source Verification</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-gray-700">Ministry of Interior</span>
                        <span className="text-sm font-medium text-green-700">Verified</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-gray-700">Ministry of Health</span>
                        <span className="text-sm font-medium text-green-700">Verified</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-gray-700">Ministry of Education</span>
                        <span className="text-sm font-medium text-green-700">Verified</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm text-gray-700">Previous Support Database</span>
                        <span className="text-sm font-medium text-red-700">Verified</span>
                      </div>
                      <div className="flex items-center justify-between pb-2">
                        <span className="text-sm text-gray-700">Financial Institutions</span>
                        <span className="text-sm font-medium text-green-700">Verified</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </TabsContent>

          <TabsContent value="personal" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-sm rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Family Tree</h3>
                  <div className="bg-slate-50 rounded-lg p-6 flex flex-col items-center justify-center text-center text-sm font-mono whitespace-pre-wrap">
                    {`
                      +----------+
                      |  Aisha   |
                      | (Self)   |
                      +----+-----+
                     |
                     |
                   +-------+-------+
                   |               |
             +-----+-----+   +-----+-----+
             |   Hamad   |   |  Fatima   |
             |  (Son)    |   | (Daughter)|
             +-----------+   +-----------+
                    `}
                    <p className="mt-4 text-muted-foreground text-xs">
                      A simplified representation of Aisha and her two children.
                    </p>
                  </div>

                  <h3 className="text-xl font-bold mt-6 mb-4 text-gray-800">Family Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PersonCard
                      name="Aisha Al-Mansouri"
                      relation="Self"
                      age={32}
                      occupation="Unemployed"
                      emiratesId="784-1985-1234567-8"
                    />
                    <PersonCard
                      name="Hamad Al-Mansoori"
                      relation="Son"
                      age={3}
                      occupation="Student"
                      emiratesId="784-2011-9876543-2"
                    />
                    <PersonCard
                      name="Fatima Al-Mansoori"
                      relation="Daughter"
                      age={7}
                      occupation="Student"
                      emiratesId="784-2013-5432109-8"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Income Sources</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div>
                          <div className="font-medium text-gray-800">Previous Employment</div>
                          <div className="text-sm text-muted-foreground">Monthly</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-800">AED 4,500</div>
                          <div className="text-xs text-green-700">Verified</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <div>
                          <div className="font-medium text-gray-800">Family Support</div>
                          <div className="text-sm text-muted-foreground">Monthly</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-800">AED 2,000</div>
                          <div className="text-xs text-yellow-700">Pending Verification</div>
                        </div>
                      </div>
                      <div className="pt-2">
                        <div className="flex justify-between items-center">
                          <div className="font-bold text-gray-900">Total Monthly Income</div>
                          <div className="font-bold text-gray-900">AED 6,500</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Assets Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-800">Bank Accounts</span>
                        <span className="font-medium text-gray-900">AED 12,500</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-800">Vehicles</span>
                        <span className="font-medium text-gray-900">1 (2015 Toyota)</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-800">Properties</span>
                        <span className="font-medium text-gray-900">None</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-800">Investments</span>
                        <span className="font-medium text-gray-900">None</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Housing Situation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-800">Housing Type</span>
                        <span className="font-medium text-gray-900">Rented Apartment</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-800">Monthly Rent</span>
                        <span className="font-medium text-gray-900">AED 5,500</span>
                      </div>
                      <div className="flex justify-between pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-800">Location</span>
                        <span className="font-medium text-gray-900">Al Nahda, Sharjah</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-800">Contract Expiry</span>
                        <span className="font-medium text-gray-900">March 15, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DocumentCard
                title="Rental Agreement"
                status="Needs Review"
                confidence={78}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Rental+Agreement+Preview"
              />
              <DocumentCard
                title="Previous Support Documents"
                status="Needs Review"
                confidence={82}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Previous+Support+Preview"
              />
              <DocumentCard
                title="Emirates ID"
                status="Verified"
                confidence={98}
                previewUrl="https://media.assettype.com/gulfnews%2Fimport%2F2009%2F7%2F4%2F1_16a0826b4af.141022_2849104373_16a0826b4af_large.jpg"
              />
              <DocumentCard
                title="Medical Records"
                status="Verified"
                confidence={92}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Medical+Records+Preview"
              />
              <DocumentCard
                title="Income Statement"
                status="Verified"
                confidence={96}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Income+Statement+Preview"
              />
              <DocumentCard
                title="Bank Statements"
                status="Verified"
                confidence={90}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Bank+Statements+Preview"
              />
              <DocumentCard
                title="Medical Insurance Card"
                status="Verified"
                confidence={96}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Insurance+Card+Preview"
              />
              <DocumentCard
                title="Utility Bills"
                status="Verified"
                confidence={88}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Utility+Bills+Preview"
              />
              <DocumentCard
                title="Family Book"
                status="Verified"
                confidence={95}
                previewUrl="https://via.placeholder.com/320x200/F0F4F8/8D99AE?text=Family+Book+Preview"
              />
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-sm rounded-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Application Timeline</h3>
                  <div className="space-y-6">
                    <TimelineItem
                      date="May 23, 2023"
                      time="12:15 PM"
                      title="Notification triggered with Divorce filing"
                      description="Notification sent to Aisha for financial assistance"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 23, 2023"
                      time="12:15 PM"
                      title="Assigned to Social Worker"
                      description="Application assigned to Ahmed Hassan for review"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:16 AM"
                      title="Application Submitted"
                      description="Application for financial assistance submitted by Aisha"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:16 AM"
                      title="Documents Attached"
                      description="All required documents attached to the system"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:16 AM"
                      title="Initial AI Processing"
                      description="Automated verification of identity and document authenticity"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:16 AM"
                      title="AI Eligibility Assessment"
                      description="Automated assessment of eligibility criteria and cross-reference verification"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:16 AM"
                      title="Flagged for Review"
                      description="Application flagged for human review due to housing verification and previous support history"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:16 AM"
                      title="Pending Social Worker Review"
                      description="Application assigned to Ahmed Hassan for review"
                      status="current"
                    />
                    <TimelineItem
                      date="Pending"
                      time=""
                      title="Decision"
                      description="Final decision on application"
                      status="upcoming"
                    />
                    <TimelineItem
                      date="Pending"
                      time=""
                      title="Notification"
                      description="Applicant notification of decision"
                      status="upcoming"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Previous Applications</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <div className="font-medium text-gray-800">Financial Aid</div>
                          <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                            Approved
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          September 15, 2022 • ID: UAE-2022-45678
                        </div>
                        <div className="text-sm mt-2 text-gray-800">One-time financial assistance of AED 15,000</div>
                      </div>
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <div className="font-medium text-gray-800">Education Support</div>
                          <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                            Approved
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">August 10, 2021 • ID: UAE-2021-34567</div>
                        <div className="text-sm mt-2 text-gray-800">School fees assistance for 3 children</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Payment History</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <div>
                          <div className="text-sm font-medium text-gray-800">Financial Aid</div>
                          <div className="text-xs text-muted-foreground">September 20, 2022</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">AED 15,000</div>
                          <div className="text-xs text-green-700">Disbursed</div>
                        </div>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <div>
                          <div className="text-sm font-medium text-gray-800">Education Support</div>
                          <div className="text-xs text-muted-foreground">August 15, 2021</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">AED 12,000</div>
                          <div className="text-xs text-green-700">Disbursed</div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-800">Education Support</div>
                          <div className="text-xs text-muted-foreground">January 10, 2022</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium text-gray-900">AED 12,000</div>
                          <div className="text-xs text-green-700">Disbursed</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Case Notes</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <div className="flex justify-between">
                          <div className="font-medium text-sm text-gray-800">Fatima Al-Zaabi</div>
                          <div className="text-xs text-muted-foreground">September 18, 2022</div>
                        </div>
                        <p className="text-sm mt-1 text-gray-800">
                          Applicant demonstrated significant financial need due to job loss. Recommended approval for
                          one-time financial assistance.
                        </p>
                      </div>
                      <div className="border-b pb-3">
                        <div className="flex justify-between">
                          <div className="font-medium text-sm text-gray-800">Ahmed Al-Suwaidi</div>
                          <div className="text-xs text-muted-foreground">August 8, 2021</div>
                        </div>
                        <p className="text-sm mt-1 text-gray-800">
                          Family has three school-aged children with education expenses exceeding current income.
                          Approved for education support program.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <div className="font-medium text-sm text-gray-800">System Note</div>
                          <div className="text-xs text-muted-foreground">May 26, 2023</div>
                        </div>
                        <p className="text-sm mt-1 text-gray-800">
                          AI system flagged application for human review due to income verification issues and previous
                          support history.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Communication Tab Content */}
          <TabsContent value="communication" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-sm rounded-lg">
                <CardContent className="p-6 h-[500px] flex flex-col">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">Chat with Aisha Al-Mansouri</h3>
                  <div className="flex-1 overflow-y-auto space-y-4 p-4 border rounded-md bg-gray-50 mb-4">
                    {/* Dummy Chat Messages */}
                    <div className="flex justify-start">
                      <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-[70%]">
                        <p className="font-medium">Aisha:</p>
                        <p className="text-sm">Hi, I have submitted my application. Please let me know if you need more information</p>
                        <p className="text-xs text-gray-500 text-right mt-1">May 25, 2023, 09:36 AM</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-green-100 text-green-800 p-3 rounded-lg max-w-[70%]">
                        <p className="font-medium">Social Worker:</p>
                        <p className="text-sm">Hello Aisha, your application is currently under review. We might need some additional documentation regarding your housing verification.</p>
                        <p className="text-xs text-gray-500 text-right mt-1">May 25, 2023, 09:37 AM</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-[70%]">
                        <p className="font-medium">Aisha:</p>
                        <p className="text-sm">Okay, what exactly do you need for housing verification?</p>
                        <p className="text-xs text-gray-500 text-right mt-1">May 25, 2023, 09:40 AM</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input placeholder="Type your message here..." className="flex-1" />
                    <Button size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Schedule Communication</h3>
                    <div className="space-y-3">
                      <Button className="w-full" variant="outline">
                        <Phone className="mr-2 h-4 w-4" /> Schedule Call
                      </Button>
                      <Button className="w-full" variant="outline">
                        <Video className="mr-2 h-4 w-4" /> Schedule Video Call
                      </Button>
                      <Button className="w-full" variant="outline">
                        <CalendarDays className="mr-2 h-4 w-4" /> Schedule In-person Visit
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-sm rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                    <div className="space-y-2 text-base">
                      <p><span className="font-semibold text-gray-900">Phone:</span> +971 50 123 4567</p>
                      <p><span className="font-semibold text-gray-900">Email:</span> aisha.mansouri@example.com</p>
                      <p><span className="font-semibold text-gray-900">Preferred Method:</span> Phone</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </DashboardShell>
  )
}
