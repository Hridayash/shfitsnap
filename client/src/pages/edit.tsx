import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avatar"; // Adjust import paths as needed
import Button from "../components/button"; // Adjust import paths as needed

export default function Edit() {
    const [user, setUser] = useState({
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/placeholder.svg?height=100&width=100"
    });

    const [newAvatar, setNewAvatar] = useState<string | ArrayBuffer | null>(null);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewAvatar(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdateProfile = () => {
        // Update the user profile (e.g., send to backend)
        setUser((prev) => ({
            ...prev,
            name,
            email,
            avatar: newAvatar as string || prev.avatar, // Use new avatar or fallback to previous
        }));

        // Navigate back to the profile page with a success message
        navigate("/profile", { state: { message: "Your profile has been updated successfully!" } });
    };

    return (
        <div className="flex flex-col items-center p-4">
            <Avatar className="h-20 w-20">
                {newAvatar ? (
                    <AvatarImage src={newAvatar as string} alt={name} />
                ) : (
                    <AvatarFallback fallbackText={name.split(' ').map(n => n[0]).join('')} />
                )}
            </Avatar>
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageChange} 
                className="mt-4" 
            />
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded"
                placeholder="Name"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 p-2 border border-gray-300 rounded"
                placeholder="Email"
            />
            <Button onClick={handleUpdateProfile} label="Update Profile" className="mt-4" />
        </div>
    );
}
