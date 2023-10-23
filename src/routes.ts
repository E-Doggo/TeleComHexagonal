import express from "express";
import DataPlanRepository from "./DataPlans/Domain/Repository";
import DataPlanController from "./DataPlans/Infrastucture/controller";

const repository = new DataPlanRepository(); // Create an instance of your repository
const dataPlanController = new DataPlanController(repository);
const dataPlanRouter = express.Router();

// Retrieve all assignments
dataPlanRouter.get(
  "/",
  async (req, res) => await dataPlanController.createDataPlanRequest(req, res)
);

export default dataPlanRouter;
