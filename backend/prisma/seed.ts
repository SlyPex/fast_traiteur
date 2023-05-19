const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


async function main() {
  const restaurantNames = ['Pizza Palace', 'Burger Barn', 'Sushi Spot', 'Taco Time']
  const restaurantLocations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami']
  const menuItems = [
    { name: 'Pepperoni Pizza', price: 12.99 },
    { name: 'Cheeseburger', price: 8.99 },
    { name: 'California Roll', price: 9.99 },
    { name: 'Fish Tacos', price: 10.99 }
  ]

  // Generate random restaurants
  for (let i = 0; i < 10; i++) {
    const restaurantName = restaurantNames[Math.floor(Math.random() * restaurantNames.length)]
    const location = restaurantLocations[Math.floor(Math.random() * restaurantLocations.length)]
    const latitude = (Math.random() * (90 - (-90)) + (-90))
    const longitude = (Math.random() * (180 - (-180)) + (-180))
    const restaurant = await prisma.restaurant.create({
      data: {
        name: restaurantName,
        location,
        latitude,
        longitude,
        menu: {
          create: {
            items: {
              createMany: {
                data: menuItems
              }
            }
          }
        }
      }
    })
  }

  // Generate random users
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.create({
      data: {
        email: `user${i}@example.com`,
        hash: 'password',
        firstname: `John${i}`,
        lastname: `Doe${i}`,
        phonenumber: `555-555-${i}`,
        adress: `123 Main St. ${i}`
      }
    })
  }

  // Generate random orders
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.findFirst()
    const restaurant = await prisma.restaurant.findFirst()

    const menuItem = menuItems[Math.floor(Math.random() * menuItems.length)]
    const quantity = Math.floor(Math.random() * 5) + 1
    const type = Math.random() < 0.5 ? 'now' : 'later'
    const state = 'processing'
    const specifications = 'Extra cheese, please'

    const order = await prisma.order.create({
      data: {
        user: { connect: { id: user.id } },
        restaurant: { connect: { id: restaurant.id } },
        menu_item: menuItem.name,
        quantity,
        type,
        state,
        specifications
      }
    })
  }

  // Generate random favorites
  for (let i = 0; i < 10; i++) {
    const user = await prisma.user.findFirst()
    const restaurant = await prisma.restaurant.findFirst()

    const favorite = await prisma.favorite.create({
      data: {
        client: { connect: { id: user.id } },
        restaurant: { connect: { id: restaurant.id } }
      }
    })
  }
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })