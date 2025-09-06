import NotFound from "@/app/not-found";
import { Metadata } from "next";
import React from "react";


type ProductProps = {
  params: Promise<{ productId: number }>;
}

export const generateMetadata = async ({
  params,
}: ProductProps): Promise<Metadata> => {
  const productId = (await params).productId;
  return {
    title: `Product ${productId}`,
    description: `Details about product ${productId}`,
  };
};

const page = async ({ params }: ProductProps) => {
    const productId = (await params).productId;
    if (productId > 1000) {
      return NotFound();
    }
  return (
    <div className="m-10 items-center space-y-5 min-h-screen flex justify-center flex-col">
      <h1 className="text-4xl font-bold text-amber-400">Product Details</h1>
      <p>Here are the details for the selected product: {productId}</p>
    </div>
  );
};

export default page;
