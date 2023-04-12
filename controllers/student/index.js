import  Student from "../../models/student/index.js";
import {OK, throwError} from "../../utils/index.js";
const getAllStudents = async (req, res) => {
	try {
		const students = await Student.findAll();
		OK(200, res, {data: students});
	} catch (e) {
		throwError(res, e);
	}
};

const createStudent = async (req, res) => {
	try {
		const student = {...req.body};
		const newStudent = await Student.create(student);
		OK(200, res, {data: newStudent});
	} catch (e) {
		throwError(res, e);
	}
};

const getStudentById = async (req, res) => {
	try {
		const student = await Student.findByPk(req.params.id);
		OK(200, res, {data: student});
	} catch (e) {
		throwError(res, e);
	}
}

const updateStudentById = async (req, res) => {
	try {
		const update = {...req.body};
		const updated = await Student.update(update, {
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
	getAllStudents,
	createStudent,
	updateStudentById,
	getStudentById
};