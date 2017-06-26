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
    homeFooter: true,

    // Vuelog interface language. Currently only support 'zh-CN' and 'en-US'.
    defaultLang: 'zh-TW',

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
      label: { 'en-US': 'Archive', 'zh-TW': '封存' },
      type: 'archive',
      path: '/archive'
    },
    {
      label: { 'en-US': 'About Me', 'zh-TW': '關於' },
      type: 'page',
      path: '/page/about-me'
    },
    {
      label: { 'en-US': 'Links', 'zh-TW': '社群' },
      type: 'dropdown',
      path: '', // (OPTIONAL) dropdown can be routable too if you set a valid route path
      children: [
        {
          label: { 'en-US': 'GitHub', 'zh-TW': 'GitHub' },
          type: 'outgoing',
          link: 'https://github.com/littlebookboy'
        },
        {
          label: { 'en-US': 'Packagist', 'zh-TW': 'Packagist' },
          type: 'outgoing',
          link: 'https://packagist.org/packages/littlebookboy'
        },
        {
          label: { 'en-US': 'Medium', 'zh-TW': 'Medium' },
          type: 'outgoing',
          link: 'https://medium.com/@kevin2pig'
        }
      ]
    }
  ],

  pages: [
    {
      title: { 'en-US': 'About Me', 'zh-TW': '關於' },
      slug: 'about-me',
      exclude: true,
      titleless: true,
      commentless: true,
      draft: false
    },
    {
      title: { 'en-US': 'About Me', 'zh-TW': '關於2' },
      slug: 'about-me',
      commentless: true
    }
  ],

  categories: [
    {
      title: { 'en-US': 'Laravel', 'zh-TW': 'Laravel' },
      slug: 'laravel'
    },
    {
      title: { 'en-US': 'Vue', 'zh-TW': 'Vue' },
      slug: 'vue'
    }
  ],

  posts: [
    /* 2017 */
    {
      title: { 'en-US': 'Laravel 5.4 Using Model Event and Listener', 'zh-TW': 'Laravel 5.4 中使用 Modal Event' },
      slug: 'laravel-5-4-using-model-event-and-listener',
      category: 'laravel',
      date: '2017-06-26'
    },
    {
      title: { 'en-US': 'Vue 2 Using Lodash to Do Debounce', 'zh-TW': 'Vue 2 中使用 Lodash Debounce' },
      slug: 'vue-2-using-lodash-to-do-debounce',
      category: 'vue',
      date: '2017-06-26'
    }
  ]
}
