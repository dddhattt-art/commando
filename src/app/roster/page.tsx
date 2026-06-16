import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const roster: Record<string, { number: number; name: string; position: string; age: number; college: string }[]> = {
  Offense: [
    { number: 5, name: "Jayden Daniels", position: "QB", age: 24, college: "LSU" },
    { number: 26, name: "Austin Ekeler", position: "RB", age: 30, college: "Western Colorado" },
    { number: 25, name: "Chris Rodriguez Jr.", position: "RB", age: 24, college: "Kentucky" },
    { number: 17, name: "Terry McLaurin", position: "WR", age: 29, college: "Ohio State" },
    { number: 11, name: "Dyami Brown", position: "WR", age: 25, college: "North Carolina" },
    { number: 13, name: "Jahan Dotson", position: "WR", age: 24, college: "Penn State" },
    { number: 80, name: "Zach Ertz", position: "TE", age: 34, college: "Stanford" },
    { number: 66, name: "Ben Bredeson", position: "G", age: 27, college: "Michigan" },
    { number: 72, name: "Charles Leno Jr.", position: "OT", age: 33, college: "Boise State" },
    { number: 64, name: "Tyler Larsen", position: "C", age: 31, college: "Utah State" },
  ],
  Defense: [
    { number: 91, name: "Montez Sweat", position: "DE", age: 28, college: "Mississippi State" },
    { number: 55, name: "Jamin Davis", position: "LB", age: 26, college: "Kentucky" },
    { number: 56, name: "Cody Barton", position: "LB", age: 29, college: "Utah" },
    { number: 21, name: "Quan Martin", position: "S", age: 23, college: "Illinois" },
    { number: 32, name: "Percy Butler", position: "S", age: 25, college: "Louisiana" },
    { number: 24, name: "Mike Sainristil", position: "CB", age: 23, college: "Michigan" },
    { number: 40, name: "Emmanuel Forbes", position: "CB", age: 23, college: "Mississippi State" },
    { number: 93, name: "Daron Payne", position: "DT", age: 27, college: "Alabama" },
    { number: 99, name: "Jonathan Allen", position: "DT", age: 29, college: "Alabama" },
  ],
  "Special Teams": [
    { number: 7, name: "Cade York", position: "K", age: 24, college: "LSU" },
    { number: 4, name: "Tress Way", position: "P", age: 34, college: "Oklahoma" },
    { number: 45, name: "DeShawn Williams", position: "LS", age: 29, college: "Clemson" },
  ],
};

const positionColors: Record<string, string> = {
  QB: "bg-[#5A1414] text-white",
  RB: "bg-[#FFB612] text-[#5A1414]",
  WR: "bg-blue-600 text-white",
  TE: "bg-purple-600 text-white",
  OT: "bg-gray-600 text-white",
  G: "bg-gray-600 text-white",
  C: "bg-gray-600 text-white",
  DE: "bg-red-700 text-white",
  DT: "bg-red-700 text-white",
  LB: "bg-orange-600 text-white",
  CB: "bg-teal-600 text-white",
  S: "bg-teal-700 text-white",
  K: "bg-green-700 text-white",
  P: "bg-green-700 text-white",
  LS: "bg-green-700 text-white",
};

export default function RosterPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#5A1414]">Roster</h1>
        <p className="text-muted-foreground mt-1">Washington Commanders · 2025 Season</p>
      </div>
      <Tabs defaultValue="Offense">
        <TabsList className="bg-[#5A1414]/10">
          {Object.keys(roster).map((group) => (
            <TabsTrigger key={group} value={group} className="data-[state=active]:bg-[#5A1414] data-[state=active]:text-white">
              {group}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(roster).map(([group, players]) => (
          <TabsContent key={group} value={group}>
            <Card>
              <CardHeader>
                <CardTitle>{group}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold">#</th>
                      <th className="text-left px-4 py-3 font-semibold">Name</th>
                      <th className="text-left px-4 py-3 font-semibold">Position</th>
                      <th className="text-left px-4 py-3 font-semibold">Age</th>
                      <th className="text-left px-4 py-3 font-semibold">College</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((p, i) => (
                      <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                        <td className="px-4 py-3 font-bold text-[#5A1414]">{p.number}</td>
                        <td className="px-4 py-3 font-medium">{p.name}</td>
                        <td className="px-4 py-3">
                          <Badge className={positionColors[p.position] ?? "bg-gray-500 text-white"}>{p.position}</Badge>
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{p.age}</td>
                        <td className="px-4 py-3 text-muted-foreground">{p.college}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
