/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { LoginService } from "../login.service";
import { LoginCreateInput } from "./LoginCreateInput";
import { LoginWhereInput } from "./LoginWhereInput";
import { LoginWhereUniqueInput } from "./LoginWhereUniqueInput";
import { LoginFindManyArgs } from "./LoginFindManyArgs";
import { LoginUpdateInput } from "./LoginUpdateInput";
import { Login } from "./Login";

export class LoginControllerBase {
  constructor(protected readonly service: LoginService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Login })
  async create(@common.Body() data: LoginCreateInput): Promise<Login> {
    return await this.service.create({
      data: data,
      select: {
        accessKey: true,
        createdAt: true,
        id: true,
        testKey: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Login] })
  @ApiNestedQuery(LoginFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Login[]> {
    const args = plainToClass(LoginFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        accessKey: true,
        createdAt: true,
        id: true,
        testKey: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Login })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: LoginWhereUniqueInput
  ): Promise<Login | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        accessKey: true,
        createdAt: true,
        id: true,
        testKey: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Login })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: LoginWhereUniqueInput,
    @common.Body() data: LoginUpdateInput
  ): Promise<Login | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          accessKey: true,
          createdAt: true,
          id: true,
          testKey: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Login })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: LoginWhereUniqueInput
  ): Promise<Login | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          accessKey: true,
          createdAt: true,
          id: true,
          testKey: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
