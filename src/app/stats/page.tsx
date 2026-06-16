import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const passingStats = [
  { name: "Jayden Daniels", gp: 17, comp: 289, att: 423, pct: "68.3", yds: 3568, td: 25, int: 9, rating: 98.4 },
];

const rushingStats = [
  { name: "Jayden Daniels", gp: 17, att: 128, yds: 891, avg: "7.0", td: 6, long: 72 },
  { name: "Austin Ekeler", gp: 16, att: 142, yds: 714, avg: "5.0", td: 5, long: 43 },
  { name: "Chris Rodriguez Jr.", gp: 11, att: 87, yds: 412, avg: "4.7", td: 3, long: 28 },
];

const receivingStats = [
  { name: "Terry McLaurin", gp: 17, rec: 78, yds: 1075, avg: "13.8", td: 9, long: 68 },
  { name: "Jahan Dotson", gp: 15, rec: 52, yds: 624, avg: "12.0", td: 5, long: 45 },
  { name: "Zach Ertz", gp: 16, rec: 61, yds: 582, avg: "9.5", td: 4, long: 31 },
  { name: "Dyami Brown", gp: 17, rec: 38, yds: 498, avg: "13.1", td: 3, long: 52 },
  { name: "Austin Ekeler", gp: 16, rec: 44, yds: 322, avg: "7.3", td: 2, long: 29 },
];

const teamStats = [
  { label: "Points Per Game", value: "26.4", rank: "8th" },
  { label: "Total Yards/Game", value: "358.2", rank: "12th" },
  { label: "Pass Yards/Game", value: "228.5", rank: "14th" },
  { label: "Rush Yards/Game", value: "129.7", rank: "7th" },
  { label: "Points Allowed/Game", value: "21.8", rank: "11th" },
  { label: "Sacks", value: "42", rank: "9th" },
  { label: "Turnovers Forced", value: "24", rank: "6th" },
  { label: "3rd Down %", value: "42.1%", rank: "10th" },
];

export default function StatsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#5A1414]">Statistics</h1>
        <p className="text-muted-foreground mt-1">Washington Commanders · 2024 Season</p>
      </div>

      {/* Team Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {teamStats.map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardContent className="pt-5">
              <p className="text-2xl font-bold text-[#5A1414]">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              <p className="text-xs font-semibold text-[#FFB612] mt-0.5 bg-[#5A1414] rounded px-2 py-0.5 inline-block">{stat.rank}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="passing">
        <TabsList className="bg-[#5A1414]/10">
          <TabsTrigger value="passing" className="data-[state=active]:bg-[#5A1414] data-[state=active]:text-white">Passing</TabsTrigger>
          <TabsTrigger value="rushing" className="data-[state=active]:bg-[#5A1414] data-[state=active]:text-white">Rushing</TabsTrigger>
          <TabsTrigger value="receiving" className="data-[state=active]:bg-[#5A1414] data-[state=active]:text-white">Receiving</TabsTrigger>
        </TabsList>

        <TabsContent value="passing">
          <Card>
            <CardHeader><CardTitle>Passing Stats</CardTitle></CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#5A1414] text-white">
                  <tr>
                    {["Player", "GP", "CMP", "ATT", "PCT", "YDS", "TD", "INT", "RTG"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {passingStats.map((p, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{p.name}</td>
                      <td className="px-4 py-3">{p.gp}</td>
                      <td className="px-4 py-3">{p.comp}</td>
                      <td className="px-4 py-3">{p.att}</td>
                      <td className="px-4 py-3">{p.pct}%</td>
                      <td className="px-4 py-3 font-semibold">{p.yds}</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">{p.td}</td>
                      <td className="px-4 py-3 text-red-600">{p.int}</td>
                      <td className="px-4 py-3 font-semibold text-[#5A1414]">{p.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rushing">
          <Card>
            <CardHeader><CardTitle>Rushing Stats</CardTitle></CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#5A1414] text-white">
                  <tr>
                    {["Player", "GP", "ATT", "YDS", "AVG", "TD", "LONG"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rushingStats.map((p, i) => (
                    <tr key={i} className={`border-b hover:bg-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="px-4 py-3 font-medium">{p.name}</td>
                      <td className="px-4 py-3">{p.gp}</td>
                      <td className="px-4 py-3">{p.att}</td>
                      <td className="px-4 py-3 font-semibold">{p.yds}</td>
                      <td className="px-4 py-3">{p.avg}</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">{p.td}</td>
                      <td className="px-4 py-3">{p.long}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="receiving">
          <Card>
            <CardHeader><CardTitle>Receiving Stats</CardTitle></CardHeader>
            <CardContent className="p-0 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#5A1414] text-white">
                  <tr>
                    {["Player", "GP", "REC", "YDS", "AVG", "TD", "LONG"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {receivingStats.map((p, i) => (
                    <tr key={i} className={`border-b hover:bg-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                      <td className="px-4 py-3 font-medium">{p.name}</td>
                      <td className="px-4 py-3">{p.gp}</td>
                      <td className="px-4 py-3 font-semibold">{p.rec}</td>
                      <td className="px-4 py-3 font-semibold">{p.yds}</td>
                      <td className="px-4 py-3">{p.avg}</td>
                      <td className="px-4 py-3 text-green-700 font-semibold">{p.td}</td>
                      <td className="px-4 py-3">{p.long}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
