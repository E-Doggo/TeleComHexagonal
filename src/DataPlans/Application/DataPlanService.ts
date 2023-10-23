import { DataPlanDataObject } from "../Domain/DTO";
import DataPlanRepository from "../Domain/Repository";

class CreateDataPlan {
  private adapter: DataPlanRepository;

  constructor(adapter: DataPlanRepository) {
    this.adapter = adapter;
  }

  async execute() {
    try {
      const assignments = await this.adapter.createDataPlanObject();
      return assignments;
    } catch (error) {
      console.error("Error creating DataPlan:", error);
      throw error;
    }
  }
}

export default CreateDataPlan;
