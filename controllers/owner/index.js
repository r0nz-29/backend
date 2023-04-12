import  Owner from "../../models/owner/index.js";
import {OK, throwError} from "../../utils/index.js";

const getAllOwners = async (req, res) => {
	try {
		const owners = await Owner.findAll();
		OK(200, res, {data: owners});
	} catch (e) {
		throwError(res, e);
	}
};

const createOwner = async (req, res) => {
	try {
		const owner = {...req.body};
		const newOwner = await Owner.create(owner);
		OK(200, res, {data: newOwner});
	} catch (e) {
		throwError(res, e);
	}
};

const getOwnerById = async (req, res) => {
	try {
		const owner = await Owner.findByPk(req.query.id);
		OK(200, res, {data: owner});
	} catch (e) {
		throwError(res, e);
	}
}

const updateOwnerById = async (req, res) => {
	try {
		const update = {...req.body};
		const updated = await Owner.update(update, {
			where: {
				id: req.params.id
			}
		});
		OK(200, res, {data: updated})
	} catch (e) {
		throwError(res, e);
	}
}

export default {
	getAllOwners,
	createOwner,
	updateOwnerById,
	getOwnerById
};