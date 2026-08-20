import Link from 'next/link';

const issues = [
    { id: 'issue-31', title: 'The Missing "Co" in Co-Sell', date: 'August 13, 2026', preview: "Most 'broken' co-sell motions were never co-sell motions at all — they were one-way asks riding on a single generous AM's goodwill, and goodwill doesn't survive a busy quarter." },
    { id: 'issue-30', title: 'Is Your AWS Co-sell Problem Actually a Maturity Problem?', date: 'August 6, 2026', preview: "Generic co-sell advice isn't wrong, it's just meaningless without knowing where you actually sit — and AWS's move to algorithmic partner matching means that gap is starting to cost you visibility, too." },
    { id: 'issue-29', title: "Who's Actually Accountable for AI Adoption?", date: 'July 23, 2026', preview: 'Enterprises are pouring millions into AI, but almost nobody can say who owns adoption — and that gap is the AWS partner ecosystem\'s next real opportunity.' },
    { id: 'issue-28', title: 'Can the Partner Development Manager Role Actually Scale?', date: 'July 9, 2026', preview: 'The PDM model works for a handful of strategic partners — but it was never built to scale to thousands, and the layoffs prove it.' },
    { id: 'issue-27', title: 'The Private Offer Playbook', date: 'June 25, 2026', preview: 'Private Offers power enterprise Marketplace selling — but the operational complexity catches most ISVs off guard.' },
    { id: 'issue-26', title: 'Third-Party Integrators: The Smarter Way to List on Cloud Marketplace', date: 'June 11, 2026', preview: 'Getting listed on AWS Marketplace is far more involved than uploading a product description. Here\'s why no company should be doing it without a 3PI.' },
    { id: 'issue-25', title: 'Moving from Feature Matching to Intent Alignment', date: 'May 28, 2026', preview: 'If your GTM strategy is built around a static list of product features, you are optimizing for a conversation that isn\'t happening.' },
    { id: 'issue-24', title: 'The Algorithmic Matchmaker', date: 'May 14, 2026', preview: 'The era of "Who you know" at AWS is being rapidly augmented by "What the machine knows about you."' },
    { id: 'issue-23', title: 'Redefining the Partner', date: 'May 1, 2026', preview: 'The rise of the Cloud Marketplace is effectively rezoning the entire partner neighborhood.' },
    { id: 'issue-22', title: 'GTM Launch and Leave Fallacy', date: 'April 17, 2026', preview: 'Most GTM strategies follow a linear path: Launch, Enable, and Hope. But strategy is static.' },
    { id: 'issue-21', title: 'The Coherence Gap', date: 'April 3, 2026', preview: 'Efficiency without a shared framework is just faster noise. How to manage the "Shadow Efficiency" of AI tools.' },
    { id: 'issue-20', title: 'Execution Platforms & Co-sell', date: 'March 20, 2026', preview: 'Most partnerships fail because of an execution bottleneck. We need to move co-sell out into the field.' },
    { id: 'issue-19', title: 'Concurrent Agreements', date: 'March 6, 2026', preview: 'A major update to Marketplace: support for concurrent private offers. This signals a shift in customer-centricity.' },
    { id: 'issue-18', title: 'Co-selling in the World of AI', date: 'Feb 20, 2026', preview: 'Amazon is committing $200bn to the AI arms race. This decision reshapes incentives for every partner.' },
    { id: 'issue-17', title: 'Marketplaces: The New Frontier', date: 'Feb 6, 2026', preview: 'Innovation doesn\'t arrive because the old way is impossible—it arrives because the old way isn\'t good enough.' },
    { id: 'issue-16', title: 'Are you AWS Co-sell Ready?', date: 'Jan 23, 2026', preview: 'With marketplaces set to hit $85bn by 2028, the opportunity cost of not being optimized is higher than ever.' },
    { id: 'issue-15', title: 'ISV Outlook for 2026', date: 'Jan 9, 2026', preview: 'A look ahead: AI as an ecosystem, agentic procurement, and the shift toward solution-centric selling.' },
    { id: 'issue-14', title: 're:Cap from re:Invent', date: 'Dec 26, 2025', preview: 'The cloud is evolving from infrastructure to autonomous systems. Key takeaways for Marketplace sellers.' },
    { id: 'issue-13', title: 'Better Together Success Stories', date: 'Dec 12, 2025', preview: 'Examining Coveo, Armis, and SUSE Rancher to see how they drive incremental AWS consumption.' },
    { id: 'issue-12', title: 'The AWS Co-Sell Playbook', date: 'Nov 28, 2025', preview: 'Distilling 11 weeks of AWS GTM into 10 core lessons. From ACE visibility to the multiplier of distributors.' },
    { id: 'issue-11', title: 'Building Global Reach', date: 'Nov 14, 2025', preview: 'How ISVs scale internationally through AWS without building global overhead. Replicating trust, not operations.' },
    { id: 'issue-10', title: 'Build vs Borrow: GTM Tools', date: 'Oct 31, 2025', preview: 'Should you build your Marketplace listing internally or use an execution platform? Prioritize GTM speed.' },
    { id: 'issue-09', title: 'The AWS Passport Programme', date: 'Oct 17, 2025', preview: 'A powerful lever for regional expansion. How to use Marketplace as a commercial landing zone.' },
    { id: 'issue-08', title: 'The $2,500 APN Fee', date: 'Oct 3, 2025', preview: 'Is it a logo tax or a growth hack? How to turn that fee into $3,500 in credits and a pipeline engine.' },
    { id: 'issue-07', title: 'APN–Marketplace Unification', date: 'Sept 19, 2025', preview: 'AWS is merging Partner Central and Marketplace. A mindset shift toward accessible, lean-team co-selling.' },
    { id: 'issue-06', title: 'What is ACE?', date: 'Sept 5, 2025', preview: 'The golden rule: if it\'s not in ACE, it doesn\'t exist to AWS sellers. Stop being invisible to the sales engine.' },
    { id: 'issue-05', title: 'AWS Seller Prime: Worth It?', date: 'Aug 22, 2025', preview: 'A breakdown for startups. Seller Prime is a lever, but only if you\'re actually ready to pull it.' },
    { id: 'issue-04', title: 'Stuck at Step 3', date: 'Aug 8, 2025', preview: 'The Better Together story is a filter, not a form. How to answer: "Why should AWS care?"' },
    { id: 'issue-03', title: 'Distribution: Friend or Foe?', date: 'July 25, 2025', preview: 'Distributors are the multipliers of co-sell scale. How they bridge the gap between ISVs and the engine.' },
    { id: 'issue-02', title: 'Is Marketplace Worth the Effort?', date: 'July 11, 2025', preview: 'Marketplace delivers strategic value before the first transaction. It\'s a co-sell accelerant.' },
    { id: 'issue-01', title: 'What AWS Sellers Care About', date: 'June 27, 2025', preview: 'If you don\'t show up with specifics, AWS sellers won\'t engage. Here is what to say to co-own a deal.' }
];

