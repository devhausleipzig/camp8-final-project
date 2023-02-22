import data from "../data.json";
import { PrismaClient } from "@prisma/client";
type Data = Record<string, Array<string>>;
const prisma = new PrismaClient();
async function main() {
  const bigData: Data = data;
  for (let category in bigData) {
    const alice = await prisma.categories.create({
      data: {
        name: category,
        Items: {
          createMany: {
            data: bigData[category].map((x) => ({
              name: x,
            })),
          },
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
