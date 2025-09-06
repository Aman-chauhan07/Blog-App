"use client";
import Bloglist from "@/Components/Bloglist";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Bloglist/>
      <Footer/>
    </>
  );
}
