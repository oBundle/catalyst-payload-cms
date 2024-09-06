import type { GlobalConfig } from 'payload/types';

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  typescript: {
    interface: 'Homepage',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'hero',
      label: 'Hero',
      type: 'group',
      fields: [
        {
          name: 'slides',
          label: 'Slides',
          type: 'array',
          minRows: 1,
          maxRows: 3,
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'text',
            },
            {
              name: 'description',
              label: 'Description',
              type: 'textarea',
            },
            {
              name: 'cta',
              label: 'CTA',
              type: 'text',
            },
            {
              name: 'ctaLink',
              label: 'CTA Link',
              type: 'text',
            },
            // {
            //   name: 'image',
            //   label: 'Image',
            //   type: 'upload',
            //   relationTo: 'uploads',
            // },
          ],
        },
      ],
    },
  ],
};
