import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard } from "lucide-react";

function Home() {
  return (
    <div className="animate-fadeInUp">
      <div className="bg-white w-screen h-screen flex items-center justify-center">
        <div className="text-center animate-fade-in">
          <div className="mb-8">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-black mb-4">
              Welcome to Dashboard
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              A sleek and minimal dashboard for managing your content and
              analytics.
            </p>
          </div>

          <Link to="/dashboard">
            <Button size="lg" className="button-press">
              Go to Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
