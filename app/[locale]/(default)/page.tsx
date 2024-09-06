import { removeEdgesAndNodes } from '@bigcommerce/catalyst-client';
import { getPayloadHMR } from '@payloadcms/next/utilities';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import config from '@payload-config';
import { getSessionCustomerId } from '~/auth';
import { client } from '~/client';
import { graphql } from '~/client/graphql';
import { revalidate } from '~/client/revalidate-target';
import { Hero } from '~/components/hero';
import {
  ProductCardCarousel,
  ProductCardCarouselFragment,
} from '~/components/product-card-carousel';
import { LocaleType } from '~/i18n';

interface Props {
  params: {
    locale: LocaleType;
  };
}

const HomePageQuery = graphql(
  `
    query HomePageQuery {
      site {
        newestProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
        featuredProducts(first: 12) {
          edges {
            node {
              ...ProductCardCarouselFragment
            }
          }
        }
      }
    }
  `,
  [ProductCardCarouselFragment],
);

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  const customerId = await getSessionCustomerId();

  const t = await getTranslations({ locale, namespace: 'Home' });
  const messages = await getMessages({ locale });

  const { data } = await client.fetch({
    document: HomePageQuery,
    customerId,
    fetchOptions: customerId ? { cache: 'no-store' } : { next: { revalidate } },
  });

  const featuredProducts = removeEdgesAndNodes(data.site.featuredProducts);
  const newestProducts = removeEdgesAndNodes(data.site.newestProducts);

  // Payload example
  const payload = await getPayloadHMR({
    config,
  });

  const payloadData = await payload.findGlobal({
    slug: 'homepage',
  });
  const { hero } = payloadData;

  return (
    <>
      <Hero hero={hero} />

      <div className="my-10">
        <NextIntlClientProvider locale={locale} messages={{ Product: messages.Product ?? {} }}>
          <ProductCardCarousel
            products={featuredProducts}
            showCart={false}
            showCompare={false}
            title={t('Carousel.featuredProducts')}
          />
          <ProductCardCarousel
            products={newestProducts}
            showCart={false}
            showCompare={false}
            title={t('Carousel.newestProducts')}
          />
        </NextIntlClientProvider>
      </div>
    </>
  );
}

export const runtime = 'edge';
