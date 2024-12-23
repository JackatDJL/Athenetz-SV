import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "No Content",
};

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1>No Content</h1>
    </div>
  );
}
