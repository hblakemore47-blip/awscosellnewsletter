---
title: "The Co-Sell Bar Just Went Up. That’s Your Opening."
issue: 36
date: "October 29, 2026"
---

For years, co-sell ran on assertion.

You registered the opportunity, wrote a description, and claimed influence. AWS mostly took you at your word.

That era is over. AWS now grades your deals at both ends: when you register them, and after they turn into consumption. The barrier to entry has gone up.

That’s good news. A higher bar thins the crowd, and if you have a way to clear it at scale, you’re standing in a much shorter line.

## The Shift

Two things changed in 2026, and they’re easy to treat as separate admin tasks.

At the front end, every ACE opportunity is now read, qualified and scored by an AI agent before a human at AWS decides whether to engage.

At the back end, Partner Revenue Measurement (PRM) attributes actual AWS consumption to the partners who drove it.

The implication: AWS now has a measure of the quality of what you claim and the outcome of what you deliver. Partners who still treat ACE as a reporting obligation and PRM as a compliance checkbox will find both working against them.

## The Front Door: ACE Now Has a Grader

Every ACE submission now gets an Opportunity Quality Score from 0 to 100. That score routes the deal into one of three motions:

- AWS Field-engaged. A real AWS seller works the deal with you.
- Agent-engaged. The agent tells you what’s missing before a human will look at it.
- Partner-led. You get agent support, but you own the deal on your own.

AWS sellers see the score too. And the score updates live as you improve the record.

Bulk uploads and boilerplate descriptions used to get through. Now they sink.

I saw this firsthand recently. My early submissions used the same generic descriptions that had always worked, and they scored at or near zero. No field engagement and no AM visibility, just a number telling me the agent didn’t believe a word of it.

So I started iterating. Through trial and error, I built a Claude Skill that structures each submission around what the grader is actually looking for. My next submission for a key opportunity scored 60/100 and landed field engagement immediately. Then I added a properly dated next step, with a named owner and a named customer contact. The score moved to 75.

Same partner, same kind of deal. It went from virtually nothing to Field-engaged. The deal didn’t get bigger. The record got more believable.

That’s the key insight. The score isn’t measuring how good your deal is. It measures how legible your deal is to an AWS rep who has never heard of it and has thirty seconds to decide whether to act. That rep is silently asking three questions:

- Do I understand this in customer terms? What’s the forcing function, what are they evaluating against, and what’s being displaced?
- Is this real? Is there a named contact with a role and a real next action with a real date, or does it say “TBD”?
- What do you want from me? Is there a specific ask, like a technical deep-dive on a named architecture area? “AWS support” scores the same as no ask at all.

A brilliant deal described vaguely scores low. A modest deal described precisely scores high. Your job is to close that gap, not to make the deal sound bigger.

Credit where it’s due: much of my thinking here was sharpened by Nikolay Nikolaev’s appearance on Andrew Morris’s Beyond Co-sell podcast. If you haven’t listened, do.

## The Back Door: PRM Measures What Actually Happened

PRM is the other half. It reads a signal on customer resources and uses it to decide which partner gets credit for the resulting spend.

There are three ways to send that signal: Marketplace metering, resource tagging, and a user agent string. As of September, multiple partners can now be attributed on the same resource. That matters a lot for anyone delivering alongside an ISV or another SI.

For ISVs with a Marketplace product, this is mostly plumbing. For services firms, it’s existential. If you don’t ship software, you have no meter. If you don’t tag, your influence on a customer’s consumption is invisible. That holds no matter how much of the architecture you designed.

And invisible influence is increasingly unfunded. Partners are already finding PRM readiness sitting in the path of funding conversations. I’m working through this myself right now. My honest take is that it’s less of a technical lift than a sequencing problem: Partner Central, Marketplace account linkage and tagging conventions all have to line up before any data flows.

## Why These Are One System

The Opportunity Quality Score tells AWS whether to show up. PRM tells AWS whether showing up paid off.

Think about how AWS sellers are measured: on consumption, not on how many partner introductions they’ve made. The score helps them choose which deals deserve their time. PRM tells them, after the fact, whether that choice was right.

My view: these two data sets will converge. A partner whose high-scoring opportunities reliably turn into attributed consumption will earn trust that no amount of relationship-building can buy. A partner whose deals score well but never show up in PRM will eventually be discounted, quietly.

This is Week 24’s “Algorithmic Matchmaker” argument, now with a feedback loop attached.

## What I Got Wrong

I’ll be direct: I used to give partners the opposite advice.

My playbook was volume first. Bulk upload to ACE with generic descriptions. Get the approvals. Use that visibility to learn who owns the account. Then do the real work in the intro email to the AM, where you could finally be specific.

It worked. ACE was a door, and the description was just what you said to get through it. The personalisation happened afterwards, one email at a time.

That playbook is dead.

The agent now reads the description, and the description decides whether there’s an AM to email at all. A generic upload doesn’t get you through the door anymore. It gets you routed to Partner-led, where no human at AWS is watching. The personalisation has to happen before submission, not after.

That creates a real tension. Volume still matters. Co-sell is still a numbers game at the top of the funnel, and nobody has time to hand-write two thousand characters of forcing functions and evaluation criteria for every account.

So you need both: personalised submissions at volume. A year ago that combination didn’t exist. Now it does, and it’s AI.

## The MCP Turns This Into a Workflow

None of this would be manageable if it meant living inside the Partner Central console. It doesn’t have to.

AWS Partner Central now has an MCP server. Any MCP-compatible AI client can read your ACE pipeline and pull the quality score and AWS’s recommendations. It can also check funding eligibility and draft opportunities, with your approval before anything is written.

Here’s how I use it now. That Claude Skill encodes what the grader actually rewards: a specific forcing function, named constraints instead of categories, a named incumbent being displaced, and a dated next step under 250 characters. The MCP supplies the live record and score. The skill drafts the fix. I review it and submit.

This is how you get volume back without going generic. The Skill works on one deal or fifty, and every submission comes out specific to its account. That’s what the old bulk upload never was.

One caveat. AI can format specificity, but it can’t invent it. The named CTO, the real data residency requirement and the actual board deadline still have to come from your CRM, your call notes or your transcripts. That’s why the MCP and a Skill work best together. One brings in the live record, the other knows what the grader rewards.

The goal isn’t to write descriptions that sound personal. It’s to make the real details of every deal fast enough to capture that you never have to cut corners on volume.

## Bottom Line

AWS has raised the bar on co-sell, and closed the loop while doing it. The agent grades whether your opportunity is believable before anyone engages, and PRM checks whether your influence turned into consumption afterwards. Most partners will either slow down to meet the bar or keep flooding ACE and quietly disappear into Partner-led. The ones who win will treat every submission as a craft and use AI to do that craft at scale. The old trade-off between volume and personalisation is gone. If you’re still choosing one, you’re choosing wrong.

## Tip of the Week

Pull your five lowest-scoring open ACE opportunities and rewrite only the Next Steps field. Give each one a concrete action, a named owner with title, a named customer contact with role, and a date in the next three weeks, all under 250 characters. Then watch what the rescore does.

**One to Read:** AWS’s own APN Blog post, Sell smarter with AWS: New agentic capabilities accelerate time to revenue (June 2026). It’s the clearest official explanation of the three motions and what moves the score. Pair it with the Beyond Co-sell episode with Nikolay Nikolaev.

Thanks for reading. If you’re staring at a pipeline full of Agent-engaged opportunities, or working out where PRM fits in a services business, that’s exactly the kind of conversation I enjoy having. Feel free to reach out.
