import { BoostingType, Prisma, PrismaClient, Role } from "@prisma/client";
import { encodePassword } from "@/utils/password-utils";

const prisma = new PrismaClient()
async function main() {
    await seedGames()
    await seedGameBoostTypes()
    await seedTiers()
    await seedDivisions()
    await seedServers()
    await seedLps()

    await seedUsers()
    await seedUserRoles()
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

async function seedGames() {
    await prisma.game.createMany({
        data: [
            {
                name: "valorant",
                src: "/games/valorant.png",
            },
        ],
    })
}
async function seedGameBoostTypes() {
    const game = await prisma.game.findUnique({
        where: {
            name: "valorant",
        },
    })
    const data: Prisma.GameBoostingTypeCreateManyInput[] = [
        { boostingType: BoostingType.RANK, gameId: game!.name },
        { boostingType: BoostingType.WINS, gameId: game!.name },
        { boostingType: BoostingType.PLACEMENT, gameId: game!.name },
    ]
    await prisma.gameBoostingType.createMany({
        data,
    })
}
async function seedTiers() {
    const game = await prisma.game.findUnique({
        where: {
            name: "valorant",
        },
    })
    const tiers: Prisma.TierCreateManyInput[] = [
        {
            label: "Unranked",
            src: "/tiers/iron/1.png",
            rank: 0,
            gameId: game!.name,
        },
        {
            label: "Iron",
            src: "/tiers/iron/1.png",
            rank: 1,
            gameId: game!.name,
        },
        {
            label: "Bronze",
            src: "/tiers/bronze/2.png",
            rank: 2,
            gameId: game!.name,
        },
        {
            label: "Silver",
            src: "/tiers/silver/3.png",
            rank: 3,
            gameId: game!.name,
        },
        {
            label: "Gold",
            src: "/tiers/gold/4.png",
            rank: 4,
            gameId: game!.name,
        },
        {
            label: "Platinum",
            src: "/tiers/platinum/5.png",
            rank: 5,
            gameId: game!.name,
        },
        {
            label: "Diamond",
            src: "/tiers/diamond/6.png",
            rank: 6,
            gameId: game!.name,
        },
        {
            label: "Ascendant",
            src: "/tiers/ascendant/7.png",
            rank: 7,
            gameId: game!.name,
        },
        {
            label: "Immortal",
            src: "/tiers/immortal/8.png",
            rank: 8,
            gameId: game!.name,
        },
        {
            label: "Radiant",
            src: "/tiers/radiant/9.png",
            rank: 9,
            gameId: game!.name,
        },
    ]
    await prisma.tier.createMany({
        data: tiers,
    })
}
async function seedDivisions() {
    const game = await prisma.game.findUnique({
        where: {
            name: "valorant",
        },
    })
    const tiersAndDivisions = [
        {
            label: "Unranked",
            src: "/tiers/iron/1.png",
            rank: 0,
        },
        {
            label: "Iron",
            src: "/tiers/iron/1.png",
            rank: 1,
            divisions: [
                {
                    rank: 1,
                    label: "Iron 1",
                    src: "/tiers/iron/11.png",
                    price: 4,
                },
                {
                    rank: 2,
                    label: "Iron 2",
                    src: "/tiers/iron/12.png",
                    price: 5,
                },
                {
                    rank: 3,
                    label: "Iron 3",
                    src: "/tiers/iron/13.png",
                    price: 6,
                },
            ],
        },
        {
            label: "Bronze",
            src: "/tiers/bronze/2.png",
            rank: 2,
            divisions: [
                {
                    rank: 1,
                    label: "Bronze 1",
                    src: "/tiers/bronze/21.png",
                    price: 7,
                },
                {
                    rank: 2,
                    label: "Bronze 2",
                    src: "/tiers/bronze/22.png",
                    price: 8,
                },
                {
                    rank: 3,
                    label: "Bronze 3",
                    src: "/tiers/bronze/23.png",
                    price: 9,
                },
            ],
        },
        {
            label: "Silver",
            src: "/tiers/silver/3.png",
            rank: 3,
            divisions: [
                {
                    rank: 1,
                    label: "Silver 1",
                    src: "/tiers/silver/31.png",
                    price: 10,
                },
                {
                    rank: 2,
                    label: "Silver 2",
                    src: "/tiers/silver/32.png",
                    price: 12,
                },
                {
                    rank: 3,
                    label: "Silver 3",
                    src: "/tiers/silver/33.png",
                    price: 14,
                },
            ],
        },
        {
            label: "Gold",
            src: "/tiers/gold/4.png",
            rank: 4,
            divisions: [
                {
                    rank: 1,
                    label: "Gold 1",
                    src: "/tiers/gold/41.png",
                    price: 16,
                },
                {
                    rank: 2,
                    label: "Gold 2",
                    src: "/tiers/gold/42.png",
                    price: 18,
                },
                {
                    rank: 3,
                    label: "Gold 3",
                    src: "/tiers/gold/43.png",
                    price: 20,
                },
            ],
        },
        {
            label: "Platinum",
            src: "/tiers/platinum/5.png",
            rank: 5,
            divisions: [
                {
                    rank: 1,
                    label: "Platinum 1",
                    src: "/tiers/platinum/51.png",
                    price: 25,
                },
                {
                    rank: 2,
                    label: "Platinum 2",
                    src: "/tiers/platinum/52.png",
                    price: 30,
                },
                {
                    rank: 3,
                    label: "Platinum 3",
                    src: "/tiers/platinum/53.png",
                    price: 35,
                },
            ],
        },
        {
            label: "Diamond",
            src: "/tiers/diamond/6.png",
            rank: 6,
            divisions: [
                {
                    rank: 1,
                    label: "Diamond 1",
                    src: "/tiers/diamond/61.png",
                    price: 40,
                },
                {
                    rank: 2,
                    label: "Diamond 2",
                    src: "/tiers/diamond/62.png",
                    price: 45,
                },
                {
                    rank: 3,
                    label: "Diamond 3",
                    src: "/tiers/diamond/63.png",
                    price: 65,
                },
            ],
        },
        {
            label: "Ascendant",
            src: "/tiers/ascendant/7.png",
            rank: 7,
            divisions: [
                {
                    rank: 1,
                    label: "Ascendant 1",
                    src: "/tiers/ascendant/71.png",
                    price: 75,
                },
                {
                    rank: 2,
                    label: "Ascendant 2",
                    src: "/tiers/ascendant/72.png",
                    price: 85,
                },
                {
                    rank: 3,
                    label: "Ascendant 3",
                    src: "/tiers/ascendant/73.png",
                    price: 95,
                },
            ],
        },
        {
            label: "Immortal",
            src: "/tiers/immortal/8.png",
            rank: 8,
            divisions: [
                {
                    rank: 1,
                    label: "Immortal 1",
                    src: "/tiers/immortal/81.png",
                    price: 115,
                },
                {
                    rank: 2,
                    label: "Immortal 2",
                    src: "/tiers/immortal/82.png",
                    price: 150,
                },
                {
                    rank: 3,
                    label: "Immortal 3",
                    src: "/tiers/immortal/83.png",
                    price: 225,
                },
            ],
        },
        {
            label: "Radiant",
            src: "/tiers/radiant/9.png",
            rank: 9,
            divisions: [
                {
                    rank: 1,
                    label: "Radiant",
                    src: "/tiers/radiant/9.png",
                    price: 5,
                },
            ],
        },
    ]

    const data: Prisma.DivisionCreateManyInput[] = []
    for (const tierAndDivision of tiersAndDivisions) {
        const tier = await prisma.tier.findFirst({
            where: {
                label: tierAndDivision.label,
                gameId: game!.name,
            },
        })

        for (const division of tierAndDivision.divisions || []) {
            data.push({
                ...division,
                tierId: tier!.id,
            })
        }
    }

    await prisma.division.createMany({
        data,
    })
}

async function seedServers() {
    const game = await prisma.game.findUnique({
        where: {
            name: "valorant",
        },
    })
    const data: Prisma.ServerCreateManyInput[] = [
        { label: "EUW", gameId: game!.name },
        { label: "NA", gameId: game!.name },
    ]
    await prisma.server.createMany({
        data,
    })
}

async function seedLps() {
    const game = await prisma.game.findUnique({
        where: {
            name: "valorant",
        },
    })
    const data: Prisma.LpCreateManyInput[] = [
        { range: "0-20", rank: 1, gameId: game!.name },
        { range: "20-40", rank: 2, gameId: game!.name },
        { range: "40-60", rank: 3, gameId: game!.name },
        { range: "60-80", rank: 4, gameId: game!.name },
        { range: "80-100", rank: 5, gameId: game!.name },
    ]
    await prisma.lp.createMany({
        data,
    })
}

async function seedUsers() {
    // // const password = 'noob1996'
    // const password = '$2b$10$3TC7TAHdzSczKcMc6TxKleLD5jliS15kOrMgrsLW4Zu3VIrX5qS8u'
    // await prisma.user.createMany({
    //     data: [
    //         {
    //             name: "NAJIH Driss",
    //             email: "najih.driss73@gmail.com",
    //             password,
    //         },
    //     ],
    // })
}

async function seedUserRoles() {
    // const user = await prisma.user.findFirst({
    //     where: {
    //         email: "najih.driss73@gmail.com",
    //     },
    // })
    // await prisma.userRole.createMany({
    //     data: [
    //         {
    //             role: Role.USER,
    //             userId: user!.id,
    //         },
    //     ],
    // })
}
