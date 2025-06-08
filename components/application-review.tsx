// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { Calendar, Search, SlidersHorizontal, Menu } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { DashboardHeader } from "@/components/dashboard-header";
// import { DashboardShell } from "@/components/dashboard-shell";
// import { Input } from "@/components/ui/input";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Progress } from "@/components/ui/progress";
// import { Textarea } from "@/components/ui/textarea";
// import { ReactNode } from "react"; // Import ReactNode for typing

// // Type definitions
// interface FamilyMember {
//   name: string;
//   relation: string;
//   age: number;
//   occupation: string;
// }

// interface IncomeSource {
//   source: string;
//   amount: string;
//   frequency: string;
//   verified: string;
// }

// interface Housing {
//   housingType: string;
//   monthlyRent: string;
//   location: string;
//   contractExpiry: string;
// }

// interface Eligibility {
//   criteria: string;
//   status: string;
//   score: number;
//   description: string;
// }

// interface RiskFactor {
//   factor: string;
//   level: string;
// }

// interface Document {
//   title: string;
//   status: string;
//   confidence: number;
// }

// interface TimelineEvent {
//   date: string;
//   title: string;
//   description: string;
//   current: boolean;
// }

// interface PreviousApplication {
//   type: string;
//   status: string;
//   date: string;
//   id: string;
//   description: string;
// }

// interface AIKeyFactor {
//   type: "positive" | "concern";
//   text: string;
// }

// interface RiskFlag {
//   title: string;
//   description: string;
// }

// interface AIRecommendation {
//   type: "approve" | "review";
//   recommendation: string;
//   confidence: number;
//   keyFactors: AIKeyFactor[];
//   riskFlags: RiskFlag[];
// }

// interface ApplicationData {
//   name: string;
//   arabicName: string;
//   emiratesId: string;
//   contact: string;
//   familySize: number;
//   type: string;
//   familyMembers: FamilyMember[];
//   incomeSources: IncomeSource[];
//   housing: Housing;
//   aiAnalysis: {
//     eligibility: Eligibility[];
//     riskFactors: RiskFactor[];
//   };
//   documents: Document[];
//   timeline: TimelineEvent[];
//   previousApplications: PreviousApplication[];
//   aiRecommendation: AIRecommendation;
// }

// // Application data with index signature
// function getApplicationData(applicationId: string): ApplicationData {
//   const applicationDetails: Record<string, ApplicationData> = {
//     "UAE-2023-78945": {
//       name: "Ahmed Mohammed Al-Zahrani",
//       arabicName: "أحمد محمد الزهراني",
//       emiratesId: "784-1982-1234567-1",
//       contact: "+971 50 123 4567",
//       familySize: 4,
//       type: "Housing Support",
//       familyMembers: [
//         { name: "Ahmed Al-Zahrani", relation: "Self", age: 41, occupation: "Construction Worker" },
//         { name: "Khadija Al-Zahrani", relation: "Spouse", age: 38, occupation: "Homemaker" },
//         { name: "Omar Al-Zahrani", relation: "Son", age: 15, occupation: "Student" },
//         { name: "Layla Al-Zahrani", relation: "Daughter", age: 12, occupation: "Student" },
//       ],
//       incomeSources: [
//         { source: "Construction Work", amount: "4,200", frequency: "Monthly", verified: "Verified" },
//         { source: "Part-time Cleaning", amount: "800", frequency: "Monthly", verified: "Pending" },
//       ],
//       housing: {
//         housingType: "Rented Villa",
//         monthlyRent: "AED 6,800",
//         location: "Al Qusais, Dubai",
//         contractExpiry: "December 31, 2024",
//       },
//       aiAnalysis: {
//         eligibility: [
//           {
//             criteria: "Income Threshold",
//             status: "Eligible",
//             score: 75,
//             description: "Family income below housing support threshold",
//           },
//           {
//             criteria: "Family Size Criteria",
//             status: "Eligible",
//             score: 100,
//             description: "Family size qualifies for housing assistance",
//           },
//           {
//             criteria: "Residency Requirements",
//             status: "Eligible",
//             score: 100,
//             description: "UAE citizen with valid documentation",
//           },
//           {
//             criteria: "Housing Need",
//             status: "Eligible",
//             score: 85,
//             description: "High rent-to-income ratio indicates need",
//           },
//         ],
//         riskFactors: [
//           { factor: "Document Consistency", level: "Low" },
//           { factor: "Identity Verification", level: "Low" },
//           { factor: "Income Verification", level: "Medium" },
//           { factor: "Previous Applications", level: "Low" },
//         ],
//       },
//       documents: [
//         { title: "Emirates ID", status: "Verified", confidence: 98 },
//         { title: "Family Book", status: "Verified", confidence: 96 },
//         { title: "Salary Certificate", status: "Needs Review", confidence: 78 },
//         { title: "Rental Agreement", status: "Verified", confidence: 94 },
//         { title: "Bank Statements", status: "Verified", confidence: 91 },
//         { title: "Utility Bills", status: "Verified", confidence: 89 },
//       ],
//       timeline: [
//         {
//           date: "May 26, 2023",
//           title: "Application Submitted",
//           description: "Housing support application submitted online",
//           current: false,
//         },
//         {
//           date: "May 26, 2023",
//           title: "Documents Uploaded",
//           description: "All required documents uploaded",
//           current: false,
//         },
//         {
//           date: "May 27, 2023",
//           title: "AI Processing",
//           description: "Automated eligibility assessment completed",
//           current: false,
//         },
//         {
//           date: "May 27, 2023",
//           title: "Pending Review",
//           description: "Application assigned for human review",
//           current: true,
//         },
//       ],
//       previousApplications: [
//         {
//           type: "Utility Assistance",
//           status: "Approved",
//           date: "January 15, 2022",
//           id: "UAE-2022-12345",
//           description: "Electricity bill assistance - AED 2,500",
//         },
//       ],
//       aiRecommendation: {
//         type: "review",
//         recommendation: "Review Recommended",
//         confidence: 87,
//         keyFactors: [
//           { type: "positive", text: "Meets income threshold for housing support" },
//           { type: "positive", text: "High rent-to-income ratio demonstrates need" },
//           { type: "positive", text: "Valid UAE citizenship and documentation" },
//           { type: "concern", text: "Part-time income source requires verification" },
//         ],
//         riskFlags: [
//           { title: "Income Verification", description: "Part-time cleaning income needs additional documentation" },
//         ],
//       },
//     },
//     "UAE-2023-78946": {
//       name: "Fatima Ali Al-Saadi",
//       arabicName: "فاطمة علي السعدي",
//       emiratesId: "784-1988-7654321-2",
//       contact: "+971 55 987 6543",
//       familySize: 3,
//       type: "Financial Aid",
//       familyMembers: [
//         { name: "Fatima Al-Saadi", relation: "Self", age: 35, occupation: "Unemployed" },
//         { name: "Mariam Al-Saadi", relation: "Daughter", age: 8, occupation: "Student" },
//         { name: "Yusuf Al-Saadi", relation: "Son", age: 5, occupation: "Student" },
//       ],
//       incomeSources: [
//         { source: "Social Security", amount: "3,200", frequency: "Monthly", verified: "Verified" },
//         { source: "Child Support", amount: "1,500", frequency: "Monthly", verified: "Verified" },
//       ],
//       housing: {
//         housingType: "Rented Apartment",
//         monthlyRent: "AED 4,500",
//         location: "Al Nahda, Abu Dhabi",
//         contractExpiry: "August 15, 2024",
//       },
//       aiAnalysis: {
//         eligibility: [
//           {
//             criteria: "Income Threshold",
//             status: "Eligible",
//             score: 95,
//             description: "Income well below financial aid threshold",
//           },
//           {
//             criteria: "Family Composition",
//             status: "Eligible",
//             score: 100,
//             description: "Single mother with dependent children",
//           },
//           {
//             criteria: "Residency Requirements",
//             status: "Eligible",
//             score: 100,
//             description: "UAE citizen with valid documentation",
//           },
//           {
//             criteria: "Emergency Need",
//             status: "Eligible",
//             score: 90,
//             description: "Demonstrated urgent financial need",
//           },
//         ],
//         riskFactors: [
//           { factor: "Document Consistency", level: "Low" },
//           { factor: "Identity Verification", level: "Low" },
//           { factor: "Income Verification", level: "Low" },
//           { factor: "Duplicate Applications", level: "Low" },
//         ],
//       },
//       documents: [
//         { title: "Emirates ID", status: "Verified", confidence: 99 },
//         { title: "Family Book", status: "Verified", confidence: 97 },
//         { title: "Divorce Certificate", status: "Verified", confidence: 95 },
//         { title: "Social Security Statement", status: "Verified", confidence: 98 },
//         { title: "School Enrollment", status: "Verified", confidence: 93 },
//         { title: "Medical Records", status: "Verified", confidence: 91 },
//       ],
//       timeline: [
//         {
//           date: "May 26, 2023",
//           title: "Application Submitted",
//           description: "Emergency financial aid application submitted",
//           current: false,
//         },
//         {
//           date: "May 26, 2023",
//           title: "Fast-track Processing",
//           description: "Application prioritized for urgent review",
//           current: false,
//         },
//         {
//           date: "May 26, 2023",
//           title: "AI Assessment Complete",
//           description: "High confidence approval recommendation",
//           current: false,
//         },
//         {
//           date: "May 26, 2023",
//           title: "Auto-Approved",
//           description: "Application automatically approved by AI system",
//           current: true,
//         },
//       ],
//       previousApplications: [],
//       aiRecommendation: {
//         type: "approve",
//         recommendation: "Auto-Approval",
//         confidence: 95,
//         keyFactors: [
//           { type: "positive", text: "Income significantly below threshold" },
//           { type: "positive", text: "Single mother with dependent children" },
//           { type: "positive", text: "All documents verified successfully" },
//           { type: "positive", text: "No previous support history" },
//         ],
//         riskFlags: [],
//       },
//     },
//     "UAE-2023-78947": {
//       name: "Mohammed Abdullah Al-Mansoori",
//       arabicName: "محمد عبدالله المنصوري",
//       emiratesId: "784-1985-1234567-8",
//       contact: "+971 50 123 4567",
//       familySize: 5,
//       type: "Healthcare Assistance",
//       familyMembers: [
//         { name: "Mohammed Al-Mansoori", relation: "Self", age: 38, occupation: "Unemployed" },
//         { name: "Maryam Al-Mansoori", relation: "Spouse", age: 35, occupation: "Homemaker" },
//         { name: "Hamad Al-Mansoori", relation: "Son", age: 12, occupation: "Student" },
//         { name: "Fatima Al-Mansoori", relation: "Daughter", age: 10, occupation: "Student" },
//         { name: "Khalid Al-Mansoori", relation: "Son", age: 6, occupation: "Student" },
//       ],
//       incomeSources: [
//         { source: "Previous Employment", amount: "4,500", frequency: "Monthly", verified: "Verified" },
//         { source: "Family Support", amount: "2,000", frequency: "Monthly", verified: "Pending" },
//       ],
//       housing: {
//         housingType: "Rented Apartment",
//         monthlyRent: "AED 5,500",
//         location: "Al Nahda, Sharjah",
//         contractExpiry: "March 15, 2024",
//       },
//       aiAnalysis: {
//         eligibility: [
//           {
//             criteria: "Income Threshold",
//             status: "Eligible",
//             score: 35,
//             description: "Family income below healthcare assistance threshold",
//           },
//           {
//             criteria: "Family Size Criteria",
//             status: "Eligible",
//             score: 100,
//             description: "Family size meets criteria for additional support",
//           },
//           {
//             criteria: "Residency Requirements",
//             status: "Eligible",
//             score: 100,
//             description: "UAE citizen with valid Emirates ID",
//           },
//           {
//             criteria: "Previous Support",
//             status: "Review Needed",
//             score: 65,
//             description: "Received financial aid 8 months ago",
//           },
//         ],
//         riskFactors: [
//           { factor: "Document Consistency", level: "Low" },
//           { factor: "Identity Verification", level: "Low" },
//           { factor: "Income Verification", level: "Medium" },
//           { factor: "Duplicate Applications", level: "Low" },
//         ],
//       },
//       documents: [
//         { title: "Emirates ID", status: "Verified", confidence: 98 },
//         { title: "Family Book", status: "Verified", confidence: 95 },
//         { title: "Medical Records", status: "Verified", confidence: 92 },
//         { title: "Income Statement", status: "Needs Review", confidence: 76 },
//         { title: "Rental Agreement", status: "Verified", confidence: 94 },
//         { title: "Previous Support Documents", status: "Needs Review", confidence: 82 },
//       ],
//       timeline: [
//         {
//           date: "May 25, 2023",
//           title: "Application Submitted",
//           description: "Healthcare assistance application submitted",
//           current: false,
//         },
//         {
//           date: "May 25, 2023",
//           title: "Documents Uploaded",
//           description: "All required documents uploaded",
//           current: false,
//         },
//         {
//           date: "May 26, 2023",
//           title: "AI Assessment",
//           description: "Application flagged for human review",
//           current: false,
//         },
//         {
//           date: "May 27, 2023",
//           title: "Pending Review",
//           description: "Application assigned to social worker",
//           current: true,
//         },
//       ],
//       previousApplications: [
//         {
//           type: "Financial Aid",
//           status: "Approved",
//           date: "September 15, 2022",
//           id: "UAE-2022-45678",
//           description: "One-time financial assistance of AED 15,000",
//         },
//         {
//           type: "Education Support",
//           status: "Approved",
//           date: "August 10, 2021",
//           id: "UAE-2021-34567",
//           description: "School fees assistance for 3 children",
//         },
//       ],
//       aiRecommendation: {
//         type: "review",
//         recommendation: "Review Recommended",
//         confidence: 76,
//         keyFactors: [
//           { type: "positive", text: "Meets income threshold criteria" },
//           { type: "positive", text: "Family size qualifies for support" },
//           { type: "concern", text: "Income verification needs review" },
//           { type: "concern", text: "Previous support history requires assessment" },
//         ],
//         riskFlags: [
//           { title: "Income Verification", description: "Family support income source requires manual verification" },
//         ],
//       },
//     },
//     "UAE-2023-78948": {
//       name: "Aisha Khalid Al-Hashimi",
//       arabicName: "عائشة خالد الهاشمي",
//       emiratesId: "784-1990-9876543-3",
//       contact: "+971 52 456 7890",
//       familySize: 6,
//       type: "Education Support",
//       familyMembers: [
//         { name: "Aisha Al-Hashimi", relation: "Self", age: 33, occupation: "Part-time Teacher" },
//         { name: "Rashid Al-Hashimi", relation: "Spouse", age: 36, occupation: "Taxi Driver" },
//         { name: "Sara Al-Hashimi", relation: "Daughter", age: 14, occupation: "Student" },
//         { name: "Ahmed Al-Hashimi", relation: "Son", age: 12, occupation: "Student" },
//         { name: "Noor Al-Hashimi", relation: "Daughter", age: 9, occupation: "Student" },
//         { name: "Ali Al-Hashimi", relation: "Son", age: 6, occupation: "Student" },
//       ],
//       incomeSources: [
//         { source: "Teaching Salary", amount: "3,800", frequency: "Monthly", verified: "Verified" },
//         { source: "Taxi Driving", amount: "4,200", frequency: "Monthly", verified: "Verified" },
//       ],
//       housing: {
//         housingType: "Rented Villa",
//         monthlyRent: "AED 7,200",
//         location: "Al Warqa, Ajman",
//         contractExpiry: "June 30, 2024",
//       },
//       aiAnalysis: {
//         eligibility: [
//           {
//             criteria: "Income Threshold",
//             status: "Eligible",
//             score: 80,
//             description: "Combined income qualifies for education support",
//           },
//           {
//             criteria: "Number of Students",
//             status: "Eligible",
//             score: 100,
//             description: "4 school-age children qualify for maximum support",
//           },
//           {
//             criteria: "Academic Performance",
//             status: "Eligible",
//             score: 95,
//             description: "Children maintain good academic standing",
//           },
//           {
//             criteria: "School Fees Burden",
//             status: "Eligible",
//             score: 90,
//             description: "Education costs exceed 25% of family income",
//           },
//         ],
//         riskFactors: [
//           { factor: "Document Consistency", level: "Low" },
//           { factor: "Identity Verification", level: "Low" },
//           { factor: "Income Verification", level: "Low" },
//           { factor: "Academic Records", level: "Low" },
//         ],
//       },
//       documents: [
//         { title: "Emirates ID", status: "Verified", confidence: 97 },
//         { title: "Family Book", status: "Verified", confidence: 98 },
//         { title: "School Enrollment Certificates", status: "Verified", confidence: 96 },
//         { title: "Academic Transcripts", status: "Verified", confidence: 94 },
//         { title: "Salary Certificates", status: "Verified", confidence: 93 },
//         { title: "School Fee Invoices", status: "Verified", confidence: 95 },
//       ],
//       timeline: [
//         {
//           date: "May 25, 2023",
//           title: "Application Submitted",
//           description: "Education support application for 4 children",
//           current: false,
//         },
//         {
//           date: "May 25, 2023",
//           title: "Document Verification",
//           description: "All academic and financial documents verified",
//           current: false,
//         },
//         {
//           date: "May 25, 2023",
//           title: "AI Assessment Complete",
//           description: "High confidence approval recommendation",
//           current: false,
//         },
//         {
//           date: "May 26, 2023",
//           title: "Approved",
//           description: "Application approved for AED 18,000 annual support",
//           current: true,
//         },
//       ],
//       previousApplications: [
//         {
//           type: "Education Support",
//           status: "Approved",
//           date: "September 1, 2022",
//           id: "UAE-2022-56789",
//           description: "Previous year education support - AED 16,000",
//         },
//       ],
//       aiRecommendation: {
//         type: "approve",
//         recommendation: "Approve",
//         confidence: 92,
//         keyFactors: [
//           { type: "positive", text: "Family income qualifies for education support" },
//           { type: "positive", text: "4 school-age children with good academic performance" },
//           { type: "positive", text: "Education costs represent significant burden" },
//           { type: "positive", text: "Consistent previous support recipient" },
//         ],
//         riskFlags: [],
//       },
//     },
//   };
  
