const express = require('express')
const app = express()
const childProcess = require('child_process');

app.get('/', (req, res) => res.send('Hello World! - This should have updated WOW5!!!!'))

app.post('/git-pull-update', (req, res) => {
	childProcess.exec('sh ./pullFromGit.sh > out.txt');
	res.send('restarting...')
	process.exit()
})

app.listen(8001, () => console.log('Example app listening on port 8001!'))
