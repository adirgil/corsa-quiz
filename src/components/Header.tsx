"use client";

import Link from "next/link";
import { useSelector } from "react-redux";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { RootState } from "@/store/store";
import Image from "next/image";
import ProfileModal from "./ProfileModal";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export default function Header() {
  const { username, profileImageUrl } = useSelector(
    (state: RootState) => state.userProfile
  );
  const { toggleTheme, theme } = useTheme();

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 border-b bg-white">
      <div className="text-xl font-bold">
        Tweed<span style={{ color: "var(--primary)" }}>Quiz</span>
      </div>
      <Button
        variant="ghost"
        style={{ color: "var(--primary)", border: "1px solid var(--primary)" }}
        onClick={toggleTheme}
      >
        {theme === "blue" ? "Switch to Green" : "Switch to Blue"}
      </Button>

      <nav className="space-x-4">
        <Link href="/creator">
          <Button
            variant="ghost"
            className={`border-b-2 transition-colors ${
              isActive("/creator")
                ? "text-[var(--primary)] border-[var(--primary)]"
                : "text-gray-600 border-transparent"
            }`}
          >
            Create Quiz
          </Button>
        </Link>
        <Link href="/viewer">
          <Button
            variant="ghost"
            className={`border-b-2 transition-colors ${
              isActive("/viewer")
                ? "text-[var(--primary)] border-[var(--primary)]"
                : "text-gray-600 border-transparent"
            }`}
          >
            View Quiz
          </Button>
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
