import express from "express";
import {
  createThreat,
  getAllThreats,
  getThreat,
  deleteThreat,
  updateThreat,
} from "../controllers/threat.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getAllThreats);

//router.post("/", auth, createThreat);
//Normalnie odpalimy tutaj tą linijke z dopiskiem auth, ten middleware sprawdzi czy chlop
// który dodaje posta jest zalogowany
router.post("/", createThreat);

router.route("/:id").get(getThreat).delete(deleteThreat).patch(updateThreat);

export default router;
