import fs from "fs";
import path from "path";

export default function handler(req, res) {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const jsonContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(jsonContent);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
