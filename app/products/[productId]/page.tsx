import NotFound from "@/app/not-found";
import React from "react";


const page = async ({ params }: { params: Promise<{ productId: number }> }) => {
    const productId = (await params).productId;
    if (productId > 10) {
      return NotFound();
    }
  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-400">Product Details</h1>
      <p>Here are the details for the selected product: {productId}</p>
    </div>
  );
};

export default page;
