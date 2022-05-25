import express from "express";
import { body, validationResult } from "express-validator";
import login from '../../controllers/login/ControllerLogin';

const router = express.Router()
const loginController = new login()

router.post(
  "/login",
  body("username").notEmpty(),
  body("password").notEmpty(),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    loginController.doLogin(req, res)
  }
);

module.exports = router