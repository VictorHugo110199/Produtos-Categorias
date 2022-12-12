import "dotenv/config"
import app from "./app";
import { startDatabase } from "./database";

export default app.listen(3000, () => {
    startDatabase();
    console.log("Server running");
});