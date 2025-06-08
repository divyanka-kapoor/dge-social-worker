// import { ApplicationDetails } from "@/components/application-details"

// export default function ApplicationDetailsPage({ params }: { params: { id: string } }) {
//   return <ApplicationDetails id={params.id} />
// }

// app/applications/[id]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { ApplicationDetails } from "@/components/application-details"; // Updated to named import

export default function ApplicationDetailsPage() {
  const params = useParams();
  const id = params?.id || "demo-id"; // Fallback ID for demo purposes

  return <ApplicationDetails id={id as string} />;
}