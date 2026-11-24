export interface LedgerRow {
  id: string;
  metric: string;
  account: string;
  before: string;
  after: string;
  deltaLabel: string;
  caseStudyId: string;
}

export interface KpiHighlight {
  value: string;
  label: string;
  detail: string;
}

export interface Pillar {
  number: string;
  id: number;
  title: string;
  question: string;
  summary: string;
  proof: string;
}

export type CaseStudyCategory = 'all' | 'saas' | 'attribution' | 'ecommerce';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  account: string;
  period: string;
  category: Exclude<CaseStudyCategory, 'all'>;
  categoryLabel: string;
  pillars: number[];
  pillarLabels: string[];
  headlineMetric: string;
  problemPoints: string[];
  actionPoints: string[];
  resultPoints: string[];
  resultSummary: string;
  technicalArchitecture: {
    channels: string[];
    instrumentation: string[];
    decisions: string[];
  };
}

export interface SystemStage {
  label: string;
  title: string;
  detail: string;
}

export interface BuiltSystem {
  id: string;
  title: string;
  purpose: string;
  pillars: string[];
  summary: string;
  stages: SystemStage[];
  operationalImpact: string;
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  tier: 'leadership' | 'foundation';
  summary: string;
  highlights: string[];
  recognition?: string;
}

export interface StackGroup {
  title: string;
  items: string[];
}

export const RESUME_PDF_URL = '/assets/aistudio/Devaraju-Pichchuka-Teal-Master-Resume_a4ac2b72.pdf';

export const CONTACT_INFO = {
  name: 'Devaraju Pichchuka',
  role: 'Senior Performance Marketing Manager',
  specialty: 'SaaS Paid Acquisition · US & Global Markets',
  location: 'Hyderabad, India',
  availability: 'Open to remote global roles · Comfortable with US-overlap hours',
  email: 'devrajpichchuka@gmail.com',
  phone: '+91 76759 15227',
  phoneHref: 'tel:+917675915227',
  linkedin: 'https://www.linkedin.com/in/devaraju-pichchuka-57074712a/',
  linkedinHandle: 'linkedin.com/in/devaraju-pichchuka-57074712a',
};

export const LEDGER_ROWS: LedgerRow[] = [
  {
    id: 'alidrop',
    metric: 'Alidrop revenue-to-spend',
    account: 'Dropshipping SaaS · US & Global',
    before: '0.56x',
    after: '2.48x',
    deltaLabel: '+343% peak · ~67% spend cut',
    caseStudyId: 'alidrop-turnaround',
  },
  {
    id: 'spocket-nb',
    metric: 'Spocket non-branded ROAS',
    account: 'SaaS Paid Search · Google Ads',
    before: '0.20x',
    after: '2.47x',
    deltaLabel: '2.3x–2.5x sustained',
    caseStudyId: 'spocket-brand-split',
  },
  {
    id: 'dropshiptool',
    metric: 'Dropshiptool Google ROAS',
    account: 'SaaS Scale Test · Google & Bing',
    before: '0.37x',
    after: '3.91x',
    deltaLabel: 'Bing 2.4x cumulative',
    caseStudyId: 'dropshiptool-cohort',
  },
  {
    id: 'stripe-gap',
    metric: 'Google vs. Stripe conversion gap',
    account: 'GCLID & UTM Reconciliation',
    before: '36%',
    after: '17%',
    deltaLabel: '-19 pts reporting gap',
    caseStudyId: 'alidrop-turnaround',
  },
  {
    id: 'ting-au',
    metric: 'Australian E-Commerce ROAS',
    account: 'Merchant Center · Ting Digital',
    before: '2.00x',
    after: '4.00x',
    deltaLabel: '2x lift via feed segmentation',
    caseStudyId: 'ting-au-ecommerce',
  },
];

export const KPI_HIGHLIGHTS: KpiHighlight[] = [
  {
    value: '12+ Years',
    label: 'Digital & Agency Leadership',
    detail: '8+ years hands-on campaign strategy, paid search & attribution',
  },
  {
    value: 'INR 4 Cr / mo',
    label: 'Pooled Media Directed',
    detail: '~$480K/mo across 20–25 brands & 15+ specialists at Geny Medium',
  },
  {
    value: '36% → 17%',
    label: 'Conversion Discrepancy Cut',
    detail: 'Reconciled Google Ads reporting directly against Stripe revenue',
  },
  {
    value: '15–20%',
    label: 'CPL Efficiency Gain',
    detail: 'Across 25 brands via offline conversion imports & Enhanced Conversions',
  },
];

