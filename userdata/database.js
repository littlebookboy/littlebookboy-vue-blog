/* DO NOT CHANGE THE GLOBAL VARIABLE NAME */

window.VUELOG_DATABASE = {

  config: {
    // The name of your site, will be displayed in browser tab and site header.
    brand: { 'en-US': 'Littlebookboy Blog', 'zh-CN': 'Littlebookboy 筆記' },

    // The image displayed in site header right beside the brand.
    // logo: './static/vuelog.svg',
    logo: './static/logo.png',

    // The full URL where your site is hosted.
    home: 'http://localhost:8080',

    // Path to the domain root that serves your site, starts and ends with slash (`/`).
    // Set to `'/'` if your site is under domain root.
    base: '/',

    // The path to route to when you visit `/`.
    // Set to `/home`, `/blog` or a valid path at your need.
    homePath: '/blog',

    // Whether footer is visible on `homePath` or not.
    homeFooter: false,

    // Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
    defaultLang: 'zh-CN',

    // Allow/disallow visitors to switch interface language.
    switchLang: true,

    // Available languages for switching. Must be a subset of supported languages, or leave empty.
    selectedLangs: [],

    // Number of posts listed in a blog/category view.
    postsCount: 3,

    // Fill in the shortname to integrate Disqus with your blog.
    disqusShortname: '',

    // Fill in the account to integrate IntenseDebate with your blog.
    intenseDebateAccount: '',

    // Fill in the uid to integrate LiveRe with your blog.
    livereUid: '',

    // Options for marked, see https://github.com/chjj/marked#options-1 for detail
    markedOptions: {}

  },

  navigation: [
    {
      label: { 'en-US': 'About Me', 'zh-CN': '關於我' },
      type: 'page',
      path: '/page/about-me'
    },
    {
      label: { 'en-US': 'Archive', 'zh-CN': '封存' },
      type: 'archive',
      path: '/archive'
    },
    {
      label: { 'en-US': 'Links', 'zh-CN': '社群' },
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: { 'en-US': 'GitHub', 'zh-CN': 'GitHub' },
          type: 'outgoing',
          link: 'https://github.com/littlebookboy'
        },
        {
          label: { 'en-US': 'Packagist', 'zh-CN': 'Packagist' },
          type: 'outgoing',
          link: 'https://packagist.org/packages/littlebookboy'
        },
        {
          label: { 'en-US': 'Medium', 'zh-CN': 'Medium' },
          type: 'outgoing',
          link: 'https://medium.com/@kevin2pig'
        }
      ]
    }
  ],

  pages: [
    {
      title: { 'en-US': 'About Me', 'zh-CN': '關於我' },
      slug: 'about-me',
      exclude: true,
      titleless: true,
      commentless: true,
      draft: false
    },
    {
      title: { 'en-US': 'Vuelog Guide', 'zh-CN': 'Vuelog 指南' },
      slug: 'guide',
      exclude: true,      // (OPTIONAL) `true` to exclude the page from archive view
      titleless: false,   // (OPTIONAL) `true` to hide the title in page view
      commentless: false, // (OPTIONAL) `true` to disable comments for the page
      draft: false        // (OPTIONAL) `true` to make the page temporarily inaccessible
    },
    {
      title: { 'en-US': 'About Vuelog', 'zh-CN': '关于 Vuelog' },
      slug: 'about'
    },
    {
      title: { 'en-US': 'Changelog', 'zh-CN': '变更日志' },
      slug: 'changelog'
    }
  ],

  categories: [
    {
      title: { 'en-US': 'Documentation', 'zh-CN': '文档' },
      slug: 'docs'
    },
    {
      title: { 'en-US': 'Showcase', 'zh-CN': '示例' },
      slug: 'showcase'
    }
  ],

  posts: [
    /* 2017 */
    {
      title: { 'en-US': 'Multiple languages support', 'zh-CN': '多语言支持' },
      slug: 'multiple-languages-support',
      category: 'docs',
      date: '2017-01-24'
    },
    {
      title: { 'en-US': 'Use social commenting services', 'zh-CN': '使用社会化评论服务' },
      slug: 'use-social-commenting-services',
      category: 'docs',
      date: '2017-01-19'
    },
    {
      title: { 'en-US': 'Insert code blocks with syntax highlight', 'zh-CN': '插入语法高亮的代码块' },
      slug: 'insert-code-blocks-with-syntax-highlight',
      category: 'docs',
      date: '2017-01-18'
    },
    {
      title: { 'en-US': 'Author posts or pages', 'zh-CN': '编写文章或页面' },
      slug: 'author-posts-or-pages',
      category: 'docs',
      date: '2017-01-13'
    },
    {
      title: { 'en-US': 'Add posts or pages', 'zh-CN': '新建文章或页面' },
      slug: 'add-posts-or-pages',
      category: 'docs',
      date: '2017-01-12'
    },
    {
      title: { 'en-US': 'Customize navigation menu', 'zh-CN': '自定义导航菜单' },
      slug: 'customize-navigation-menu',
      category: 'docs',
      date: '2017-01-11'
    },
    {
      title: { 'en-US': 'Customize the site', 'zh-CN': '自定义站点' },
      slug: 'customize-the-site',
      category: 'docs',
      date: '2017-01-10'
    },
    /* 2016 */
    {
      title: { 'en-US': 'File structure of Vuelog', 'zh-CN': 'Vuelog 文件结构' },
      slug: 'file-structure-of-vuelog',
      category: 'docs',
      date: '2016-10-20'
    },
    {
      title: { 'en-US': 'Style examples', 'zh-CN': '样式示例' },
      slug: 'style-examples',
      category: 'showcase',
      date: '2016-10-19'
    }
  ]

}
