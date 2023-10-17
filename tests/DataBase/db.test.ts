import request from "supertest";
import server from "../../src/main"; // Import the server instance directly

describe("Express App", () => {
  // Test the GET route '/'
  it('should respond with "Express + TypeScript Server"', async () => {
    const response = await request(server).get("/"); // Use the server instance
    expect(response.status).toBe(200);
    expect(response.text).toBe("Express + TypeScript Server");
  });
});