export const GROWTH_PILLARS: Pillar[] = [
  {
    number: '01',
    id: 1,
    title: 'Measurement & Revenue Integrity',
    question: 'Do platform numbers match real revenue?',
    summary:
      'GCLID capture, keyword/placement UTMs, Enhanced Conversions, and Stripe or CRM reconciliation.',
    proof: 'Cut Google–Stripe gap from 36% to 17%; re-anchored an INR 50L/mo account to CRM truth.',
  },
  {
    number: '02',
    id: 2,
    title: 'Campaign Intelligence',
    question: 'What does each keyword and country earn?',
    summary:
      'Isolating branded vs. non-branded search so strong brand demand never hides weak acquisition.',
    proof: 'Lifted Spocket non-branded ROAS from ~0.20x to a sustained 2.3x–2.5x.',
  },
  {
    number: '03',
    id: 3,
    title: 'Conversion Optimisation',
    question: 'Do clicks and trials convert to paying users?',
    summary:
      'Judging scale tests by trial-to-paid cohorts and cutting channels that miss paid CAC targets.',
    proof: 'Scaled Dropshiptool to 3.91x ROAS; halted Meta, Reddit & OpenAI tests lacking paid proof.',
  },
  {
    number: '04',
    id: 4,
    title: 'Acquisition Economics & BI',
    question: 'Is every customer profitable at true CAC?',
    summary:
      'Computing CAC, ROAS, and LTV:CAC from net revenue to right-size budgets with leadership.',
    proof: 'Took Alidrop from 0.56x to 2.48x peak while cutting monthly spend by ~two-thirds.',
  },
  {
    number: '05',
    id: 5,
    title: 'Business Automation',
    question: 'How do we surface truth daily without manual work?',
    summary:
      'Google Ads API and Apps Script pipelines joining daily ad spend with net Stripe revenue.',
    proof: 'Built Daily KPI Tracker and Pareto 80/15/5 Revenue-vs-Cost sheets used for daily bids.',
  },
  {
    number: '06',
    id: 6,
    title: 'Prioritized Action Plan',
    question: 'What ships first, and how do we limit risk?',
    summary:
      'Profit-ranked rollouts with pre/post checkpoints so adverse shifts are caught and reversed fast.',
    proof: 'Diagnosed a 3-account geo drop, reversed it with leadership, and standardized phased rollouts.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'alidrop-turnaround',
    title: 'Alidrop: From 0.56x Loss to 2.48x Profitable Peak',
    subtitle: 'Full-funnel Stripe revenue reconciliation and two-thirds spend right-sizing',
    account: 'Spocket Inc. · Alidrop SaaS',
    period: 'Jun 2025 – Sep 2026',
    category: 'saas',
    categoryLabel: 'SaaS Paid Search',
    pillars: [1, 2, 4, 6],
    pillarLabels: ['01 Measurement', '02 Campaign', '04 Economics', '06 Action Plan'],
    headlineMetric: '0.56x → 2.48x Revenue / Spend',
    problemPoints: [
      'Operating at 0.56x revenue-to-ad-spend.',
      '36% conversion discrepancy between Google Ads and Stripe.',
      'Zero campaign- or keyword-level visibility into real revenue.',
    ],
    actionPoints: [
      'Partnered with engineering to capture GCLID into Stripe.',
      'Built UTM schema down to keyword, placement, and device.',
      'Cut unprofitable monthly spend by ~67% with CEO alignment.',
    ],
    resultPoints: [
      'Revenue-to-spend climbed from 0.56x to a 2.48x peak.',
      'Monthly ad spend reduced by ~two-thirds.',
      'Google vs. Stripe conversion gap narrowed from 36% to 17%.',
    ],
    resultSummary:
      'Revenue-to-spend rose from 0.56x to a 2.48x peak while monthly spend dropped by ~67% and the Stripe conversion gap fell from 36% to 17%.',
    technicalArchitecture: {
      channels: ['Google Ads', 'Microsoft Ads (Bing)', 'Affiliate (PartnerStack, Impact)'],
      instrumentation: [
        'GCLID capture & persistence into Stripe customer metadata',
        'Keyword, placement, and device-level UTM taxonomy',
        'Automated Google Apps Script reconciliation against Stripe exports',
      ],
      decisions: [
        'Joint CEO & finance budget reset reducing monthly waste by ~67%',
        'Country-level bid adjustments anchored to net Stripe revenue',
        'Controlled tests on Meta, Reddit & OpenAI Ads halted when paid-conversion evidence lagged',
      ],
    },
  },
  {
    id: 'spocket-brand-split',
    title: 'Spocket Google Ads: Separating Brand Illusion from Non-Brand Growth',
    subtitle: 'Isolating ~60% branded revenue to rebuild non-branded unit economics',
    account: 'Spocket Inc. · Core SaaS',
    period: 'Jun 2025 – Sep 2026',
    category: 'saas',
    categoryLabel: 'SaaS Paid Search',
    pillars: [2, 4, 5],
    pillarLabels: ['02 Campaign', '04 Economics', '05 Automation'],
    headlineMetric: '0.20x → 2.47x Non-Brand ROAS',
    problemPoints: [
      '~60% of revenue came from branded searches, inflating blended ROAS.',
      'Non-branded acquisition was bleeding at ~0.20x efficiency.',
    ],
    actionPoints: [
      'Separated branded and non-branded campaigns cleanly.',
      'Cut ~70% of underperforming non-branded ad spend.',
      'Reallocated daily budget via campaign & country Stripe dashboards.',
    ],
    resultPoints: [
      'Non-branded ROAS rose from ~0.20x to a 2.47x peak.',
      'Sustained 2.3x–2.5x non-brand ROAS at target LTV:CAC.',
    ],
    resultSummary:
      'Non-branded ROAS climbed from ~0.20x to a sustained 2.3x–2.5x (peaking at 2.47x) with clear incremental CAC visibility.',
    technicalArchitecture: {
      channels: ['Google Ads Search', 'Microsoft Ads (Bing)'],
      instrumentation: [
        'Strict negative keyword isolation between Brand and Non-Brand ad groups',
        'Google Ads API daily cost join with Stripe revenue by campaign ID',
        'Pareto 80/15/5 revenue tiering across keywords and markets',
      ],
      decisions: [
        '70% non-branded waste elimination guided by daily KPI dashboard',
        'Reallocation into high-intent US and Tier-1 international SaaS markets',
      ],
    },
  },
  {
    id: 'dropshiptool-cohort',
    title: 'Dropshiptool: Scale on Purpose, Cut on Trial-to-Paid Evidence',
    subtitle: 'Cohort-validated scaling across Google Ads and Microsoft Bing',
    account: 'Spocket Inc. · Dropshiptool SaaS',
    period: 'Jun 2025 – Sep 2026',
    category: 'saas',
    categoryLabel: 'SaaS Paid Search',
    pillars: [2, 3, 4],
    pillarLabels: ['02 Campaign', '03 Conversion', '04 Economics'],
    headlineMetric: '0.37x → 3.91x Google ROAS',
    problemPoints: [
      'Unclear whether scaling ad spend would convert into paying subscribers.',
      'Risk of optimizing for low-intent free trials instead of revenue.',
    ],
    actionPoints: [
      'Ran structured scale tests tracked by trial-to-paid cohort.',
      'Pulled back spend immediately where paid conversion missed CAC.',
      'Scaled lean high-intent coverage on Microsoft Ads (Bing).',
    ],
    resultPoints: [
      'Google Ads ROAS lifted from 0.37x to a 3.91x peak.',
      'Bing Ads achieved 2.4x cumulative return on a lean budget.',
    ],
    resultSummary:
      'Google Ads ROAS improved from 0.37x to a 3.91x peak, while Microsoft Bing delivered 2.4x cumulative ROAS.',
    technicalArchitecture: {
      channels: ['Google Ads', 'Microsoft Ads (Bing)'],
      instrumentation: [
        'Trial-to-paid cohort maturation tracking by acquisition week',
        'Country-level CAC and payback period monitoring',
      ],
      decisions: [
        'Halted scale tests where incremental trials failed to convert to paid',
        'Protected lean high-intent Bing exact/phrase match coverage at 2.4x ROAS',
      ],
    },
  },
  {
    id: 'geny-crm-attribution',
    title: 'Geny Medium: Re-Anchoring an INR 50L/mo Account to CRM Truth',
    subtitle: 'Resolving Google Ads vs. LeadSquared attribution conflicts across 25 brands',
    account: 'Geny Medium · 20–25 Brand Portfolio',
    period: 'Feb 2023 – Feb 2025',
    category: 'attribution',
    categoryLabel: 'Attribution & CRM',
    pillars: [1, 2, 6],
    pillarLabels: ['01 Measurement', '02 Campaign', '06 Action Plan'],
    headlineMetric: '15–20% CPL Efficiency Gain',
    problemPoints: [
      'Google Ads over-reported leads on an INR 50L/mo flagship account.',
      'LeadSquared CRM showed far fewer qualified sales opportunities.',
    ],
    actionPoints: [
      'Designated LeadSquared CRM as the source of truth for bidding.',
      'Deployed Offline Conversion Imports across 25 brands + Enhanced Conversions.',
      'Coordinated Meta CAPI (Datahash) & built a CTR-to-SQL creative framework.',
    ],
    resultPoints: [
      '15–20% CPL efficiency gain across 20–25 multi-industry brands.',
      'Coached 15+ specialists managing INR 4 Cr (~$480K)/mo pooled media.',
    ],
    resultSummary:
      'Improved cost-per-lead efficiency by 15–20% across 20–25 brands while directing INR 4 Cr/mo and coaching 15+ specialists.',
    technicalArchitecture: {
      channels: ['Google Ads', 'Meta Ads', 'DV360', 'YouTube Ads'],
      instrumentation: [
        'Offline Conversion Imports (OCI) across 25 brand accounts',
        'Google Enhanced Conversions + GA4 + GTM server/web tagging',
        'Meta Conversions API (CAPI) coordinated via Datahash & LeadSquared CRM',
      ],
      decisions: [
        'Creative evaluation matrix tying top-funnel CTR/video-view metrics to SQL/sales',
        'Standardized team SOPs and scenario-based training for 15+ specialists',
      ],
    },
  },
  {
    id: 'spocket-geo-recovery',
    title: 'Spocket Portfolio: Owning a Costly Call & Engineering the Recovery',
    subtitle: 'Pre/post country diagnostics, leadership reversal, and staged rollout governance',
    account: 'Spocket Inc. · Three SaaS Accounts',
    period: 'Jun 2025 – Sep 2026',
    category: 'attribution',
    categoryLabel: 'Attribution & CRM',
    pillars: [3, 6],
    pillarLabels: ['03 Conversion', '06 Action Plan'],
    headlineMetric: '3-Account Revenue Recovery',
    problemPoints: [
      'A sweeping geo-exclusion update cut trials and revenue across 3 accounts.',
    ],
    actionPoints: [
      'Ran immediate pre/post country-level cohort variance analysis.',
      'Presented transparent evidence to leadership to reverse the change.',
      'Designed a phased recoup plan with explicit checkpoint gates.',
    ],
    resultPoints: [
      'Trials and recurring revenue recovered steadily across all 3 accounts.',
      'Phased rollout SOPs adopted permanently for structural changes.',
    ],
    resultSummary:
      'Recovered trials and recurring revenue across three accounts and institutionalized phased rollout checkpoints.',
    technicalArchitecture: {
      channels: ['Google Ads', 'Microsoft Ads'],
      instrumentation: [
        'Country-by-country pre/post trial and Stripe revenue variance audit',
        'Checkpoint rollback thresholds for geo and bid strategy changes',
      ],
      decisions: [
        'Rapid diagnostic ownership and reversal proposal to executive leadership',
        'Institutionalized phased rollout SOPs across portfolio accounts',
      ],
    },
  },
  {
    id: 'ting-au-ecommerce',
    title: 'Ting Digital: Doubling Australian E-Commerce ROAS via Feed Architecture',
    subtitle: 'Merchant Center optimization and segmented shopping structure',
    account: 'Ting Digital LLP · Australian Retail',
    period: 'Jul 2018 – Apr 2019',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce & Scale',
    pillars: [2, 3, 4],
    pillarLabels: ['02 Campaign', '03 Conversion', '04 Economics'],
    headlineMetric: '2.0x → 4.0x Shopping ROAS',
    problemPoints: [
      'Australian Shopping campaigns stalled near 2x ROAS.',
      'Undifferentiated product feeds blended high- and low-margin SKUs.',
    ],
    actionPoints: [
      'Optimized Merchant Center feeds with enriched titles and margin labels.',
      'Segmented Shopping campaigns by SKU tier and search query intent.',
      'Ran recurring cross-time-zone reviews with Australian stakeholders.',
    ],
    resultPoints: [
      'Doubled Shopping ROAS from ~2x to 4x.',
      'Built predictable weekly performance cadence across time zones.',
    ],
    resultSummary:
      'Doubled Australian e-commerce ROAS from ~2x to 4x via Merchant Center feed optimization and segmentation.',
    technicalArchitecture: {
      channels: ['Google Shopping', 'Google Merchant Center', 'Google Search'],
      instrumentation: [
        'Merchant Center feed attribute enrichment & custom margin labels',
        'Query-priority campaign segmentation by SKU performance tier',
      ],
      decisions: [
        'Isolated high-margin hero SKUs from low-converting catalog inventory',
        'Direct stakeholder QBR cadence across India–Australia time zones',
      ],
    },
  },
];

