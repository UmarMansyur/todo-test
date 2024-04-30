const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createTodo = async (req, res, next) => {
  try {
    const result = await prisma.todo.create({
      data: {
        todo: req.body.todo,
        status: req.body.status
      }
    });
    return res.json({
      status: true,
      message: 'Todo created successfully',
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getTodos = async (req, res, next) => {
  try {
    const result = await prisma.todo.findMany();
    return res.json({
      status: true,
      message: 'Todos retrieved successfully',
      data: result
    })
  } catch (error) {
    next(error);
  }
}

const getTodosById = async (req, res, next) => {
  try {
    const result = await prisma.todo.findFirst({
      where: {
        id: Number(req.params.id)
      }
    });
    // SELECT * FROM todo WHERE id = ?
    return res.json({
      status: true,
      message: 'Todos retrieved successfully',
      data: result
    })
  } catch (error) {
    next(error);
  }
}

const updateTodos = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await prisma.todo.update({
      where: {
        id: parseInt(id)
      },
      data: {
        todo: req.body.todo,
        status: req.body.status
      }
    });
    return res.json({
      status: true,
      message: 'Todos retrieved successfully',
      data: result
    })
  } catch (error) {
    next(error);
  }
}

const destroyTodo = async (req, res, next) => {
  try {
    const result = await prisma.todo.delete({
      where: {
        id: parseInt(req.params.id)
      }
    });
    return res.json({
      status: true,
      message: 'Todos retrieved successfully',
      data: result
    })
  } catch (error) {
    next(error);
  }
}


module.exports = {
  createTodo, getTodos, getTodosById, updateTodos, destroyTodo
}