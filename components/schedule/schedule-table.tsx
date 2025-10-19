import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import schedule from "@/data/schedule.json"

export function ScheduleTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Doctor Availability</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="border-b p-2 font-semibold">Mode</th>
                <th className="border-b p-2 font-semibold">Upcoming Slots</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.mode} className="align-top">
                  <td className="border-b p-2 capitalize">{row.mode}</td>
                  <td className="border-b p-2">
                    <div className="flex flex-wrap gap-2">
                      {row.slots.slice(0, 6).map((s, i) => (
                        <span key={i} className="rounded-md bg-secondary px-2 py-1 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
