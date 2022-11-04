
import { createClient } from 'redis';

const client = createClient({
    socket: {
        host: process.env.REDIS_ENDPOINT_URI || 'redis-17429.c257.us-east-1-3.ec2.cloud.redislabs.com',
        port: parseInt('17429')
    },
    password: process.env.REDIS_PASSWORD || 'IKQP6YO7KhkQCbqksSUj3pmA06LuizG9'
  });


  export {client}