import express from "express";
import ControllerPublic from '../../controllers/public/ControllerPublic';

const router = express.Router()
const controllerPublic = new ControllerPublic()

router.all(
  "/public",
  (req, res) => {
    controllerPublic.ExposedWelcome(req, res)
  }
);

module.exports = router