import express from "express";
import Middleware from "../../utils/Middleware";
import ControllerPrivate from '../../controllers/private/ControllerPrivate';

const router = express.Router()
const controllerPrivate = new ControllerPrivate()

router.get(
  "/private",
  (req, res, next) => Middleware(req, res, next),
  (req, res) => {
    controllerPrivate.welcome(req, res)
  }
);

module.exports = router