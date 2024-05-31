import express, { Request, Response } from "express";
import TransactionController from "../controllers/transaction.controller";
import AccountDataSource from "../datasources/account.datasource";
import TransactionDataSource from "../datasources/transaction.datasource";
import { Auth, validator } from "../middlewares/index.middlewares";
import AccountService from "../services/account.service";
import TransactionService from "../services/transaction.service";
import ValidationSchema from "../validators/transaction.validator.schema";
import PayeeService from "../services/payee.service";
import PayeeDataSource from "../datasources/payee.datasource";

const router = express.Router();
const accountService = new AccountService(new AccountDataSource());
const transactionService = new TransactionService(new TransactionDataSource());
const payeeService = new PayeeService(new PayeeDataSource());
const transactionController = new TransactionController(
  transactionService,
  accountService,
  payeeService
);

const createTransactionRoute = () => {
  router.post(
    "/initiate-paystack-deposit",
    validator(ValidationSchema.initiatePaystackDeposit),
    Auth(),
    (req: Request, res: Response) => {
      return transactionController.initiatePaystackDeposit(req, res);
    }
  );

  router.post(
    "/verify-paystack-deposit",
    validator(ValidationSchema.verifyPaystackDeposit),
    Auth(),
    (req: Request, res: Response) => {
      return transactionController.verifyPaystackDeposit(req, res);
    }
  );

  router.post(
    "/make-transfer",
    validator(ValidationSchema.makeInternalTransferSchema),
    Auth(),
    (req: Request, res: Response) => {
      return transactionController.internalTransfer(req, res);
    }
  );

  router.post(
    "/make-withdrawal-by-paystack",
    validator(ValidationSchema.makeWithdrawalByPaystack),
    Auth(),
    (req: Request, res: Response) => {
      return transactionController.withdrawByPaystack(req, res);
    }
  );
  return router;
};

export default createTransactionRoute();
