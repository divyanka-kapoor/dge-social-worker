import { ApplicationDetails } from "@/components/application-details"

export default function ApplicationDetailsPage({ params }: { params: { id: string } }) {
  return <ApplicationDetails id={params.id} />
}
