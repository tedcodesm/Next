"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { View } from "lucide-react";
import axios from "axios";

type User = {
  username: string;
  email: string;
  password: string;
  createdAt: string;
};

const ViewPage = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get("/api/user");

      setUser(res.data);
      setLoading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || error.message);
      }
      setLoading(false);
      setError("Failed to fetch users");
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="min-h-screen flex p-8 items-center  justify-center">
      <Table>
        {error && (
          <div className="text-red-500 text-center font-mono font-semibold">
            {error}
          </div>
        )}

        <TableCaption>Viewing the details for the users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user.map((user) => {
            return (
              <TableRow key={user.email}>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewPage;
