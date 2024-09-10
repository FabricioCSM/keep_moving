import fastify from 'fastify'
import { createGoal } from '../functions/create-goal'
import z from 'zod'

const app = fastify()

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
