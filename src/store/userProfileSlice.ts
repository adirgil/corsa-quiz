import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserProfileState = {
  username: string;
  profileImageUrl: string;
};

const initialState: UserProfileState = {
  username: "",
  profileImageUrl: "",
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<UserProfileState>) {
      state.username = action.payload.username;
      state.profileImageUrl = action.payload.profileImageUrl;
    },
  },
});

export const { setProfile } = userProfileSlice.actions;
export default userProfileSlice.reducer;
