"use client";

import { useRouter } from "next/navigation";
import { ArrowDown, ArrowUp, Bell, FileSearch, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardShell } from "@/components/dashboard-shell";

export function DashboardOverview() {
  const router = useRouter();

  return (
    <DashboardShell>
      <DashboardHeader />
      <div className="grid gap-6 p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-l-4 border-l-amber-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Pending Review</CardTitle>
              <CardDescription>Applications awaiting review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">24</div>
                <div className="flex items-center text-amber-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  <span className="text-sm">12%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Auto-Approved Today</CardTitle>
              <CardDescription>Applications approved by AI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">42</div>
                <div className="flex items-center text-green-500">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  <span className="text-sm">18%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-red-500">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Escalated Applications</CardTitle>
              <CardDescription>Applications requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">16</div>
                <div className="flex items-center text-red-500">
                  <ArrowDown className="mr-1 h-4 w-4" />
                  <span className="text-sm">5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Total Processed</CardTitle>
              <CardDescription>Applications processed today</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-3xl font-bold">82</div>
                <div className="flex items-center text-blue-600">
                  <ArrowUp className="mr-1 h-4 w-4" />
                  <span className="text-sm">23%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Urgent Applications</CardTitle>
              <CardDescription>Overview of urgent applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentApplications.map((application) => (
                  <div
                    key={application.id}
                    className="flex items-center justify-between rounded-lg border p-3 shadow-sm"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{application.name}</span>
                        <span className="text-xs text-muted-foreground">{application.arabicName}</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ID: {application.id} • {application.type}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <StatusBadge status={application.status} />
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.push(`/applications/${application.id}`)}
                      >
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <AIInsights />
        </div>

        {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"> */}
          
          {/* <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                className="w-full justify-start bg-red-500 hover:bg-red-600"
                onClick={() => router.push("/applications?status=flagged")}
              >
                <Bell className="mr-2 h-4 w-4" />
                Review Flagged Applications
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <FileSearch className="mr-2 h-4 w-4" />
                Generate Reports
              </Button>
              <Button
                className="w-full justify-start"
                variant="outline"
                onClick={() => router.push("/search")}
              >
                <FileSearch className="mr-2 h-4 w-4" />
                Applicant Search
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <Settings className="mr-2 h-4 w-4" />
                System Settings
              </Button>
            </CardContent>
          </Card> */}
        {/* </div> */}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Processing Statistics (Weekly)</CardTitle>
              <CardDescription>Application processing metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {processingStats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{stat.label}</span>
                      <span className="text-sm text-muted-foreground">{stat.value}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full"
                        style={{
                          width: `${stat.value}%`,
                          backgroundColor: stat.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <DailySchedule />
          {/* <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>AI system performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {systemStatus.map((status) => (
                  <div key={status.label} className="flex items-center justify-between">
                    <span className="text-sm">{status.label}</span>
                    <span
                      className={`flex h-2.5 w-2.5 rounded-full ${status.status === "operational"
                          ? "bg-green-500"
                          : status.status === "degraded"
                            ? "bg-amber-500"
                            : "bg-red-500"
                        }`}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card> */}
        </div>
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
  } else if (status === "Pending - Urgent") {
    bgColor = "bg-red-100 text-red-800";
  } else if (status === "Auto-Approved") {
    bgColor = "bg-blue-100 text-blue-800";
  }

  return (
    <span className={`rounded-full px-2 py-1 text-xs font-medium ${bgColor}`}>
      {status}
    </span>
  );
}

function DailySchedule() {
  const appointments = [
    {
      id: "1",
      type: "Home Visit",
      name: "Aisha Al-Mansouri",
      location: "Dubai, Al Barsha Area",
      time: "10:00 AM - 11:00 AM",
      caseId: "2847",
      isCall: false,
    },
    {
      id: "2",
      type: "Phone Call",
      name: `Case #${2847}`,
      location: "",
      time: "02:00 PM - 02:30 PM",
      caseId: "2847",
      isCall: true,
    },
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            className="h-5 w-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <CardTitle>Daily Schedule</CardTitle>
        </div>
        <Button variant="outline" size="sm" onClick={() => alert("Add Appointment clicked")}>
          + Add Appointment
        </Button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">Today - May 29, 2025</p>
        {appointments.map((appointment) => (
          <div
            key={appointment.id}
            className="mb-4 p-4 border rounded-lg shadow-sm bg-white"
          >
            <div className="flex items-center gap-2 mb-2">
              {appointment.isCall ? (
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
              <div>
                <div className="font-medium">{appointment.type}: {appointment.name}</div>
                {appointment.location && (
                  <div className="text-sm text-gray-500">{appointment.location}</div>
                )}
                <div className="text-sm text-gray-500">{appointment.time}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="default"
                size="sm"
                className="bg-black text-white hover:bg-gray-800"
                onClick={() => router.push(`/cases/${appointment.caseId}`)}
              >
                View Case
              </Button>
              {!appointment.isCall && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert("Directions clicked")}
                >
                  Directions
                </Button>
              )}
              {appointment.isCall && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => alert("Join Call clicked")}
                >
                  Join Call
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={() => alert("Reschedule clicked")}
              >
                Reschedule
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function AIInsights() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>AI Insights</CardTitle>
        {/* <CardDescription>System Performance</CardDescription> */}
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium">AI Accuracy</div>
            <div className="text-sm text-gray-500">Recommendation Accuracy</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-black h-2.5 rounded-full"
              style={{ width: "95%" }}
            ></div>
          </div>
          <div className="text-right text-sm font-medium mt-1">95%</div>
        </div>
        <div>
          <div className="text-sm font-medium">Time Saved by AI</div>
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>This Week</span>
            <span>This Month</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-1">
            <span>240 minutes</span>
            <span>990 minutes</span>
          </div>
        </div>
        <div>
          <div className="text-sm font-medium">AI Recommendations Impact:</div>
          <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
            <li>+16% faster case processing</li>
            <li>+12% higher approval accuracy</li>
            <li>+8% reduction in documentation errors</li>
            <li>+12% improvement in applicant satisfaction</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

const recentApplications = [
  {
    id: "UAE-2023-78948",
    name: "Aisha Khalid Al-Hashimi",
    arabicName: "عائشة خالد الهاشمي",
    type: "Education Support",
    status: "Pending - Urgent",
  },
  {
    id: "UAE-2023-78945",
    name: "Ahmed Mohammed Al-Zahrani",
    arabicName: "أحمد محمد الزهراني",
    type: "Housing Emergency",
    status: "Pending",
  },
  {
    id: "UAE-2023-78946",
    name: "Fatima Ali Al-Saadi",
    arabicName: "فاطمة علي السعدي",
    type: "Financial Aid",
    status: "Pending",
  },
  {
    id: "UAE-2023-78947",
    name: "Mohammed Abdullah Al-Mansoori",
    arabicName: "محمد عبدالله المنصوري",
    type: "Healthcare Assistance",
    status: "Approved",
  },
];

const processingStats = [
  { label: "AI Auto-Approval Rate", value: 78, color: "#000000" },
  { label: "Manual Review Required", value: 22, color: "#000000" },
  { label: "Escalated Applications", value: 12, color: "#000000" },
  { label: "Processing Time Reduction", value: 92, color: "#000000" },
  { label: "SLA Compliance", value: 95, color: "#000000" },
  { label: "Client Satisfaction", value: 85, color: "#000000" },
];

const systemStatus = [
  { label: "Document Verification AI", status: "operational" },
  { label: "Eligibility Assessment", status: "operational" },
  { label: "Cross-Reference System", status: "degraded" },
  { label: "Fraud Detection", status: "operational" },
  { label: "Notification System", status: "operational" },
];