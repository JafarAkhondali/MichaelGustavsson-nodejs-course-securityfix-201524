import express from 'express';
import {
  createBlock,
  getBlockchain,
} from '../controllers/blockchain-controller.mjs';

const router = express.Router();

// Definierar url och vilken metod som anropas
// För att delegera till korrekt controller funktion...
router.route('/').get(getBlockchain);
router.route('/mine').post(createBlock);

export default router;
