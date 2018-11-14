const Employee = require('../models/employee');
const employeeController = {};

employeeController.getEmployees = async (request ,response ) => {

    const employees = await Employee.find();
    response.json(employees);

};

employeeController.findById = async (request ,response ) =>  {
    const employee = await Employee.findById(request.params.id);
   response.json(employee);
};



employeeController.insert = async (request ,response ) =>  {
    console.log( request.body);
    const employee =  new Employee (request.body );
    await employee.save(employee);
    response.json({ status:'empleado guardado.'});

};

employeeController.update = async (request ,response ) =>  {
    const {id} = request.params; 
    // tambien se puede : const id = request.params.id
    const employee =  {
        name: request.body.name,
        position: request.body.position,
        office: request.body.office,
        salary: request.body.salary

    } ;
    await Employee.findByIdAndUpdate(id , { $set : employee } , { new : true});
    response.json({ status:'empleado actualizado.'});
};

employeeController.delete = async (request ,response ) =>  {
    const {id} = request.params; 
    await Employee.findByIdAndRemove(id);
    response.json({status:'empleado eliminado.'});
};


module.exports = employeeController;