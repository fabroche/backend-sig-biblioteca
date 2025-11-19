import { Request, Response } from 'express';
import app from './app';

const PORT = process.env.PORT ?? 3000;

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'API funcionando' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});