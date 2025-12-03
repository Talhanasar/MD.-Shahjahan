"use client"

import React from "react"
import NewsDetailClient from "@/components/NewsDetail"

// This is a static route (no dynamic [slug] folder). The detail component reads the `id` query param.
export default function Page() {
  return <NewsDetailClient />
}