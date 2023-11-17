const amqp = require('amqplib');

async function sendMessage(name, password) {
  // Connect to RabbitMQ server
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  // Declare the queue to which you want to send messages
  const queueName = 'hello';
  await channel.assertQueue(queueName, { durable: false });

  // Define the message to send
  const message = {name: name, password: password};

  // Send the message to the queue
  channel.sendToQueue(queueName, Buffer.from(message));

  console.log(`Message sent: ${message}`);
  
  // Close the connection
  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
}

sendMessage();
