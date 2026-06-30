---
title: "The Private Offer Playbook: What They Are, How They Work, and What Most People Miss"
issue: 27
date: ""
---

If you've been following this series, you'll have seen Private Offers referenced constantly — in the context of co-sell motions, CPPO, deal velocity, 3PIs, and revenue operations. But I've never dedicated a full issue to unpacking what they actually are, how they differ from the alternatives, and the operational complexity that catches most ISVs off guard.

This week, we fix that.

## What Is a Private Offer?

A Private Offer is a set of negotiated terms used to purchase a product from AWS Marketplace. This can involve a custom pricing plan, end user licence agreement (EULA), or custom solutions. Sellers and buyers negotiate before committing to a private offer that's different from the public offer.

In plain English: it's a customised deal that lives inside the AWS Marketplace infrastructure, but is only visible to the specific buyer account you direct it to. Think of it as a bespoke contract that still flows through all of AWS's billing, procurement, and reporting rails.

This matters because it means the buyer experiences all the procurement benefits of Marketplace — consolidated billing, committed spend burn-down, no new vendor onboarding — while you, the seller, retain the flexibility to negotiate commercial terms that reflect the reality of an enterprise deal.

## How Does It Differ from a Direct Deal?

In a traditional direct deal, you negotiate with the buyer, agree on terms, issue an invoice, and manage collection yourself. You're responsible for the entire commercial and legal flow: contracting, invoicing, chasing payment, managing renewals, and handling the compliance burden in each jurisdiction.

A Private Offer shifts much of that operational weight to AWS. AWS handles billing, metering, refunds, and invoicing. This creates more predictable revenue operations and reduces internal workload for finance and operations teams.

The practical implication is significant. Instead of your deal desk managing bespoke contracts with each enterprise buyer, the Private Offer standardises the commercial infrastructure while keeping the deal terms flexible. You still negotiate. AWS handles the plumbing.

There's a co-sell dimension too. Cloud providers don't get paid when a marketplace buyer makes a public purchase. So if you want to create a healthier co-sell collaboration, a Private Offer is the way to go. Private Offers create the financial incentive that activates AWS field sellers — they can't meaningfully co-sell a public listing, but they absolutely can co-sell a Private Offer.

## How Does It Differ from a Public Offer?

A public offer is your off-the-rack product. Anyone can find it, click subscribe, and transact at your listed price under your standard EULA. It's discoverable, self-service, and requires no sales involvement. For product-led growth motions or lower-value transactions, this works well.

A Private Offer is the tailored version — crafted for a specific buyer, invisible to everyone else, and negotiated before it's extended. When the buyer navigates to your product's subscription page, a banner indicates that a private offer is available. They can still see and choose the public offer if they prefer — but in practice, enterprise buyers with negotiated terms will always take the private route.

The key distinction in terms of mechanics: for public offers, only USD is supported. For private offers, USD, AUD, EUR, GBP, and JPY are supported. That currency flexibility is one of the most practically important differences, and one most sellers don't think about until it becomes a problem.

## The Things People Don't Think About

This is where it gets interesting — and where most ISVs get caught out.

### Currencies

As noted above, public listings are USD-only. If your customers are in Australia, Europe, or Japan and want to transact in local currency, a Private Offer is your only Marketplace route. This sounds minor until you're six months into a co-sell motion and realise your Australian enterprise buyer can't easily transact in AUD on your public listing. Set up your non-USD disbursement preferences early — don't wait until you have a deal on the table.

### Payment Terms and Flexible Payment Schedules

Buyers on AWS Marketplace can set up invoicing payment terms with AWS. Any transactions they complete are subject to these payment terms and grouped into their AWS bill. The customer subscribes to your product. They receive an invoice from AWS on the third of the following month or on the date or dates outlined in the flexible payment schedule on the private offer.

This means payment terms aren't negotiated directly between you and the buyer — they're governed by the buyer's existing relationship with AWS. If a buyer has NET 60 terms with AWS, that applies to your Private Offer transaction too. Build this into your cash flow planning.

### Disbursement

AWS bills the buyer, collects payment, and disburses to the seller monthly. You never invoice customers directly — this eliminates late payment risk but ties cash flow to AWS's disbursement timeline. You're trading credit risk for timing lag. For startups managing runway, that distinction matters.

