
import { createClient } from 'redis';

const client = createClient({
    socket: {
        host: 'redis-17429.c257.us-east-1-3.ec2.cloud.redislabs.com',
        port: parseInt('17429')
    },
    password: 'IKQP6YO7KhkQCbqksSUj3pmA06LuizG9'
  });


  export {client}