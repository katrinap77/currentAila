import { rest } from "msw";

export const getProductsMockResponse = [
  {
    name: "Personal Property",
    description:
      "Introduces the concept of personal property and outlines the range of legal right and duties associated with the concept.",
    price: "$1,000.00",
    image:
      "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    buylink: "https://buy.stripe.com/test_00g8z29Yg0Bbbyo003",
  },
  {
    name: "Legal System",
    description: "An introduction to the legal system of Aotearoa New Zealand.",
    price: "$1,000.00",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    buylink: "https://buy.stripe.com/test_dR66qU0nG3NnfOEaEG",
  },
  {
    name: "Trusts",
    description:
      "Examines the origins of trusts, and current rules and principles governing the creation and operation of trusts as a method of holding property by divided ownership.",
    price: "$1,000.00",
    image:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    buylink: "https://buy.stripe.com/test_cN2eXq7Q81FfeKAcMN",
  },
  {
    name: "Law of Contract",
    description:
      "Examines the general principles that govern the law of contract in New Zealand.",
    price: "$1,000.00",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    buylink: "https://buy.stripe.com/test_8wM02w0nG4Rr8mc000",
  },
];

export const handlers = [
  rest.get("http://localhost:5001/courses", async (req, res) => {
    return res.status(200).json(getProductsMockResponse);
  }),
];
