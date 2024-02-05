/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";

export default function TopHeader() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const addLeadingZero = (value: any) => {
    return value < 10 ? `0${value}` : value;
  };

  const month = currentDateTime.toLocaleString("en-US", { month: "short" });
  const day = addLeadingZero(
    currentDateTime.toLocaleString("en-US", { day: "numeric" })
  );
  const weekday = currentDateTime.toLocaleString("en-US", { weekday: "short" });
  const hour = addLeadingZero(
    currentDateTime.toLocaleString("en-US", { hour: "numeric", hour12: false })
  );
  const minute = addLeadingZero(
    currentDateTime.toLocaleString("en-US", { minute: "numeric" })
  );
  const second = addLeadingZero(
    currentDateTime.toLocaleString("en-US", { second: "numeric" })
  );

  return (
    <div className="md:flex hidden">{`${month} ${day} ${weekday} ${hour}:${minute}:${second}`}</div>
  );
}
