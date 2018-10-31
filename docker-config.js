const inquirer = require('inquirer');
const compose = require('docker-compose');
const path = require('path');

const serverContact = {
  message: 'Service Contact Service run at localhost ? ',
  type: 'confirm',
  name: 'serverContact',
};

const serverAccount = {
  message: 'Service Account Service run at localhost ? ',
  type: 'confirm',
  name: 'serverAccount',
};

const dirName = {
  serverAccount: 'server-account-service',
  serverContact: 'server-contact-service',
};

const list = [serverContact, serverAccount];

inquirer.prompt(list).then((answers) => {
  list.forEach((server) => {
    if (answers[server.name]) {
      // REBUILD SERVICES WHICH ARE CHECKED RUNNING AT LOCALHOST
      compose
        .up({
          cwd: path.join(__dirname, `../${dirName[server.name]}`),
          log: true,
        })
        .then(
          () => {
            console.log('done up ', server.name);
          },
          (err) => {
            console.log('something went wrong:', err.message);
          },
        );
    }
  });
});