export const BUILT_SYSTEMS: BuiltSystem[] = [
  {
    id: 'daily-kpi-tracker',
    title: 'Daily KPI Tracker',
    purpose: 'Multi-account ad spend & Stripe revenue consolidation',
    pillars: ['01 Measurement', '05 Automation'],
    summary:
      'A Google Apps Script automation system pulling Stripe transactions and Google Ads performance across three SaaS accounts into a single executive ledger—handling deduplication, channel bucketing, and daily KPI computation. When Stripe notifications migrated to Slack, rebuilt the ingestion layer seamlessly without downstream disruption.',
    stages: [
      {
        label: '01. Ingestion',
        title: 'Google Ads + Stripe / Slack Feeds',
        detail: 'Automated scheduled pulls across 3 SaaS accounts with resilient Slack-to-sheet parsing after Stripe webhook migration.',
      },
      {
        label: '02. Normalization',
        title: 'Deduplication & Source Bucketing',
        detail: 'Eliminates duplicate trial/charge records and maps UTM + GCLID tags into standardized paid, brand, non-brand, and affiliate buckets.',
      },
      {
        label: '03. Output',
        title: 'Single-View Daily Executive Sheet',
        detail: 'Publishes net revenue, spend, CAC, and revenue-to-spend ratios automatically every morning before bid adjustments.',
      },
    ],
    operationalImpact: 'Eliminated manual CSV reconciliation across 3 SaaS accounts and cut reporting lag to daily morning cadence.',
  },
  {
    id: 'revenue-vs-cost',
    title: 'Revenue vs. Cost Automation',
    purpose: 'Google Ads API + Stripe campaign & country profitability engine',
    pillars: ['02 Campaign', '04 Economics', '05 Automation'],
    summary:
      'Joins daily Stripe revenue directly with Google Ads cost via the Google Ads API at campaign, keyword, and country granularity. Automatically segments performance into Pareto tiers (Top 80%, Next 15%, Bottom 5%), archives monthly snapshots, and runs automated data-integrity checks.',
    stages: [
      {
        label: '01. API Join',
        title: 'Google Ads API × Stripe Revenue',
        detail: 'Matches daily ad cost by campaign ID, keyword, and country code against verified Stripe net payments.',
      },
      {
        label: '02. Pareto Tiering',
        title: '80% / 15% / 5% Spend Classification',
        detail: 'Classifies campaigns and geos into Top 80% core winners, Next 15% optimization candidates, and Bottom 5% cut targets.',
      },
      {
        label: '03. Governance',
        title: 'Integrity Checks & Monthly Archives',
        detail: 'Flags tracking gaps or spend anomalies automatically and preserves immutable monthly historical cohorts.',
      },
    ],
    operationalImpact: 'Used daily as the primary decision engine for campaign-, keyword-, and country-level bid and budget allocation.',
  },
  {
    id: 'full-funnel-crm',
    title: 'Full-Funnel Creative & CRM Matrix',
    purpose: 'Connecting ad engagement metrics to MQL, SQL, and closed revenue',
    pillars: ['01 Measurement', '03 Conversion', '06 Action Plan'],
    summary:
      'Developed across 20–25 performance brands at Geny Medium to stop teams from optimizing purely on cheap CTR or platform leads. Links upper-funnel CTR, CPC, and video-view rates directly to LeadSquared CRM stages (MQL, SQL, and admissions/sales), backed by Offline Conversion Imports and Meta CAPI.',
    stages: [
      {
        label: '01. Signal Capture',
        title: 'GTM, Enhanced Conversions & CAPI',
        detail: 'Captures hashed first-party lead identifiers and click IDs across Google Ads, Meta CAPI (Datahash), and GA4.',
      },
      {
        label: '02. CRM Feedback',
        title: 'LeadSquared OCI Sync',
        detail: 'Imports verified MQL, SQL, and closed-won events back into Google and Meta bidding algorithms across 25 brands.',
      },
      {
        label: '03. Creative Scoring',
        title: 'CTR/CPC → SQL Matrix',
        detail: 'Evaluates creatives on downstream SQL cost rather than raw click-through rate, paired with standardized team SOPs.',
      },
    ],
    operationalImpact: 'Delivered 15–20% lower cost per qualified lead across a INR 4 crore/month multi-industry portfolio.',
  },
];

