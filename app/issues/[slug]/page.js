import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/files'));
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/files', `${slug}.md`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(markdownWithMeta);

  const title = data.title || slug;
  const description = data.preview || data.description || `Edition ${data.issue || ''} of the AWS GTM Strategy newsletter by Harry Blakemore.`;
  const url = `https://www.awscosellnewsletter.com/issues/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      publishedTime: data.date || undefined,
      authors: ['Harry Blakemore'],
      siteName: 'AWS GTM Strategy',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function IssuePage({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/files', `${slug}.md`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(markdownWithMeta);
  const htmlContent = marked.parse(content);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title || slug,
    author: {
      '@type': 'Person',
      name: 'Harry Blakemore',
      url: 'https://www.linkedin.com/in/harryblakemore/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'AWS GTM Strategy',
      url: 'https://www.awscosellnewsletter.com',
    },
    datePublished: data.date || undefined,
    url: `https://www.awscosellnewsletter.com/issues/${slug}`,
  };

  return (
    <main className="max-w-4xl mx-auto px-6 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-10">
        <Link href="/" className="text-blue-600 font-medium hover:underline flex items-center gap-2">
          <span>←</span> Back to Archive
        </Link>
      </div>
      <article
        className="prose prose-slate lg:prose-xl max-w-none bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-slate-100"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </main>
  );
}
