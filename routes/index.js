import studentRouter from "./student/index.js";
import ownerRouter from "./owner/index.js";
import messRouter from "./mess/index.js";

const routes = app => {
	app.use("/api/mess", messRouter);
	app.use("/api/student", studentRouter);
	app.use("/api/owner", ownerRouter);
};

export default routes;
