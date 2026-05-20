"use client";

import { useEffect } from "react";

interface Props {
  ebookId: string;
  title: string;
  price: number;
}

export function PixelViewContent({ ebookId, title, price }: Props) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_ids: [ebookId],
        content_name: title,
        content_type: "product",
        value: price,
        currency: "INR",
      });
    }
  }, [ebookId, title, price]);

  return null;
}
