/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Mor } from "@prisma/client";
import { PasswordService } from "../../auth/password.service";
import { transformStringFieldUpdateInput } from "../../prisma.util";

export class MorServiceBase {
  constructor(
    protected readonly prisma: PrismaService,
    protected readonly passwordService: PasswordService
  ) {}

  async count<T extends Prisma.MorCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorCountArgs>
  ): Promise<number> {
    return this.prisma.mor.count(args);
  }

  async findMany<T extends Prisma.MorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorFindManyArgs>
  ): Promise<Mor[]> {
    return this.prisma.mor.findMany(args);
  }
  async findOne<T extends Prisma.MorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorFindUniqueArgs>
  ): Promise<Mor | null> {
    return this.prisma.mor.findUnique(args);
  }
  async create<T extends Prisma.MorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorCreateArgs>
  ): Promise<Mor> {
    return this.prisma.mor.create<T>({
      ...args,

      data: {
        ...args.data,
        password: await this.passwordService.hash(args.data.password),
      },
    });
  }
  async update<T extends Prisma.MorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorUpdateArgs>
  ): Promise<Mor> {
    return this.prisma.mor.update<T>({
      ...args,

      data: {
        ...args.data,

        password:
          args.data.password &&
          (await transformStringFieldUpdateInput(
            args.data.password,
            (password) => this.passwordService.hash(password)
          )),
      },
    });
  }
  async delete<T extends Prisma.MorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.MorDeleteArgs>
  ): Promise<Mor> {
    return this.prisma.mor.delete(args);
  }
}
