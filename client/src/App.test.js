// import { render, screen, waitFor } from "@testing-library/react";
// import React from "react";
// import App from "./App";
// import { getProductsMockResponse as products } from "./mocks/handlers";

// const setup = () => render(<App />);
// describe("App", () => {
//   beforeEach(() => {
//     // render(<App />);
//   });

//   test("The app renders", () => {
//     setup();
//     const button = screen.getByText(/Buy course/i);
//     expect(button).toBeInTheDocument();
//   });

//   // test("All products are rendered", async () => {
//   //   await waitFor(() => {
//   //     products.forEach((product) => { expect(
//   //               screen.getByRole("cell",       {
//   //                 name: "Personal Property",
//   //                 description:
//   //                   "Introduces the concept of personal property and outlines the range of legal right and duties associated with the concept.",
//   //                 price: "$1,000.00",
//   //                 image:
//   //                   "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
//   //                 buylink: "https://buy.stripe.com/test_00g8z29Yg0Bbbyo003",})
//   //             ).toBeInTheDocument();
//   //           )}};
//   //   });

//   test("All products are rendered", async () => {
//     setup();
//     // See https://testing-library.com/docs/dom-testing-library/api-async/#waitfor
//     await waitFor(() => {
//       products.forEach((products) => {
//         expect(
//           screen.getByRole("cell", { name: products.description })
//         ).toBeInTheDocument();
//         // TODO: assert that each of the todos is rendered
//         // Use getByRole() https://testing-library.com/docs/queries/byrole/
//         // expect().toBeInTheDocument();
//       });
//     });
//   });
// });

// test("All products are rendered", async () => {
//   await waitFor(() => {
//     products.forEach((product) => {
//       expect(
//         screen.getByRole("cell",       {
//           name: "Personal Property",
//           description:
//             "Introduces the concept of personal property and outlines the range of legal right and duties associated with the concept.",
//           price: "$1,000.00",
//           image:
//             "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
//           buylink: "https://buy.stripe.com/test_00g8z29Yg0Bbbyo003",})
//       ).toBeInTheDocument();
//     )};
//   });
