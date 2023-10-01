const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
    });

    setInterval(() => {
        const date = new Date(2023, (6 - 1), 8, 15, 16, 4, 2);
        res.write(`data: This is a message：${date}`);
    }, 1000);
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
