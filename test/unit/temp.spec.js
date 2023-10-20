const {PrismaClient} = require('@prisma/client')
var prisma = new PrismaClient({
})

describe('Format all records', () => {
  beforeAll(async () => {
    await prisma.transaction.deleteMany();
    await prisma.bank_accounts.deleteMany();
    await prisma.profiles.deleteMany();
    await prisma.users.deleteMany();
  });
  test('should first', () => {
    expect(1).toBe(1);
  });
});