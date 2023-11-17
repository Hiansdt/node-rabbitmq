const amqp = require('amqplib');

async function consumeMessages() {
  // Connect to RabbitMQ server
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  // Declare the queue from which you want to consume messages
  const queueName = 'hello';
  await channel.assertQueue(queueName, { durable: false });

  console.log(`Waiting for messages. To exit press CTRL+C`);

  // Consume messages from the queue
  channel.consume(queueName, (msg) => {
    if (msg.content) {
      console.log(`Received message: ${msg.content.toString()}`);
    }
  }, { noAck: true });
}

consumeMessages();

module.exports =  consumeMessages;