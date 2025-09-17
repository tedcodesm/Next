"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function UpdateUserPage() {
  const { userId } = useParams();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

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
        setPassword(""); // don't show actual password
      } catch (err) {
        console.error("Error fetching user:", err);
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      const res = await axios.put(`/api/user?id=${userId}`, {
        username,
        email,
        password,
      });

      const data = res.data;
      setMessage(data.message || "User updated successfully");
    } catch (err) {
      console.error("Error updating user:", err);
      setError("Something went wrong while updating user");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>
            {loading ? "Loading User..." : "Update User"}
          </CardTitle>
          <CardDescription>
            Update the details of user <span className="font-bold">{userId}</span>
            {error && (
              <p className="text-red-500 text-sm font-mono font-semibold mt-2">
                {error}
              </p>
            )}
            {message && (
              <p className="text-green-500 text-sm font-mono font-semibold mt-2">
                {message}
              </p>
            )}
          </CardDescription>
          <CardAction>
            <Link href="/user" passHref>
              <Button variant="link">Back to Users</Button>
            </Link>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter new username"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter new email"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter new password"
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-2">
          <Button
            onClick={handleSubmit}
            type="submit"
            className="w-full hover:cursor-pointer"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update User"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
