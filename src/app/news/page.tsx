import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    title: "Commanders lock up key offensive lineman to multi-year extension",
    category: "Contracts",
    time: "2 hours ago",
    author: "Staff Report",
    excerpt: "Washington made a significant move to protect franchise QB Jayden Daniels, agreeing to terms on a four-year extension with starting left tackle Charles Leno Jr., keeping the offensive line intact heading into 2025.",
  },
  {
    title: "Jayden Daniels named NFC Offensive Player of the Week",
    category: "Awards",
    time: "5 hours ago",
    author: "Staff Report",
    excerpt: "After throwing for 312 yards and 3 touchdowns while rushing for 89 yards in Sunday's victory over the Philadelphia Eagles, Daniels earned his fourth NFC Offensive Player of the Week honor this season.",
  },
  {
    title: "Commanders 2025 schedule released — full breakdown",
    category: "Schedule",
    time: "1 day ago",
    author: "Beat Reporter",
    excerpt: "Washington's 2025 regular season schedule features a tough early stretch against division rivals before a favorable second half. Here's a game-by-game breakdown with predictions for each matchup.",
  },
  {
    title: "Mock Draft: Who does Washington target in Round 1?",
    category: "Draft",
    time: "2 days ago",
    author: "Draft Analyst",
    excerpt: "With a top-10 pick secured after a down 2024 season, the Commanders have plenty of options. Edge rusher, cornerback, and offensive tackle are the most likely targets according to league insiders.",
  },
  {
    title: "Terry McLaurin hits 1,000 yards for fourth straight season",
    category: "Milestone",
    time: "3 days ago",
    author: "Staff Report",
    excerpt: "Scary Terry has done it again. McLaurin surpassed the 1,000-yard mark for the fourth consecutive season, cementing his status as one of the most consistent receivers in the NFC.",
  },
  {
    title: "Daron Payne earns first Pro Bowl selection",
    category: "Awards",
    time: "4 days ago",
    author: "Staff Report",
    excerpt: "The interior defensive tackle earned his first Pro Bowl nod after recording 9.5 sacks, 15 tackles for loss, and 3 forced fumbles this season, anchoring one of the league's better defensive fronts.",
  },
  {
    title: "Inside the Commanders' offensive line transformation under new coaching staff",
    category: "Feature",
    time: "5 days ago",
    author: "Senior Writer",
    excerpt: "A deep dive into how Washington rebuilt its offensive line over the past two years, creating the protected pocket that allowed Jayden Daniels to thrive in his rookie season.",
  },
  {
    title: "Commanders sign safety Percy Butler to contract extension",
    category: "Contracts",
    time: "6 days ago",
    author: "Staff Report",
    excerpt: "Washington secured one of their key defensive pieces for the long term, inking Butler to a three-year deal worth $21 million, keeping the starting safety unit intact through 2027.",
  },
];

const categoryColors: Record<string, string> = {
  Contracts: "bg-blue-100 text-blue-800",
  Awards: "bg-yellow-100 text-yellow-800",
  Schedule: "bg-purple-100 text-purple-800",
  Draft: "bg-green-100 text-green-800",
  Milestone: "bg-orange-100 text-orange-800",
  Feature: "bg-gray-100 text-gray-800",
};

export default function NewsPage() {
  const [featured, ...rest] = articles;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#5A1414]">News</h1>
        <p className="text-muted-foreground mt-1">Latest Washington Commanders coverage</p>
      </div>

      {/* Featured Article */}
      <Card className="border-l-4 border-l-[#5A1414]">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={categoryColors[featured.category] ?? "bg-gray-100 text-gray-800"}>{featured.category}</Badge>
            <span className="text-xs text-muted-foreground">{featured.time} · {featured.author}</span>
          </div>
          <h2 className="text-xl font-bold leading-snug hover:text-[#5A1414] cursor-pointer">{featured.title}</h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">{featured.excerpt}</p>
        </CardContent>
      </Card>

      {/* Rest of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rest.map((article, i) => (
          <Card key={i} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-1">
                <Badge className={categoryColors[article.category] ?? "bg-gray-100 text-gray-800"}>{article.category}</Badge>
                <span className="text-xs text-muted-foreground">{article.time}</span>
              </div>
              <h3 className="font-bold leading-snug hover:text-[#5A1414]">{article.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
              <p className="text-xs text-muted-foreground mt-2">{article.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
