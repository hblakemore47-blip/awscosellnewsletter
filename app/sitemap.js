import fs from 'fs';
import path from 'path';

export default function sitemap() {
  const baseUrl = 'https://www.awscosellnewsletter.com';

  const files = fs.readdirSync(path.join(process.cwd(), 'content/files'));
  const issuePages = files.map((filename) => {
    const slug = filename.replace('.md', '');
    return {
      url: `${baseUrl}/issues/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...issuePages,
  ];
}
