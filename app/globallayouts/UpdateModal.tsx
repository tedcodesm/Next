"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useParams } from "next/navigation";

type UpdateModalProps = {
  id: string;
  onUpdated?: () => void; // optional callback to refresh user list
};

export function UpdateModal({ id, onUpdated }: UpdateModalProps) {
      const { userId } = useParams(); 
    
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

   // Fetch user details by ID
    useEffect(() => {
      const fetchUser = async () => {
        if (!userId) return;
        setLoading(true);
        try {
          const res = await axios.get(`/api/user?id=${userId}`);
          const user = res.data;
          setUsername(user.username);
          setEmail(user.email);
          setPassword(""); // don't show actual password for security
        } catch (error) {
          console.error("Error fetching user:", error);
          setMessage("Failed to fetch user details");
        } finally {
          setLoading(false);
        }
      };
  
      fetchUser();
    }, [userId]);

const handleUpdate = async () => {
  try {
    const updatedData: Record<string, string> = {};

    if (username.trim()) updatedData.username = username;
    if (email.trim()) updatedData.email = email;
    if (password.trim()) updatedData.password = password;

    const res = await axios.put(`/api/user?id=${id}`, updatedData);

    const data = res.data;

    if (res.status === 200) {
      setMessage(`${data.message}`);
      if (onUpdated) onUpdated();
    } else {
      setMessage(`${data.message}`);
    }
  } catch (error: unknown) {
    console.error("Error updating user:", error);
    setMessage("Something went wrong");
  }
};


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Update User</DialogTitle>
          <DialogDescription>
            Update the details of user{" "}
            <span className="font-bold">{id}</span>.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
            {message && (
          <p className="mt-2 text-center text-sm text-gray-600">{message}</p>
        )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="col-span-3"
              placeholder="Enter new username"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3"
              placeholder="Enter new email"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password" className="text-right">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="col-span-3"
              placeholder="Enter new password"
            />
          </div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleUpdate}>Save Changes</Button>
        </DialogFooter>

        
      </DialogContent>
    </Dialog>
  );
}
