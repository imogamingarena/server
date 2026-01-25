import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

// basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express + TypeScript!');
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
