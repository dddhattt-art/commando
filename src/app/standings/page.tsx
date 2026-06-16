export const runtime = "edge";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Team = { name: string; w: number; l: number; t: number; pct: string; pf: number; pa: number; streak: string; commanders?: boolean };

const nfcEast: Team[] = [
  { name: "Philadelphia Eagles", w: 14, l: 3, t: 0, pct: ".824", pf: 432, pa: 301, streak: "W3" },
  { name: "Washington Commanders", w: 12, l: 5, t: 0, pct: ".706", pf: 399, pa: 328, streak: "W2", commanders: true },
  { name: "Dallas Cowboys", w: 7, l: 10, t: 0, pct: ".412", pf: 289, pa: 354, streak: "L4" },
  { name: "New York Giants", w: 3, l: 14, t: 0, pct: ".176", pf: 198, pa: 421, streak: "L7" },
];

const nfcNorth: Team[] = [
  { name: "Detroit Lions", w: 15, l: 2, t: 0, pct: ".882", pf: 461, pa: 298, streak: "W5" },
  { name: "Minnesota Vikings", w: 14, l: 3, t: 0, pct: ".824", pf: 412, pa: 329, streak: "L1" },
  { name: "Green Bay Packers", w: 11, l: 6, t: 0, pct: ".647", pf: 367, pa: 321, streak: "W2" },
  { name: "Chicago Bears", w: 5, l: 12, t: 0, pct: ".294", pf: 241, pa: 388, streak: "L3" },
];

const afcEast: Team[] = [
  { name: "Buffalo Bills", w: 13, l: 4, t: 0, pct: ".765", pf: 421, pa: 298, streak: "W4" },
  { name: "Miami Dolphins", w: 8, l: 9, t: 0, pct: ".471", pf: 312, pa: 341, streak: "L2" },
  { name: "New York Jets", w: 5, l: 12, t: 0, pct: ".294", pf: 245, pa: 367, streak: "W1" },
  { name: "New England Patriots", w: 4, l: 13, t: 0, pct: ".235", pf: 219, pa: 389, streak: "L5" },
];

function StandingsTable({ teams, title }: { teams: Team[]; title: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-2 font-semibold">Team</th>
              <th className="text-center px-3 py-2 font-semibold">W</th>
              <th className="text-center px-3 py-2 font-semibold">L</th>
              <th className="text-center px-3 py-2 font-semibold">PCT</th>
              <th className="text-center px-3 py-2 font-semibold">PF</th>
              <th className="text-center px-3 py-2 font-semibold">PA</th>
              <th className="text-center px-3 py-2 font-semibold">STRK</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, i) => (
              <tr key={i} className={`border-b last:border-0 ${team.commanders ? "bg-[#5A1414]/5 font-semibold" : "hover:bg-gray-50"}`}>
                <td className="px-4 py-2.5 flex items-center gap-2">
                  {i === 0 && <span className="text-[#FFB612] text-xs font-bold">●</span>}
                  <span className={team.commanders ? "text-[#5A1414] font-bold" : ""}>{team.name}</span>
                  {team.commanders && <Badge className="bg-[#FFB612] text-[#5A1414] text-[10px] py-0 px-1.5">YOU</Badge>}
                </td>
                <td className="text-center px-3 py-2.5 font-bold">{team.w}</td>
                <td className="text-center px-3 py-2.5">{team.l}</td>
                <td className="text-center px-3 py-2.5">{team.pct}</td>
                <td className="text-center px-3 py-2.5">{team.pf}</td>
                <td className="text-center px-3 py-2.5">{team.pa}</td>
                <td className="text-center px-3 py-2.5">
                  <span className={`font-medium ${team.streak.startsWith("W") ? "text-green-600" : "text-red-600"}`}>{team.streak}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}

export default function StandingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#5A1414]">Standings</h1>
        <p className="text-muted-foreground mt-1">2024 NFL Season · Final</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StandingsTable teams={nfcEast} title="NFC East" />
        <StandingsTable teams={nfcNorth} title="NFC North" />
        <StandingsTable teams={afcEast} title="AFC East" />
      </div>
    </div>
  );
}
