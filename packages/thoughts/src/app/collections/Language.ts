import { CollectionConfig } from 'payload/types';

const Language: CollectionConfig = {
  slug: 'language',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
  ],
  timestamps: false,
};

export default Language;
