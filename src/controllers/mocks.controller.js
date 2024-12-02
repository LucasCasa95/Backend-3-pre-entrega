import {petsService} from "../services/index.js"
import MockingService from "../services/mocking.js"

const getMockingUsers = async (req, res) => {
    const users = await MockingService.generateMockingUsers(50)
    res.send({status: "success", payload: users})
}

const getMockingPets = async (req, res) => {
    const pets = await MockingService.generateMockingPets(100)
    res.send({status: "success", payload: pets})
}

export default {getMockingPets, getMockingUsers}