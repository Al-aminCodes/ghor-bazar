"use client";

import { useEffect, useState } from "react";

export default function BanglaDate() {
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      setDate(
        new Date().toLocaleDateString("bn-BD", {
          dateStyle: "full",
        }),
      );
    };

    updateDate();

    const timer = setInterval(updateDate, 60_000);

    return () => clearInterval(timer);
  }, []);

  return <p className="text-[#1D271F]">{date}</p>;
}