//   return applicationDetails[applicationId] || applicationDetails["UAE-2023-78948"];
// }

// export function ApplicationReview() {
//   const router = useRouter();
//   const [selectedApplication, setSelectedApplication] = useState<string | null>("UAE-2023-78948");
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   return (
//     <DashboardShell>
//       <DashboardHeader />
//       <div className="flex flex-1 overflow-hidden">
//         {/* Left Sidebar - Application List */}
//         <div
//           className={`border-r transition-all duration-300 ${sidebarCollapsed ? "w-16" : "w-full md:w-80 lg:w-96"}`}
//         >
//           <div className="flex flex-col h-full">
//             <div className="p-4 border-b">
//               <div className="flex items-center justify-between mb-4">
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//                   className="h-8 w-8"
//                 >
//                   <Menu className="h-4 w-4" />
//                 </Button>
//                 {!sidebarCollapsed && <h2 className="text-sm font-medium">Applications</h2>}
//               </div>

//               {!sidebarCollapsed && (
//                 <>
//                   <div className="relative mb-4">
//                     <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//                     <Input type="search" placeholder="Search applications..." className="pl-8" />
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <h2 className="text-sm font-medium">Filters</h2>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <Button variant="outline" size="sm" className="h-8 gap-1">
//                           <SlidersHorizontal className="h-3.5 w-3.5" />
//                           <span>Filter</span>
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-72">
//                         <div className="grid gap-4">
//                           <div className="space-y-2">
//                             <h4 className="font-medium">Status</h4>
//                             <div className="grid grid-cols-2 gap-2">
//                               {["Pending", "Flagged", "Approved", "Rejected"].map((status) => (
//                                 <div key={status} className="flex items-center space-x-2">
//                                   <Checkbox id={`status-${status}`} />
//                                   <Label htmlFor={`status-${status}`}>{status}</Label>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                           <Separator />
//                           <div className="space-y-2">
//                             <h4 className="font-medium">Application Type</h4>
//                             <div className="grid gap-2">
//                               {["Financial Aid", "Housing Support", "Healthcare", "Education"].map((type) => (
//                                 <div key={type} className="flex items-center space-x-2">
//                                   <Checkbox id={`type-${type}`} />
//                                   <Label htmlFor={`type-${type}`}>{type}</Label>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                           <Separator />
//                           <div className="space-y-2">
//                             <h4 className="font-medium">Priority Level</h4>
//                             <div className="grid grid-cols-3 gap-2">
//                               {["High", "Medium", "Low"].map((priority) => (
//                                 <div key={priority} className="flex items-center space-x-2">
//                                   <Checkbox id={`priority-${priority}`} />
//                                   <Label htmlFor={`priority-${priority}`}>{priority}</Label>
//                                 </div>
//                               ))}
//                             </div>
//                           </div>
//                           <Separator />
//                           <div className="space-y-2">
//                             <h4 className="font-medium">Date Range</h4>
//                             <div className="grid grid-cols-2 gap-2">
//                               <div className="flex items-center space-x-2">
//                                 <Button variant="outline" size="sm" className="w-full justify-start">
//                                   <Calendar className="mr-2 h-4 w-4" />
//                                   <span>From</span>
//                                 </Button>
//                               </div>
//                               <div className="flex items-center space-x-2">
//                                 <Button variant="outline" size="sm" className="w-full justify-start">
//                                   <Calendar className="mr-2 h-4 w-4" />
//                                   <span>To</span>
//                                 </Button>
//                               </div>
//                             </div>
//                           </div>
//                           <Button className="w-full">Apply Filters</Button>
//                         </div>
//                       </PopoverContent>
//                     </Popover>
//                   </div>
//                   <div className="grid grid-cols-2 gap-2 mt-3">
//                     <Select defaultValue="all">
//                       <SelectTrigger className="h-8">
//                         <SelectValue placeholder="Status" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="all">All Statuses</SelectItem>
//                         <SelectItem value="pending">Pending</SelectItem>
//                         <SelectItem value="flagged">Flagged</SelectItem>
//                         <SelectItem value="approved">Approved</SelectItem>
//                         <SelectItem value="rejected">Rejected</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <Select defaultValue="all">
//                       <SelectTrigger className="h-8">
//                         <SelectValue placeholder="Type" />
//                       </SelectTrigger>
//                       <SelectContent>
//                         <SelectItem value="all">All Types</SelectItem>
//                         <SelectItem value="financial">Financial Aid</SelectItem>
//                         <SelectItem value="housing">Housing Support</SelectItem>
//                         <SelectItem value="healthcare">Healthcare</SelectItem>
//                         <SelectItem value="education">Education</SelectItem>
//                       </SelectContent>
//                     </Select>
//                   </div>
//                 </>
//               )}
//             </div>
//             <div className="flex-1 overflow-auto">
//               {applications.map((application) => (
//                 <div
//                   key={application.id}
//                   className={`border-b p-4 cursor-pointer hover:bg-slate-50 ${selectedApplication === application.id ? "bg-blue-50" : ""
//                     }`}
//                   onClick={() => setSelectedApplication(application.id)}
//                 >
//                   {sidebarCollapsed ? (
//                     <div className="flex flex-col items-center">
//                       <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium">
//                         {application.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")
//                           .substring(0, 2)}
//                       </div>
//                       <StatusBadge status={application.status} />
//                     </div>
//                   ) : (
//                     <>
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <div className="font-medium">{application.name}</div>
//                           <div className="text-xs text-muted-foreground">{application.arabicName}</div>
//                         </div>
//                         <StatusBadge status={application.status} />
//                       </div>
//                       <div className="mt-2 flex justify-between items-center">
//                         <div className="text-xs text-muted-foreground">
//                           ID: {application.id} • {application.type}
//                         </div>
//                         <div className="text-xs font-medium">AI: {application.aiConfidence}%</div>
//                       </div>
//                       <div className="mt-1 text-xs text-muted-foreground">Submitted: {application.timestamp}</div>
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content Area */}
//         {selectedApplication && (
//           <div className="flex-1 overflow-auto">
//             <div className="p-6">
//               <div className="flex flex-col lg:flex-row gap-6">
//                 {/* Applicant Information */}
//                 <div className="w-full lg:w-2/3">
//                   <Card>
//                     <CardContent className="p-6">
//                       <div className="flex flex-col md:flex-row gap-6">
//                         <div className="flex-shrink-0">
//                           <Image
//                             src="/placeholder.svg?height=120&width=120"
//                             width={120}
//                             height={120}
//                             alt="Applicant Photo"
//                             className="rounded-lg border"
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <h2 className="text-2xl font-bold">{getApplicationData(selectedApplication).name}</h2>
//                           <h3 className="text-lg text-muted-foreground mb-4">
//                             {getApplicationData(selectedApplication).arabicName}
//                           </h3>

