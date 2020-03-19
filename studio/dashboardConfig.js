export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e733fed1444bb9344ca2358',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-zkujcijq',
                  apiId: '1aaa9fe5-93d2-4296-b088-5600f30e591e'
                },
                {
                  buildHookId: '5e733fed2db5d14a542b51ed',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-eupoyxxw',
                  apiId: '434077e4-f4d7-4774-a0e9-ddf39068c84d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tiacop/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-eupoyxxw.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
