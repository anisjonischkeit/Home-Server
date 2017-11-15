const express = require('express')
const app = express()
const childProcess = require('child_process');

app.get('/', (req, res) => res.send('Hello World! - This should have updated WOW!!!!'))

app.post('/git-pull-update', (req, res) => {
	childProcess.exec('sh ./pullFromGit.sh');
	process.exit()
})

app.listen(8001, () => console.log('Example app listening on port 3000!'))
