"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
import { DeleteModal } from "@/app/globallayouts/DeleteModal";
import { useRouter } from "next/navigation";
import { UpdateModal } from "@/app/globallayouts/UpdateModal";

type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  createdAt: string;
};

const ViewPage = () => {
  const [user, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

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

  const handleDelete = async (id: string) => {
    try {
      const response = await axios.delete(`/api/user?id=${id}`);
      console.log("User deleted:", response.data);
      getUsers();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios error:",
          error.response?.data?.message || error?.message
        );
        setError(error.response?.data?.message);
      }
      console.error("Error deleting user:", error);
    }
  };

  const handleUpdate = (id: string) => {
    router.push(`/user/updateuser/${id}`);
  };
  return (
    <div className="min-h-screen flex p-8  items-center  justify-center">
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
        <TableBody className=" space-x-4">
          {user.map((user) => {
            return (
              <TableRow key={user.email}>
                <TableCell className="font-medium">{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.createdAt}</TableCell>
                <TableCell className="flex gap-2">
                  {/* <Button
                    variant="outline"
                    onClick={() => handleUpdate(user._id)}
                  >
                    Update
                  </Button> */}
                  <UpdateModal id={user._id} onUpdated={getUsers} />
                  {/* <Button variant="outline" onClick={() => handleDelete(user?._id)}>Delete</Button> */}
                  <DeleteModal id={user._id} onDelete={handleDelete} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default ViewPage;
