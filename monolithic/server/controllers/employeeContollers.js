import asyncHandler from "express-async-handler";
import Employee from "../models/employeeModel.js";

// @desc    Fetch all employees
// @route   GET /api/employees/:shopId
// @acess   Private
const getEmployees = asyncHandler(async (req, res) => {
    const employees = await Employee.find({ shop: req.params.shopId });
    res.json(employees);
});

// @desc    Delete Employee
// @route   DELETE /api/employees/emp/:id
// @acess   Private
const deleteEmployee = asyncHandler(async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
        res.status(404);
        throw new Error("Employee not found");
    }
    await employee.remove();
    res.json({ message: "Employee removed" });
});

// @desc    Create a employee
// @route   POST /api/employees
// @acess   Private
const createEmployee = asyncHandler(async (req, res) => {
    const { shopId, name, age } = req.body;
    const employee = new Employee({
        shop: shopId,
        name,
        age
    });
    const createdEmployee = await employee.save();
    res.json(createdEmployee);
})


export { getEmployees, deleteEmployee, createEmployee };
