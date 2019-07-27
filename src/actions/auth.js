import {
  firebase,
  googleAuthProvider,
  facebookAuthProvider
} from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startFacebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};

// export const startGithubLogin = () => {
//   return () => {
//     return firebase.auth().signInWithPopup(githubAuthProvider);
//   };
// };

// export const startTwitterLogin = () => {
//   return () => {
//     return firebase.auth().signInWithPopup(twitterAuthProvider);
//   };
// };

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
