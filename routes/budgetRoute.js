const { Router } = require('express')
const router = Router()

// route handlers
router.get('/', async (req, res) => {
    res.status(200).json({message:`get all budgets`})
})

router.post('/', async (req, res) => {
    res.status(201).json({message:`add to budgets`})
})

router.get('/:id', async (req, res) => {
    res.status(200).json({message:`get budget with id: ${req.params.id}`})
})

router.put('/:id', async (req, res) => {
    res.status(201).json({message:`updated budget with id: ${req.params.id}`})
})

router.delete('/:id', async (req, res) => {
    res.status(200).json({message:`deleted budget with id: ${req.params.id}`})
})

module.exports = router