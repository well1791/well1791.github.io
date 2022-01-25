import { ExpData } from 'src/components/molecules/ExperienceCard'

export const expList: ExpData[] = [
  {
    title: 'funiber',
    url: 'https://www.funiber.org',
    role: 'Full stack',
    startDate: new Date(2013, 11, 2),
    endDate: new Date(2016, 6, 23),
    skills: [
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
  {
    title: 'stack builders',
    url: 'https://www.stackbuilders.com',
    role: 'Full stack',
    startDate: new Date(2016, 6, 25),
    endDate: new Date(2018, 7, 10),
    skills: [
      { name: 'typescript', cat: 'js' },
      { name: 'express', cat: 'js' },
      { name: 'postgresql', cat: 'sql' },
      { name: 'sequelize', cat: 'js' },
      { name: 'lodash', cat: 'js' },
      { name: 'laravel', cat: 'php' },
      { name: 'ruby on rails', cat: 'rb' },
      { name: 'django', cat: 'js' },
      { name: 'vue', cat: 'js' },
      { name: 'react', cat: 'js' },
      { name: 'yesod', cat: 'hs' },
      { name: 'ramda', cat: 'js' },
      { name: 'sanctuary', cat: 'js' },
      { name: 'jest', cat: 'js' },
    ],
  },
  {
    title: 'genome',
    url: 'https://geno.me',
    role: 'Front end',
    startDate: new Date(2018, 11, 3),
    endDate: new Date(2021, 9, 15),
    skills: [
      { name: 'react', cat: 'js' },
      { name: 'shopify - polaris', cat: 'js' },
      { name: 'styled components', cat: 'js' },
      { name: 'redux', cat: 'js' },
      { name: 'apollo client', cat: 'js' },
      { name: 'formik', cat: 'js' },
      { name: 'storybook', cat: 'js' },
      { name: 'angular v1', cat: 'js' },
      { name: 'next', cat: 'js' },
      { name: 'typescript', cat: 'js' },
      { name: 'emotion', cat: 'js' },
      { name: 'date-fns', cat: 'js' },
      { name: 'shopify - liquid', cat: 'liquid' },
    ],
  },
  {
    title: 'no job',
    url: 'https://well1791.github.io/resume',
    role: 'Front end',
    startDate: new Date(2021, 9, 16),
    endDate: 'Present',
    skills: [
      { name: 'redwood - web', cat: 'js' },
      { name: 'stitches', cat: 'js' },
      { name: 'recoil', cat: 'js' },
      { name: 'react-hook-form', cat: 'js' },
      { name: 'react-aria', cat: 'js' },
      { name: 'react-stately', cat: 'js' },
      { name: 'react-spring', cat: 'js' },
    ],
  },
]