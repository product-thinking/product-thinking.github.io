/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '🎯 每日产品脑洞',
  tagline: '🎯 每日产品脑洞',
  url: 'https://github.com/product-thinking/product-thinking.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'product-thinking', // Usually your GitHub org/user name.
  projectName: 'product-thinking.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '每日产品脑洞',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/product-thinking/product-thinking.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    copyright: `Copyright © ${new Date().getFullYear()} Product Thinking, Inc. Built with Docusaurus.`,
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/product-thinking/product-thinking.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/product-thinking/product-thinking.github.io/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
