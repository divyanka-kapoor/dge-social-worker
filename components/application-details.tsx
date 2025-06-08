"use client"
import Image from "next/image"
import { ChevronLeft, Download, Printer } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export function ApplicationDetails({ id }: { id: string }) {
  return (
    <DashboardShell>
      <DashboardHeader />
      <div className="container mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h1 className="text-2xl font-bold">Application Details</h1>
            <div className="ml-2 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
              Flagged
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Printer className="mr-2 h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button size="sm">Take Action</Button>
          </div>
        </div>

        <div className="mb-6">
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
                  <h2 className="text-2xl font-bold">Mohammed Abdullah Al-Mansoori</h2>
                  <h3 className="text-lg text-muted-foreground mb-4">محمد عبدالله المنصوري</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Application ID</div>
                      <div className="font-medium">{id}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Emirates ID</div>
                      <div className="font-medium">784-1985-1234567-8</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Application Type</div>
                      <div className="font-medium">Healthcare Assistance</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Submission Date</div>
                      <div className="font-medium">May 25, 2023</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Contact</div>
                      <div className="font-medium">+971 50 123 4567</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">AI Confidence</div>
                      <div className="font-medium">76%</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="personal">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="personal">Personal Information</TabsTrigger>
            <TabsTrigger value="ai-analysis">AI Analysis</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Family Tree</h3>
                  <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">Family Tree Visualization</span>
                  </div>

                  <h3 className="text-lg font-medium mt-6 mb-4">Family Members</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <PersonCard
                      name="Mohammed Al-Mansoori"
                      relation="Self"
                      age={38}
                      occupation="Unemployed"
                      emiratesId="784-1985-1234567-8"
                    />
                    <PersonCard
                      name="Maryam Al-Mansoori"
                      relation="Spouse"
                      age={35}
                      occupation="Homemaker"
                      emiratesId="784-1988-7654321-0"
                    />
                    <PersonCard
                      name="Hamad Al-Mansoori"
                      relation="Son"
                      age={12}
                      occupation="Student"
                      emiratesId="784-2011-9876543-2"
                    />
                    <PersonCard
                      name="Fatima Al-Mansoori"
                      relation="Daughter"
                      age={10}
                      occupation="Student"
                      emiratesId="784-2013-5432109-8"
                    />
                    <PersonCard
                      name="Khalid Al-Mansoori"
                      relation="Son"
                      age={6}
                      occupation="Student"
                      emiratesId="784-2017-1357924-6"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Income Sources</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Previous Employment</div>
                          <div className="text-sm text-muted-foreground">Monthly</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">AED 4,500</div>
                          <div className="text-xs text-green-600">Verified</div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">Family Support</div>
                          <div className="text-sm text-muted-foreground">Monthly</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">AED 2,000</div>
                          <div className="text-xs text-amber-600">Pending Verification</div>
                        </div>
                      </div>
                      <div className="pt-2 border-t">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">Total Monthly Income</div>
                          <div className="font-medium">AED 6,500</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Assets Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Bank Accounts</span>
                        <span className="font-medium">AED 12,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Vehicles</span>
                        <span className="font-medium">1 (2015 Toyota)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Properties</span>
                        <span className="font-medium">None</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Investments</span>
                        <span className="font-medium">None</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Housing Situation</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Housing Type</span>
                        <span className="font-medium">Rented Apartment</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Monthly Rent</span>
                        <span className="font-medium">AED 5,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Location</span>
                        <span className="font-medium">Al Nahda, Sharjah</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Contract Expiry</span>
                        <span className="font-medium">March 15, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ai-analysis">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Eligibility Assessment</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Income Threshold</span>
                        <span className="text-green-600 font-medium">Eligible</span>
                      </div>
                      <Progress value={35} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        Family income (AED 6,500) is below the threshold (AED 10,000) for healthcare assistance
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Family Size Criteria</span>
                        <span className="text-green-600 font-medium">Eligible</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        Family size (5 members) meets criteria for additional support
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Residency Requirements</span>
                        <span className="text-green-600 font-medium">Eligible</span>
                      </div>
                      <Progress value={100} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        UAE citizen with valid Emirates ID and family book
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Previous Support</span>
                        <span className="text-amber-600 font-medium">Review Needed</span>
                      </div>
                      <Progress value={65} className="h-2 bg-amber-100" />
                      <div className="text-sm text-muted-foreground">
                        Received financial aid 8 months ago (AED 15,000)
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Medical Necessity</span>
                        <span className="text-green-600 font-medium">Eligible</span>
                      </div>
                      <Progress value={90} className="h-2" />
                      <div className="text-sm text-muted-foreground">
                        Medical records confirm chronic condition requiring ongoing treatment
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mt-8 mb-4">Recommendation Explanation</h3>
                  <div className="p-4 border rounded-md">
                    <p className="text-sm">
                      The applicant meets most eligibility criteria for healthcare assistance. The family's income is
                      significantly below the threshold, and the medical necessity is well-documented. The family size
                      and composition also qualify for additional support.
                    </p>
                    <p className="text-sm mt-3">However, manual review is recommended due to two factors:</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      <li>Income verification for the "Family Support" source requires additional documentation</li>
                      <li>
                        Previous financial aid was received within the past 12 months, requiring assessment of ongoing
                        need
                      </li>
                    </ul>
                    <p className="text-sm mt-3">
                      The AI system recommends approval with verification of the family support income source.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Risk Assessment</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <div className="font-medium">Overall Risk</div>
                          <div className="px-2 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium">
                            Medium
                          </div>
                        </div>
                        <Progress value={45} className="h-2 mt-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="border rounded-md p-3">
                          <div className="text-sm font-medium">Document Consistency</div>
                          <div className="mt-1 flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Low Risk</span>
                          </div>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="text-sm font-medium">Identity Verification</div>
                          <div className="mt-1 flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Low Risk</span>
                          </div>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="text-sm font-medium">Income Verification</div>
                          <div className="mt-1 flex items-center">
                            <div className="h-2 w-2 rounded-full bg-amber-500 mr-2"></div>
                            <span className="text-sm">Medium Risk</span>
                          </div>
                        </div>
                        <div className="border rounded-md p-3">
                          <div className="text-sm font-medium">Duplicate Applications</div>
                          <div className="mt-1 flex items-center">
                            <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                            <span className="text-sm">Low Risk</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Cross-Reference Results</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm">Ministry of Interior</span>
                        <span className="text-sm font-medium text-green-600">Verified</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm">Ministry of Health</span>
                        <span className="text-sm font-medium text-green-600">Verified</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm">Ministry of Education</span>
                        <span className="text-sm font-medium text-green-600">Verified</span>
                      </div>
                      <div className="flex items-center justify-between border-b pb-2">
                        <span className="text-sm">Previous Support Database</span>
                        <span className="text-sm font-medium text-amber-600">Review Needed</span>
                      </div>
                      <div className="flex items-center justify-between pb-2">
                        <span className="text-sm">Financial Institutions</span>
                        <span className="text-sm font-medium text-green-600">Verified</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">AI Confidence</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm">Overall Confidence</span>
                        <span className="text-sm font-medium">76%</span>
                      </div>
                      <Progress value={76} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        Medium confidence due to income verification issues
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DocumentCard
                title="Emirates ID"
                status="Verified"
                confidence={98}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Family Book"
                status="Verified"
                confidence={95}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Medical Records"
                status="Verified"
                confidence={92}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Income Statement"
                status="Needs Review"
                confidence={76}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Rental Agreement"
                status="Verified"
                confidence={94}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Previous Support Documents"
                status="Needs Review"
                confidence={82}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Bank Statements"
                status="Verified"
                confidence={90}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Medical Insurance Card"
                status="Verified"
                confidence={96}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
              <DocumentCard
                title="Utility Bills"
                status="Verified"
                confidence={88}
                previewUrl="/placeholder.svg?height=200&width=320"
              />
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Application Timeline</h3>
                  <div className="space-y-6">
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:15 AM"
                      title="Application Submitted"
                      description="Initial application for healthcare assistance submitted through online portal"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="09:30 AM"
                      title="Documents Uploaded"
                      description="All required documents uploaded to the system"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 25, 2023"
                      time="10:45 AM"
                      title="Initial AI Processing"
                      description="Automated verification of identity and document authenticity"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 26, 2023"
                      time="08:30 AM"
                      title="AI Eligibility Assessment"
                      description="Automated assessment of eligibility criteria and cross-reference verification"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 26, 2023"
                      time="09:15 AM"
                      title="Flagged for Review"
                      description="Application flagged for human review due to income verification and previous support history"
                      status="completed"
                    />
                    <TimelineItem
                      date="May 27, 2023"
                      time="11:30 AM"
                      title="Assigned to Social Worker"
                      description="Application assigned to Saeed Al-Mansouri for review"
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
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Previous Applications</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <div className="font-medium">Financial Aid</div>
                          <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                            Approved
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          September 15, 2022 • ID: UAE-2022-45678
                        </div>
                        <div className="text-sm mt-2">One-time financial assistance of AED 15,000</div>
                      </div>
                      <div className="border rounded-md p-3">
                        <div className="flex justify-between">
                          <div className="font-medium">Education Support</div>
                          <div className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                            Approved
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">August 10, 2021 • ID: UAE-2021-34567</div>
                        <div className="text-sm mt-2">School fees assistance for 3 children</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Payment History</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <div>
                          <div className="text-sm font-medium">Financial Aid</div>
                          <div className="text-xs text-muted-foreground">September 20, 2022</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">AED 15,000</div>
                          <div className="text-xs text-green-600">Disbursed</div>
                        </div>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <div>
                          <div className="text-sm font-medium">Education Support</div>
                          <div className="text-xs text-muted-foreground">August 15, 2021</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">AED 12,000</div>
                          <div className="text-xs text-green-600">Disbursed</div>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div>
                          <div className="text-sm font-medium">Education Support</div>
                          <div className="text-xs text-muted-foreground">January 10, 2022</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">AED 12,000</div>
                          <div className="text-xs text-green-600">Disbursed</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-4">Case Notes</h3>
                    <div className="space-y-4">
                      <div className="border-b pb-3">
                        <div className="flex justify-between">
                          <div className="font-medium text-sm">Fatima Al-Zaabi</div>
                          <div className="text-xs text-muted-foreground">September 18, 2022</div>
                        </div>
                        <p className="text-sm mt-1">
                          Applicant demonstrated significant financial need due to job loss. Recommended approval for
                          one-time financial assistance.
                        </p>
                      </div>
                      <div className="border-b pb-3">
                        <div className="flex justify-between">
                          <div className="font-medium text-sm">Ahmed Al-Suwaidi</div>
                          <div className="text-xs text-muted-foreground">August 8, 2021</div>
                        </div>
                        <p className="text-sm mt-1">
                          Family has three school-aged children with education expenses exceeding current income.
                          Approved for education support program.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <div className="font-medium text-sm">System Note</div>
                          <div className="text-xs text-muted-foreground">May 26, 2023</div>
                        </div>
                        <p className="text-sm mt-1">
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
        </Tabs>
      </div>
    </DashboardShell>
  )
}

function PersonCard({
  name,
  relation,
  age,
  occupation,
  emiratesId,
}: { name: string; relation: string; age: number; occupation: string; emiratesId: string }) {
  return (
    <div className="border rounded-md p-3">
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{relation}</div>
      <div className="mt-2 text-sm">
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
    bgColor = "bg-amber-100 text-amber-800"
  } else if (status === "Approved") {
    bgColor = "bg-green-100 text-green-800"
  } else if (status === "Flagged") {
    bgColor = "bg-red-100 text-red-800"
  } else if (status === "Auto-Approved") {
    bgColor = "bg-blue-100 text-blue-800"
  } else if (status === "Needs Review") {
    bgColor = "bg-amber-100 text-amber-800"
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
        <div className="font-medium">{title}</div>
        <div className="text-sm text-muted-foreground">{description}</div>
      </div>
    </div>
  )
}