export const EXPERIENCE_TIMELINE: ExperienceRole[] = [
  {
    id: 'spocket',
    role: 'Senior Manager, Performance Marketing',
    company: 'Spocket Inc. (Canada)',
    location: 'Remote',
    period: 'Jun 2025 – Sep 2026',
    tier: 'leadership',
    summary:
      'Owned paid acquisition, attribution integrity, and unit economics across a portfolio of dropshipping SaaS products (Spocket, Alidrop, Dropshiptool) serving US and international markets.',
    highlights: [
      'Led Google Ads and Microsoft Ads (Bing) against strict CAC, ROAS, and LTV:CAC targets across three SaaS accounts.',
      'Improved Alidrop revenue-to-ad-spend from 0.56x to a 2.48x peak while reducing monthly spend by ~two-thirds via Stripe revenue attribution.',
      'Separated branded and non-branded search on Spocket, sustaining 2.3x–2.5x non-brand ROAS (from ~0.20x).',
      'Evaluated Dropshiptool scale tests via trial-to-paid cohorts (Google ROAS 0.37x → 3.91x peak; Bing 2.4x cumulative).',
      'Implemented GCLID capture, cutting Google Ads-vs-Stripe conversion discrepancy from 36% to 17%.',
      'Built automated Google Ads API + Stripe + Apps Script dashboards; tested Meta, Reddit, and OpenAI Ads under controlled caps; managed PartnerStack & Impact affiliates.',
    ],
    recognition: 'Dependable Excellence Award',
  },
  {
    id: 'geny-medium',
    role: 'Performance Marketing Director',
    company: 'Geny Medium Pvt. Ltd.',
    location: 'Hyderabad, India',
    period: 'Feb 2023 – Feb 2025',
    tier: 'leadership',
    summary:
      'Led and coached 15+ performance specialists managing 20–25 brands across real estate, education, and healthcare, directing a pooled monthly media portfolio of ~INR 4 crore (~$480K/mo).',
    highlights: [
      'Managed multi-channel execution across Google Ads, Meta Ads, GA4, GTM, and DV360 aligned to client revenue goals.',
      'Implemented offline conversion imports across 25 brands and Enhanced Conversions, improving cost-per-lead efficiency by 15–20%.',
      'Coordinated Meta Conversions API (CAPI) implementation with vendors including Datahash.',
      'Resolved attribution conflicts between Google Ads and LeadSquared CRM on an INR 50 lakh/month account by re-anchoring decisions to CRM outcomes.',
      'Built a full-funnel creative evaluation framework linking CTR, CPC, and video views to MQLs, SQLs, and sales; standardized team SOPs and training.',
    ],
  },
  {
    id: 'ethinos',
    role: 'Senior Manager',
    company: 'Ethinos Digital Marketing Pvt. Ltd.',
    location: 'India',
    period: 'Oct 2020 – Jan 2023',
    tier: 'leadership',
    summary:
      'Directed large-budget acquisition accounts for enterprise consumer brands including Decathlon, Country Delight, and ICICI Direct across Google and Meta while leading a team of five.',
    highlights: [
      'Owned media planning, campaign optimisation, and weekly/bi-weekly performance reviews across high-spend Google and Meta portfolios.',
      'Led and coached a 5-member team, delivering internal platform training and standardizing optimisation practices.',
      'Contributed to monthly business reviews (MBRs) and strategic growth roadmaps with account and business stakeholders.',
    ],
    recognition: 'Best Employee of the Month',
  },
  {
    id: 'seagull',
    role: 'Digital Marketing Manager',
    company: 'Seagull Advertising',
    location: 'India',
    period: 'Apr 2019 – Oct 2020',
    tier: 'foundation',
    summary:
      'Developed and managed multi-channel lead-generation and brand campaigns across Google, Meta, LinkedIn, YouTube, and display for real estate and education clients.',
    highlights: [
      'Owned campaign planning, budget allocation, performance analysis, and ongoing optimisation.',
      'Prepared pitch decks and competitive market analyses to support new business acquisition.',
    ],
  },
  {
    id: 'ting',
    role: 'Digital Marketing Manager',
    company: 'Ting Digital LLP',
    location: 'India · AU Markets',
    period: 'Jul 2018 – Apr 2019',
    tier: 'foundation',
    summary:
      'Managed Australian e-commerce performance campaigns, doubling ROAS from ~2x to 4x through Google Merchant Center feed optimisation and campaign segmentation.',
    highlights: [
      'Restructured Merchant Center product feeds and segmented shopping campaigns by margin and intent.',
      'Worked directly with Australian stakeholders through recurring performance reviews and cross-time-zone collaboration.',
    ],
  },
  {
    id: 'teleperformance',
    role: 'Team Lead',
    company: 'Teleperformance',
    location: 'India',
    period: 'May 2017 – May 2018',
    tier: 'foundation',
    summary:
      'Led daily team huddles, one-to-one coaching, and performance reviews while preparing weekly operational dashboards for client business reviews.',
    highlights: [
      'Coached specialists on campaign quality metrics and SLA consistency through structured 1-on-1s.',
      'Built weekly reporting dashboards used directly in client business reviews.',
    ],
  },
  {
    id: 'genpact',
    role: 'Agency Development Manager',
    company: 'Genpact India Pvt. Ltd.',
    location: 'India',
    period: 'May 2013 – Apr 2017',
    tier: 'foundation',
    summary:
      'Managed strategic partnerships with 40+ advertising agencies, identifying account growth opportunities and running quarterly business reviews (QBRs) aligned with Google Partner Program objectives.',
    highlights: [
      'Conducted QBRs with senior agency stakeholders across a 40+ agency portfolio.',
      'Stepped in to lead a 10-member team during reporting manager absence, maintaining full operational performance against Google Partner targets.',
    ],
    recognition: 'Silver Award & Five Bronze Awards',
  },
];

