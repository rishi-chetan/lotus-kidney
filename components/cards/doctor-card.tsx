import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type Doctor = {
  id: string
  name: string
  qualifications: string
  specialties: string[]
  bio: string
  photo: string
}

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center gap-4">
        <img
          src={doctor.photo || "/placeholder.svg"}
          alt={`Photo of Dr. ${doctor.name}`}
          className="h-16 w-16 rounded-full border object-cover"
        />
        <div>
          <CardTitle className="text-lg">{doctor.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{doctor.qualifications}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm">{doctor.bio}</p>
        <div className="flex flex-wrap gap-2">
          {doctor.specialties.map((s) => (
            <span key={s} className="rounded-full bg-secondary px-2 py-1 text-xs text-secondary-foreground">
              {s}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
