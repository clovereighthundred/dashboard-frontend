import { useState } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Bell,
  Shield,
  Palette,
  Globe,
  Download,
  Trash2,
  Save,
  Moon,
  Sun,
} from "lucide-react";

const notificationSettings = [
  {
    id: "email_notifications",
    title: "Email notifications",
    description: "Receive email updates about your activity and content",
    enabled: true,
  },
  {
    id: "push_notifications",
    title: "Push Notifications",
    description: "Get notified about engagement on your posts",
    enabled: false,
  },
  {
    id: "marketing_emails",
    title: "Marketing Emails",
    description: "Recieve updates about new features and tips",
    enabled: true,
  },
];

const privacySettings = [
  {
    id: "profile_visibility",
    title: "Public Profile",
    description: "Make your profile visible to everyone",
    enabled: true,
  },
  {
    id: "analytics_sharing",
    title: "Analytics Sharing",
    description: "Share anonymous usage data to help improve the platform",
    enabled: false,
  },
  {
    id: "search_indexing",
    title: "Search Engine Indexing",
    description: "Allow search engines to index your content",
    enabled: true,
  },
];

function Settings() {
  const [notifications, setNotifications] = useState(notificationSettings);
  const [privacy, setPrivacy] = useState(privacySettings);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

  const toggleNotification = (id: string) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  const togglePrivacy = (id: string) => {
    setPrivacy((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <div className="bg-white p-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-black">Settings</h1>
          <p className="text-muted-foreground mt-1">
            Manage your account preferences and privacy settings.
          </p>
        </div>
        <Button className="button-press">
          <Save className="h-4 w-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general" className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                <CardTitle className="text-black">Appearance</CardTitle>
              </div>
              <CardDescription>
                Customize how the interface looks and feels
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium text-black">Dark Mode</h4>
                  <p className="text-sm text-muted-foreground">
                    Switch between light and dark themes
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Sun className="h-4 w-4 text-muted-foreground" />
                  <Switch
                    checked={isDarkMode}
                    onCheckedChange={setIsDarkMode}
                  />
                  <Moon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                <CardTitle className="text-black">Language & Region</CardTitle>
              </div>
              <CardDescription>
                Set your preferred language and regional settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-black mb-2 block">
                  Language
                </label>
                <select
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option value="en">English</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                <CardTitle className="text-black">
                  Notification Preferences
                </CardTitle>
              </div>
              <CardDescription>
                Choose what notifications you want to receive
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {notifications.map((setting, index) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <h4 className="font-medium text-black">{setting.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {setting.description}
                    </p>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => toggleNotification(setting.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy */}
        <TabsContent value="privacy" className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                <CardTitle className="text-black">Privacy Controls</CardTitle>
              </div>
              <CardDescription>
                Manage your privacy and data sharing preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {privacy.map((setting, index) => (
                <div
                  key={setting.id}
                  className="flex items-center justify-between p-3 rounded-lg border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div>
                    <h4 className="font-medium text-black">{setting.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {setting.description}
                    </p>
                  </div>
                  <Switch
                    checked={setting.enabled}
                    onCheckedChange={() => togglePrivacy(setting.id)}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account */}
        <TabsContent value="account" className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-black">Account Management</CardTitle>
              <CardDescription>
                Manage your account settings and data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-black mb-2">
                    Change Password
                  </h4>
                  <div className="space-y-2">
                    <Input type="password" placeholder="Current password" />
                    <Input type="password" placeholder="New password" />
                    <Input type="password" placeholder="Confirm new password" />
                  </div>
                  <Button className="mt-2 button-press">Update Password</Button>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-medium text-black mb-2">Data Export</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Download a copy of your data including videos, comments, and
                    analytics.
                  </p>
                  <Button variant="outline" className="button-press">
                    <Download className="h-4 w-4 mr-2" />
                    Export Data
                  </Button>
                </div>

                <div className="border-t border-border pt-4">
                  <h4 className="font-medium text-destructive mb-2">
                    Danger Zone
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Permanently delete your account and all associated data.
                    This action cannot be undone.
                  </p>
                  <Button variant="destructive" className="button-press">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Settings;
