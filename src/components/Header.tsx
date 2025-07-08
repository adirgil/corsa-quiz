"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import Image from "next/image";
import ProfileModal from "./ProfileModal";

export default function Header() {
  const { username, profileImageUrl } = useSelector(
    (state: RootState) => state.userProfile
  );

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="text-xl font-bold">
        Tweed<span className="text-blue-500">Quiz</span>
      </div>

      <nav className="space-x-4">
        <Link href="/creator">
          <Button variant="ghost">Create Quiz</Button>
        </Link>
        <Link href="/viewer">
          <Button variant="ghost">View Quiz</Button>
        </Link>
      </nav>

      <ProfileModal
        trigger={
          <div className="flex items-center space-x-2 cursor-pointer">
            <Avatar>
              <Image
                src={
                  profileImageUrl ||
                  "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                }
                alt="profile"
                width={32}
                height={32}
                className="rounded-full"
                unoptimized
              />
            </Avatar>
            <span>
              {username || (
                <span className="text-gray-400 italic">Set profile</span>
              )}
            </span>
          </div>
        }
      />
    </header>
  );
}
