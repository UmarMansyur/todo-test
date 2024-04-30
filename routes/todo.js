const { createTodo, getTodos, getTodosById, updateTodos, destroyTodo } = require('../controllers/todo');

const router = require('express').Router();

router.post('/', createTodo);
router.get('/', getTodos);
router.get('/:id', getTodosById);
router.put('/:id', updateTodos);
router.delete('/:id', destroyTodo);

module.exports = router;

