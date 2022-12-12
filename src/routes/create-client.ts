import express, { Request, Response } from 'express';
import { Client } from '../entities/client';

const router = express.Router();

router.post(
  '/api/client',
  async (
    req: Request,
    res: Response,
  ) => {
    const {
      firstName,
      lastName,
      middleName,
      email,
      cardNumber,
      ballance
    } = req.body;

    const newClient = Client.create({
      firstName,
      lastName,
      middleName,
      email,
      cardNumber,
      ballance,
    });

    await newClient.save();

    res.status(201).json(newClient);
  },
);

export {
  router as ClientRouter,
};
