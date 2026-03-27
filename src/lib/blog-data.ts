export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  body: string; // HTML string
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "how-to-prepare-for-interior-demolition",
    title: "How to Prepare Your Home for Interior Demolition",
    excerpt: "Before the first swing of the hammer, there are critical steps every homeowner should take. Here's our crew's complete pre-demo checklist to protect your property and speed up the job.",
    category: "Demolition",
    date: "March 10, 2025",
    readTime: "5 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
    imageAlt: "Interior demolition preparation with safety equipment and protective barriers in a Philadelphia home",
    body: `
      <p>Interior demolition is one of the most misunderstood phases of a renovation. Homeowners either over-prepare (spending money on things the crew handles) or under-prepare (leaving furniture, utilities live, and no plan for dust containment). Here's exactly what you should do — and what you don't need to worry about.</p>

      <h2>1. Disconnect or Protect All Utilities in the Demo Zone</h2>
      <p>Before demo begins, make sure electricity to the affected rooms is shut off at the breaker panel. If there's plumbing in the walls being removed — especially in kitchens and bathrooms — have a licensed plumber cap the supply and drain lines beforehand. Gas lines must be capped by a licensed professional before any work starts. We can coordinate this for you, but it needs to happen before day one.</p>

      <h2>2. Clear the Room Completely</h2>
      <p>Remove every piece of furniture, appliance, and personal item from the demolition zone. This includes items in adjacent rooms if walls are coming down — vibration and dust travel further than you expect. Take down any art, mirrors, or mounted TVs on adjacent walls too. One thing homeowners often miss: light fixtures and ceiling fans should be removed or protected.</p>

      <h2>3. Set Up Dust Containment</h2>
      <p>Demolition produces an extraordinary amount of fine dust — especially in older Philadelphia rowhouses where drywall, plaster, and decades of built-up material are coming out. We install plastic sheeting and zipper barriers over doorways to contain the demolition zone. You can help by moving anything valuable out of nearby rooms and covering HVAC vents to prevent dust from recirculating through your whole house.</p>

      <h2>4. Know What's in Your Walls (Especially in Pre-1980 Homes)</h2>
      <p>Philadelphia's housing stock is old. If your home was built before 1980, there's a real chance of encountering asbestos in pipe insulation, floor tiles, or joint compound — and lead paint on any surface. We always recommend a pre-demolition hazmat assessment for homes built before 1978. This isn't optional for us: we will not demo through suspected asbestos without clearance from a certified abatement contractor.</p>

      <h2>5. Make a Plan for Where You'll Live During Demo</h2>
      <p>Most single-room demos complete in one to two days. Full-floor guts take two to four days. For kitchen demos, you'll want to set up a temporary kitchen (coffee maker, microwave, mini fridge) in another room. For bathroom demos, confirm you have access to another bathroom in the house — or arrange for temporary access elsewhere.</p>

      <h2>6. Document Everything Before We Start</h2>
      <p>Take photos and video of every room before demo begins. Document the condition of adjacent spaces — floors, walls, ceilings. This protects you and protects us if there are any disputes about pre-existing conditions. We do our own documentation too, but having your own record is smart.</p>

      <h2>What You Don't Need to Do</h2>
      <p>You don't need to remove drywall yourself, haul debris, or rent a dumpster. Our quotes include all debris removal and disposal. You don't need to source materials for the rebuild phase either — we'll handle that as part of the renovation scope. Your job is to create a clear, safe, utility-disconnected space. Our job is everything else.</p>

      <p>Questions about your specific project in Philadelphia, Upper Darby, or Lansdowne? Call us at <strong>347-977-3212</strong> or request a free estimate online.</p>
    `,
  },
  {
    id: 2,
    slug: "kitchen-remodel-timeline",
    title: "Realistic Kitchen Remodel Timelines: What to Expect",
    excerpt: "One of the top questions we get: how long will this actually take? We break down a realistic kitchen renovation timeline from demo day to final walkthrough.",
    category: "Kitchen",
    date: "February 22, 2025",
    readTime: "6 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85",
    imageAlt: "Modern kitchen renovation in progress showing new white cabinetry installation and countertop work in Philadelphia",
    body: `
      <p>The number one frustration in kitchen remodeling isn't the cost — it's the timeline. Contractors who underquote the schedule create chaos: displaced families, delayed material deliveries, and half-finished kitchens sitting for weeks. Here's what an honest kitchen remodel timeline looks like for Philadelphia homes.</p>

      <h2>Week 1–2: Demo and Rough Work</h2>
      <p>Day one is demolition. Cabinets, countertops, flooring, and any walls being removed come out first. Expect noise and dust — this is the most disruptive phase and it passes quickly. Once the room is gutted, we assess what's behind the walls: electrical panel capacity, plumbing drain slope, any surprises in the structure.</p>
      <p>Rough plumbing and electrical relocations happen during this phase. If you're moving the sink or adding a kitchen island with electrical, this is when those rough-ins get done. Inspections may be required depending on permit scope.</p>

      <h2>Week 2–3: Drywall, Flooring Prep, Cabinet Delivery</h2>
      <p>New drywall goes up after inspections pass. If you ordered custom cabinets, they typically have a 3–6 week lead time — which is why we emphasize ordering materials before demo starts. Semi-custom lead times are usually 2–4 weeks. Stock cabinets can arrive in days.</p>
      <p>Subfloor repairs and leveling happen before cabinets are set, since cabinet height references the finished floor.</p>

      <h2>Week 3–4: Cabinet Installation and Countertop Template</h2>
      <p>Cabinet installation is a multi-day process for a full kitchen. Once cabinets are set and leveled, the countertop fabricator comes to template. Stone and quartz countertops typically have a 7–14 day fabrication lead time after templating. This is often the biggest single delay in kitchen remodels — you cannot install a backsplash until countertops are in.</p>

      <h2>Week 4–5: Countertops, Backsplash, Appliances</h2>
      <p>Countertop installation takes one day. Backsplash tile installation follows — typically two to three days including setting time and grouting. Appliances are connected after countertops and are set in final position. Range hoods, under-cabinet lighting, and outlet covers are installed in this phase.</p>

      <h2>Week 5–6: Flooring, Paint, Punch List</h2>
      <p>Finish flooring goes in last (it protects it from construction traffic). Final paint touchups, cabinet hardware, plumbing fixtures, and the final electrical trim-out wrap up the project. A final walkthrough with you identifies anything on the punch list before we consider the job complete.</p>

      <h2>What Extends a Kitchen Remodel Timeline</h2>
      <ul>
        <li><strong>Custom cabinet orders</strong> — 6–8 week lead times are common</li>
        <li><strong>Permit delays</strong> — Philadelphia L&amp;I inspections can take 2–5 business days to schedule</li>
        <li><strong>Surprises in the walls</strong> — knob-and-tube wiring, cast iron drain lines, and settling issues in rowhouses are common and add time</li>
        <li><strong>Countertop fabrication backlog</strong> — peak season (spring/summer) adds 1–2 weeks</li>
      </ul>

      <p>For a standard Philadelphia kitchen remodel, budget <strong>5–7 weeks</strong> from demo day to final walkthrough. Full gut renovations with layout changes and all-new everything can run 8–10 weeks. We give you a written schedule before work starts — not a guess, a plan.</p>

      <p>Call <strong>347-977-3212</strong> to discuss your kitchen project in Philadelphia, Upper Darby, or Lansdowne.</p>
    `,
  },
  {
    id: 3,
    slug: "hardwood-vs-lvp-flooring",
    title: "Hardwood vs LVP Flooring: Which Is Right for You?",
    excerpt: "Luxury vinyl plank has come a long way. We compare the two most popular flooring options on cost, durability, installation time, and look — so you can make the right call.",
    category: "Flooring",
    date: "February 8, 2025",
    readTime: "7 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85",
    imageAlt: "Side by side comparison of engineered hardwood and luxury vinyl plank flooring in a Philadelphia home",
    body: `
      <p>We install both hardwood and LVP across Philadelphia homes every week — and the most common question we get is which one is better. The honest answer: it depends on your specific situation. Here's how to make the right call for your home.</p>

      <h2>Cost Comparison in Philadelphia</h2>
      <p>For installed pricing in the Philadelphia market:</p>
      <ul>
        <li><strong>LVP (Luxury Vinyl Plank):</strong> $4–$8 per square foot installed, mid-range products. Budget $6,000–$12,000 for a typical first floor.</li>
        <li><strong>Engineered Hardwood:</strong> $7–$14 per square foot installed. Budget $10,000–$20,000 for a typical first floor.</li>
        <li><strong>Solid Hardwood:</strong> $10–$18 per square foot installed. Highest cost, most premium result.</li>
      </ul>
      <p>LVP is meaningfully cheaper — often 40–60% less than comparable hardwood. For investment properties or rentals, that difference matters a lot.</p>

      <h2>Durability and Water Resistance</h2>
      <p>LVP wins clearly here. It's 100% waterproof, dents less easily, and holds up well under heavy foot traffic, pets, and kids. It can go in basements and bathrooms where hardwood cannot. For Philadelphia rowhouses with older moisture concerns in the subfloor or basement, LVP is the pragmatic choice.</p>
      <p>Hardwood scratches and dents more easily and is not water-resistant. A flooded kitchen or bathroom can permanently damage it. However, hardwood can be sanded and refinished multiple times over its lifespan — LVP cannot. A well-maintained hardwood floor can last 80–100 years. Quality LVP lasts 20–30 years.</p>

      <h2>Look and Feel</h2>
      <p>Modern LVP has closed the visual gap significantly. Premium LVP products have realistic wood textures, beveled edges, and varied plank lengths that read as genuine wood from a few feet away. But up close — especially underfoot — hardwood has a warmth and authenticity that LVP doesn't replicate. If you're holding the property for 20+ years and care deeply about the feel, hardwood is worth the premium.</p>

      <h2>Installation Differences</h2>
      <p>LVP installs faster — typically 1–2 days for a full first floor. It floats or clicks together and requires minimal subfloor prep. Hardwood takes longer: the wood needs to acclimate to your home's humidity for 3–7 days before installation, and the installation itself takes longer. Nailing or gluing adds labor time.</p>

      <h2>The Honest Recommendation</h2>
      <p>For rental properties, basements, or areas with moisture risk: <strong>LVP every time.</strong> For owner-occupied homes where you're staying long-term and want the best result: <strong>engineered hardwood is worth the investment.</strong> Solid hardwood makes sense when you have an older home with original hardwood you're matching or want a premium result you can refinish for generations.</p>
      <p>We'll give you our honest assessment for your specific situation. Call <strong>347-977-3212</strong> or get a free flooring estimate online.</p>
    `,
  },
  {
    id: 4,
    slug: "bathroom-waterproofing-mistakes",
    title: "5 Bathroom Waterproofing Mistakes That Lead to Mold",
    excerpt: "Bad waterproofing is the silent killer of bathroom renovations. Our lead installer breaks down the five most common errors — and how we prevent every single one.",
    category: "Bathroom",
    date: "January 30, 2025",
    readTime: "4 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85",
    imageAlt: "Professional bathroom waterproofing membrane installation behind tile in a Philadelphia bathroom renovation",
    body: `
      <p>More bathroom renovations fail from the inside out than from poor tile work or cheap fixtures. Waterproofing mistakes are invisible until they're catastrophic — and in Philadelphia's older housing stock, the consequences of water intrusion behind tile are severe. Here are the five mistakes we see most often.</p>

      <h2>Mistake 1: Using Regular Drywall Behind Tile</h2>
      <p>Standard drywall (even moisture-resistant greenboard) is not appropriate for wet areas like shower surrounds. It absorbs water over time, promotes mold growth, and eventually fails structurally. The correct substrate behind tile in a wet area is cement backer board (like HardieBacker or Durock) or a foam backer system. Every shower we build uses cement board. No exceptions.</p>

      <h2>Mistake 2: Skipping the Waterproofing Membrane</h2>
      <p>Tile is not waterproof. Grout is not waterproof. The seams between tiles and the grout itself allow water through over time — especially as grout cracks from normal movement. The waterproofing layer must go between the backer board and the tile. We use RedGard or Schluter Kerdi membrane on every shower build. Some contractors skip it to save time and cost. It will fail.</p>

      <h2>Mistake 3: Improper Pan Liner Installation</h2>
      <p>The shower floor pan liner is a critical waterproofing component. The liner must extend at least 3 inches up all walls and be properly bonded at corners. Seams in the liner must be heat-welded, not just overlapped. We see failed liners from previous contractors constantly — usually because corners were cut or the liner was installed without proper tie-in to the drain assembly.</p>

      <h2>Mistake 4: No Curb or Improper Curb Height</h2>
      <p>A shower curb that's too low allows water to splash out and run across the bathroom floor. In rowhouses with wood subfloors (common in Philadelphia), consistent water on the floor eventually causes structural damage to the joist system. Standard curb height is 3–4 inches above the shower floor. We've seen curbs at 1 inch — completely inadequate.</p>

      <h2>Mistake 5: Not Flood-Testing Before Tile</h2>
      <p>After the pan liner is installed and before any tile goes down, the shower floor should be flood-tested: plug the drain, fill with 2 inches of water, and let it sit for 24 hours. Any drop in water level indicates a leak. This test takes one day and prevents tearing out finished tile later to fix a liner failure. Many contractors skip it. We don't.</p>

      <p>Bathroom waterproofing done right adds a day or two to a project and modest material cost. Done wrong, it costs homeowners thousands in mold remediation, structural repairs, and a complete re-tile. We've fixed the mistakes of too many other contractors — we'd rather you not need us for that reason. Call <strong>347-977-3212</strong> for a free bathroom remodeling estimate in Philadelphia.</p>
    `,
  },
  {
    id: 5,
    slug: "open-concept-load-bearing-walls",
    title: "Opening Up Your Floor Plan: Load-Bearing Wall Basics",
    excerpt: "Before you knock down that wall between your kitchen and living room, you need to understand what's holding your house up. We explain load-bearing walls in plain English.",
    category: "Renovation",
    date: "January 15, 2025",
    readTime: "8 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
    imageAlt: "Open concept kitchen and living room after load-bearing wall removal with exposed LVL beam in Philadelphia rowhouse",
    body: `
      <p>Open concept renovations are the most common project request we get in Philadelphia — and they're also the project where untrained contractors cause the most serious structural damage. Here's what you need to know before any wall comes down.</p>

      <h2>What Is a Load-Bearing Wall?</h2>
      <p>A load-bearing wall transfers the weight of the structure above it down through the framing to the foundation. Removing it without proper temporary support and a replacement beam is dangerous — ceilings sag, floors above shift, and in worst cases, partial structural collapse occurs. Non-load-bearing walls (partition walls) can generally be removed without structural consequence, though they may contain electrical, plumbing, or HVAC.</p>

      <h2>How to Identify Load-Bearing Walls in a Philadelphia Rowhouse</h2>
      <p>In Philadelphia rowhouses, certain walls are almost always load-bearing:</p>
      <ul>
        <li>Any wall that runs perpendicular to the floor joists (visible in the basement)</li>
        <li>Walls that sit directly above a beam or wall in the basement</li>
        <li>Exterior walls — virtually always load-bearing</li>
        <li>Walls in the center of the house (often carry the ridge beam load)</li>
        <li>Any wall with a post directly beneath it in the basement or crawl space</li>
      </ul>
      <p>Walls running parallel to floor joists are often (but not always) non-load-bearing. The only way to be certain is a structural assessment — which we always recommend before quoting any wall removal.</p>

      <h2>The Process for Removing a Load-Bearing Wall</h2>
      <p>Removing a load-bearing wall is a multi-step structural project, not a demo job:</p>
      <ol>
        <li><strong>Structural engineer assessment:</strong> A licensed structural engineer determines the wall's load path and specifies the correct replacement beam (LVL, steel, etc.) and any required posts or footings.</li>
        <li><strong>Temporary shoring:</strong> Before the wall comes down, temporary walls are built parallel to the existing wall to carry the load during construction. This is not optional.</li>
        <li><strong>Wall removal:</strong> Once shored, the wall framing, drywall, and any utilities inside the wall are removed.</li>
        <li><strong>Beam installation:</strong> The specified beam is installed in the opening and properly supported at each end — either by a post to the foundation or by the existing wall framing.</li>
        <li><strong>Temporary shoring removal:</strong> Once the beam is fully seated and loaded, temporary supports come down.</li>
      </ol>

      <h2>Permits in Philadelphia</h2>
      <p>Load-bearing wall removal requires a building permit from Philadelphia's Department of Licenses and Inspections (L&amp;I). The permit requires structural drawings from a licensed engineer. We handle all permit coordination and engineer engagement as part of our open-concept renovation scope.</p>

      <h2>Cost in Philadelphia</h2>
      <p>A standard load-bearing wall removal in a Philadelphia rowhouse typically runs $3,500–$8,000 depending on beam span length, accessibility, and any plumbing or electrical relocation inside the wall. This includes engineer fees, permit, temporary shoring, beam installation, and drywall repair. We've seen contractors quote $800 for "just taking down the wall" — that contractor is either not pulling permits, not using an engineer, and not installing a proper beam. Don't hire that contractor.</p>

      <p>Call <strong>347-977-3212</strong> to discuss your open concept project. We'll tell you exactly what's involved and what it costs — before you commit to anything.</p>
    `,
  },
  {
    id: 6,
    slug: "choosing-contractor-philadelphia",
    title: "How to Choose a Renovation Contractor in Philadelphia",
    excerpt: "Unlicensed, uninsured contractors are everywhere in the Philadelphia market. Here's exactly what to look for — and the questions to ask before signing anything.",
    category: "Tips",
    date: "January 3, 2025",
    readTime: "5 min read",
    featured: false,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=85",
    imageAlt: "Professional contractor consulting with Philadelphia homeowner over renovation plans and contract documents",
    body: `
      <p>Philadelphia has no shortage of contractors. It does have a shortage of good ones. The combination of a large older housing stock, high renovation demand, and inconsistent licensing enforcement means a lot of unqualified people are working on Philadelphia homes. Here's how to protect yourself.</p>

      <h2>The Five Questions to Ask Every Contractor Before Hiring</h2>

      <h3>1. "Can I see your certificate of insurance?"</h3>
      <p>General liability insurance protects your property if the contractor causes damage. Workers' compensation covers their crew if someone gets injured on your property — without it, you can be liable for that injury. Any legitimate contractor will provide a certificate of insurance immediately. If they hesitate, hedge, or say "it's expired but I'm renewing it" — walk away.</p>

      <h3>2. "Will you pull the permits required for this work?"</h3>
      <p>Structural changes, electrical work, and plumbing modifications typically require permits from Philadelphia L&amp;I. Permits trigger inspections that verify work meets code. Unpermitted work can come back to haunt you when you sell — title searches reveal permit history. A contractor who says "we don't need a permit for this" when permits are legally required is either ignorant or cutting corners. Either way, it's your problem later.</p>

      <h3>3. "What is your payment schedule?"</h3>
      <p>A standard payment schedule for a renovation is: a deposit (10–25%) at contract signing, milestone payments as work progresses, and a final payment upon your sign-off at project completion. Never pay more than 50% upfront. Never pay in full before the job is done. Contractors who demand 75% or 100% upfront are a red flag.</p>

      <h3>4. "Can you give me references from projects in the past 6 months?"</h3>
      <p>Not from two years ago — from recent work. Call those references. Ask specifically: did they finish on the promised timeline? Did the final price match the quote? Would you hire them again? A contractor who can't provide recent references in Philadelphia has something to hide.</p>

      <h3>5. "Is this quote a fixed price or an estimate?"</h3>
      <p>There's a difference. A fixed price means that's what you pay barring unforeseen conditions (hidden water damage, discovery of asbestos, etc.). An estimate means the price can change. Get fixed-price quotes in writing with a clear list of what's included — and what would trigger a change order.</p>

      <h2>Red Flags to Walk Away From</h2>
      <ul>
        <li>Cash-only payment requests</li>
        <li>No written contract offered</li>
        <li>Can't show insurance certificate within 24 hours</li>
        <li>Quote is dramatically lower than all other bids (they're cutting something)</li>
        <li>No physical address, only a cell phone number</li>
        <li>Pressure to decide today or "lose the deal"</li>
      </ul>

      <h2>What Rapid Renovation Provides Every Client</h2>
      <p>Certificate of insurance on request. Written, line-item contracts. Permits pulled for all required work. A project schedule before work starts. And a phone number where someone actually answers. We're not for everyone on budget — but we're for everyone who wants the job done right.</p>

      <p>Call <strong>347-977-3212</strong> or get a free estimate online. We're happy to answer any of these questions before you decide.</p>
    `,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
