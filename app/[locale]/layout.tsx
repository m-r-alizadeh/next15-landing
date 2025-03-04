import type { Metadata } from "next";

import "../globals.css";
import Head from 'next/head';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import clsx from "clsx";


export const metadata: Metadata = {
  title: "Creative Landing Page",
  description: "Generated by MRA",
};

export default async function RootLayout({
  children,
   params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  //const locale: string = 'fa'

  if (!routing.locales.includes(locale as 'en' | 'fa')) {
    notFound();
  }

  const messages = await getMessages();
  const dir = locale === 'fa' ? 'rtl' : 'ltr';

  const bodyClasses = clsx(
    'min-h-screen antialiased',
    {
      'font-estedad text-right': locale === 'fa',
      'font-geist text-left': locale === 'en'
    }
  );

  return (
    <html lang={locale} dir={dir} className="dark">
      <Head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
      </Head>
      <body className={bodyClasses}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
