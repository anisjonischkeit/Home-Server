const express = require('express')
const app = express()
const childProcess = require('child_process');

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/git-pull-update', (req, res) => {
	childProcess.exec('sh ./pullFromGit.sh');
	process.exit()
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
