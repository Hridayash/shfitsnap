import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar";
import Button from "../components/button";
import BackButton from "../components/backbutton";


export default function Edit() {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",

        avatar: "/placeholder.svg?height=100&width=100",
    });

    const [newAvatar, setNewAvatar] = useState<string | ArrayBuffer | null>(null);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => setNewAvatar(reader.result);

            reader.readAsDataURL(file);
        }
    };

    const handleUpdateProfile = () => {

        setUser((prev) => ({
            ...prev,
            name,
            email,
            avatar: newAvatar as string || prev.avatar,
        }));


        navigate("/profile", { state: { message: "Your profile has been updated successfully!" } });
    };

    return (

        
        <div>
            <BackButton />
            <div className="flex flex-col items-center p-6 space-y-4 bg-gray-50 dark:bg-gray-800 min-h-screen text-gray-800 dark:text-gray-200 transition-all">
            <h2 className="text-2xl font-semibold">Edit Profile</h2>

            <Avatar className="h-24 w-24 ring-2 ring-gray-300 dark:ring-gray-500">
                {newAvatar ? (
                    <AvatarImage src={newAvatar as string} alt={name} />
                ) : (
                    <AvatarFallback fallbackText={name.split(" ").map((n) => n[0]).join("")} />
                )}
            </Avatar>


            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 

                className="mt-2 text-sm text-gray-600 dark:text-gray-300 cursor-pointer bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-1"
            />

            <div className="flex flex-col space-y-2 w-full max-w-md">
                <label className="text-sm font-medium">Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    placeholder="Name"
                />
            </div>

            <div className="flex flex-col space-y-2 w-full max-w-md">
                <label className="text-sm font-medium">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700"
                    placeholder="Email"
                />
            </div>

            <Button 
                onClick={handleUpdateProfile} 
                label="Update Profile" 
                className="mt-4 w-full max-w-md p-2 bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 text-white rounded-md"
            />
            </div>

        </div>
    );
}
