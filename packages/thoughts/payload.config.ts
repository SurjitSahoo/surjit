import { buildConfig } from 'payload/config';
import path from 'path';
import Categories from './src/app/collections/Categories';
import Posts from './src/app/collections/Posts';
import Tags from './src/app/collections/Tags';
import Users from './src/app/collections/Users';
import Language from './src/app/collections/Language';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [Categories, Posts, Tags, Users, Language],
  cors: '*',
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
});
