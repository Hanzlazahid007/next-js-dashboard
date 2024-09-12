// // import NextAuth from "next-auth";
// // import CredentialsProvider from "next-auth/providers/credentials";
// // import { authConfig } from "./authConfig";
// // import { User } from "./lib/model";
// // const bcrypt = require("bcryptjs");

// // export const login = (cred) => {
// //   try {
// //     const user = User.findOne({ username: cred.username });
// //     if (!user) throw new Error("Wrong Credential");
// //     const isPass = bcrypt.compare(cred.password, user.password);
// //     if (isPass) throw new Error("Wrong Credential");

// //     return user;
// //   } catch (err) {
// //     console.log(err);
// //     throw new Error("failed to login");
// //   }
// // };

// // export const { signIn, signOut, auth } = NextAuth({
// //   ...authConfig,
// //   providers: [
// //     CredentialsProvider({
// //       async authorize(credentials, req) {
// //         try {
// //           const user = await login(credentials);
// //           return user;
// //         } catch (err) {
// //           return null;
// //         }
// //       },
// //     }),
// //   ],

// //   callbacks: {
// //     async jwt({ token, user }) {
// //       const isSignIn = user ? true : false;
// //       if (isSignIn) {
// //         token.username = user.username;
// //         token.img = user.img;
// //       }
// //       return token;
// //     },
// //     async session({ session, token }) {
// //       if (token) {
// //         session.username = token.username;
// //         session.img = token.img;
// //       }
// //     },
// //   },
// // });

// // ====================
// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authConfig } from "./authConfig";
// import { connectToDB } from "./lib/utils";
// import { User } from "./lib/models";
// import bcrypt from "bcrypt";

// const login = async (credentials) => {
//   try {
//     await connectToDB();
//     const user = await User.findOne({ username: credentials.username });

//     if (!user) throw new Error("Wrong credentials!");

//     const isPasswordCorrect = await bcrypt.compare(
//       credentials.password,
//       user.password
//     );

//     if (!isPasswordCorrect) throw new Error("Wrong credentials!");

//     return user;
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to login!");
//   }
// };

// export default NextAuth({
//   ...authConfig,
//   providers: [
//     CredentialsProvider({
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (err) {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.username = user.username;
//         token.img = user.img;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.username = token.username;
//         session.user.img = token.img;
//       }
//       return session;
//     },
//   },
// });
