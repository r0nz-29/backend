import express from "express";

import studentController from "../../controllers/student/index.js";

const studentRouter = express.Router();

 studentRouter.get("/", studentController.getAllStudents);
 studentRouter.post("/", studentController.createStudent);
 studentRouter.get("/:id", studentController.getStudentById);
 studentRouter.put("/", studentController.updateStudentById);

 // studentRouter.delete("/:id",studentController.deleteContectPerson);

export default studentRouter;
