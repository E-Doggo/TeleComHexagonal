import CreateDataPlan from "../Application/DataPlanService";
import DataPlanRepository from "../Domain/Repository";
import { Request, Response } from "express";

class DataPlanController {
  private createDataPlan: CreateDataPlan;

  constructor(repository: DataPlanRepository) {
    this.createDataPlan = new CreateDataPlan(repository);
  }

  async createDataPlanRequest(_req: Request, res: Response): Promise<void> {
    try {
      const plan = await this.createDataPlan.execute();
      res.status(200).json(plan);
    } catch (error) {
      console.error("Error fetching assignments:", error);
      res.status(500).json({ error: "Server error" });
    }
  }
}

export default DataPlanController;
