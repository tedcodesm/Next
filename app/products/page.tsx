"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { Star } from "lucide-react";

export function ProductsPage() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!name || !price || !description || !category || !rating) {
      setError("All fields are required");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/api/products", {
        name,
        price: Number(price),
        description,
        category,
        rating,
      });

      setMessage(res.data?.message || "Product created successfully");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || error.message);
      } else {
        setError("Unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderRatingPicker = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <button
          key={i}
          type="button"
          onClick={() => setRating(i)}
          className="p-2 focus:outline-none"
        >
          <Star
            className={`h-8 w-8 ${
              i <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        </button>
      );
    }
    return <div className="flex gap-2">{stars}</div>;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Create a new Product</CardTitle>
          <CardDescription>
            Enter your product details below to create a new product.
          </CardDescription>
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
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Product Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter product name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                value={price}
                onChange={(e) =>
                  setPrice(e.target.value === "" ? "" : Number(e.target.value))
                }
                type="number"
                placeholder="Enter product price"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                type="text"
                placeholder="Enter product category"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter product description"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ratings">Ratings</Label>
              {renderRatingPicker()}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creating..." : "Create Product"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductsPage;
