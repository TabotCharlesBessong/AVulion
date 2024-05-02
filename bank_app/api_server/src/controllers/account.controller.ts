import { Request, Response } from "express";
import AccountService from "../services/account.service";
import Utility from "../utils/index.utils";
import { ResponseCode } from "../interfaces/enum/code.enum";

class AccountController {
  private accountService: AccountService;

  constructor(_accountService: AccountService) {
    this.accountService = _accountService;
  }

  async createAccount(req: Request, res: Response) {
    try {
      const params = { ...req.body };
      const newAccount = {
        userId: params.user.id,
        type: params.type,
      };

      let account = await this.accountService.createAccount(newAccount);
      return Utility.handleSuccess(
        res,
        "Account created successfully",
        { account },
        ResponseCode.SUCCESS
      );
    } catch (error) {
      return Utility.handleError(
        res,
        (error as TypeError).message,
        ResponseCode.SERVER_ERROR
      );
    }
  }

  async getAllUserAccounts(req: Request, res: Response) {
    try {
      const params = { ...req.body };
      let accounts = await this.accountService.getAccountsByUserId(
        params.user.id
      );
      console.log("1XXXXXXXX2-------3XXXXXXX4")
      return Utility.handleSuccess(
        res,
        "Account fetched successfully",
        { accounts },
        ResponseCode.SUCCESS
      );
    } catch (error) {
      console.log("5XXXXXXX6--------7XXXXXX8")
      return Utility.handleError(
        res,
        (error as TypeError).message,
        ResponseCode.SERVER_ERROR
      );
    }
  }

  async getUserAccount(req: Request, res: Response) {
    try {
      const params = { ...req.params };
      let account = await this.accountService.getAccountByField({
        id: params.id,
      });
      if (!account) {
        return Utility.handleError(
          res,
          "Account does not exist",
          ResponseCode.BAD_REQUEST
        );
      }
      console.log("1XXXXXXXX2-------3XXXXXXX4");
      return Utility.handleSuccess(
        res,
        "Account fetched successfully",
        { account },
        ResponseCode.SUCCESS
      );
    } catch (error) {
      console.log("5XXXXXXXX6-------7XXXXXXX8");
      return Utility.handleError(
        res,
        (error as TypeError).message,
        ResponseCode.SERVER_ERROR
      );
    }
  }
}

export default AccountController;