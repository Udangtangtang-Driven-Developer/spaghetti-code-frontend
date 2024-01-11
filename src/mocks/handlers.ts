import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://jsonplaceholder.typicode.com/todos",
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: 1, title: "먹기", completed: false },
          { id: 2, title: "자기", completed: true },
          { id: 3, title: "놀기", completed: false },
        ])
      );
    }
  ),
];