export default function Home() {
  const featured = issues.slice(0, 3);
  const archive = issues.slice(3);

  return (
    <main>
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400 font-bold mb-8">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map(issue => (
            <Link href={`/issues/${issue.id}`} key={issue.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">{issue.date}</span>
              <h3 className="text-2xl font-bold leading-tight text-slate-900 group-hover:text-blue-600 transition-colors">{issue.title}</h3>
              <p className="mt-4 text-slate-500 line-clamp-3 leading-relaxed flex-grow text-left">{issue.preview}</p>
              <span className="mt-8 text-slate-900 font-bold text-sm flex items-center">Read Edition <span className="ml-2 group-hover:ml-4 transition-all">→</span></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 pb-24 text-center">
        <h2 className="text-sm uppercase tracking-[0.2em] text-slate-400 font-bold mb-10">Full Archive</h2>
        <div className="divide-y divide-slate-200 text-left">
          {archive.map(issue => (
            <Link href={`/issues/${issue.id}`} key={issue.id} className="group flex justify-between items-center py-6 hover:px-4 hover:bg-white hover:shadow-md rounded-xl transition-all border-b border-slate-100 last:border-0">
                <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{issue.date}</span>
                    <span className="font-bold text-lg text-slate-800 group-hover:text-blue-600 transition-colors">{issue.title}</span>
                </div>
                <span className="text-slate-300 group-hover:text-blue-600 transition-colors text-2xl">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
