import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Link from 'next/link';

// This function tells Next.js which pages exist based on your .md files
export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/files'));
  return files.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}

// This function generates the SEO metadata for each specific page
export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `${slug.replace('-', ' ').toUpperCase()} | AWS GTM Strategy`,
  };
}

export default async function IssuePage({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/files', `${slug}.md`);
  
  // Read the markdown file
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  
  // Use gray-matter to handle any potential metadata in the file
  const { content } = matter(markdownWithMeta);
  
  // Convert Markdown to HTML
  const htmlContent = marked.parse(content);

  return (
    <main className="max-w-4xl mx-auto px-6 pb-20">
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