//                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div>
//                               <div className="text-sm text-muted-foreground">Emirates ID</div>
//                               <div className="font-medium">{getApplicationData(selectedApplication).emiratesId}</div>
//                             </div>
//                             <div>
//                               <div className="text-sm text-muted-foreground">Contact</div>
//                               <div className="font-medium">{getApplicationData(selectedApplication).contact}</div>
//                             </div>
//                             <div>
//                               <div className="text-sm text-muted-foreground">Family Size</div>
//                               <div className="font-medium">
//                                 {getApplicationData(selectedApplication).familySize} members
//                               </div>
//                             </div>
//                             <div>
//                               <div className="text-sm text-muted-foreground">Application Type</div>
//                               <div className="font-medium">{getApplicationData(selectedApplication).type}</div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>

//                   {/* Application Details Tabs */}
//                   <Tabs defaultValue="personal" className="mt-6">
//                     <TabsList className="grid grid-cols-4">
//                       <TabsTrigger value="personal">Personal</TabsTrigger>
//                       <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
//                       <TabsTrigger value="documents">Documents</TabsTrigger>
//                       <TabsTrigger value="history">History</TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="personal" className="p-4 border rounded-md mt-2">
//                       <h3 className="font-medium mb-4">Family Composition</h3>
//                       <div className="space-y-4">
//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                           {getApplicationData(selectedApplication).familyMembers.map(
//                             (member: FamilyMember, index: number) => (
//                               <PersonCard
//                                 key={index}
//                                 name={member.name}
//                                 relation={member.relation}
//                                 age={member.age}
//                                 occupation={member.occupation}
//                               />
//                             )
//                           )}
//                         </div>
//                       </div>

//                       <h3 className="font-medium mt-6 mb-4">Income Sources</h3>
//                       <div className="overflow-x-auto">
//                         <table className="min-w-full divide-y divide-gray-200">
//                           <thead>
//                             <tr>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Source
//                               </th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Amount (AED)
//                               </th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Frequency
//                               </th>
//                               <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                                 Verified
//                               </th>
//                             </tr>
//                           </thead>
//                           <tbody className="divide-y divide-gray-200">
//                             {getApplicationData(selectedApplication).incomeSources.map(
//                               (source: IncomeSource, index: number) => (
//                                 <tr key={index}>
//                                   <td className="px-4 py-2 text-sm">{source.source}</td>
//                                   <td className="px-4 py-2 text-sm">{source.amount}</td>
//                                   <td className="px-4 py-2 text-sm">{source.frequency}</td>
//                                   <td className="px-4 py-2 text-sm">
//                                     <span
//                                       className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${source.verified === "Verified"
//                                           ? "bg-green-100 text-green-800"
//                                           : "bg-amber-100 text-amber-800"
//                                         }`}
//                                     >
//                                       {source.verified}
//                                     </span>
//                                   </td>
//                                 </tr>
//                               )
//                             )}
//                           </tbody>
//                         </table>
//                       </div>

