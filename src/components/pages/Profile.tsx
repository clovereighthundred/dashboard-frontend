import { useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

import {
  Camera,
  Edit3,
  Mail,
  MapPin,
  Calendar,
  Globe,
  Users,
  Video,
  Eye,
  Save,
} from "lucide-react";

const profileStats = [
  { label: "Total Views", value: "42.5K", icon: Eye },
  { label: "Subscribers", value: "2.7K", icon: Users },
  { label: "Videos", value: "11", icon: Video },
];

const achievements = [
  {
    title: "First video",
    description: "Uploaded your first video",
    date: "Jan 2024",
  },
  {
    title: "1K views",
    description: "Reached 1,000 total views",
    date: "April 2024",
  },
  {
    title: "Creator milestone",
    description: "Gained 2.5K subscribers within 10 months",
    date: "Oct 2024",
  },
];

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Adefela Adegbokun",
    email: "felaadegbokun@gmail.com",
    bio: "Skilled frontend engineer and UI designer, sharing knowledge on all things dev and design 🚀",
    location: "Lagos, NG",
    website: "aadefela.dev",
    joinDate: "July 2025",
  });

  // const handleSave = () => {
  //   setIsEditing(false); // leaving this false since there's no backend to save to
  // };

  return (
    <div className="bg-white p-8 animate-fade-in">
      {/* {Header} */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Profile</h1>
          <p className="text-muted-foreground mt-1">
            Manage your profile information and preferences
          </p>
        </div>
        <Button
          onClick={() => setIsEditing(!isEditing)}
          variant={isEditing ? "default" : "outline"}
          className="button-press"
        >
          {isEditing ? (
            <>
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* {Profile Info} */}
        <div className="lg:col-span-2 space-y-6">
          {/* {Basic Info Card} */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-black">Basic Information</CardTitle>
              <CardDescription>Your public profile description</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
                    <AvatarFallback className="text-lg">AA</AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute -bottom-2 -right-2 h-8 w-8 button-press"
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-black">
                    {profile.name}
                  </h3>
                  <p className="text-muted-foreground">{profile.email}</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-black mb-2 block">
                    Full Name
                  </label>
                  <Input
                    value={profile.name}
                    onChange={(e) =>
                      setProfile({ ...profile, name: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black mb-2 block">
                    Email
                  </label>
                  <Input
                    value={profile.email}
                    onChange={(e) =>
                      setProfile({ ...profile, email: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-black mb-2 block">
                  Bio
                </label>
                <textarea
                  className="w-full min-h-[100px] px-3 py-2 border border-input rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  value={profile.bio}
                  onChange={(e) =>
                    setProfile({ ...profile, bio: e.target.value })
                  }
                  disabled={!isEditing}
                  placeholder="Tell us about yourself..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-black mb-2 block">
                    Location
                  </label>
                  <Input
                    value={profile.location}
                    onChange={(e) =>
                      setProfile({ ...profile, location: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-black mb-2 block">
                    Website
                  </label>
                  <Input
                    value={profile.website}
                    onChange={(e) =>
                      setProfile({ ...profile, website: e.target.value })
                    }
                    disabled={!isEditing}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* {Achievements} */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-black">Acheivements</CardTitle>
              <CardDescription>
                Your milestones and accomplishments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="flex items-center gap-4 p-3 rounded-lg border border-border animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🏆</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-black">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {achievement.description}
                      </p>
                    </div>
                    <Badge variant="secondary">{achievement.date}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* {Sidebar} */}
        <div className="space-y-6">
          {/* Stats */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-black">Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profileStats.map((profile, index) => {
                  const Icon = profile.icon;
                  return (
                    <div
                      key={profile.label}
                      className="flex items-center justify-between animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium">
                          {profile.label}
                        </span>
                      </div>
                      <span className="font-semibold text-black">
                        {profile.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Quick Info */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-black">Quick Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{profile.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {profile.location}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    {profile.website}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">
                    Joined {profile.joinDate}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Profile;