### Auto-Renewal

This one catches people off guard. Auto-renew defaults to true on public orders. Private offers cannot be auto-renewed. That means every Private Offer renewal requires active engagement — you need a process to track expiry dates and extend new offers before agreements lapse. Without that discipline, you'll lose deals not because the customer churned, but because nobody caught the renewal date in time.

### Tax and Liability

This is genuinely complex and the area where most ISVs operating internationally should get professional advice. The short version: AWS acts as the point of purchase but not always as the seller of record. When you register to sell a product on AWS Marketplace, you fill out a seller profile in the Marketplace Management Portal and will be listed as that entity publicly and taxed accordingly.

What this means practically is that your legal entity — not AWS — carries the tax and liability obligations in most jurisdictions. AWS collects and remits certain indirect taxes on your behalf in specific regions, but this is not universal. AWS Marketplace is operated globally by different AWS legal entities based on the location of the buyer's AWS account, or whether the seller account has onboarded to a local Marketplace Operator.

Which brings us to the final, and most overlooked, topic.

## International Marketplaces and Revenue Recognition: The Entity Problem

Here's a scenario that plays out more often than it should.

An ISV based in Australia has registered on AWS Marketplace using their US entity or, more commonly, has simply defaulted their single seller account through AWS Inc. as the marketplace operator. They start winning deals in APAC, EMEA, and the US — all transacting through that single account. Revenue flows back to their US entity and is disbursed in USD regardless of where the customer is located.

On paper, this looks clean. In practice, it creates several problems.

First, revenue recognition. Every deal transacted through your US entity gets recognised as US revenue in your business — even if the customer is in Sydney, Tokyo, or Frankfurt. For companies with regional revenue targets, regional P&Ls, or investors scrutinising geographic mix, this is a real distortion.

Second, tax obligations. You may have tax liability in the jurisdictions where your customers are located, even if your entity isn't domiciled there. The complexity varies significantly by country — Japan has specific consumption tax rules, the EU has VAT obligations — and defaulting everything through AWS Inc. doesn't automatically resolve your local compliance requirements.

The solution is to set up regional seller accounts that mirror your actual business entity structure. Best practice is to set up multiple AWS Marketplace seller accounts to effectively match your global business structure. If you decide to use different business entities to sell in different countries or require different disbursement bank accounts for different products, you can create multiple AWS accounts and register them as individual seller accounts.

AWS Marketplace has established regional Marketplace Operators to facilitate transactions and support buyers' and sellers' localised business needs, such as tax, reporting, disbursements, and compliance. Current Marketplace Operators include AWS entities in the United States, EMEA, Australia, Japan, South Korea, and India.

What this means in practice: if you have an Australian entity, you can register a separate AWS Marketplace seller account under that entity and route APAC transactions through it. Revenue is then recognised against your Australian business, disbursed in AUD to an Australian bank account, and your local tax obligations are managed through the correct legal wrapper.

This isn't just a compliance consideration — it's a commercial maturity one. As you scale internationally through Marketplace, the entity structure you set up early will either make regional growth clean and auditable, or create a reconciliation headache you'll spend significant time and legal fees untangling later.

## The Bottom Line

Private Offers are the mechanism that makes enterprise Marketplace selling work. They give you the flexibility of a direct deal inside the procurement infrastructure buyers already trust. But they come with operational complexity that most ISVs don't anticipate until they're deep into their Marketplace motion.

The ones to get right early:

Set up non-USD disbursement preferences before you need them. Build a renewal tracking process from day one — private offers don't auto-renew. Understand that payment timing is governed by the buyer's AWS terms, not yours. And if you're selling internationally, get your entity structure right before you start routing deals through the wrong marketplace operator.

The transactional mechanics of Private Offers are learnable. The entity and tax structure is where you want experienced advice before the revenue starts flowing — not after.

---

## Tip of the Week

Before your next enterprise deal closes, ask one question: is this buyer set up to transact in USD, or do they need local currency? If the answer is anything other than USD, you need a Private Offer — and you need your disbursement preferences configured before the deal is on the table, not after.

**One to Read:** Jump back to [Week 26 (Third-Party Integrators)](#) for a look at how 3PI platforms can abstract the Private Offer management layer, including offer creation, renewal tracking, and CRM integration, so your team isn't running these workflows manually.
