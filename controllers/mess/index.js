import Mess from "../../models/mess/index.js";
import {OK, throwError} from "../../utils/index.js";

const getAllMesses = async (req, res) => {
	try {
		const messes = await Mess.findAll();
		OK(200, res, {data: messes});
	} catch (e) {
		throwError(res, e);
	}
};

const createMess = async (req, res) => {
	try {
		const mess = {...req.body};
		const newMess = await Mess.create(mess);
		OK(200, res, {data: newMess});
	} catch (e) {
		throwError(res, e);
	}
};

const getMessById = async (req, res) => {
	try {
		const mess = await Mess.findByPk(req.params.id);
		OK(200, res, {data: mess});
	} catch (e) {
		throwError(res, e);
	}
}

const updateMessById = async (req, res) => {
	try {
		const update = {...req.body};
		const updated = await Mess.update(update, {
			where: {
				id: req.query.id
			}
		});
		OK(200, res, {data: updated})
	} catch (e) {
		throwError(res, e);
	}
}

export default {
	getAllMesses,
	createMess,
	updateMessById,
	getMessById
};
