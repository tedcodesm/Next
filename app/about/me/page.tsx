import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Profile Picture */}
          <Image
            src="/globe.svg" // put your image inside public/avatar.png
            alt="Profile Picture"
            width={120}
            height={120}
            className="rounded-full border-4 border-amber-400 shadow"
          />

          {/* Intro */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Edward Njoroge</h1>
            <p className="text-amber-500 font-medium">
              Software Developer • MERN & React Native
            </p>
            <p className="mt-2 text-gray-600">
              I’m a passionate developer who builds modern, scalable, and
              user-friendly applications. I specialize in React, Next.js,
              Node.js, and mobile development with React Native.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "MongoDB",
              "Tailwind CSS",
              "React Native",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-amber-100 text-amber-700 px-4 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600">
            Let’s build something amazing together!
          </p>
          <div className="mt-4 flex gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=dbitlmr112624@spu.ac.ke&su=Project%20Inquiry&body=Hi%20Edward,%20I%20would%20like%20to%20discuss%20a%20project..."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-400 text-white px-4 py-2 rounded-lg shadow hover:bg-amber-500 transition"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
