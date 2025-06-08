"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Calendar, Search, SlidersHorizontal, Menu } from "lucide-react";

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
import { ReactNode } from "react"; // Import ReactNode for typing

// Type definitions
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
}

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  current: boolean;
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
  type: "approve" | "review";
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

// Application data with index signature
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
        { title: "Emirates ID", status: "Verified", confidence: 98 },
        { title: "Family Book", status: "Verified", confidence: 96 },
        { title: "Salary Certificate", status: "Needs Review", confidence: 78 },
        { title: "Rental Agreement", status: "Verified", confidence: 94 },
        { title: "Bank Statements", status: "Verified", confidence: 91 },
        { title: "Utility Bills", status: "Verified", confidence: 89 },
      ],
      timeline: [
        {
          date: "May 26, 2023",
          title: "Application Submitted",
          description: "Housing support application submitted online",
          current: false,
        },
        {
          date: "May 26, 2023",
          title: "Documents Uploaded",
          description: "All required documents uploaded",
          current: false,
        },
        {
          date: "May 27, 2023",
          title: "AI Processing",
          description: "Automated eligibility assessment completed",
          current: false,
        },
        {
          date: "May 27, 2023",
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
        { title: "Emirates ID", status: "Verified", confidence: 99 },
        { title: "Family Book", status: "Verified", confidence: 97 },
        { title: "Divorce Certificate", status: "Verified", confidence: 95 },
        { title: "Social Security Statement", status: "Verified", confidence: 98 },
        { title: "School Enrollment", status: "Verified", confidence: 93 },
        { title: "Medical Records", status: "Verified", confidence: 91 },
      ],
      timeline: [
        {
          date: "May 26, 2023",
          title: "Application Submitted",
          description: "Emergency financial aid application submitted",
          current: false,
        },
        {
          date: "May 26, 2023",
          title: "Fast-track Processing",
          description: "Application prioritized for urgent review",
          current: false,
        },
        {
          date: "May 26, 2023",
          title: "AI Assessment Complete",
          description: "High confidence approval recommendation",
          current: false,
        },
        {
          date: "May 26, 2023",
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
      contact: "+971 50 123 4567",
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
        { title: "Emirates ID", status: "Verified", confidence: 98 },
        { title: "Family Book", status: "Verified", confidence: 95 },
        { title: "Medical Records", status: "Verified", confidence: 92 },
        { title: "Income Statement", status: "Needs Review", confidence: 76 },
        { title: "Rental Agreement", status: "Verified", confidence: 94 },
        { title: "Previous Support Documents", status: "Needs Review", confidence: 82 },
      ],
      timeline: [
        {
          date: "May 25, 2023",
          title: "Application Submitted",
          description: "Healthcare assistance application submitted",
          current: false,
        },
        {
          date: "May 25, 2023",
          title: "Documents Uploaded",
          description: "All required documents uploaded",
          current: false,
        },
        {
          date: "May 26, 2023",
          title: "AI Assessment",
          description: "Application flagged for human review",
          current: false,
        },
        {
          date: "May 27, 2023",
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
        { title: "Emirates ID", status: "Verified", confidence: 97 },
        { title: "Family Book", status: "Verified", confidence: 98 },
        { title: "School Enrollment Certificates", status: "Verified", confidence: 96 },
        { title: "Academic Transcripts", status: "Verified", confidence: 94 },
        { title: "Salary Certificates", status: "Verified", confidence: 93 },
        { title: "School Fee Invoices", status: "Verified", confidence: 95 },
      ],
      timeline: [
        {
          date: "May 25, 2023",
          title: "Application Submitted",
          description: "Education support application for 4 children",
          current: false,
        },
        {
          date: "May 25, 2023",
          title: "Document Verification",
          description: "All academic and financial documents verified",
          current: false,
        },
        {
          date: "May 25, 2023",
          title: "AI Assessment Complete",
          description: "High confidence approval recommendation",
          current: false,
        },
        {
          date: "May 26, 2023",
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
  };
  
  return applicationDetails[applicationId] || applicationDetails["UAE-2023-78948"];
}

export function ApplicationReview() {
  const router = useRouter();
  const [selectedApplication, setSelectedApplication] = useState<string | null>("UAE-2023-78948");
  console.log(selectedApplication);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <DashboardShell>
      <DashboardHeader />
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Application List */}
        <div
          className={`border-r transition-all duration-300 ${sidebarCollapsed ? "w-16" : "w-full md:w-80 lg:w-96"}`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                  className="h-8 w-8"
                >
                  <Menu className="h-4 w-4" />
                </Button>
                {!sidebarCollapsed && <h2 className="text-sm font-medium">Applications</h2>}
              </div>

              {!sidebarCollapsed && (
                <>
                  <div className="relative mb-4">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search applications..." className="pl-8" />
                  </div>
                  <div className="flex items-center justify-between">
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
                </>
              )}
            </div>
            <div className="flex-1 overflow-auto">
              {applications.map((application) => (
                <div
                  key={application.id}
                  className={`border-b p-4 cursor-pointer hover:bg-slate-50 ${selectedApplication === application.id ? "bg-blue-50" : ""
                    }`}
                  onClick={() => setSelectedApplication(application.id)}
                >
                  {sidebarCollapsed ? (
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium">
                        {application.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .substring(0, 2)}
                      </div>
                      <StatusBadge status={application.status} />
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-medium">{application.name}</div>
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
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        {selectedApplication && (
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Applicant Information */}
                <div className="w-full lg:w-2/3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=120&width=120"
                            width={120}
                            height={120}
                            alt="Applicant Photo"
                            className="rounded-lg border"
                          />
                        </div>
                        <div className="flex-1">
                          <h2 className="text-2xl font-bold">{getApplicationData(selectedApplication).name}</h2>
                          <h3 className="text-lg text-muted-foreground mb-4">
                            {getApplicationData(selectedApplication).arabicName}
                          </h3>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <div className="text-sm text-muted-foreground">Emirates ID</div>
                              <div className="font-medium">{getApplicationData(selectedApplication).emiratesId}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Contact</div>
                              <div className="font-medium">{getApplicationData(selectedApplication).contact}</div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Family Size</div>
                              <div className="font-medium">
                                {getApplicationData(selectedApplication).familySize} members
                              </div>
                            </div>
                            <div>
                              <div className="text-sm text-muted-foreground">Application Type</div>
                              <div className="font-medium">{getApplicationData(selectedApplication).type}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Application Details Tabs */}
                  <Tabs defaultValue="personal" className="mt-6">
                    <TabsList className="grid grid-cols-4">
                      <TabsTrigger value="personal">Personal</TabsTrigger>
                      <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
                      <TabsTrigger value="documents">Documents</TabsTrigger>
                      <TabsTrigger value="history">History</TabsTrigger>
                    </TabsList>
                    <TabsContent value="personal" className="p-4 border rounded-md mt-2">
                      <h3 className="font-medium mb-4">Family Composition</h3>
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {getApplicationData(selectedApplication).familyMembers.map(
                            (member: FamilyMember, index: number) => (
                              <PersonCard
                                key={index}
                                name={member.name}
                                relation={member.relation}
                                age={member.age}
                                occupation={member.occupation}
                              />
                            )
                          )}
                        </div>
                      </div>

                      <h3 className="font-medium mt-6 mb-4">Income Sources</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Source
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Amount (AED)
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Frequency
                              </th>
                              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Verified
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {getApplicationData(selectedApplication).incomeSources.map(
                              (source: IncomeSource, index: number) => (
                                <tr key={index}>
                                  <td className="px-4 py-2 text-sm">{source.source}</td>
                                  <td className="px-4 py-2 text-sm">{source.amount}</td>
                                  <td className="px-4 py-2 text-sm">{source.frequency}</td>
                                  <td className="px-4 py-2 text-sm">
                                    <span
                                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${source.verified === "Verified"
                                          ? "bg-green-100 text-green-800"
                                          : "bg-amber-100 text-amber-800"
                                        }`}
                                    >
                                      {source.verified}
                                    </span>
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>

                      <h3 className="font-medium mt-6 mb-4">Housing Situation</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {Object.entries(getApplicationData(selectedApplication).housing).map(
                          ([key, value]: [string, string], index: number) => (
                            <div key={index}>
                              <div className="text-sm text-muted-foreground">
                                {key
                                  .replace(/([A-Z])/g, " $1")
                                  .replace(/^./, (str) => str.toUpperCase())}
                              </div>
                              <div className="font-medium">{value}</div>
                            </div>
                          )
                        )}
                      </div>
                    </TabsContent>

                    {/* Keep the existing AI Analysis, Documents, and History tabs but update with dynamic data */}
                    <TabsContent value="ai-analysis" className="p-4 border rounded-md mt-2">
                      <h3 className="font-medium mb-4">Eligibility Assessment</h3>
                      <div className="space-y-4">
                        {getApplicationData(selectedApplication).aiAnalysis.eligibility.map(
                          (item: Eligibility, index: number) => (
                            <div key={index} className="space-y-2">
                              <div className="flex justify-between">
                                <span className="text-sm">{item.criteria}</span>
                                <span
                                  className={`text-sm font-medium ${item.status === "Eligible" ? "text-green-600" : "text-amber-600"
                                    }`}
                                >
                                  {item.status}
                                </span>
                              </div>
                              <Progress value={item.score} className="h-2" />
                              <div className="text-xs text-muted-foreground">{item.description}</div>
                            </div>
                          )
                        )}
                      </div>

                      <h3 className="font-medium mt-6 mb-4">Risk Assessment</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {getApplicationData(selectedApplication).aiAnalysis.riskFactors.map(
                          (risk: RiskFactor, index: number) => (
                            <div key={index} className="border rounded-md p-3">
                              <div className="text-sm font-medium">{risk.factor}</div>
                              <div className="mt-1 flex items-center">
                                <div
                                  className={`h-2 w-2 rounded-full mr-2 ${risk.level === "Low"
                                      ? "bg-green-500"
                                      : risk.level === "Medium"
                                        ? "bg-amber-500"
                                        : "bg-red-500"
                                    }`}
                                ></div>
                                <span className="text-sm">{risk.level} Risk</span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </TabsContent>

                    <TabsContent value="documents" className="p-4 border rounded-md mt-2">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {getApplicationData(selectedApplication).documents.map((doc: Document, index: number) => (
                          <DocumentCard key={index} title={doc.title} status={doc.status} confidence={doc.confidence} />
                        ))}
                      </div>
                    </TabsContent>

                    <TabsContent value="history" className="p-4 border rounded-md mt-2">
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-medium mb-3">Application Timeline</h3>
                          <div className="space-y-4">
                            {getApplicationData(selectedApplication).timeline.map(
                              (event: TimelineEvent, index: number) => (
                                <TimelineItem
                                  key={index}
                                  date={event.date}
                                  title={event.title}
                                  description={event.description}
                                  current={event.current}
                                />
                              )
                            )}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-medium mb-3">Previous Applications</h3>
                          <div className="space-y-3">
                            {getApplicationData(selectedApplication).previousApplications.map(
                              (app: PreviousApplication, index: number) => (
                                <div key={index} className="border rounded-md p-3">
                                  <div className="flex justify-between">
                                    <div className="font-medium">{app.type}</div>
                                    <StatusBadge status={app.status} />
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1">
                                    {app.date} • ID: {app.id}
                                  </div>
                                  <div className="text-sm mt-2">{app.description}</div>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                {/* AI Analysis and Decision Panel */}
                <div className="w-full lg:w-1/3 space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">AI Recommendation</h3>
                      <div
                        className={`p-3 border rounded-md mb-4 ${getApplicationData(selectedApplication).aiRecommendation.type === "approve"
                            ? "bg-green-50 border-green-200"
                            : getApplicationData(selectedApplication).aiRecommendation.type === "review"
                              ? "bg-amber-50 border-amber-200"
                              : "bg-red-50 border-red-200"
                          }`}
                      >
                        <div className="flex items-center">
                          <div
                            className={`font-medium ${getApplicationData(selectedApplication).aiRecommendation.type === "approve"
                                ? "text-green-800"
                                : getApplicationData(selectedApplication).aiRecommendation.type === "review"
                                  ? "text-amber-800"
                                  : "text-red-800"
                              }`}
                          >
                            {getApplicationData(selectedApplication).aiRecommendation.recommendation}
                          </div>
                          <div className="ml-auto text-sm font-medium">
                            {getApplicationData(selectedApplication).aiRecommendation.confidence}% Confidence
                          </div>
                        </div>
                        <Progress
                          value={getApplicationData(selectedApplication).aiRecommendation.confidence}
                          className={`h-2 mt-2 ${getApplicationData(selectedApplication).aiRecommendation.type === "approve"
                              ? "bg-green-100"
                              : getApplicationData(selectedApplication).aiRecommendation.type === "review"
                                ? "bg-amber-100"
                                : "bg-red-100"
                            }`}
                        />
                      </div>

                      <h4 className="font-medium text-sm mb-2">Key Factors</h4>
                      <ul className="space-y-2 mb-4">
                        {getApplicationData(selectedApplication).aiRecommendation.keyFactors.map(
                          (factor: AIKeyFactor, index: number) => (
                            <li key={index} className="flex items-start">
                              <div
                                className={`h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 ${factor.type === "positive"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-amber-100 text-amber-800"
                                  }`}
                              >
                                {factor.type === "positive" ? "✓" : "!"}
                              </div>
                              <span className="text-sm">{factor.text}</span>
                            </li>
                          )
                        )}
                      </ul>

                      {getApplicationData(selectedApplication).aiRecommendation.riskFlags.length > 0 && (
                        <>
                          <h4 className="font-medium text-sm mb-2">Risk Flags</h4>
                          <div className="space-y-3 mb-4">
                            {getApplicationData(selectedApplication).aiRecommendation.riskFlags.map(
                              (flag: RiskFlag, index: number) => (
                                <div key={index} className="p-3 border rounded-md">
                                  <div className="flex items-start">
                                    <div className="h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 mr-2 flex-shrink-0">
                                      !
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium">{flag.title}</div>
                                      <div className="text-xs text-muted-foreground">{flag.description}</div>
                                    </div>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium mb-4">Decision</h3>

                      <div className="space-y-4">
                        <Button className="w-full bg-green-600 hover:bg-green-700">Approve Application</Button>
                        <Button className="w-full" variant="outline">
                          Request Additional Information
                        </Button>
                        <Button
                          className="w-full border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                          variant="outline"
                        >
                          Reject Application
                        </Button>
                        <Button className="w-full" variant="link">
                          Escalate to Supervisor
                        </Button>
                      </div>

                      <div className="mt-4">
                        <Label htmlFor="comments">Comments</Label>
                        <Textarea id="comments" placeholder="Add your comments here..." className="mt-1" />
                      </div>

                      <div className="mt-4">
                        <Label htmlFor="reason">Decision Reasoning</Label>
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
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardShell>
  );
}

function StatusBadge({ status }: { status: string }) {
  let bgColor = "bg-gray-100 text-gray-800";

  if (status === "Pending") {
    bgColor = "bg-amber-100 text-amber-800";
  } else if (status === "Approved") {
    bgColor = "bg-green-100 text-green-800";
  } else if (status === "Flagged") {
    bgColor = "bg-red-100 text-red-800";
  } else if (status === "Auto-Approved") {
    bgColor = "bg-blue-100 text-blue-800";
  } else if (status === "Needs Review") {
    bgColor = "bg-amber-100 text-amber-800";
  } else if (status === "Verified") {
    bgColor = "bg-green-100 text-green-800";
  }

  return <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>{status}</span>;
}

function PersonCard({
  name,
  relation,
  age,
  occupation,
}: {
  name: string;
  relation: string;
  age: number;
  occupation: string;
}) {
  return (
    <div className="border rounded-md p-3">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{relation}</div>
      <div className="mt-2 text-sm">
        <div>Age: {age}</div>
        <div>Occupation: {occupation}</div>
      </div>
    </div>
  );
}

function DocumentCard({ title, status, confidence }: { title: string; status: string; confidence: number }) {
  return (
    <div className="border rounded-md p-4">
      <div className="flex justify-between items-start">
        <div className="font-medium">{title}</div>
        <StatusBadge status={status} />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">AI Confidence</span>
        <span className="text-sm font-medium">{confidence}%</span>
      </div>
      <Progress value={confidence} className="h-1 mt-1" />
      <div className="mt-3 flex justify-between">
        <Button variant="outline" size="sm">
          View Document
        </Button>
        <Button variant="ghost" size="sm">
          Verify
        </Button>
      </div>
    </div>
  );
}

function TimelineItem({
  date,
  title,
  description,
  current = false,
}: { date: string; title: string; description: string; current?: boolean }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={`h-4 w-4 rounded-full ${current ? "bg-blue-600" : "bg-gray-200"}`}></div>
        {!current && <div className="w-0.5 h-full bg-gray-200 mt-1"></div>}
      </div>
      <div className="pb-4">
        <div className="text-xs text-muted-foreground">{date}</div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

const applications = [
  {
    id: "UAE-2023-78945",
    name: "Ahmed Mohammed Al-Zahrani",
    arabicName: "أحمد محمد الزهراني",
    type: "Housing Support",
    status: "Pending",
    aiConfidence: 87,
    timestamp: "May 26, 2023",
  },
  {
    id: "UAE-2023-78946",
    name: "Fatima Ali Al-Saadi",
    arabicName: "فاطمة علي السعدي",
    type: "Financial Aid",
    status: "Auto-Approved",
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
    status: "Auto-Approved",
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