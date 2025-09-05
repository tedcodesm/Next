import React from "react";

type UserParams = {
  params: {
    userId: string;
  };
};

const page = ({ params }: UserParams) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-400">User Details</h1>
      <p>Here are the details for the selected user: {params.userId}</p>
    </div>
  );
};

export default page;