//                       <h3 className="font-medium mt-6 mb-4">Housing Situation</h3>
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {Object.entries(getApplicationData(selectedApplication).housing).map(
//                           ([key, value]: [string, string], index: number) => (
//                             <div key={index}>
//                               <div className="text-sm text-muted-foreground">
//                                 {key
//                                   .replace(/([A-Z])/g, " $1")
//                                   .replace(/^./, (str) => str.toUpperCase())}
//                               </div>
//                               <div className="font-medium">{value}</div>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </TabsContent>

//                     {/* Keep the existing AI Analysis, Documents, and History tabs but update with dynamic data */}
//                     <TabsContent value="ai-analysis" className="p-4 border rounded-md mt-2">
//                       <h3 className="font-medium mb-4">Eligibility Assessment</h3>
//                       <div className="space-y-4">
//                         {getApplicationData(selectedApplication).aiAnalysis.eligibility.map(
//                           (item: Eligibility, index: number) => (
//                             <div key={index} className="space-y-2">
//                               <div className="flex justify-between">
//                                 <span className="text-sm">{item.criteria}</span>
//                                 <span
//                                   className={`text-sm font-medium ${item.status === "Eligible" ? "text-green-600" : "text-amber-600"
//                                     }`}
//                                 >
//                                   {item.status}
//                                 </span>
//                               </div>
//                               <Progress value={item.score} className="h-2" />
//                               <div className="text-xs text-muted-foreground">{item.description}</div>
//                             </div>
//                           )
//                         )}
//                       </div>

//                       <h3 className="font-medium mt-6 mb-4">Risk Assessment</h3>
//                       <div className="grid grid-cols-2 gap-4">
//                         {getApplicationData(selectedApplication).aiAnalysis.riskFactors.map(
//                           (risk: RiskFactor, index: number) => (
//                             <div key={index} className="border rounded-md p-3">
//                               <div className="text-sm font-medium">{risk.factor}</div>
//                               <div className="mt-1 flex items-center">
//                                 <div
//                                   className={`h-2 w-2 rounded-full mr-2 ${risk.level === "Low"
//                                       ? "bg-green-500"
//                                       : risk.level === "Medium"
//                                         ? "bg-amber-500"
//                                         : "bg-red-500"
//                                     }`}
//                                 ></div>
//                                 <span className="text-sm">{risk.level} Risk</span>
//                               </div>
//                             </div>
//                           )
//                         )}
//                       </div>
//                     </TabsContent>

//                     <TabsContent value="documents" className="p-4 border rounded-md mt-2">
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         {getApplicationData(selectedApplication).documents.map((doc: Document, index: number) => (
//                           <DocumentCard key={index} title={doc.title} status={doc.status} confidence={doc.confidence} />
//                         ))}
//                       </div>
//                     </TabsContent>

//                     <TabsContent value="history" className="p-4 border rounded-md mt-2">
//                       <div className="space-y-6">
//                         <div>
//                           <h3 className="font-medium mb-3">Application Timeline</h3>
//                           <div className="space-y-4">
//                             {getApplicationData(selectedApplication).timeline.map(
//                               (event: TimelineEvent, index: number) => (
//                                 <TimelineItem
//                                   key={index}
//                                   date={event.date}
//                                   title={event.title}
//                                   description={event.description}
//                                   current={event.current}
//                                 />
//                               )
//                             )}
//                           </div>
//                         </div>

//                         <div>
//                           <h3 className="font-medium mb-3">Previous Applications</h3>
//                           <div className="space-y-3">
//                             {getApplicationData(selectedApplication).previousApplications.map(
//                               (app: PreviousApplication, index: number) => (
//                                 <div key={index} className="border rounded-md p-3">
//                                   <div className="flex justify-between">
//                                     <div className="font-medium">{app.type}</div>
//                                     <StatusBadge status={app.status} />
//                                   </div>
//                                   <div className="text-sm text-muted-foreground mt-1">
//                                     {app.date} • ID: {app.id}
//                                   </div>
//                                   <div className="text-sm mt-2">{app.description}</div>
//                                 </div>
//                               )
//                             )}
//                           </div>
//                         </div>
//                       </div>
//                     </TabsContent>
//                   </Tabs>
//                 </div>

//                 {/* AI Analysis and Decision Panel */}
//                 <div className="w-full lg:w-1/3 space-y-6">
//                   <Card>
//                     <CardContent className="p-6">
//                       <h3 className="text-lg font-medium mb-4">AI Recommendation</h3>
//                       <div
//                         className={`p-3 border rounded-md mb-4 ${getApplicationData(selectedApplication).aiRecommendation.type === "approve"
//                             ? "bg-green-50 border-green-200"
//                             : getApplicationData(selectedApplication).aiRecommendation.type === "review"
//                               ? "bg-amber-50 border-amber-200"
//                               : "bg-red-50 border-red-200"
//                           }`}
//                       >
//                         <div className="flex items-center">
//                           <div
//                             className={`font-medium ${getApplicationData(selectedApplication).aiRecommendation.type === "approve"
//                                 ? "text-green-800"
//                                 : getApplicationData(selectedApplication).aiRecommendation.type === "review"
//                                   ? "text-amber-800"
//                                   : "text-red-800"
//                               }`}
//                           >
//                             {getApplicationData(selectedApplication).aiRecommendation.recommendation}
//                           </div>
//                           <div className="ml-auto text-sm font-medium">
//                             {getApplicationData(selectedApplication).aiRecommendation.confidence}% Confidence
//                           </div>
//                         </div>
//                         <Progress
//                           value={getApplicationData(selectedApplication).aiRecommendation.confidence}
//                           className={`h-2 mt-2 ${getApplicationData(selectedApplication).aiRecommendation.type === "approve"
//                               ? "bg-green-100"
//                               : getApplicationData(selectedApplication).aiRecommendation.type === "review"
//                                 ? "bg-amber-100"
//                                 : "bg-red-100"
//                             }`}
//                         />
//                       </div>

//                       <h4 className="font-medium text-sm mb-2">Key Factors</h4>
//                       <ul className="space-y-2 mb-4">
//                         {getApplicationData(selectedApplication).aiRecommendation.keyFactors.map(
//                           (factor: AIKeyFactor, index: number) => (
//                             <li key={index} className="flex items-start">
//                               <div
//                                 className={`h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${factor.type === "positive"
//                                     ? "bg-green-100 text-green-800"
//                                     : "bg-amber-100 text-amber-800"
//                                   }`}
//                               >
//                                 {factor.type === "positive" ? "✓" : "!"}
//                               </div>
//                               <span className="text-sm">{factor.text}</span>
//                             </li>
//                           )
//                         )}
//                       </ul>

//                       {getApplicationData(selectedApplication).aiRecommendation.riskFlags.length > 0 && (
//                         <>
//                           <h4 className="font-medium text-sm mb-2">Risk Flags</h4>
//                           <div className="space-y-3 mb-4">
//                             {getApplicationData(selectedApplication).aiRecommendation.riskFlags.map(
//                               (flag: RiskFlag, index: number) => (
//                                 <div key={index} className="p-3 border rounded-md">
//                                   <div className="flex items-start">
//                                     <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mr-2 flex-shrink-0">
//                                       !
//                                     </div>
//                                     <div>
//                                       <div className="text-sm font-medium">{flag.title}</div>
//                                       <div className="text-xs text-muted-foreground">{flag.description}</div>
//                                     </div>
//                                   </div>
//                                 </div>
//                               )
//                             )}
//                           </div>
//                         </>
//                       )}
//                     </CardContent>
//                   </Card>

//                   <Card>
//                     <CardContent className="p-6">
//                       <h3 className="text-lg font-medium mb-4">Decision</h3>

//                       <div className="space-y-4">
//                         <Button className="w-full bg-green-600 hover:bg-green-700">Approve Application</Button>
//                         <Button className="w-full" variant="outline">
//                           Request Additional Information
//                         </Button>
//                         <Button
//                           className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
//                           variant="outline"
//                         >
//                           Reject Application
//                         </Button>
//                         <Button className="w-full" variant="link">
//                           Escalate to Supervisor
//                         </Button>
//                       </div>

//                       <div className="mt-4">
//                         <Label htmlFor="comments">Comments</Label>
//                         <Textarea id="comments" placeholder="Add your comments here..." className="mt-1" />
//                       </div>

//                       <div className="mt-4">
//                         <Label htmlFor="reason">Decision Reasoning</Label>
//                         <Select>
//                           <SelectTrigger id="reason">
//                             <SelectValue placeholder="Select reason" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="eligible">Meets all eligibility criteria</SelectItem>
//                             <SelectItem value="partial">Partially meets criteria</SelectItem>
//                             <SelectItem value="income">Income verification issues</SelectItem>
//                             <SelectItem value="documents">Incomplete documentation</SelectItem>
//                             <SelectItem value="previous">Previous support considerations</SelectItem>
//                             <SelectItem value="other">Other (specify in comments)</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </DashboardShell>
//   );
// }

// function StatusBadge({ status }: { status: string }) {
//   let bgColor = "bg-gray-100 text-gray-800";

//   if (status === "Pending") {
//     bgColor = "bg-amber-100 text-amber-800";
//   } else if (status === "Approved") {
//     bgColor = "bg-green-100 text-green-800";
//   } else if (status === "Flagged") {
//     bgColor = "bg-red-100 text-red-800";
//   } else if (status === "Auto-Approved") {
//     bgColor = "bg-blue-100 text-blue-800";
//   } else if (status === "Needs Review") {
//     bgColor = "bg-amber-100 text-amber-800";
//   } else if (status === "Verified") {
//     bgColor = "bg-green-100 text-green-800";
//   }

//   return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>;
// }

// function PersonCard({
//   name,
//   relation,
//   age,
//   occupation,
// }: {
//   name: string;
//   relation: string;
//   age: number;
//   occupation: string;
// }) {
//   return (
//     <div className="border rounded-md p-3">
//       <div className="font-medium">{name}</div>
//       <div className="text-sm text-muted-foreground">{relation}</div>
//       <div className="mt-2 text-sm">
//         <div>Age: {age}</div>
//         <div>Occupation: {occupation}</div>
//       </div>
//     </div>
//   );
// }

// function DocumentCard({ title, status, confidence }: { title: string; status: string; confidence: number }) {
//   return (
//     <div className="border rounded-md p-4">
//       <div className="flex justify-between items-start">
//         <div className="font-medium">{title}</div>
//         <StatusBadge status={status} />
//       </div>
//       <div className="mt-2 flex items-center justify-between">
//         <span className="text-sm text-muted-foreground">AI Confidence</span>
//         <span className="text-sm font-medium">{confidence}%</span>
//       </div>
//       <Progress value={confidence} className="h-1 mt-1" />
//       <div className="mt-3 flex justify-between">
//         <Button variant="outline" size="sm">
//           View Document
//         </Button>
//         <Button variant="ghost" size="sm">
//           Verify
//         </Button>
//       </div>
//     </div>
//   );
// }

// function TimelineItem({
//   date,
//   title,
//   description,
//   current = false,
// }: { date: string; title: string; description: string; current?: boolean }) {
//   return (
//     <div className="flex gap-4">
//       <div className="flex flex-col items-center">
//         <div className={`h-4 w-4 rounded-full ${current ? "bg-blue-600" : "bg-gray-200"}`}></div>
//         {!current && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
//       </div>
//       <div className="pb-4">
//         <div className="text-xs text-muted-foreground">{date}</div>
//         <div className="font-medium">{title}</div>
//         <div className="text-sm text-muted-foreground">{description}</div>
//       </div>
//     </div>
//   );
// }

// const applications = [
//   {
//     id: "UAE-2023-78945",
//     name: "Ahmed Mohammed Al-Zahrani",
//     arabicName: "أحمد محمد الزهراني",
//     type: "Housing Support",
//     status: "Pending",
//     aiConfidence: 87,
//     timestamp: "May 26, 2023",
//   },
//   {
//     id: "UAE-2023-78946",
//     name: "Fatima Ali Al-Saadi",
//     arabicName: "فاطمة علي السعدي",
//     type: "Financial Aid",
//     status: "Auto-Approved",
//     aiConfidence: 95,
//     timestamp: "May 26, 2023",
//   },
//   {
//     id: "UAE-2023-78947",
//     name: "Mohammed Abdullah Al-Mansoori",
//     arabicName: "محمد عبدالله المنصوري",
//     type: "Healthcare Assistance",
//     status: "Flagged",
//     aiConfidence: 76,
//     timestamp: "May 25, 2023",
//   },
//   {
//     id: "UAE-2023-78948",
//     name: "Aisha Khalid Al-Hashimi",
//     arabicName: "عائشة خالد الهاشمي",
//     type: "Education Support",
//     status: "Pending - Urgent",
//     aiConfidence: 92,
//     timestamp: "May 25, 2023",
//   },
//   {
//     id: "UAE-2023-78949",
//     name: "Khalid Saeed Al-Shamsi",
//     arabicName: "خالد سعيد الشامسي",
//     type: "Financial Aid",
//     status: "Pending",
//     aiConfidence: 85,
//     timestamp: "May 24, 2023",
//   },
//   {
//     id: "UAE-2023-78950",
//     name: "Maryam Yousuf Al-Zaabi",
//     arabicName: "مريم يوسف الزعابي",
//     type: "Housing Support",
//     status: "Flagged",
//     aiConfidence: 79,
//     timestamp: "May 24, 2023",
//   },
//   {
//     id: "UAE-2023-78951",
//     name: "Saeed Rashid Al-Nuaimi",
//     arabicName: "سعيد راشد النعيمي",
//     type: "Healthcare Assistance",
//     status: "Auto-Approved",
//     aiConfidence: 96,
//     timestamp: "May 23, 2023",
//   },
//   {
//     id: "UAE-2023-78952",
//     name: "Noura Ahmed Al-Mazrouei",
//     arabicName: "نورة أحمد المزروعي",
//     type: "Education Support",
//     status: "Pending",
//     aiConfidence: 88,
//     timestamp: "May 23, 2023",
//   },
// ];
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, Search, SlidersHorizontal, Menu, ChevronLeft, Download, Printer, Phone, Video, CalendarDays, Send, ChevronsUpDown } from "lucide-react"; // Combined all necessary Lucide icons

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";


// Type definitions (from original application-review.tsx)
interface FamilyMember {
  name: string;
  relation: string;
  age: number;
  occupation: string;
}

interface IncomeSource {
  source: string;
  amount: string;
  frequency: string;
  verified: string;
}

interface Housing {
  housingType: string;
  monthlyRent: string;
  location: string;
  contractExpiry: string;
}

interface Eligibility {
  criteria: string;
  status: string;
  score: number;
  description: string;
}

interface RiskFactor {
  factor: string;
  level: string;
}

interface Document {
  title: string;
  status: string;
  confidence: number;
  // Added previewUrl based on previous application-details.tsx structure
  previewUrl?: string;
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  current: boolean; // This is required
  // Added time based on previous application-details.tsx structure
  time?: string;
}

interface PreviousApplication {
  type: string;
  status: string;
  date: string;
  id: string;
  description: string;
}

interface AIKeyFactor {
  type: "positive" | "concern";
  text: string;
}

interface RiskFlag {
  title: string;
  description: string;
}

interface AIRecommendation {
  type: "approve" | "review" | "reject"; // Added reject possibility for completeness
  recommendation: string;
  confidence: number;
  keyFactors: AIKeyFactor[];
  riskFlags: RiskFlag[];
}

interface ApplicationData {
  name: string;
  arabicName: string;
  emiratesId: string;
  contact: string;
  familySize: number;
  type: string;
  familyMembers: FamilyMember[];
  incomeSources: IncomeSource[];
  housing: Housing;
  aiAnalysis: {
    eligibility: Eligibility[];
    riskFactors: RiskFactor[];
  };
  documents: Document[];
  timeline: TimelineEvent[];
  previousApplications: PreviousApplication[];
  aiRecommendation: AIRecommendation;
}

// Data fetching function (from original application-review.tsx, expanded for dynamic data)
function getApplicationData(applicationId: string): ApplicationData {
  const applicationDetails: Record<string, ApplicationData> = {
    "UAE-2023-78945": {
      name: "Ahmed Mohammed Al-Zahrani",
      arabicName: "أحمد محمد الزهراني",
      emiratesId: "784-1982-1234567-1",
      contact: "+971 50 123 4567",
      familySize: 4,
      type: "Housing Support",
      familyMembers: [
        { name: "Ahmed Al-Zahrani", relation: "Self", age: 41, occupation: "Construction Worker" },
        { name: "Khadija Al-Zahrani", relation: "Spouse", age: 38, occupation: "Homemaker" },
        { name: "Omar Al-Zahrani", relation: "Son", age: 15, occupation: "Student" },
        { name: "Layla Al-Zahrani", relation: "Daughter", age: 12, occupation: "Student" },
      ],
      incomeSources: [
        { source: "Construction Work", amount: "4,200", frequency: "Monthly", verified: "Verified" },
        { source: "Part-time Cleaning", amount: "800", frequency: "Monthly", verified: "Pending" },
      ],
      housing: {
        housingType: "Rented Villa",
        monthlyRent: "AED 6,800",
        location: "Al Qusais, Dubai",
        contractExpiry: "December 31, 2024",
      },
      aiAnalysis: {
        eligibility: [
          {
            criteria: "Income Threshold",
            status: "Eligible",
            score: 75,
            description: "Family income below housing support threshold",
          },
          {
            criteria: "Family Size Criteria",
            status: "Eligible",
            score: 100,
            description: "Family size qualifies for housing assistance",
          },
          {
            criteria: "Residency Requirements",
            status: "Eligible",
            score: 100,
            description: "UAE citizen with valid documentation",
          },
          {
            criteria: "Housing Need",
            status: "Eligible",
            score: 85,
            description: "High rent-to-income ratio indicates need",
          },
        ],
        riskFactors: [
          { factor: "Document Consistency", level: "Low" },
          { factor: "Identity Verification", level: "Low" },
          { factor: "Income Verification", level: "Medium" },
          { factor: "Previous Applications", level: "Low" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 98, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Family Book", status: "Verified", confidence: 96, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Family+Book+Preview" },
        { title: "Salary Certificate", status: "Needs Review", confidence: 78, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Salary+Certificate+Preview" },
        { title: "Rental Agreement", status: "Verified", confidence: 94, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Rental+Agreement+Preview" },
        { title: "Bank Statements", status: "Verified", confidence: 91, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Bank+Statements+Preview" },
        { title: "Utility Bills", status: "Verified", confidence: 89, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Utility+Bills+Preview" },
      ],
      timeline: [
        {
          date: "May 26, 2023",
          time: "09:00 AM",
          title: "Application Submitted",
          description: "Housing support application submitted online",
          current: false,
        },
        {
          date: "May 26, 2023",
          time: "09:30 AM",
          title: "Documents Uploaded",
          description: "All required documents uploaded",
          current: false,
        },
        {
          date: "May 27, 2023",
          time: "10:00 AM",
          title: "AI Processing",
          description: "Automated eligibility assessment completed",
          current: false,
        },
        {
          date: "May 27, 2023",
          time: "10:05 AM",
          title: "Pending Review",
          description: "Application assigned for human review",
          current: true,
        },
      ],
      previousApplications: [
        {
          type: "Utility Assistance",
          status: "Approved",
          date: "January 15, 2022",
          id: "UAE-2022-12345",
          description: "Electricity bill assistance - AED 2,500",
        },
      ],
      aiRecommendation: {
        type: "review",
        recommendation: "Review Recommended",
        confidence: 87,
        keyFactors: [
          { type: "positive", text: "Meets income threshold for housing support" },
          { type: "positive", text: "High rent-to-income ratio demonstrates need" },
          { type: "positive", text: "Valid UAE citizenship and documentation" },
          { type: "concern", text: "Part-time income source requires verification" },
        ],
        riskFlags: [
          { title: "Income Verification", description: "Part-time cleaning income needs additional documentation" },
        ],
      },
    },
    "UAE-2023-78946": {
      name: "Fatima Ali Al-Saadi",
      arabicName: "فاطمة علي السعدي",
      emiratesId: "784-1988-7654321-2",
      contact: "+971 55 987 6543",
      familySize: 3,
      type: "Financial Aid",
      familyMembers: [
        { name: "Fatima Al-Saadi", relation: "Self", age: 35, occupation: "Unemployed" },
        { name: "Mariam Al-Saadi", relation: "Daughter", age: 8, occupation: "Student" },
        { name: "Yusuf Al-Saadi", relation: "Son", age: 5, occupation: "Student" },
      ],
      incomeSources: [
        { source: "Social Security", amount: "3,200", frequency: "Monthly", verified: "Verified" },
        { source: "Child Support", amount: "1,500", frequency: "Monthly", verified: "Verified" },
      ],
      housing: {
        housingType: "Rented Apartment",
        monthlyRent: "AED 4,500",
        location: "Al Nahda, Abu Dhabi",
        contractExpiry: "August 15, 2024",
      },
      aiAnalysis: {
        eligibility: [
          {
            criteria: "Income Threshold",
            status: "Eligible",
            score: 95,
            description: "Income well below financial aid threshold",
          },
          {
            criteria: "Family Composition",
            status: "Eligible",
            score: 100,
            description: "Single mother with dependent children",
          },
          {
            criteria: "Residency Requirements",
            status: "Eligible",
            score: 100,
            description: "UAE citizen with valid documentation",
          },
          {
            criteria: "Emergency Need",
            status: "Eligible",
            score: 90,
            description: "Demonstrated urgent financial need",
          },
        ],
        riskFactors: [
          { factor: "Document Consistency", level: "Low" },
          { factor: "Identity Verification", level: "Low" },
          { factor: "Income Verification", level: "Low" },
          { factor: "Duplicate Applications", level: "Low" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 99, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Family Book", status: "Verified", confidence: 97, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Family+Book+Preview" },
        { title: "Divorce Certificate", status: "Verified", confidence: 95, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Divorce+Certificate+Preview" },
        { title: "Social Security Statement", status: "Verified", confidence: 98, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Social+Security+Statement+Preview" },
        { title: "School Enrollment", status: "Verified", confidence: 93, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=School+Enrollment+Preview" },
        { title: "Medical Records", status: "Verified", confidence: 91, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Medical+Records+Preview" },
      ],
      timeline: [
        {
          date: "May 26, 2023",
          time: "11:00 AM",
          title: "Application Submitted",
          description: "Emergency financial aid application submitted",
          current: false,
        },
        {
          date: "May 26, 2023",
          time: "11:05 AM",
          title: "Fast-track Processing",
          description: "Application prioritized for urgent review",
          current: false,
        },
        {
          date: "May 26, 2023",
          time: "11:10 AM",
          title: "AI Assessment Complete",
          description: "High confidence approval recommendation",
          current: false,
        },
        {
          date: "May 26, 2023",
          time: "11:12 AM",
          title: "Auto-Approved",
          description: "Application automatically approved by AI system",
          current: true,
        },
      ],
      previousApplications: [],
      aiRecommendation: {
        type: "approve",
        recommendation: "Auto-Approval",
        confidence: 95,
        keyFactors: [
          { type: "positive", text: "Income significantly below threshold" },
          { type: "positive", text: "Single mother with dependent children" },
          { type: "positive", text: "All documents verified successfully" },
          { type: "positive", text: "No previous support history" },
        ],
        riskFlags: [],
      },
    },
    "UAE-2023-78947": {
      name: "Mohammed Abdullah Al-Mansoori",
      arabicName: "محمد عبدالله المنصوري",
      emiratesId: "784-1985-1234567-8",
      contact: "+91 50 123 4567",
      familySize: 5,
      type: "Healthcare Assistance",
      familyMembers: [
        { name: "Mohammed Al-Mansoori", relation: "Self", age: 38, occupation: "Unemployed" },
        { name: "Maryam Al-Mansoori", relation: "Spouse", age: 35, occupation: "Homemaker" },
        { name: "Hamad Al-Mansoori", relation: "Son", age: 12, occupation: "Student" },
        { name: "Fatima Al-Mansoori", relation: "Daughter", age: 10, occupation: "Student" },
        { name: "Khalid Al-Mansoori", relation: "Son", age: 6, occupation: "Student" },
      ],
      incomeSources: [
        { source: "Previous Employment", amount: "4,500", frequency: "Monthly", verified: "Verified" },
        { source: "Family Support", amount: "2,000", frequency: "Monthly", verified: "Pending" },
      ],
      housing: {
        housingType: "Rented Apartment",
        monthlyRent: "AED 5,500",
        location: "Al Nahda, Sharjah",
        contractExpiry: "March 15, 2024",
      },
      aiAnalysis: {
        eligibility: [
          {
            criteria: "Income Threshold",
            status: "Eligible",
            score: 35,
            description: "Family income below healthcare assistance threshold",
          },
          {
            criteria: "Family Size Criteria",
            status: "Eligible",
            score: 100,
            description: "Family size meets criteria for additional support",
          },
          {
            criteria: "Residency Requirements",
            status: "Eligible",
            score: 100,
            description: "UAE citizen with valid Emirates ID",
          },
          {
            criteria: "Previous Support",
            status: "Review Needed",
            score: 65,
            description: "Received financial aid 8 months ago",
          },
        ],
        riskFactors: [
          { factor: "Document Consistency", level: "Low" },
          { factor: "Identity Verification", level: "Low" },
          { factor: "Income Verification", level: "Medium" },
          { factor: "Duplicate Applications", level: "Low" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 98, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Family Book", status: "Verified", confidence: 95, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Family+Book+Preview" },
        { title: "Medical Records", status: "Verified", confidence: 92, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Medical+Records+Preview" },
        { title: "Income Statement", status: "Needs Review", confidence: 76, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Income+Statement+Preview" },
        { title: "Rental Agreement", status: "Verified", confidence: 94, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Rental+Agreement+Preview" },
        { title: "Previous Support Documents", status: "Needs Review", confidence: 82, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Previous+Support+Documents+Preview" },
      ],
      timeline: [
        {
          date: "May 25, 2023",
          time: "09:00 AM",
          title: "Application Submitted",
          description: "Healthcare assistance application submitted",
          current: false,
        },
        {
          date: "May 25, 2023",
          time: "09:30 AM",
          title: "Documents Uploaded",
          description: "All required documents uploaded",
          current: false,
        },
        {
          date: "May 26, 2023",
          time: "10:00 AM",
          title: "AI Assessment",
          description: "Application flagged for human review",
          current: false,
        },
        {
          date: "May 27, 2023",
          time: "10:05 AM",
          title: "Pending Review",
          description: "Application assigned to social worker",
          current: true,
        },
      ],
      previousApplications: [
        {
          type: "Financial Aid",
          status: "Approved",
          date: "September 15, 2022",
          id: "UAE-2022-45678",
          description: "One-time financial assistance of AED 15,000",
        },
        {
          type: "Education Support",
          status: "Approved",
          date: "August 10, 2021",
          id: "UAE-2021-34567",
          description: "School fees assistance for 3 children",
        },
      ],
      aiRecommendation: {
        type: "review",
        recommendation: "Review Recommended",
        confidence: 76,
        keyFactors: [
          { type: "positive", text: "Meets income threshold criteria" },
          { type: "positive", text: "Family size qualifies for support" },
          { type: "concern", text: "Income verification needs review" },
          { type: "concern", text: "Previous support history requires assessment" },
        ],
        riskFlags: [
          { title: "Income Verification", description: "Family support income source requires manual verification" },
        ],
      },
    },
    "UAE-2023-78948": {
      name: "Aisha Khalid Al-Hashimi",
      arabicName: "عائشة خالد الهاشمي",
      emiratesId: "784-1990-9876543-3",
      contact: "+971 52 456 7890",
      familySize: 6,
      type: "Education Support",
      familyMembers: [
        { name: "Aisha Al-Hashimi", relation: "Self", age: 33, occupation: "Part-time Teacher" },
        { name: "Rashid Al-Hashimi", relation: "Spouse", age: 36, occupation: "Taxi Driver" },
        { name: "Sara Al-Hashimi", relation: "Daughter", age: 14, occupation: "Student" },
        { name: "Ahmed Al-Hashimi", relation: "Son", age: 12, occupation: "Student" },
        { name: "Noor Al-Hashimi", relation: "Daughter", age: 9, occupation: "Student" },
        { name: "Ali Al-Hashimi", relation: "Son", age: 6, occupation: "Student" },
      ],
      incomeSources: [
        { source: "Teaching Salary", amount: "3,800", frequency: "Monthly", verified: "Verified" },
        { source: "Taxi Driving", amount: "4,200", frequency: "Monthly", verified: "Verified" },
      ],
      housing: {
        housingType: "Rented Villa",
        monthlyRent: "AED 7,200",
        location: "Al Warqa, Ajman",
        contractExpiry: "June 30, 2024",
      },
      aiAnalysis: {
        eligibility: [
          {
            criteria: "Income Threshold",
            status: "Eligible",
            score: 80,
            description: "Combined income qualifies for education support",
          },
          {
            criteria: "Number of Students",
            status: "Eligible",
            score: 100,
            description: "4 school-age children qualify for maximum support",
          },
          {
            criteria: "Academic Performance",
            status: "Eligible",
            score: 95,
            description: "Children maintain good academic standing",
          },
          {
            criteria: "School Fees Burden",
            status: "Eligible",
            score: 90,
            description: "Education costs exceed 25% of family income",
          },
        ],
        riskFactors: [
          { factor: "Document Consistency", level: "Low" },
          { factor: "Identity Verification", level: "Low" },
          { factor: "Income Verification", level: "Low" },
          { factor: "Academic Records", level: "Low" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 97, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Family Book", status: "Verified", confidence: 98, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Family+Book+Preview" },
        { title: "School Enrollment Certificates", status: "Verified", confidence: 96, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=School+Enrollment+Preview" },
        { title: "Academic Transcripts", status: "Verified", confidence: 94, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Academic+Transcripts+Preview" },
        { title: "Salary Certificates", status: "Verified", confidence: 93, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Salary+Certificates+Preview" },
        { title: "School Fee Invoices", status: "Verified", confidence: 95, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=School+Fee+Invoices+Preview" },
      ],
      timeline: [
        {
          date: "May 25, 2023",
          time: "09:00 AM",
          title: "Application Submitted",
          description: "Education support application for 4 children",
          current: false,
        },
        {
          date: "May 25, 2023",
          time: "09:15 AM",
          title: "Document Verification",
          description: "All academic and financial documents verified",
          current: false,
        },
        {
          date: "May 25, 2023",
          time: "09:30 AM",
          title: "AI Assessment Complete",
          description: "High confidence approval recommendation",
          current: false,
        },
        {
          date: "May 26, 2023",
          time: "10:00 AM",
          title: "Approved",
          description: "Application approved for AED 18,000 annual support",
          current: true,
        },
      ],
      previousApplications: [
        {
          type: "Education Support",
          status: "Approved",
          date: "September 1, 2022",
          id: "UAE-2022-56789",
          description: "Previous year education support - AED 16,000",
        },
      ],
      aiRecommendation: {
        type: "approve",
        recommendation: "Approve",
        confidence: 92,
        keyFactors: [
          { type: "positive", text: "Family income qualifies for education support" },
          { type: "positive", text: "4 school-age children with good academic performance" },
          { type: "positive", text: "Education costs represent significant burden" },
          { type: "positive", text: "Consistent previous support recipient" },
        ],
        riskFlags: [],
      },
    },
    "UAE-2023-78949": {
      name: "Khalid Saeed Al-Shamsi",
      arabicName: "خالد سعيد الشامسي",
      emiratesId: "784-1975-6543210-9",
      contact: "+971 50 999 8888",
      familySize: 2,
      type: "Financial Aid",
      familyMembers: [
        { name: "Khalid Al-Shamsi", relation: "Self", age: 48, occupation: "Retired" },
        { name: "Amina Al-Shamsi", relation: "Spouse", age: 45, occupation: "Homemaker" },
      ],
      incomeSources: [
        { source: "Pension", amount: "3,000", frequency: "Monthly", verified: "Verified" },
      ],
      housing: {
        housingType: "Own Apartment",
        monthlyRent: "N/A",
        location: "Al Barsha, Dubai",
        contractExpiry: "N/A",
      },
      aiAnalysis: {
        eligibility: [
          { criteria: "Income Threshold", status: "Eligible", score: 90, description: "Income below financial aid threshold" },
          { criteria: "Age and Retirement", status: "Eligible", score: 100, description: "Applicant is retired and elderly" },
          { criteria: "Residency Requirements", status: "Eligible", score: 100, description: "UAE citizen with valid documentation" },
        ],
        riskFactors: [
          { factor: "Document Consistency", level: "Low" },
          { factor: "Identity Verification", level: "Low" },
          { factor: "Income Verification", level: "Low" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 99, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Pension Statement", status: "Verified", confidence: 98, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Pension+Statement+Preview" },
        { title: "Property Deeds", status: "Verified", confidence: 97, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Property+Deeds+Preview" },
      ],
      timeline: [
        { date: "May 24, 2023", time: "02:00 PM", title: "Application Submitted", description: "Financial aid application submitted", current: false },
        { date: "May 24, 2023", time: "02:30 PM", title: "AI Processing", description: "Automated checks completed", current: false },
        { date: "May 25, 2023", time: "09:00 AM", title: "Pending Approval", description: "Awaiting final human approval", current: true }, // Added missing 'current'
      ],
      aiRecommendation: {
        type: "approve",
        recommendation: "Approve with High Confidence",
        confidence: 85,
        keyFactors: [
          { type: "positive", text: "Low fixed income after retirement" },
          { type: "positive", text: "No significant assets beyond primary residence" },
          { type: "positive", text: "All documents verified and consistent" },
        ],
        riskFlags: [],
      },
    },
    "UAE-2023-78950": {
      name: "Maryam Yousuf Al-Zaabi",
      arabicName: "مريم يوسف الزعابي",
      emiratesId: "784-1992-1122334-4",
      contact: "+971 56 111 2222",
      familySize: 1,
      type: "Housing Support",
      familyMembers: [
        { name: "Maryam Al-Zaabi", relation: "Self", age: 31, occupation: "Startup Founder (Loss-making)" },
      ],
      incomeSources: [
        { source: "Startup Income", amount: "500", frequency: "Monthly", verified: "Needs Review" },
        { source: "Savings", amount: "15,000", frequency: "One-time", verified: "Verified" },
      ],
      housing: {
        housingType: "Rented Studio",
        monthlyRent: "AED 3,000",
        location: "Business Bay, Dubai",
        contractExpiry: "April 30, 2024",
      },
      aiAnalysis: {
        eligibility: [
          { criteria: "Income Threshold", status: "Eligible", score: 60, description: "Low current income" },
          { criteria: "Housing Need", status: "Eligible", score: 70, description: "High rent burden" },
          { criteria: "Financial Stability", status: "Review Needed", score: 40, description: "Startup income is volatile" },
        ],
        riskFactors: [
          { factor: "Income Verification", level: "High" },
          { factor: "Financial Stability", level: "High" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 99, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Trade License", status: "Verified", confidence: 90, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Trade+License+Preview" },
        { title: "Bank Statements (Personal)", status: "Verified", confidence: 85, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Bank+Statements+Personal+Preview" },
        { title: "Bank Statements (Business)", status: "Needs Review", confidence: 60, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Bank+Statements+Business+Preview" },
      ],
      timeline: [
        { date: "May 24, 2023", time: "10:00 AM", title: "Application Submitted", description: "Housing support application", current: false }, // Added missing 'current'
        { date: "May 24, 2023", time: "10:30 AM", title: "Documents Uploaded", description: "Business and personal documents", current: false }, // Added missing 'current'
        { date: "May 24, 2023", time: "11:00 AM", title: "AI Flagged", description: "Flagged due to business income volatility", current: true }, // Added missing 'current'
      ],
      previousApplications: [],
      aiRecommendation: {
        type: "review",
        recommendation: "Flagged for Review",
        confidence: 79,
        keyFactors: [
          { type: "positive", text: "Demonstrates housing need" },
          { type: "concern", text: "Unstable startup income" },
          { type: "concern", text: "Requires business financial review" },
        ],
        riskFlags: [
          { title: "Income Verification", description: "Startup income proof is insufficient for consistent support" },
          { title: "Financial Stability", description: "Business financial health is critical for long-term support" },
        ],
      },
    },
    "UAE-2023-78951": {
      name: "Saeed Rashid Al-Nuaimi",
      arabicName: "سعيد راشد النعيمي",
      emiratesId: "784-1960-5432109-8",
      contact: "+971 50 333 4444",
      familySize: 1,
      type: "Healthcare Assistance",
      familyMembers: [
        { name: "Saeed Al-Nuaimi", relation: "Self", age: 63, occupation: "Retired" },
      ],
      incomeSources: [
        { source: "Pension", amount: "5,000", frequency: "Monthly", verified: "Verified" },
      ],
      housing: {
        housingType: "Own Apartment",
        monthlyRent: "N/A",
        location: "Al Ain, Abu Dhabi",
        contractExpiry: "N/A",
      },
      aiAnalysis: {
        eligibility: [
          { criteria: "Income Threshold", status: "Eligible", score: 80, description: "Income below healthcare assistance threshold" },
          { criteria: "Medical Condition", status: "Eligible", score: 95, description: "Chronic medical condition requires ongoing care" },
          { criteria: "Residency Requirements", status: "Eligible", score: 100, description: "UAE citizen with valid documentation" },
        ],
        riskFactors: [
          { factor: "Document Consistency", level: "Low" },
          { factor: "Identity Verification", level: "Low" },
          { factor: "Medical Records Verification", level: "Low" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 99, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Pension Statement", status: "Verified", confidence: 98, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Pension+Statement+Preview" },
        { title: "Medical Reports", status: "Verified", confidence: 97, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Medical+Reports+Preview" },
      ],
      timeline: [
        { date: "May 23, 2023", time: "01:00 PM", title: "Application Submitted", description: "Healthcare assistance application", current: false }, // Added missing 'current'
        { date: "May 23, 2023", time: "01:15 PM", title: "Medical Records Verified", description: "Automated verification of medical documents", current: false }, // Added missing 'current'
        { date: "May 23, 2023", time: "01:30 PM", title: "AI Auto-Approved", description: "System auto-approved due to clear eligibility", current: true }, // Added missing 'current'
      ],
      previousApplications: [],
      aiRecommendation: {
        type: "approve",
        recommendation: "Auto-Approved",
        confidence: 96,
        keyFactors: [
          { type: "positive", text: "Clear medical necessity" },
          { type: "positive", text: "Income within thresholds" },
          { type: "positive", text: "All required documents provided and verified" },
        ],
        riskFlags: [],
      },
    },
    "UAE-2023-78952": {
      name: "Noura Ahmed Al-Mazrouei",
      arabicName: "نورة أحمد المزروعي",
      emiratesId: "784-1995-9876543-1",
      contact: "+971 50 666 7777",
      familySize: 3,
      type: "Education Support",
      familyMembers: [
        { name: "Noura Al-Mazrouei", relation: "Self", age: 28, occupation: "Single Mother, Seeking Employment" },
        { name: "Abdullah Al-Mazrouei", relation: "Son", age: 5, occupation: "Student" },
        { name: "Fatima Al-Mazrouei", relation: "Daughter", age: 3, occupation: "N/A" },
      ],
      incomeSources: [
        { source: "Child Support", amount: "2,500", frequency: "Monthly", verified: "Verified" },
      ],
      housing: {
        housingType: "Shared Apartment",
        monthlyRent: "AED 3,500",
        location: "Al Ain, Abu Dhabi",
        contractExpiry: "July 31, 2024",
      },
      aiAnalysis: {
        eligibility: [
          { criteria: "Income Threshold", status: "Eligible", score: 85, description: "Income below education support threshold" },
          { criteria: "Number of Dependents", status: "Eligible", score: 90, description: "One school-age child with another approaching school age" },
          { criteria: "Single Parent Status", status: "Eligible", score: 95, description: "Single mother requiring support" },
        ],
        riskFactors: [
          { factor: "Employment Status", level: "Medium" },
        ],
      },
      documents: [
        { title: "Emirates ID", status: "Verified", confidence: 99, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Emirates+ID+Preview" },
        { title: "Child Support Agreement", status: "Verified", confidence: 95, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Child+Support+Agreement+Preview" },
        { title: "School Enrollment", status: "Verified", confidence: 90, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=School+Enrollment+Preview" },
        { title: "Job Search Documentation", status: "Needs Review", confidence: 70, previewUrl: "https://placehold.co/320x200/F0F4F8/8D99AE?text=Job+Search+Documentation+Preview" },
      ],
      timeline: [
        { date: "May 23, 2023", time: "09:00 AM", title: "Application Submitted", description: "Education support for son", current: false }, // Added missing 'current'
        { date: "May 23, 2023", time: "09:30 AM", title: "Documents Uploaded", description: "All required documents uploaded", current: false }, // Added missing 'current'
        { date: "May 23, 2023", time: "10:00 AM", title: "AI Assessment Complete", description: "AI identified employment status as a factor", current: false }, // Added missing 'current'
        { date: "May 23, 2023", time: "10:15 AM", title: "Pending Review", description: "Assigned for social worker review regarding employment support", current: true }, // Added missing 'current'
      ],
      aiRecommendation: {
        type: "review",
        recommendation: "Review for Employment Support",
        confidence: 88,
        keyFactors: [
          { type: "positive", text: "Meets income criteria for education support" },
          { type: "positive", text: "Single mother with dependent child" },
          { type: "concern", text: "Unemployed status requires further assessment for comprehensive support" },
        ],
        riskFlags: [
          { title: "Employment Stability", description: "Applicant's current employment status requires review for additional support programs" },
        ],
      },
    },
  };

  return applicationDetails[applicationId] || applicationDetails["UAE-2023-78948"];
}

// Full list of applications for the sidebar
const applications = [
  {
    id: "UAE-2023-78945",
    name: "Ahmed Mohammed Al-Zahrani",
    arabicName: "أحمد محمد الزعابي",
    type: "Housing Support",
    status: "Pending - Urgent",
    aiConfidence: 87,
    timestamp: "May 26, 2023",
  },
  {
    id: "UAE-2023-78946",
    name: "Fatima Ali Al-Saadi",
    arabicName: "فاطمة علي السعدي",
    type: "Financial Aid",
    status: "Pending",
    aiConfidence: 95,
    timestamp: "May 26, 2023",
  },
  {
    id: "UAE-2023-78947",
    name: "Mohammed Abdullah Al-Mansoori",
    arabicName: "محمد عبدالله المنصوري",
    type: "Healthcare Assistance",
    status: "Flagged",
    aiConfidence: 76,
    timestamp: "May 25, 2023",
  },
  {
    id: "UAE-2023-78948",
    name: "Aisha Khalid Al-Hashimi",
    arabicName: "عائشة خالد الهاشمي",
    type: "Education Support",
    status: "Pending - Urgent",
    aiConfidence: 92,
    timestamp: "May 25, 2023",
  },
  {
    id: "UAE-2023-78949",
    name: "Khalid Saeed Al-Shamsi",
    arabicName: "خالد سعيد الشامسي",
    type: "Financial Aid",
    status: "Pending",
    aiConfidence: 85,
    timestamp: "May 24, 2023",
  },
  {
    id: "UAE-2023-78950",
    name: "Maryam Yousuf Al-Zaabi",
    arabicName: "مريم يوسف الزعابي",
    type: "Housing Support",
    status: "Flagged",
    aiConfidence: 79,
    timestamp: "May 24, 2023",
  },
  {
    id: "UAE-2023-78951",
    name: "Saeed Rashid Al-Nuaimi",
    arabicName: "سعيد راشد النعيمي",
    type: "Healthcare Assistance",
    status: "Pending",
    aiConfidence: 96,
    timestamp: "May 23, 2023",
  },
  {
    id: "UAE-2023-78952",
    name: "Noura Ahmed Al-Mazrouei",
    arabicName: "نورة أحمد المزروعي",
    type: "Education Support",
    status: "Pending",
    aiConfidence: 88,
    timestamp: "May 23, 2023",
  },
];


// --- Helper Components (re-styled to match application-details.tsx aesthetics) ---
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

function StatusBadge({ status }: { status: string }) {
  let bgColor = "bg-gray-100 text-gray-800";

  if (status === "Pending") {
    bgColor = "bg-amber-100 text-amber-800";
  } else if (status === "Approved" || status === "Auto-Approved" || status === "Verified") { // Combined approved statuses
    bgColor = "bg-green-100 text-green-800";
  } else if (status === "Needs Review" || status ==="Pending - Urgent") { // Combined flagged statuses
    bgColor = "bg-red-100 text-red-800";
  } else if (status === "Escalated" || status === "Flagged") {
    bgColor = "bg-purple-100 text-purple-800";
  }

  return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>;
}

function PersonCard({
  name,
  relation,
  age,
  occupation,
  // Added emiratesId back from earlier version if needed, or remove if not in data
  emiratesId,
}: {
  name: string;
  relation: string;
  age: number;
  occupation: string;
  emiratesId?: string; // Made optional as it's not in FamilyMember interface above
}) {
  return (
    <div className="border rounded-md p-3">
      <div className="font-medium text-gray-900">{name}</div>
      <div className="text-sm text-muted-foreground">{relation}</div>
      <div className="mt-2 text-sm text-gray-800">
        <div>Age: {age}</div>
        <div>Occupation: {occupation}</div>
        {emiratesId && <div className="text-xs text-muted-foreground mt-1">ID: {emiratesId}</div>}
      </div>
    </div>
  );
}

function DocumentCard({
  title,
  status,
  confidence,
  previewUrl, // Added previewUrl
}: {
  title: string;
  status: string;
  confidence: number;
  previewUrl?: string; // Made optional as some data might not have it
}) {
  return (
    <div className="border rounded-md overflow-hidden">
      {previewUrl && (
        <div className="aspect-video bg-slate-100 relative">
          <Image src={previewUrl} alt={title} fill className="object-cover" />
        </div>
      )}
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
          {/* Optional: Add a verify button if relevant to workflow */}
          {/* <Button variant="ghost" size="sm">Verify</Button> */}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  date,
  time, // Added time
  title,
  description,
  current,
}: {
  date: string;
  time?: string;
  title: string;
  description: string;
  current?: boolean;
}) {
  let statusColor = "bg-gray-200";
  if (current) statusColor = "bg-blue-600"; // Current status is blue

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`h-4 w-4 rounded-full ${statusColor}`}></div>
        {/* Only show line if not the last item (current) and not explicitly "upcoming" which won't have a line */}
        {current ? null : <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
      </div>
      <div className="pb-6">
        <div className="text-xs text-muted-foreground">
          {date} {time && `• ${time}`}
        </div>
        <div className="font-medium text-gray-900">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}


export function ApplicationReview() {
  const router = useRouter();
  // Initialize selectedApplication to the first application's ID or null
  const [selectedApplication, setSelectedApplication] = useState<string | null>(applications[0]?.id || null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Get data for the currently selected application
  const currentApplicationData = selectedApplication ? getApplicationData(selectedApplication) : null;

  return (
    <DashboardShell>
      {/* Consolidated Dashboard Header (from application-details.tsx styling) */}
      <DashboardHeader heading="Application Details">
        <div className="flex items-center gap-2">
          {currentApplicationData && (
            <div className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
              {/* Display status of the currently selected application */}
              {applications.find(app => app.id === selectedApplication)?.status || "N/A"}
            </div>
          )}
          <Button variant="outline" size="icon" onClick={() => router.back()}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button variant="outline" size="sm">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </DashboardHeader>

      {/* Main Content Area with Collapsible Left Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Application List */}
        <Collapsible
          open={!sidebarCollapsed} // Control open state based on sidebarCollapsed
          onOpenChange={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`border-r bg-gray-50 transition-all duration-300 flex flex-col h-full overflow-hidden
            ${sidebarCollapsed ? "w-16" : "w-full md:w-80 lg:w-96"}`}
        >
          <div className="p-4 border-b w-full flex items-center justify-end"> {/* Align toggle to right */}
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
              >
                {sidebarCollapsed ? <Menu className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
              </Button>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="flex flex-col flex-1 w-full overflow-hidden data-[state=closed]:animate-none">
            {/* Only show these if NOT collapsed */}
            {!sidebarCollapsed && (
              <>
                <div className="p-4 border-b w-full">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-sm font-medium">Applications</h2>
                  </div>
                  <div className="relative mb-4">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search applications..." className="pl-8" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-medium">Filters</h2>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                          <SlidersHorizontal className="h-3.5 w-3.5" />
                          <span>Filter</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-72">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Status</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {["Pending", "Flagged", "Approved", "Rejected"].map((status) => (
                                <div key={status} className="flex items-center space-x-2">
                                  <Checkbox id={`status-${status}`} />
                                  <Label htmlFor={`status-${status}`}>{status}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h4 className="font-medium">Application Type</h4>
                            <div className="grid gap-2">
                              {["Financial Aid", "Housing Support", "Healthcare", "Education"].map((type) => (
                                <div key={type} className="flex items-center space-x-2">
                                  <Checkbox id={`type-${type}`} />
                                  <Label htmlFor={`type-${type}`}>{type}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h4 className="font-medium">Priority Level</h4>
                            <div className="grid grid-cols-3 gap-2">
                              {["High", "Medium", "Low"].map((priority) => (
                                <div key={priority} className="flex items-center space-x-2">
                                  <Checkbox id={`priority-${priority}`} />
                                  <Label htmlFor={`priority-${priority}`}>{priority}</Label>
                                </div>
                              ))}
                            </div>
                          </div>
                          <Separator />
                          <div className="space-y-2">
                            <h4 className="font-medium">Date Range</h4>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <Calendar className="mr-2 h-4 w-4" />
                                  <span>From</span>
                                </Button>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Button variant="outline" size="sm" className="w-full justify-start">
                                  <Calendar className="mr-2 h-4 w-4" />
                                  <span>To</span>
                                </Button>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full">Apply Filters</Button>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    <Select defaultValue="all">
                      <SelectTrigger className="h-8">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Statuses</SelectItem>
                        <SelectItem value="pending">Pending</SelectItem>
                        <SelectItem value="flagged">Flagged</SelectItem>
                        <SelectItem value="approved">Approved</SelectItem>
                        <SelectItem value="rejected">Rejected</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                      <SelectTrigger className="h-8">
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Types</SelectItem>
                        <SelectItem value="financial">Financial Aid</SelectItem>
                        <SelectItem value="housing">Housing Support</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex-1 overflow-auto">
                  {applications.map((application) => (
                    <div
                      key={application.id}
                      className={`border-b p-4 cursor-pointer hover:bg-slate-100 transition-colors duration-150
                        ${selectedApplication === application.id ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
                      onClick={() => setSelectedApplication(application.id)}
                    >
                      {/* Full details when not collapsed */}
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium text-gray-900">{application.name}</div>
                          <div className="text-xs text-muted-foreground">{application.arabicName}</div>
                        </div>
                        <StatusBadge status={application.status} />
                      </div>
                      <div className="mt-2 flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                          ID: {application.id} • {application.type}
                        </div>
                        <div className="text-xs font-medium">AI: {application.aiConfidence}%</div>
                      </div>
                      <div className="mt-1 text-xs text-muted-foreground">Submitted: {application.timestamp}</div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </CollapsibleContent>
        </Collapsible>

        {/* Main Content Area - Application Details */}
        {currentApplicationData ? (
          <div className="flex-1 overflow-auto p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left Column: Applicant Information */}
              <div className="w-full lg:w-2/3 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                      <div className="flex-shrink-0 relative">
                        {currentApplicationData.name === "Aisha Khalid Al-Hashimi" ? (
                          <Image
                            src="/aisha.png?height=170&width=170" // Specific image for Aisha
                            width={120}
                            height={120}
                            alt="Applicant Photo"
                            className="rounded-full border-2 border-gray-200 object-cover w-32 h-32"
                          />
                        ) : (
                          <Image
                            src="https://placehold.co/120x120/E0E0E0/8D8D8D?text=Applicant" // Generic placeholder for others
                            width={120}
                            height={120}
                            alt="Applicant Photo"
                            className="rounded-full border-2 border-gray-200 object-cover w-32 h-32"
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-0.5">{currentApplicationData.name}</h2>
                        <h3 className="text-lg text-gray-600 font-medium mb-4">{currentApplicationData.arabicName}</h3>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="inline-block h-2 w-2 rounded-full bg-amber-500 mr-2"></span>
                          <span className="font-medium">Application Status: {applications.find(app => app.id === selectedApplication)?.status || "N/A"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Section for application overview, separated visually */}
                    <div className="mt-6 border-t border-gray-200 pt-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Application Overview</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
                        <div className="pb-2 border-b border-gray-100">
                          <div className="text-sm text-gray-500">Application ID</div>
                          <div className="font-semibold text-gray-900">{selectedApplication}</div>
                        </div>
                        <div className="pb-2 border-b border-gray-100">
                          <div className="text-sm text-gray-500">Emirates ID</div>
                          <div className="font-semibold text-gray-900">{currentApplicationData.emiratesId}</div>
                        </div>
                        <div className="pb-2 border-b border-gray-100">
                          <div className="text-sm text-gray-500">Application Type</div>
                          <div className="font-semibold text-gray-900">{currentApplicationData.type}</div>
                        </div>
                        <div className="pb-2 border-b border-gray-100">
                          <div className="text-sm text-gray-500">Submission Date</div>
                          <div className="font-semibold text-gray-900">{applications.find(app => app.id === selectedApplication)?.timestamp || "N/A"}</div>
                        </div>
                        <div className="pb-2 border-b border-gray-100">
                          <div className="text-sm text-gray-500">Contact Phone</div>
                          <div className="font-semibold text-gray-900">{currentApplicationData.contact}</div>
                        </div>
                        {/* AI Confidence section integrated here */}
                        <div className="col-span-full mt-2">
                          <div className="text-sm text-gray-500 mb-2">AI Confidence</div>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-base font-semibold text-gray-800">Overall Confidence</span>
                              <span className="text-base font-bold text-gray-900">{currentApplicationData.aiRecommendation.confidence}%</span>
                            </div>
                            <Progress value={currentApplicationData.aiRecommendation.confidence} className="h-2 bg-gray-200 [&>div]:bg-blue-500" />
                            <div className="text-xs text-gray-600">
                              {currentApplicationData.aiRecommendation.recommendation} confidence.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Decision Panel */}
              <div className="w-full lg:w-1/3 space-y-6">
                <Card>
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
            </div>

            {/* Tabs Section - Now spanning full width */}
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
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Use grid or flex if needed, but spans overall */}
                  <Card className="lg:col-span-1 shadow-sm rounded-lg"> {/* Now fits in one column, or spans */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">AI Recommendation</h3>
                      <div className="p-4 border border-gray-200 rounded-md bg-blue-50/50 mb-6 text-gray-800 leading-relaxed">
                        <p className="mb-3">
                          {currentApplicationData.aiRecommendation.recommendation}
                        </p>
                        {currentApplicationData.aiRecommendation.keyFactors.length > 0 && (
                          <p className="font-semibold text-gray-700 mb-2">Key Factors:</p>
                        )}
                        <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                          {currentApplicationData.aiRecommendation.keyFactors.map((factor, index) => (
                            <li key={index} className={factor.type === "concern" ? "text-red-700" : ""}>
                              {factor.text}
                            </li>
                          ))}
                        </ul>
                        {currentApplicationData.aiRecommendation.riskFlags.length > 0 && (
                          <p className="font-semibold text-red-700 mt-3 mb-2">Risk Flags:</p>
                        )}
                        <ul className="list-disc list-inside text-sm space-y-1 pl-4">
                          {currentApplicationData.aiRecommendation.riskFlags.map((flag, index) => (
                            <li key={index}>
                              <span className="font-medium">{flag.title}:</span> {flag.description}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border border-gray-200 rounded-md p-6 space-y-6">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Eligibility Assessment</h3>
                        <div className="space-y-6">
                          {currentApplicationData.aiAnalysis.eligibility.map((item, index) => (
                            <div key={index} className="flex items-start space-x-3">
                              {item.status === "Eligible" ? (
                                <CheckCircleIcon size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
                              ) : (
                                <ExclamationTriangleIcon size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                              )}
                              <div className="flex-grow">
                                <span className="font-semibold text-gray-900">{item.criteria}</span>
                                <div className="text-sm text-gray-600">
                                  {item.description}
                                </div>
                              </div>
                              <span className={`ml-auto font-medium ${item.status === "Eligible" ? "text-green-700" : "text-red-700"} text-right`}>
                                {item.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-sm rounded-lg lg:col-span-1"> {/* Now fits in one column, or spans */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">Risk Assessment</h3>
                      <div className="space-y-4">
                        <div className="border border-gray-200 rounded-md p-3 bg-yellow-50/50">
                          <div className="flex items-center justify-between">
                            <div className="font-semibold text-gray-900">Overall Risk</div>
                            <div className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
                              {currentApplicationData.aiAnalysis.riskFactors.some(rf => rf.level === "High") ? "High" : currentApplicationData.aiAnalysis.riskFactors.some(rf => rf.level === "Medium") ? "Medium" : "Low"}
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          {currentApplicationData.aiAnalysis.riskFactors.map((risk, index) => (
                            <div key={index} className={`border rounded-md p-3 ${risk.level === "Medium" ? "bg-yellow-50/50" : ""}`}>
                              <div className="text-sm font-semibold text-gray-800">{risk.factor}</div>
                              <div className="mt-1 flex items-center">
                                <div className={`h-2 w-2 rounded-full mr-2 ${risk.level === "Low" ? "bg-green-500" : risk.level === "Medium" ? "bg-yellow-500" : "bg-red-500"}`}></div>
                                <span className="text-sm text-gray-700">{risk.level} Risk</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="personal" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Adjusted to 2 columns for a better span */}
                  <Card className="lg:col-span-1 shadow-sm rounded-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">Family Members</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Adjusted grid layout */}
                        {currentApplicationData.familyMembers.map((member, index) => (
                          <PersonCard
                            key={index}
                            name={member.name}
                            relation={member.relation}
                            age={member.age}
                            occupation={member.occupation}
                          // Assuming emiratesId isn't consistently available for all family members
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="lg:col-span-1 shadow-sm rounded-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">Income Sources</h3>
                      <div className="space-y-4">
                        {currentApplicationData.incomeSources.map((source, index) => (
                          <div key={index} className="flex justify-between items-center pb-2 border-b border-gray-100">
                            <div>
                              <div className="font-medium text-gray-800">{source.source}</div>
                              <div className="text-sm text-muted-foreground">{source.frequency}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-medium text-gray-800">AED {source.amount}</div>
                              <div className={`text-xs ${source.verified === "Verified" ? "text-green-700" : "text-yellow-700"}`}>
                                {source.verified}
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="pt-2">
                          <div className="flex justify-between items-center">
                            <div className="font-bold text-gray-900">Total Monthly Income</div>
                            <div className="font-bold text-gray-900">
                              AED {currentApplicationData.incomeSources.reduce((sum, s) => sum + parseFloat(s.amount.replace(/,/g, '')), 0)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="lg:col-span-2 shadow-sm rounded-lg"> {/* Now spans both columns in personal info */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">Housing Situation</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-sm text-gray-800">Housing Type</span>
                          <span className="font-medium text-gray-900">{currentApplicationData.housing.housingType}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-sm text-gray-800">Monthly Rent</span>
                          <span className="font-medium text-gray-900">{currentApplicationData.housing.monthlyRent}</span>
                        </div>
                        <div className="flex justify-between pb-2 border-b border-gray-100">
                          <span className="text-sm text-gray-800">Location</span>
                          <span className="font-medium text-gray-900">{currentApplicationData.housing.location}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-800">Contract Expiry</span>
                          <span className="font-medium text-gray-900">{currentApplicationData.housing.contractExpiry}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentApplicationData.documents.map((doc, index) => (
                    <DocumentCard
                      key={index}
                      title={doc.title}
                      status={doc.status}
                      confidence={doc.confidence}
                      previewUrl={doc.previewUrl}
                    />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Adjusted to 2 columns for history */}
                  <Card className="lg:col-span-1 shadow-sm rounded-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">Application Timeline</h3>
                      <div className="space-y-6">
                        {currentApplicationData.timeline.map((event, index) => (
                          <TimelineItem
                            key={index}
                            date={event.date}
                            time={event.time}
                            title={event.title}
                            description={event.description}
                            current={event.current}
                          />
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {currentApplicationData.previousApplications.length > 0 && (
                    <Card className="lg:col-span-1 shadow-sm rounded-lg">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Previous Applications</h3>
                        <div className="space-y-4">
                          {currentApplicationData.previousApplications.map((app, index) => (
                            <div key={index} className="border rounded-md p-3">
                              <div className="flex justify-between">
                                <div className="font-medium text-gray-800">{app.type}</div>
                                <StatusBadge status={app.status} />
                              </div>
                              <div className="text-sm text-muted-foreground mt-1">
                                {app.date} • ID: {app.id}
                              </div>
                              <div className="text-sm mt-2 text-gray-800">{app.description}</div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </TabsContent>

              {/* Communication Tab Content */}
              <TabsContent value="communication" className="mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"> {/* Adjusted to 2 columns */}
                  <Card className="lg:col-span-1 shadow-sm rounded-lg">
                    <CardContent className="p-6 h-[500px] flex flex-col">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">Chat with {currentApplicationData.name}</h3>
                      <div className="flex-1 overflow-y-auto space-y-4 p-4 border rounded-md bg-gray-50 mb-4">
                        {/* Dummy Chat Messages */}
                        <div className="flex justify-start">
                          <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-[70%]">
                            <p className="font-medium">Applicant:</p>
                            <p className="text-sm">Hi, I wanted to follow up on my application. Is there any update?</p>
                            <p className="text-xs text-gray-500 text-right mt-1">May 27, 2023, 09:00 AM</p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-green-100 text-green-800 p-3 rounded-lg max-w-[70%]">
                            <p className="font-medium">Social Worker:</p>
                            <p className="text-sm">Hello {currentApplicationData.name.split(' ')[0]}, your application is currently under review. We might need some additional documentation regarding your housing verification.</p>
                            <p className="text-xs text-gray-500 text-right mt-1">May 27, 2023, 09:10 AM</p>
                          </div>
                        </div>
                        <div className="flex justify-start">
                          <div className="bg-blue-100 text-blue-800 p-3 rounded-lg max-w-[70%]">
                            <p className="font-medium">Applicant:</p>
                            <p className="text-sm">Okay, what exactly do you need for housing verification?</p>
                            <p className="text-xs text-gray-500 text-right mt-1">May 27, 2023, 09:12 AM</p>
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

                  <Card className="shadow-sm rounded-lg lg:col-span-1">
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

                  <Card className="shadow-sm rounded-lg lg:col-span-2"> {/* This card spans both columns */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-gray-800">Contact Information</h3>
                      <div className="space-y-2 text-base">
                        <p><span className="font-semibold text-gray-900">Phone:</span> {currentApplicationData.contact}</p>
                        <p><span className="font-semibold text-gray-900">Email:</span> {currentApplicationData.name.toLowerCase().replace(/\s/g, '.')}@example.com</p> {/* Dummy email */}
                        <p><span className="font-semibold text-gray-900">Preferred Method:</span> Phone</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

            </Tabs>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center text-muted-foreground">
            Select an application from the sidebar to view details.
          </div>
        )}
      </div>
    </DashboardShell>
  );
}
