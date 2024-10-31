import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../components/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar";
import Separator from "../components/separator";
import { ChevronRight, Clock, Key, UserPlus, FileText, Shield, LogOut } from "lucide-react";

export default function Component() {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/placeholder.svg?height=100&width=100"
  });

  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/edit");
  };
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent looping
    e.target.src = '/placeholder.svg'; // Set the fallback image
  };
  
  const menuItems = [
    { icon: Clock, label: "Timesheet & Earnings", href: "/timesheet" },
    { icon: Key, label: "Change Password", href: "/change-password" },
    { icon: UserPlus, label: "Refer a Friend", href: "/refer" },
    { icon: FileText, label: "Terms of Service", href: "/terms" },
    { icon: Shield, label: "Privacy Policy", href: "/privacy" }
  ];

  const handleLogout = () => {
    console.log("Logging out...");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Card className="mb-4">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold" title="Profile" />
          <button className="text-blue-500 hover:text-blue-700" onClick={handleEditClick}>
            Edit
          </button>
        </CardHeader>
        </Card>
        <Card>
        <CardContent className="flex items-center p-4">
    <Avatar className="h-20 w-20 mr-4">
      {user.avatar ? (
        <AvatarImage 
          src={user.avatar} 
          alt={user.name} 
          onError={handleImageError}
        />
      ) : (
        <AvatarFallback fallbackText={user.name.split(' ').map(n => n[0]).join('')} />
      )}
    </Avatar>
    <div>
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-sm text-gray-500">{user.email}</p>
    </div>
  </CardContent>
</Card>


      <Card>
        <CardContent className="p-0">
          {menuItems.map((item, index) => (
            <div key={item.label}>
              <Link to={item.href} className="flex items-center justify-between w-full py-6 px-4 text-gray-700 hover:bg-gray-200">
                <div className="flex items-center">
                  <item.icon className="mr-2 h-4 w-4" />
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="h-4 w-4" />
              </Link>
              {index < menuItems.length - 1 && <Separator />}
            </div>
          ))}
        </CardContent>
      </Card>

      <Button 
    variant="destructive" 
    className="bg-red-600 w-full mt-4 flex items-center justify-center" 
    onClick={handleLogout}
>
    <LogOut className="mr-2 h-4 w-4" /> Logout
</Button>

    </div>
  );
} 