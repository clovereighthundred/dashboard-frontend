import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  TrendingUp,
  Users,
  Video,
  Eye,
  Plus,
  MoreHorizontal,
} from "lucide-react";

const stats = [
  {
    title: "Total Views",
    value: "52,897",
    change: "+27.1%",
    icon: Eye,
    trend: "up",
  },

  {
    title: "Subscribers",
    value: "4,812",
    change: "+63.7%",
    icon: Users,
    trend: "up",
  },

  {
    title: "Videos",
    value: "12",
    change: "+4.4%",
    icon: Video,
    trend: "up",
  },

  {
    title: "Engagement",
    value: "75.2%",
    change: "+3.1%",
    icon: TrendingUp,
    trend: "up",
  },
];

const recentVideos = [
  {
    id: 1,
    title: "Getting Started with React",
    views: "12.5K",
    status: "Published",
    date: "2 days ago",
  },
  {
    id: 2,
    title: "Advanced TypeScript Tips",
    views: "8.2K",
    status: "Published",
    date: "5 days ago",
  },
  {
    id: 3,
    title: "Introduction to AI Engineering",
    views: "15.1K",
    status: "Published",
    date: "1 week ago",
  },
];

function Overview() {
  return (
    <div className="bg-white p-8 animate-fade-in">
      {/*Header*/}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Overview</h1>
          <p className="text-muted-foreground mt-1">
            Welcome back! Here's what happening with your content.
          </p>
        </div>
        <Button className="button-press">
          <Plus className="h-4 w-4 mr-2" />
          New Video
        </Button>
      </div>

      {/* {Stats Grid} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={stat.title}
              className="card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from
                  last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/*Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* {Recent Videos} */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-black">Recent Videos</CardTitle>
            <CardDescription>Your latest published content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentVideos.map((video, index) => (
                <div
                  key={video.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-accent transition-colors animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-1">
                    <h4 className="">{video.title}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-muted-foreground">
                        {video.views} views
                      </span>
                      <span className="text-sm text-muted-foreground">.</span>
                      <span className="text-sm text-muted-foreground">
                        {video.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{video.status}</Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="button-press"
                    >
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* {Analytics Preview} */}
        <Card className="card-hover">
          <CardHeader>
            <CardTitle className="text-black">Analytics</CardTitle>
            <CardDescription>
              Performance overview for the last 30 days.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Views</span>
                <span className="text-sm text-muted-foreground">34,231</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-black h-2 rounded-full w-[68%] animate-pulse-subtle"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Engagement</span>
                <span className="text-sm text-muted-foreground">69.2%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-black h-2 rounded-full w-[89%] animate-pulse-subtle"></div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Retention</span>
                <span className="text-sm text-muted-foreground">75.6%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div className="bg-black h-2 rounded-full w-[76%] animate-pulse-subtle"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Overview;
