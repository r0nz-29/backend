import express from "express";

import messController from "../../controllers/mess/index.js";

const messRouter = express.Router();

messRouter.get("/", messController.getAllMesses);

messRouter.post("/", messController.createMess);

messRouter.put("/", messController.updateMessById);

messRouter.get("/:id", messController.getMessById);

// messRouter.delete("/:id", messController.deleteMessById);


export default messRouter;
