"use client";

import { getStoryblokApi } from "@/lib/storyblok";

export default function StoryblokInitializer({ children }) {
  // This executes safely inside the client side mounting phase
  getStoryblokApi(); 
  
  return <>{children}</>;
}