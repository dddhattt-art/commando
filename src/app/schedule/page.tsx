import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const schedule = [
  { week: 1, date: "Sep 7", opponent: "Dallas Cowboys", homeAway: "HOME", time: "1:00 PM", result: null },
  { week: 2, date: "Sep 14", opponent: "@ Philadelphia Eagles", homeAway: "AWAY", time: "4:25 PM", result: null },
  { week: 3, date: "Sep 21", opponent: "New York Giants", homeAway: "HOME", time: "1:00 PM", result: null },
  { week: 4, date: "Sep 28", opponent: "@ Cincinnati Bengals", homeAway: "AWAY", time: "1:00 PM", result: null },
  { week: 5, date: "Oct 5", opponent: "Carolina Panthers", homeAway: "HOME", time: "1:00 PM", result: null },
  { week: 6, date: "Oct 12", opponent: "@ Chicago Bears", homeAway: "AWAY", time: "1:00 PM", result: null },
  { week: 7, date: "Oct 19", opponent: "Baltimore Ravens", homeAway: "HOME", time: "4:25 PM", result: null },
  { week: 8, date: "Oct 26", opponent: "@ New York Giants", homeAway: "AWAY", time: "8:20 PM", result: null },
  { week: 9, date: "Nov 2", opponent: "BYE WEEK", homeAway: "BYE", time: "—", result: null },
  { week: 10, date: "Nov 9", opponent: "Tampa Bay Buccaneers", homeAway: "HOME", time: "1:00 PM", result: null },
  { week: 11, date: "Nov 16", opponent: "@ Dallas Cowboys", homeAway: "AWAY", time: "4:25 PM", result: null },
  { week: 12, date: "Nov 23", opponent: "Philadelphia Eagles", homeAway: "HOME", time: "8:20 PM", result: null },
  { week: 13, date: "Nov 30", opponent: "@ San Francisco 49ers", homeAway: "AWAY", time: "4:05 PM", result: null },
  { week: 14, date: "Dec 7", opponent: "Green Bay Packers", homeAway: "HOME", time: "1:00 PM", result: null },
  { week: 15, date: "Dec 14", opponent: "@ Pittsburgh Steelers", homeAway: "AWAY", time: "1:00 PM", result: null },
  { week: 16, date: "Dec 21", opponent: "Atlanta Falcons", homeAway: "HOME", time: "1:00 PM", result: "L 20-27" },
  { week: 17, date: "Dec 28", opponent: "New York Giants", homeAway: "HOME", time: "—", result: "W 30-14" },
  { week: 18, date: "Jan 4", opponent: "@ Philadelphia Eagles", homeAway: "AWAY", time: "—", result: "W 24-17" },
];

export default function SchedulePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#5A1414]">2025 Schedule</h1>
        <p className="text-muted-foreground mt-1">Washington Commanders · Regular Season</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Full Season Schedule</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#5A1414] text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Week</th>
                  <th className="text-left px-4 py-3 font-semibold">Date</th>
                  <th className="text-left px-4 py-3 font-semibold">Opponent</th>
                  <th className="text-left px-4 py-3 font-semibold">Location</th>
                  <th className="text-left px-4 py-3 font-semibold">Time / Result</th>
                </tr>
              </thead>
              <tbody>
                {schedule.map((game, i) => (
                  <tr key={i} className={`border-b last:border-0 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"} ${game.homeAway === "BYE" ? "opacity-50" : ""}`}>
                    <td className="px-4 py-3 font-medium">{game.week}</td>
                    <td className="px-4 py-3 text-muted-foreground">{game.date}</td>
                    <td className="px-4 py-3 font-medium">{game.opponent}</td>
                    <td className="px-4 py-3">
                      {game.homeAway !== "BYE" && (
                        <Badge variant="outline" className={game.homeAway === "HOME" ? "border-[#5A1414] text-[#5A1414]" : "border-gray-400 text-gray-500"}>
                          {game.homeAway}
                        </Badge>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      {game.result ? (
                        <Badge className={game.result.startsWith("W") ? "bg-green-600" : "bg-red-600"}>
                          {game.result}
                        </Badge>
                      ) : (
                        <span className="text-muted-foreground">{game.time}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
