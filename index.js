var amqp = require('amqp');
var connection = amqp.createConnection({url: "amqp://guest:guest@localhost:5672"});

// Wait for connection to become established.
connection.on('ready', function () {
 var exchange = connection.exchange(''); // get the default exchange  
// Use the default 'amq.topic' exchange
  connection.queue('my-queue', function(q){
      // Catch all messages
      q.bind('#');

      // console.log('listening to messages');

      // Receive messages
      q.subscribe(function (message) {
        // Print messages to stdout
       // console.log('publish message');
        console.log(message.body);
      });
      // publish a message
      exchange.publish(q.name, {body: 'Hello RabbitMQ!'}); 
  });
  
});

//connection.end();
