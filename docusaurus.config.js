// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const { themes } = require('prism-react-renderer');
const lightTheme = themes.synthwave84;
const darkTheme = themes.dracula;

const local = false;

const siteUrl = local ?
  "https://localhost" :
  "https://monkeypaste.com";

const baseUrl = local ?
  "/docs/build" :
  "/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MonkeyPaste',
  staticDirectories: ['static'],
  tagline: 'Clipboard Evolved.',
  favicon: 'img/favicon.ico',
  url: siteUrl,
  baseUrl: baseUrl,
  organizationName: 'Monkey LLC',
  projectName: 'MonkeyPaste',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/monkeypaste/monkeypaste-docs/tree/main/'
        },
        // blog: {
        //   showReadingTime: true,
        // },
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          // remarkPlugins: [require('./my-remark-plugin')],
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        theme: {
          customCss:
            [
              require.resolve('./src/css/content-styles.css'),
              require.resolve('./src/css/custom.css'),
              require.resolve('./src/css/help-style.css'),
              require.resolve('./src/css/app-update-style.css'),
            ]
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'under_constuction',
        content:
          'MonkeyPaste is <b>brand new</b>! Check back often for more updates!!!',
        backgroundColor: 'gold',
        textColor: '#000000',
        isCloseable: true,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      zoom: {
        selector: '.markdown img:not(.no-zoom), img.zoom',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      image: 'img/monkeypaste-social-card.jpg',
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['csharp'],
      },
      navbar: {
        title: 'MonkeyPaste',
        logo: {
          alt: 'MonkeyPaste',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // { to: '/blog', label: 'Blog', position: 'left' },
          {
            to: 'https://www.monkeypaste.com/forum',
            label: 'Forum',
            cposition: 'left'
          },
          {
            to: '/about',
            label: 'About',
            position: 'left'
          },
          {
            to: '/download',
            label: 'Download',
            position: 'right'
          },
          {
            href: 'https://translate.google.com/translate?u=https%3A%2F%2Fwww.monkeypaste.com%2F',
            label: '🗺️ Translate',
            position: 'right',
          },
          {
            href: 'https://github.com/monkeypaste',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/docs/welcome',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/monkeypaste',
              },
              {
                to: 'https://www.monkeypaste.com/forum',
                label: 'Forum'
              },
              // {
              //   label: 'Discord',
              //   href: 'https://discordapp.com/invite/monkeypaste',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'https://twitter.com/monkeypaste',
              // },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   to: '/blog',
              //   label: 'Blog',
              // },
              {
                to: '/about',
                label: 'About'
              },
              {
                to: '/download',
                label: 'Download'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/monkeypaste',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                to: '/legal/privacy',
                label: 'Privacy',
              },
              {
                to: '/legal/terms',
                label: 'Terms',
              },
              {
                to: '/legal/credits',
                label: 'Credits',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Monkey LLC, Built with Docusaurus.`,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    'image-zoom',
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],
};

module.exports = config;
