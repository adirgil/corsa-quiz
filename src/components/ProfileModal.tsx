"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "@/store/userProfileSlice";
import { RootState } from "@/store/store";
import { toastSuccess } from "@/lib/toast";

export default function ProfileModal({
  trigger,
}: {
  trigger: React.ReactNode;
}) {
  const dispatch = useDispatch();
  const { username, profileImageUrl } = useSelector(
    (state: RootState) => state.userProfile
  );

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setName(username);
    setImage(profileImageUrl);
  }, [username, profileImageUrl]);

  const handleSave = () => {
    dispatch(setProfile({ username: name, profileImageUrl: image }));
    toastSuccess("Profile updated");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Profile image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
