// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config();

const { themes } = require('prism-react-renderer');
const lightTheme = themes.synthwave84;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MonkeyPaste',
  staticDirectories: ['static'],
  tagline: '(coming soon!)',
  favicon: 'img/favicon.ico',

  // url: "https://localhost",
  // baseUrl: "/docs/build",
  url: "https://monkeypaste.com",
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Monkey LLC', // Usually your GitHub org/user name.
  projectName: 'MonkeyPaste', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      // Replace with your project's social card
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
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/blog', label: 'About', position: 'left' },
          { to: '/blog', label: 'Download', position: 'right' },
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
                label: 'Discord',
                href: 'https://discordapp.com/invite/monkeypaste',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/monkeypaste',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/monkeypaste',
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
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],
};

module.exports = config;
