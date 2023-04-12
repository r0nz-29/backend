import express from "express";

 import ownerController from "../../controllers/owner/index.js";

const ownerRouter = express.Router();

ownerRouter.get("/", ownerController.getAllOwners);
ownerRouter.post("/",ownerController.createOwner);
ownerRouter.get("/:id", ownerController.getOwnerById);
ownerRouter.put("/",ownerController.updateOwnerById);

// ownerRouter.delete("/:id",ownerRouter.deleteContectPerson);

export default ownerRouter;
