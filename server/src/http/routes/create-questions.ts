import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";
import { z } from "zod/v4";

export const createQuestionRoute: FastifyPluginCallbackZod = (app) => {
    app.post(
        '/rooms/:roomId/questions',
        {
            schema: {
                params: z.object({
                    roomId: z.string()
                }),
                body: z.object({
                    question: z.string().min(1)
                }),
            },
        },
        async (request, reply) => {
            const { roomId } = request.params
            const { question } = request.body

            const result = await db
                .insert(schema.questions)
                .values({
                    roomId,
                    question
                }).returning()

            console.log('Create Question: ', result);

            const insertedQuestionId = result[0]

            if (!insertedQuestionId) {
                throw new Error('Failed to create new room')
            }

            return reply.status(201).send({ questionId: insertedQuestionId.id });
        })
}