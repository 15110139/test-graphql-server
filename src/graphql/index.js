import { mergeSchemas } from 'graphql-tools';
import fs from 'fs';
import ResolversType from '../common/ResolversType';

const schemas = fs
  .readdirSync(__dirname)
  .filter((file) => {
    if (file.match(/.js/) || file.match(/.md/)) return false;
    return true;
  })
  .map(file => require(`./${file}/index.js`).default);

const executableSchema = mergeSchemas({
  schemas,
  resolvers: [ResolversType],
});

export default executableSchema;