export const STACK_GROUPS: StackGroup[] = [
  {
    title: 'Paid Media & Channels',
    items: [
      'Google Ads (Search, Shopping, PMax)',
      'Microsoft Ads (Bing)',
      'Meta Ads (Facebook & Instagram)',
      'LinkedIn Ads & YouTube Ads',
      'Display & Video 360 (DV360)',
      'Google Merchant Center',
      'Affiliate (PartnerStack, Impact)',
    ],
  },
  {
    title: 'Measurement & Attribution',
    items: [
      'Google Analytics 4 (GA4)',
      'Google Tag Manager (GTM)',
      'Enhanced Conversions & Offline OCI',
      'Meta Conversions API (CAPI / Datahash)',
      'GCLID Capture & UTM Architecture',
      'Microsoft Clarity',
      'AppsFlyer & Firebase',
    ],
  },
  {
    title: 'Data, CRM & Automation',
    items: [
      'Stripe Revenue Reconciliation',
      'Google Ads API',
      'Google Apps Script',
      'LeadSquared CRM & HubSpot',
      'Automated Daily KPI Dashboards',
      'Pareto Spend & Cohort Modeling',
    ],
  },
];

export const CREDENTIALS = {
  education: 'PGDM, Marketing Management — Narsee Monjee Institute of Management Studies (NMIMS), 2016–2018',
  certifications: ['Google Ads', 'Google Analytics', 'Google Tag Manager', 'Display & Video 360'],
  awards: [
    'Dependable Excellence Award — Spocket Inc.',
    'Best Employee of the Month — Ethinos Digital Marketing',
    'Silver Award & Five Bronze Awards — Genpact India',
  ],
  languages: ['English (Fluent)', 'Telugu (Fluent)', 'Hindi (Fluent)', 'Bengali (Conversational)'],
};
