---
title: "Reducing Entropy: How Enter's Engineering Processes Legal Chaos"
description: "How the Monitoring squad turns procedural noise into clean signal — a look at the engineering behind my current work at Enter."
date: 2026-03-03
---

> This post was originally published on [Enter's engineering blog](https://www.blog.getenter.ai/en/posts/monitoring-team). Enter is my current employer, where I'm part of the founding engineering team building AI solutions for the legal industry.

In Information Theory, **Shannon Entropy** quantifies the uncertainty or degree of "surprise" contained in a data source. Without a doubt, the Brazilian judicial ecosystem is an extremely high-entropy channel.

With over 90 courts operating in a decentralized manner, the challenge isn't a lack of rules — it's **high technical variance**: heterogeneous systems, inconsistent data standards, and signal instabilities that make capturing information a complex problem.

This post is the first in our series on how Enter's engineering squads are structured. Today we're opening the hood of the **Monitoring** team. Our technical role goes beyond moving bits; we act as a mechanism for **entropy reduction at the source**.

In this first stage of our product loop, we process the noisy signal from the external world and transform it into structured, predictable information.

## The Scale of Input: 75 Cases Per Minute

To understand the squad's architecture, we need to look at the numbers. According to the _Justiça em Números 2025 (CNJ)_ report, approximately 39.4 million new cases were filed in Brazilian courts in 2024.

That means the Brazilian judiciary publishes roughly **75 new cases every minute**.

The Monitoring squad is responsible for capturing, classifying, and ingesting this continuous flow. But the complexity doesn't stop at public data. We operate in a hybrid model, also connecting to companies' "nervous systems" (otherwise known as ERPs).

To tame this complexity, we split our engineering into two distinct engines with specific design patterns: **Public Discovery** and **Private Integrations**.

## 1. Public Discovery: The Controller Strategy

The biggest risk for our clients is the "blind spot": a case that has been filed against them, but which they're not yet aware of. On the public data front, our challenge is **discovery**.

How do you monitor something that doesn't yet have a known ID in your database?

To solve this, we implemented a **Controller Strategy**. Think of the _Controller_ as the orchestrator of a long-range radar. It doesn't perform the raw scanning itself, but intelligently manages _who_, _when_, and _where_ we should search.

- **Complexity Abstraction:** While we use strategic partners to handle the raw connectivity layer with the courts (resolving edge-case instabilities), the orchestration intelligence lives in our _Controller_.
- **Target Management:** The system dynamically manages lists of "targets" (company tax IDs and legal names), deciding scanning frequency based on risk and relevance heuristics.
- **Noise Filtering:** The Controller acts as the first entropy barrier. It ingests raw data, performs **Deduplication** (ensuring we're not processing the same event from different sources), and prepares the object for the next stage.

## 2. Private Integrations: The Provider Pattern

While the public side deals with volume and discovery, the private side (Client Integrations) deals with **Connectivity and Protocol**.

Large corporations have complex legacy technology ecosystems — from giants like Salesforce and Benner to proprietary on-premise legal systems. For Enter, these systems are rich sources of context (financial provisions, internal documents), but integrating them remains a classic software engineering challenge.

Here, we adopted the **Provider Pattern**.

We created a unified interface (`ProviderProtocol`) that abstracts the complexity of the external system. For Enter's platform core, it doesn't matter whether the data comes from a modern REST API, a legacy SOAP query, or a legacy database. The client-specific Provider is responsible for translating that local dialect into the platform's universal language.

**The Future: Autonomous Integration Agents** — Until recently, many of these connectors required constant maintenance of crawler scripts. We are now investing heavily in evolving these Providers into **Autonomous AI Agents**. Instead of rigid scripts that break whenever a client's ERP layout changes, we're training models capable of navigating, interpreting, and extracting data from these systems in a resilient way.

## The Big Challenge: Merge and Consistency

Where do these two worlds collide? At the **Merge** stage.

We frequently receive conflicting signals about the same case.

- _Source A (Court information from source X):_ Says the deadline is the 15th.
- _Source B (Client ERP):_ Says the deadline is the 12th.
- _Source C (Court information from source Y):_ Says the deadline is the 14th.

If we handled this naively, we'd end up with duplicate data or, worse, incorrect data. Our **Data Consistency** layer steps in here to create a Single Source of Truth.

We use reconciliation logic that employs language models to classify and deduplicate events captured from multiple sources. We validated the hypothesis that language models perform excellently at zero-shot learning, even in hard-to-control domains. However, tests conducted with internal datasets across several models revealed a minimal performance difference between large and small models. As a result, we were able to reduce costs by using smaller models while maintaining satisfactory performance. That said, we don't place blind trust in any model.

In this context, keeping **humans in the loop** is critical. Specialized validators ensure integrity in ambiguous cases, creating a feedback loop we use to continuously refine the hyperparameters used in our models for increasingly precise conflict resolution.

---

In his 1948 paper, Shannon stated that "the fundamental problem of communication is that of reproducing at one point either exactly or approximately a message selected at another point". Furthermore, for Shannon, **information is what reduces uncertainty.**

For the Monitoring squad, that "other point" is an ecosystem of 90 courts with millions of events and no obvious patterns. Our engineering exists to transform procedural noise into clean signal. By reducing the entropy of raw data, we ensure that, at the end of the line, our clients recover what Shannon defined as the essence of information: the **freedom of choice** grounded in certainty.

Being an engineer on the Monitoring squad means understanding that code is a means to reduce entropy in the real world. We'd rather deal with the computational cost of processing noisy data than assume the legal risk of ignoring a critical event. Without our hybrid ingestion layer, generative AI would just be a brilliant brain operating in the dark.
