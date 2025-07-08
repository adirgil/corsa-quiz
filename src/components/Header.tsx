"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RootState } from "../store/store";
import Image from "next/image";

export default function Header() {
  const { username, profileImageUrl } = useSelector(
    (state: RootState) => state.userProfile
  );

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      {/* Logo */}
      <div className="text-xl font-bold">
        Tweed<span className="text-blue-500">Quiz</span>
      </div>

      {/* Navigation */}
      <nav className="space-x-4">
        <Link href="/creator">
          <Button variant="ghost">Create Quiz</Button>
        </Link>
        <Link href="/viewer">
          <Button variant="ghost">View Quiz</Button>
        </Link>
      </nav>

      {/* Profile / Placeholder */}
      <div className="flex items-center space-x-2">
        {username ? (
          <>
            <Avatar>
              <Image
                src={profileImageUrl || "https://via.placeholder.com/40"}
                alt="profile"
                width={32}
                height={32}
                className="rounded-full"
              />
            </Avatar>
            <span>{username}</span>
            {/* TODO: Open modal */}
          </>
        ) : (
          <span className="italic text-gray-400">No profile yet</span>
        )}
      </div>
    </header>
  );
}
