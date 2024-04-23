const { Router } = require("express");
const {getTodo, saveTodos, deleteTodo, editTodo} = require('./TodoController')

const router = Router()

router.get('/', getTodo);
router.post('/saveTodos', saveTodos);
router.post('/deleteTodo', deleteTodo);
router.put('/editTodo', editTodo)

module.exports = router;