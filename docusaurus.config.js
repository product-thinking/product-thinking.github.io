/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '🎯 每日产品脑洞',
  tagline: '🎯 每日产品脑洞',
  url: 'https://mayandev.top/product-thinking',
  baseUrl: '/product-thinking/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'mayandev', // Usually your GitHub org/user name.
  projectName: 'product-thinking', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '每日产品脑洞',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/mayandev/product-thinking',
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
            'https://github.com/mayandev/product-thinking/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/mayandev/product-thinking/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
