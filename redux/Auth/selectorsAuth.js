export const selectCurrentUser = (state) => state.auth.currentUser;
export const selectCurrentUserFirebase = (state) =>
  state.auth.currentUserFirebase;

export const selectImageCurrent = (state) => state.auth.imageCurrent;
export const selectAvatarImage = (state) => state.auth.imageAvatar;
