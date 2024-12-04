import {petsService, usersService} from "../services/index.js"
import MockingService from "../services/mocking.js"

const getMockingUsers = async (req, res) => {
    const users = await MockingService.generateMockingUsers(50)
    res.send({status: "success", payload: users})
}

const getMockingPets = async (req, res) => {
    const pets = await MockingService.generateMockingPets(100)
    res.send({status: "success", payload: pets})
}

const generateData = async (req, res) => {
    const users = parseInt(req.query.users) || 50; // Valores predeterminados
    const pets = parseInt(req.query.pets) || 50;

    try {
        if (users <= 0 || pets <= 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Los valores de "users" y "pets" deben ser mayores a 0.',
            });
        }

        // Generar datos ficticios
        const mockUsers = await MockingService.generateMockingUsers(users);
        const mockPets = await MockingService.generateMockingPets(pets);

        // Insertar datos en la base
        const insertedUsers = await usersService.insertMany(mockUsers);
        const insertedPets = await petsService.insertMany(mockPets);

        // Respuesta de éxito
        res.status(201).json({
            status: 'success',
            message: `Datos generados e insertados exitosamente: ${insertedUsers.length} usuarios y ${insertedPets.length} mascotas.`,
            payload: {
                usersInserted: insertedUsers.length,
                petsInserted: insertedPets.length,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 'error',
            message: 'Error al generar los datos.',
            error: error.message,
        });
    }
};


export default {getMockingPets, getMockingUsers, generateData}