
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const upsertUser = async (data) => {
  try {
    const user = await prisma.user.upsert({
      where: { email: data.email },
      update: data,
      create: data,
    });
    return user;
  } catch (error) {
    throw error;
  }
};
