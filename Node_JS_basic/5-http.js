const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

const countStudents = (dataPath) => new Promise((resolve, reject) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            reject(Error('Cannot load the database'));
            return;
        }

        const lines = data.trim().split('\n').slice(1);
        const students = lines.map((line) => line.split(',')).filter((fields) => fields.length > 0);

        const fields = {};
        students.forEach((student) => {
            const field = student[student.length - 1];
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(student[0]);
        });

        resolve({ count: students.length, fields });
    });
});

app.on('request', async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (req.method === 'GET' && req.url === '/students') {
        res.setHeader('Content-Type', 'text/plain');
        res.write('This is the list of our students\n');
        try {
            const { count, fields } = await countStudents(DB_FILE);
            res.write(`Number of students: ${count}\n`);
            Object.entries(fields).forEach(([field, students]) => {
                res.write(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`);
            });
        } catch (err) {
            res.write(err.message);
        }
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Invalid request');
    }
});

app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}/`);
});
