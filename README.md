# Payload CMS Integration Demo

This is a demo of how to integrate the Payload CMS with the Catalyst framework.

## Quick Start
In a terminal, clone this repository:
```shell
git clone git@github.com:oBundle/catalyst-payload-cms.git
```

Open the project directory with editor (Visual Studio Code in this case):
```shell
code catalyst-payload-cms
```

Install node dependencies with Node.js v20:
```shell
pnpm install
```

Connect to your BigCommerce Storefront:
```shell
pnpm dlx @bigcommerce/create-catalyst@latest init
```

Start the development server:
```shell
pnpm dev
```

- Storefront URL: http://localhost:3000
- Payload CMS Admin Panel URL: http://localhost:3000/admin
- Payload Admin Username: admin@test.com
- Payload Admin Password: test123

Edit slides for the homepage hero carousel in the Payload CMS Admin Panel by going to [Globals > Homepage](http://localhost:3000/admin/globals/homepage/). The hero slides come from the Payload Local API - no fetch is required!  Check it out: in [app/\[locale\]/(default)/page.tsx](https://github.com/oBundle/catalyst-payload-cms/blob/6af7fc32dcf3f5bcef231f7ff16d5cf61b2942f3/app/%5Blocale%5D/(default)/page.tsx#L65-L73)


![-----------------------------------------------------](https://storage.googleapis.com/bigcommerce-developers/images/catalyst_readme_hr.png)

<a href="https://catalyst.dev" target="_blank" rel="noopener norerrer">
  <img src="https://storage.googleapis.com/bigcommerce-developers/images/catalyst_readme_banner.png" alt="Catalyst for Composable Commerce Image Banner" title="Catalyst">
</a>

<br />

**Catalyst** is the composable, fully customizable headless ecommerce storefront framework for
[BigCommerce](https://www.bigcommerce.com/). Catalyst is built with [Next.js](https://nextjs.org/), uses
our [React](https://react.dev/) storefront components, and is backed by the
[GraphQL Storefront API](https://developer.bigcommerce.com/docs/storefront/graphql).

By choosing Catalyst, you'll have a fully-functional storefront within a few seconds, and spend zero time on wiring
up APIs or building SEO, Accessibility, and Performance-optimized ecommerce components you've probably written many
times before. You can instead go straight to work building your brand and making this your own.

<div align="center">

![-----------------------------------------------------](https://storage.googleapis.com/bigcommerce-developers/images/catalyst_readme_hr.png)

</div>

<p align="center">
 <a href="https://www.catalyst.dev">🚀 catalyst.dev</a> •
 <a href="https://developer.bigcommerce.com/community">🤗 BigCommerce Developer Community</a> •
 <a href="https://github.com/bigcommerce/catalyst/discussions">💬 GitHub Discussions</a>
</p>

<div align="center">

![-----------------------------------------------------](https://storage.googleapis.com/bigcommerce-developers/images/catalyst_readme_hr.png)

</div>

## Requirements

- Node.js 20+
- `npm` (or `pnpm`/`yarn`)

## Getting started

If this installation of Catalyst was created using the `catalyst` CLI, you should already be connected to a store and can get started immediately by running:

```shell
npm run dev
```

If you want to connect to another store or channel, you can run the setup process again by running:

```shell
npx @bigcommerce/create-catalyst@latest init
```

Learn more about Catalyst at [catalyst.dev](https://catalyst.dev).

## Resources

- [GraphQL Storefront API Playground](https://developer.bigcommerce.com/graphql-storefront/playground)
- [GraphQL Storefront API Explorer](https://developer.bigcommerce.com/graphql-storefront/explorer)
- [BigCommerce DevDocs](https://developer.bigcommerce.com/docs/build)
