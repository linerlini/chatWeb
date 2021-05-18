const WebSocket = require('ws');

const ws1 = new WebSocket.Server({port: 4000});
ws1.on('connection', (ws) => {
  console.log('连接成功');
  ws.on('message', (data) => {
    if (data === 'ping') {
      ws.send('pong');
      return;
    }
    const value = JSON.parse(data);
    console.log(value);
    ws1.clients.forEach((elem) => {
      if (elem.readyState === WebSocket.OPEN) {
        elem.send(data);
      }
    });
  })
})