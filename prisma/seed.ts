import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import { faker } from '@faker-js/faker';

async function main() {
    const direkturRole = await prisma.role.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Direktur',
        },
    });
    const dokterRole = await prisma.role.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Dokter',
        },
    });
    const perawatRole = await prisma.role.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'Perawat',
        },
    });

    const administrasiUnit = await prisma.unit.upsert({
        where: { id: 1 },
        update: {},
        create: {
            name: 'Administrasi',
        },
    });
    const medisUnit = await prisma.unit.upsert({
        where: { id: 2 },
        update: {},
        create: {
            name: 'Medis',
        },
    });
    const perawatUnit = await prisma.unit.upsert({
        where: { id: 3 },
        update: {},
        create: {
            name: 'Perawat',
        },
    });


    for (let i = 1; i <= 100; i++) {
        const employee = await prisma.employee.upsert({
            where: { id: i },
            update: {},
            create: {
                name: faker.person.fullName(),
                username: faker.internet.userName(),
                password: "password",
                unitId: administrasiUnit.id,
                roles: {
                    connect: [
                        {
                            id: direkturRole.id
                        },
                        {
                            id: dokterRole.id
                        },
                    ],
                },
            },
        });

        const randomNumber = Math.floor(Math.random() * 100) + 1;

        for (let j = 1; j <= randomNumber; j++) {
            const authHistories = await prisma.employeeAuhtHistory.create({
                data: {
                    employeeId: employee.id
                },
            });
        }
    }



}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })