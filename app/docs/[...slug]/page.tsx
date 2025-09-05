// import React from "react";

// interface PageProps {
//   params: { slug?: string[] };
// }

// const Page = ({ params }: PageProps) => {
//   const { slug } = params;
  

//   // Case: /docs/one/two/three
//   if (slug && slug.length === 3) {
//     return (
//       <div>
//         <h1 className="text-4xl font-bold text-amber-400">
//           Documentation - {slug[0]} / {slug[1]} / {slug[2]}
//         </h1>
//         <p>
//           This is the documentation page for {slug[0]}, {slug[1]} and {slug[2]}.
//         </p>
//       </div>
//     );
//   }

//   // Case: /docs/one/two
//   if (slug && slug.length === 2) {
//     return (
//       <div>
//         <h1 className="text-4xl font-bold text-amber-400">
//           Documentation - {slug[0]} / {slug[1]}
//         </h1>
//         <p>
//           This is the documentation page for {slug[0]} and {slug[1]}.
//         </p>
//       </div>
//     );
//   }

//   // Case: /docs/one
//   if (slug && slug.length === 1) {
//     return (
//       <div>
//         <h1 className="text-4xl font-bold text-amber-400">
//           Documentation - {slug[0]}
//         </h1>
//         <p>This is the documentation page for {slug[0]}.</p>
//       </div>
//     );
//   }

//   // Case: /docs
//   return (
//     <div>
//       <h1 className="text-4xl font-bold text-amber-400">Documentation</h1>
//       <p>
//         Welcome to the documentation section. Here you’ll find all the
//         information you need.
//       </p>
//     </div>
//   );
// };

// export default Page;

import React from 'react'

type PropsSlug ={
    params: Promise<{slug: string[]}>
}

const page = async({params}: PropsSlug) => {
  const slug = (await params).slug;

  if(slug?.length === 2){
    return (
      <div>
        <h1 className="text-4xl font-bold text-amber-400">
          Documentation - {slug[0]} / {slug[1]}
        </h1>
        <p>
          This is the documentation page for {slug[0]} and {slug[1]}.
        </p>
      </div>
    );
  }
  

  return (
    <div>
      <h1 className="text-4xl font-bold text-amber-400">
        Documentation - {slug.join(" / ")}
      </h1>
      <p>
        This is the documentation page for {slug.join(", ")}.
      </p>
    </div>
  )
}

export default page

