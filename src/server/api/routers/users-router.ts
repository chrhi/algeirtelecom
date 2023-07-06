import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
  getUsers: publicProcedure
    .input(z.object({ text: z.string() }))
    .query( async ({ ctx }) => {
      
     const data = await ctx.prisma.user.findMany()
     return data
    }),
    updateUser: publicProcedure
    .input(z.object({ 
      id : z.string(),
      name : z.string(),
      email : z.string(), 
      type : z.string(), 
      password : z.string(),
      bio : z.string(), 
      image : z.string()
     }))
    .query( async ({input , ctx }) => {
      
     const data = await ctx.prisma.user.update({
      data: {
        password : input.name, 
        type : input.type ,
        bio : input.bio, 
        email : input.email,
        image : input.image,
        name : input.name
      },
      where:{
        id : input.id
      }
     })
     return data
    }),
    deleteUser: publicProcedure
    .input(z.object({ text: z.string() }))
    .query( async ({ ctx }) => {
      
     const data = await ctx.prisma.user.findMany()
     return data
    }),
    createUser: publicProcedure
    .input(z.object({ 
      name : z.string(),
      email : z.string(), 
      type : z.string(), 
      password : z.string(),
      bio : z.string(), 
      image : z.string()
     }))
    .query( async ({input , ctx }) => {
      
     const data = await ctx.prisma.user.create({
      data: {
        password : input.name, 
        type : input.type ,
        bio : input.bio, 
        email : input.email,
        image : input.image,
        name : input.name
      }
     })
     return data
    }),
    signInUser: publicProcedure
    .input(z.object({ email: z.string() , password : z.string() }))
    .mutation( async ({ input , ctx }) => {

      const user = await ctx.prisma.user.findUnique({
        where : {
          email : input.email
        }
      })
      if(!user){
        throw new TRPCError({code : "BAD_REQUEST" , message : "user do not exist"})
      }

      if(user.password === input.password){
        return user
      }
      throw new TRPCError({code : "BAD_REQUEST" , message : "password not currect"})
    }),

  
  });