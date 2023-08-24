import type { CompanyExperience } from './types'

export const expList: Array<CompanyExperience> = [
  {
    name: 'Stack Builders',
    location: 'Quito, EC',
    url: 'https://stackbuilders.com',
    role: 'Fullstack',
    startDate: new Date(2022, 3, 18),
    endDate: 'Present',
    projects: [
      {
        name: 'Crossplatform mobile app for Social Events connections',
        description:
          'Add features and make fixes on the app, enhance performance given the amount of clients connected simultaneously, improve UI/UX based on good practices for mobile apps.',
        team: '1 dev',
        startDate: new Date(2023, 8, 14),
        techStack: [
          { name: 'typescript', cat: 'js' },
          { name: 'fp-ts', cat: 'js' },
          { name: 'edgeql', cat: 'sql' },
          { name: 'javascript', cat: 'js' },
        ],
      },
      {
        name: 'Crossplatform mobile app for Parenting',
        description: 'Provide support and guidelines for a shutdown process.',
        team: '1 dev',
        startDate: new Date(2023, 4, 10),
        endDate: new Date(2023, 11, 1),
        techStack: [
          { name: 'javascript', cat: 'js' },
          { name: 'react-native', cat: 'js' },
          { name: 'circleci', cat: 'devops' },
        ],
      },
      {
        name: 'Programmable Communication API',
        description:
          'Lead a multidisciplined team, maintain a CMS site, bring support to other internal teams across the company, improve UI/UX.',
        team: '4 devs',
        startDate: new Date(2022, 5, 16),
        endDate: new Date(2023, 4, 7),
        techStack: [
          { name: 'wagtail', cat: 'py' },
          { name: 'django', cat: 'py' },
          { name: 'javascript', cat: 'js' },
          { name: 'scss', cat: 'css' },
          { name: 'docker', cat: 'css' },
        ],
      },
      {
        name: 'StackBuilders Website',
        description: 'Fix minor UI details.',
        team: '5 devs',
        startDate: new Date(2022, 5, 2),
        techStack: [{ name: 'wagtail', cat: 'py' }],
      },
    ],
  },
  {
    name: 'On vacations',
    location: 'Guayaquil, EC',
    url: 'https://well1791.github.io',
    role: 'Frontend',
    startDate: new Date(2021, 9, 16),
    endDate: new Date(2022, 3, 17),
    projects: [
      {
        name: 'My resume',
        description:
          'I did my resume in order to learn animations, a11y, redwoodjs, react libs for headless-ui, css-in-js techniques and libs, etc',
        team: 'Solo',
        techStack: [
          { name: 'redwood/web', cat: 'js' },
          { name: 'stitches/core', cat: 'js' },
          { name: 'recoil', cat: 'js' },
          { name: 'jotai', cat: 'js' },
          { name: 'radix-ui', cat: 'js' },
          { name: 'react-hook-form', cat: 'js' },
          { name: 'react-aria', cat: 'js' },
          { name: 'react-stately', cat: 'js' },
          { name: 'react-spring', cat: 'js' },
          { name: 'date-fns', cat: 'js' },
          { name: 'react-responsive', cat: 'js' },
          { name: 'react-spring/parallax', cat: 'js' },
          { name: 'mantine/hooks', cat: 'js' },
        ],
      },
    ],
  },
  {
    name: 'Genome',
    location: 'Remote, EC',
    url: 'https://geno.me',
    role: 'Frontend',
    startDate: new Date(2018, 11, 3),
    endDate: new Date(2021, 9, 15),
    projects: [
      {
        name: 'Online tech store',
        description:
          'Update website code based on new designs for a korean online tech store, fix a11y issues.',
        team: 'Solo',
        techStack: [
          { name: 'shopify/liquid', cat: 'liquid' },
          { name: 'sass', cat: 'css' },
        ],
      },
      {
        name: 'Online influencer-themed store',
        description: 'Web development for a influencer-themed online store.',
        team: 'Solo',
        techStack: [
          { name: 'shopify/liquid', cat: 'liquid' },
          { name: 'react', cat: 'js' },
          { name: 'sass', cat: 'css' },
        ],
      },
      {
        name: 'Online grocery store',
        description:
          'Web development for an existing online grocery store, integrate existing 3rd party systems with the new website version.',
        team: '2 frontend devs',
        techStack: [
          { name: 'react', cat: 'js' },
          { name: 'apollo-client', cat: 'js' },
          { name: 'formik', cat: 'js' },
          { name: 'nextjs', cat: 'js' },
          { name: 'typescript', cat: 'js' },
          { name: 'emotionjs', cat: 'js' },
          { name: 'date-fns', cat: 'js' },
        ],
      },
      {
        name: 'Online discount tracking system',
        description:
          'Create an online admin system to manage reports based on discounts applied from other systems',
        team: '3 devs',
        techStack: [
          { name: 'react', cat: 'js' },
          { name: 'shopify/polaris', cat: 'js' },
          { name: 'styled-components', cat: 'js' },
          { name: 'redux', cat: 'js' },
          { name: 'apollo-client', cat: 'js' },
          { name: 'formik', cat: 'js' },
        ],
      },
    ],
  },
  {
    name: 'Stack Builders',
    location: 'Quito, EC',
    url: 'https://stackbuilders.com',
    role: 'Fullstack',
    startDate: new Date(2016, 6, 25),
    endDate: new Date(2018, 7, 10),
    projects: [
      {
        name: 'Online survey system',
        description: 'Develop an online survey system, add ads features.',
        team: 'Solo',
        techStack: [
          { name: 'postgresql', cat: 'sql' },
          { name: 'yesod', cat: 'hs' },
        ],
      },
      {
        name: 'Twilio',
        description:
          "Update documentation content, update sample repositories, contribute to Twilio-quest's first version",
        team: '4 devs',
        techStack: [
          { name: 'typescript', cat: 'js' },
          { name: 'express', cat: 'js' },
          { name: 'postgresql', cat: 'sql' },
          { name: 'laravel', cat: 'php' },
          { name: 'rails', cat: 'rb' },
          { name: 'django', cat: 'py' },
          { name: 'wagtail', cat: 'py' },
          { name: 'vue', cat: 'js' },
          { name: 'ramda', cat: 'js' },
          { name: 'jest', cat: 'js' },
        ],
      },
      {
        name: 'Online landlord system',
        description:
          'Develop a system that allows tenants and landlords to interact to each other in a truthful and intuitive way',
        team: '3 devs',
        techStack: [
          { name: 'typescript', cat: 'js' },
          { name: 'express', cat: 'js' },
          { name: 'postgresql', cat: 'sql' },
          { name: 'sequelize', cat: 'js' },
          { name: 'lodash', cat: 'js' },
          { name: 'react', cat: 'js' },
          { name: 'ramda', cat: 'js' },
          { name: 'jest', cat: 'js' },
        ],
      },
    ],
  },
  {
    name: 'Funiber',
    location: 'Guayaquil, EC',
    url: 'https://funiber.org',
    role: 'Fullstack',
    startDate: new Date(2013, 11, 2),
    endDate: new Date(2016, 6, 23),
    projects: [
      {
        name: 'Management System',
        description:
          'Develop a custom web ERP for a complex educational business model. Upgrade the statistics module. My good contributions were: introduce git to the team, motivate the team to use a better code editor, allow remote working by using virtual containers,',
        team: '8 devs',
        techStack: [
          { name: 'git', cat: 'linux' },
          { name: 'codeigniter', cat: 'php' },
          { name: 'mysql', cat: 'sql' },
          { name: 'composer', cat: 'php' },
          { name: 'docker', cat: 'linux' },
          { name: 'laravel', cat: 'php' },
          { name: 'jquery', cat: 'js' },
          { name: 'react', cat: 'js' },
        ],
      },
    ],
  },
]
