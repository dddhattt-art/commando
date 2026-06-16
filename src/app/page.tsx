export const runtime = "edge";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const nextGame = {
  opponent: "Dallas Cowboys",
  date: "Sun, Sep 7, 2025",
  time: "1:00 PM ET",
  location: "Northwest Stadium · Landover, MD",
  homeAway: "HOME",
};

const recentResults = [
  { opponent: "Philadelphia Eagles", result: "W", score: "24-17", week: "Week 18" },
  { opponent: "New York Giants", result: "W", score: "30-14", week: "Week 17" },
  { opponent: "Atlanta Falcons", result: "L", score: "20-27", week: "Week 16" },
];

const headlines = [
  { title: "Commanders lock up key offensive lineman to multi-year extension", time: "2h ago" },
  { title: "Jayden Daniels named NFC Offensive Player of the Week", time: "5h ago" },
  { title: "Commanders 2025 schedule released — full breakdown", time: "1d ago" },
  { title: "Mock Draft: Who does Washington target in Round 1?", time: "2d ago" },
];

const quickLinks = [
  { href: "/schedule", label: "Schedule", icon: "📅", desc: "Full 2025 season schedule" },
  { href: "/roster", label: "Roster", icon: "👥", desc: "Players & depth chart" },
  { href: "/stats", label: "Stats", icon: "📊", desc: "Team & player statistics" },
  { href: "/standings", label: "Standings", icon: "🏆", desc: "NFC East & AFC standings" },
  { href: "/news", label: "News", icon: "📰", desc: "Latest Commanders news" },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-xl bg-[#5A1414] text-white px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-[#FFB612] font-semibold text-sm uppercase tracking-widest mb-1">2025 NFL Season</p>
          <h1 className="text-4xl font-bold mb-2">Washington Commanders</h1>
          <p className="text-white/70 text-lg">Your home for all things Commanders</p>
        </div>
        <div className="text-center bg-white/10 rounded-xl px-8 py-5">
          <p className="text-[#FFB612] text-xs uppercase tracking-widest font-semibold mb-1">Next Game</p>
          <p className="font-bold text-xl">vs {nextGame.opponent}</p>
          <p className="text-white/80 text-sm mt-1">{nextGame.date} · {nextGame.time}</p>
          <p className="text-white/60 text-xs mt-1">{nextGame.location}</p>
          <Badge className="mt-3 bg-[#FFB612] text-[#5A1414] font-bold">{nextGame.homeAway}</Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Recent Results */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle className="text-[#5A1414]">Recent Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentResults.map((game, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium text-sm">{game.opponent}</p>
                  <p className="text-xs text-muted-foreground">{game.week}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{game.score}</span>
                  <Badge variant={game.result === "W" ? "default" : "destructive"} className={game.result === "W" ? "bg-green-600" : ""}>
                    {game.result}
                  </Badge>
                </div>
              </div>
            ))}
            <Link href="/schedule" className="text-[#5A1414] text-sm font-medium hover:underline">
              Full schedule →
            </Link>
          </CardContent>
        </Card>

        {/* Headlines */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-[#5A1414]">Latest News</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {headlines.map((item, i) => (
              <div key={i} className="flex items-start justify-between gap-4 py-2 border-b last:border-0">
                <p className="font-medium text-sm leading-snug">{item.title}</p>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{item.time}</span>
              </div>
            ))}
            <Link href="/news" className="text-[#5A1414] text-sm font-medium hover:underline">
              All news →
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {quickLinks.map(({ href, label, icon, desc }) => (
          <Link key={href} href={href}>
            <Card className="hover:border-[#5A1414] hover:shadow-md transition-all cursor-pointer h-full">
              <CardContent className="pt-5 text-center">
                <div className="text-3xl mb-2">{icon}</div>
                <p className="font-bold text-[#5A1414]">{label}</p>
                <p className="text-xs text-muted-foreground mt-1">{desc}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
