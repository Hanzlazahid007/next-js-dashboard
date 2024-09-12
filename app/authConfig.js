// // export const authConfig = {
// //   providers: [],
// //   pages: {
// //     signIn: "/login",
// //   },
// //   callbacks: {
// //     authorized({ auth, request }) {
// //       const isLoggedIn = auth?.user;
// //       const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
// //       if (isOnDashboard) {
// //         if (!isLoggedIn) return false;
// //       } else if (isLoggedIn) {
// //         return Response.redirect(new URL("/dashboard", request.nextUrl));
// //       }
// //       return true;
// //     },
// //   },
// // };
// // ====================
// export const authConfig = {
//   providers: [],
//   pages: {
//     signIn: "/login",
//   },
//   callbacks: {
//     authorized({ auth, request }) {
//       const isLoggedIn = auth?.user;
//       const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
//       if (isOnDashboard) {
//         if (!isLoggedIn) return false;
//       } else if (isLoggedIn) {
//         return Response.redirect(new URL("/dashboard", request.nextUrl));
//       }
//       return true;
//     },
//   },
// };
