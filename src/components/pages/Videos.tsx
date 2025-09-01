import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Play,
  Eye,
  Calendar,
  Upload,
  Video,
} from "lucide-react";

const videos = [
  {
    id: 1,
    title: "Race Highlights | 2025 Saudi Arabian Grand Prix",
    thumbnail:
      "src/assets/thumbnails/2025 Saudi Arabian GP - George Russell & Lando Norris.jpg",
    views: "12.5K",
    status: "Published",
    date: "2024-01-24",
    duration: "15:32",
  },
  {
    id: 2,
    title: '13" M4 MacBook Air Review',
    thumbnail:
      "src/assets/thumbnails/Apple-MacBook-Air-hero-250305_big.jpg.large_2x.jpg",
    views: "8.2K",
    status: "Published",
    date: "2024-02-13",
    duration: "12:24",
  },
  {
    id: 3,
    title: "Error handling in React",
    thumbnail: "src/assets/thumbnails/errors.png",
    views: "0",
    status: "Draft",
    date: "2024-02-29",
    duration: "20:12",
  },
  {
    id: 4,
    title: "Introduction to AI Engineering",
    thumbnail: "src/assets/thumbnails/billCipher.png",
    views: "15.1K",
    status: "Published",
    date: "2024-04-17",
    duration: "30:00",
  },
];

function Videos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "published" && video.status === "Published") ||
      (activeTab === "drafts" && video.status === "Draft");
    return matchesSearch && matchesTab;
  });

  return (
    <div className="bg-white p-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Videos</h1>
          <p className="text-muted-foreground mt-1">
            Manage your video content and track performance.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="button-press">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button className="button-press">
            <Plus className="h-4 w-4 mr-2" />
            New Video
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search videos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline" className="button-press">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="published">Published</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <Card
                key={video.id}
                className="card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-200 rounded-t-lg flex items-center justify-center">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="button-press"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>

                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base line-clamp-2 text-black">
                      {video.title}
                    </CardTitle>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="button-press"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Analytics</DropdownMenuItem>
                        <DropdownMenuItem>Share</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={
                        video.status === "Published" ? "default" : "secondary"
                      }
                    >
                      {video.status}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      {video.views} views
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(video.date).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-12">
              <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-black mb-2">
                No videos found
              </h3>
              <p className="text-muted-foreground mb-4">
                {searchTerm
                  ? "Try adjusting your search terms."
                  : "Get started by uploading your first video"}
              </p>
              <Button className="button-press">
                <Plus className="h-4 w-4 mr-2" />
                Create Video
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Videos;
