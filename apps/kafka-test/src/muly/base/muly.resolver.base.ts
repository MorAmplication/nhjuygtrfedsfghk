/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteMulyArgs } from "./DeleteMulyArgs";
import { MulyCountArgs } from "./MulyCountArgs";
import { MulyFindManyArgs } from "./MulyFindManyArgs";
import { MulyFindUniqueArgs } from "./MulyFindUniqueArgs";
import { Muly } from "./Muly";
import { MulyService } from "../muly.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Muly)
export class MulyResolverBase {
  constructor(
    protected readonly service: MulyService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "read",
    possession: "any",
  })
  async _muliesMeta(
    @graphql.Args() args: MulyCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Muly])
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "read",
    possession: "any",
  })
  async mulies(@graphql.Args() args: MulyFindManyArgs): Promise<Muly[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Muly, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "read",
    possession: "own",
  })
  async muly(@graphql.Args() args: MulyFindUniqueArgs): Promise<Muly | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Muly)
  @nestAccessControl.UseRoles({
    resource: "Muly",
    action: "delete",
    possession: "any",
  })
  async deleteMuly(@graphql.Args() args: DeleteMulyArgs): Promise<Muly | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
