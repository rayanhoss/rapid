export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  location: string;
  desc: string;
  tags: string[];
  image: string;
  imageAlt: string;
  gallery: { src: string; alt: string }[];
  details: { label: string; value: string }[];
  body: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "upper-darby-kitchen-gut-rebuild",
    title: "Upper Darby Kitchen Gut & Rebuild",
    category: "Kitchen",
    location: "Upper Darby, PA",
    desc: "Complete kitchen demo and full renovation including new cabinetry, quartz countertops, tile backsplash, and LVP flooring.",
    tags: ["Kitchen", "Demolition", "Flooring"],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=85",
    imageAlt: "Renovated modern kitchen with white shaker cabinets and quartz countertops in Upper Darby PA",
    gallery: [
      { src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", alt: "Finished kitchen with quartz countertops" },
      { src: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80", alt: "Kitchen cabinetry detail" },
      { src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80", alt: "Kitchen backsplash tile work" },
    ],
    details: [
      { label: "Location",   value: "Upper Darby, PA" },
      { label: "Scope",      value: "Full gut renovation" },
      { label: "Duration",   value: "6 weeks" },
      { label: "Services",   value: "Demo, Cabinetry, Countertops, Tile, Flooring" },
    ],
    body: `<p>This Upper Darby rowhouse kitchen was completely outdated — original 1970s cabinets, laminate countertops, and linoleum flooring. The homeowners wanted a modern, functional kitchen with an open feel.</p>
<h2>The Work</h2>
<p>We began with a full gut: all cabinets, countertops, flooring, and the drywall behind the range were demolished and removed. We identified and corrected an undersized electrical circuit for the refrigerator and installed a new 20-amp circuit for the dishwasher.</p>
<p>New shaker-style cabinets were installed floor to ceiling with crown molding. Quartz countertops were fabricated and installed with a waterfall edge on the island. A herringbone subway tile backsplash runs from countertop to upper cabinets. LVP flooring was installed throughout the kitchen and hallway in a warm oak tone that ties into the adjoining living room.</p>
<h2>The Result</h2>
<p>A fully transformed kitchen that increased the home's value and made daily living significantly more functional. The project came in on budget and completed in six weeks from demo day to final walkthrough.</p>`,
  },
  {
    id: 2,
    slug: "lansdowne-basement-conversion",
    title: "Lansdowne Basement Conversion",
    category: "Renovation",
    location: "Lansdowne, PA",
    desc: "Unfinished basement transformed into a fully finished living space with drywall, flooring, and recessed lighting.",
    tags: ["Renovation", "Drywall"],
    image: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=1200&q=85",
    imageAlt: "Finished basement living space with recessed lighting and LVP flooring in Lansdowne PA",
    gallery: [
      { src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80", alt: "Finished basement living area" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80", alt: "Basement recessed lighting detail" },
    ],
    details: [
      { label: "Location",  value: "Lansdowne, PA" },
      { label: "Scope",     value: "Unfinished basement finishing" },
      { label: "Duration",  value: "4 weeks" },
      { label: "Services",  value: "Framing, Drywall, Flooring, Lighting, Paint" },
    ],
    body: `<p>This Lansdowne home had an unfinished basement used purely for storage. The homeowners wanted a finished living space — a family room and a home office area — without altering the existing laundry and utility areas.</p>
<h2>The Work</h2>
<p>We framed new partition walls to separate the living space from the mechanical room. Closed-cell spray foam insulation was applied to the exterior foundation walls before framing for moisture and thermal performance. New electrical circuits were run for outlets, recessed lighting, and a dedicated circuit for a mini-split.</p>
<p>Drywall was hung, taped, and skim-coated throughout. LVP flooring was installed over a moisture barrier on the concrete slab. Recessed LED lighting was installed on a dimmer circuit. The project was completed with a fresh coat of paint and trim installation.</p>
<h2>The Result</h2>
<p>The basement transformed from wasted storage into 600 square feet of comfortable living space — adding meaningful square footage and value to the home.</p>`,
  },
  {
    id: 3,
    slug: "philadelphia-bathroom-overhaul",
    title: "Philadelphia Bathroom Overhaul",
    category: "Bathroom",
    location: "Philadelphia, PA",
    desc: "Master bath teardown and luxury rebuild featuring floor-to-ceiling porcelain tile, custom shower niche, and floating vanity.",
    tags: ["Bathroom", "Tile"],
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=85",
    imageAlt: "Luxury master bathroom with floor-to-ceiling porcelain tile and floating vanity in Philadelphia PA",
    gallery: [
      { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80", alt: "Master bathroom floor-to-ceiling tile" },
      { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80", alt: "Shower niche and tile detail" },
    ],
    details: [
      { label: "Location",  value: "Philadelphia, PA" },
      { label: "Scope",     value: "Full master bath gut & rebuild" },
      { label: "Duration",  value: "3 weeks" },
      { label: "Services",  value: "Demo, Waterproofing, Tile, Vanity, Fixtures" },
    ],
    body: `<p>This master bathroom in a Philadelphia rowhouse had the original builder-grade finishes from the early 2000s — fiberglass tub surround, basic vanity, and floor tile that had cracked and shifted. The homeowners wanted a high-end result that felt like a boutique hotel.</p>
<h2>The Work</h2>
<p>Full gut to the studs. Cement backer board and RedGard waterproofing membrane were applied to all wet areas. The tub was removed and replaced with a walk-in shower — we reframed the shower opening and installed a linear drain for a clean, slope-free floor.</p>
<p>Large-format 24x48 porcelain tile was installed floor to ceiling on all shower walls with minimal grout joints. A custom niche was built into the wall for toiletries. The floor received 12x24 tile in a brick pattern. A floating vanity with integrated sink and wall-mounted faucets completed the build.</p>
<h2>The Result</h2>
<p>A complete transformation from builder-basic to genuine luxury. The homeowners described it as their favorite room in the house.</p>`,
  },
  {
    id: 4,
    slug: "commercial-demolition-retail-strip",
    title: "Commercial Demolition — Retail Strip",
    category: "Demolition",
    location: "Upper Darby, PA",
    desc: "Full interior demolition of 3-unit retail strip for new tenant buildout. Completed in 4 days with zero structural damage.",
    tags: ["Demolition", "Commercial"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85",
    imageAlt: "Commercial interior demolition of retail strip center in Upper Darby PA",
    gallery: [
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", alt: "Commercial demolition interior" },
    ],
    details: [
      { label: "Location",  value: "Upper Darby, PA" },
      { label: "Scope",     value: "3-unit commercial interior demo" },
      { label: "Duration",  value: "4 days" },
      { label: "Services",  value: "Full gut demo, debris hauling, site prep" },
    ],
    body: `<p>A commercial property owner in Upper Darby needed three retail units cleared for new tenant buildouts. The previous tenants had left behind a mix of built-in fixtures, wall finishes, and floor coverings that needed full removal before construction could begin.</p>
<h2>The Work</h2>
<p>We mobilized a four-person crew for a four-day demo. All non-structural interior partitions, drop ceilings, flooring, and wall finishes were removed. Debris was staged in a roll-off container and hauled off site at the end of each day to keep the area clear for the adjacent operating tenant.</p>
<p>Electrical disconnection was coordinated with the building's electrician prior to our start. We protected the storefront glass and exterior surfaces throughout. All three units were delivered broom-clean with no structural damage and ready for the new tenant contractor to begin framing.</p>
<h2>The Result</h2>
<p>Three units cleared in four days — ahead of schedule. The property owner had his new tenant in ahead of the lease start date.</p>`,
  },
  {
    id: 5,
    slug: "hardwood-flooring-2400-sqft",
    title: "Hardwood Flooring — 2,400 sq ft",
    category: "Flooring",
    location: "Philadelphia, PA",
    desc: "Installation of engineered hardwood throughout an entire 3-bedroom home, including subfloor leveling and stair treads.",
    tags: ["Flooring"],
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=85",
    imageAlt: "Engineered hardwood flooring installed throughout Philadelphia home",
    gallery: [
      { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", alt: "Hardwood floor installation" },
      { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", alt: "Stair tread installation detail" },
    ],
    details: [
      { label: "Location",  value: "Philadelphia, PA" },
      { label: "Area",      value: "2,400 sq ft + stairs" },
      { label: "Duration",  value: "5 days" },
      { label: "Services",  value: "Subfloor leveling, hardwood installation, stair treads" },
    ],
    body: `<p>The homeowners purchased a 3-bedroom Philadelphia home with original carpet throughout. They wanted engineered hardwood across the entire first and second floors, including the staircase, to create a cohesive, upgraded look.</p>
<h2>The Work</h2>
<p>Existing carpet and padding were removed. Subfloor inspection revealed several areas of bounce and a low spot in the dining room that required self-leveling compound. The wood was acclimated in the home for four days before installation began.</p>
<p>5-inch wide engineered white oak planks were installed in a continuous run across all rooms — no thresholds between rooms, all running in the same direction perpendicular to the joists. Stair treads were custom-cut from matching hardwood and installed with bull-nose edges. All transitions and base moldings were reinstalled upon completion.</p>
<h2>The Result</h2>
<p>A completely transformed interior — the single flooring change elevated the feel of the entire home. The project completed in five days including subfloor prep.</p>`,
  },
  {
    id: 6,
    slug: "open-concept-conversion",
    title: "Open Concept Conversion",
    category: "Renovation",
    location: "Lansdowne, PA",
    desc: "Removed load-bearing walls with temporary shoring, installed LVL beam, and opened kitchen to living room.",
    tags: ["Renovation", "Demolition"],
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=85",
    imageAlt: "Open concept kitchen and living room after load-bearing wall removal in Lansdowne PA rowhouse",
    gallery: [
      { src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80", alt: "Open concept living space after renovation" },
    ],
    details: [
      { label: "Location",  value: "Lansdowne, PA" },
      { label: "Scope",     value: "Load-bearing wall removal + LVL beam" },
      { label: "Duration",  value: "2 weeks" },
      { label: "Services",  value: "Structural engineering, shoring, beam install, drywall, paint" },
    ],
    body: `<p>This Lansdowne rowhouse had a solid wall separating the kitchen and living room — a common layout in pre-war Philadelphia-area housing. The owners wanted the two spaces opened into one. The wall was load-bearing, requiring a full structural approach.</p>
<h2>The Work</h2>
<p>A licensed structural engineer assessed the load path and specified a double 3.5x11.25 LVL beam spanning the 12-foot opening, supported by concealed posts at each end running to the basement footer.</p>
<p>Temporary shoring walls were built parallel to the existing wall before demo began. The wall was removed, the beam was installed and properly seated, and the temporary shoring was removed. Drywall patching, matching texture, and fresh paint across both rooms completed the project.</p>
<h2>The Result</h2>
<p>A genuinely transformed living space — the kitchen and living room now flow together as a single open area. The project was permitted, inspected, and passed without issue.</p>`,
  },
  {
    id: 7,
    slug: "guest-bathroom-refresh",
    title: "Guest Bathroom Refresh",
    category: "Bathroom",
    location: "Upper Darby, PA",
    desc: "Full tile replacement, new vanity, shower surround, and fixtures in a dated 1990s bathroom.",
    tags: ["Bathroom", "Tile"],
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=85",
    imageAlt: "Refreshed guest bathroom with new subway tile and modern vanity in Upper Darby PA",
    gallery: [
      { src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80", alt: "Guest bathroom tile and vanity" },
    ],
    details: [
      { label: "Location",  value: "Upper Darby, PA" },
      { label: "Scope",     value: "Bathroom refresh" },
      { label: "Duration",  value: "10 days" },
      { label: "Services",  value: "Tile, vanity, shower surround, fixtures" },
    ],
    body: `<p>A dated 1990s guest bathroom with pink tile, a single-piece fiberglass shower surround, and original builder vanity. The homeowners wanted a modern refresh without moving any plumbing — keeping costs manageable while dramatically updating the look.</p>
<h2>The Work</h2>
<p>All existing tile, surround, and vanity were removed. New cement backer board and waterproofing membrane were installed in the shower area. Classic 3x6 white subway tile was installed in a brick pattern on shower walls with a contrasting dark grout. 12x24 large-format porcelain was installed on the floor. A new 48-inch vanity with quartz top and undermount sink replaced the original. Chrome fixtures throughout.</p>
<h2>The Result</h2>
<p>A fresh, timeless bathroom that looks significantly more expensive than the project cost. Completed in under two weeks with no plumbing relocation required.</p>`,
  },
  {
    id: 8,
    slug: "drywall-paint-full-home",
    title: "Drywall & Paint — Full Home",
    category: "Renovation",
    location: "Philadelphia, PA",
    desc: "Skim coat and fresh paint throughout a 4-bedroom colonial after major renovation work.",
    tags: ["Renovation", "Drywall"],
    image: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=1200&q=85",
    imageAlt: "Freshly skimmed and painted interior walls of Philadelphia colonial home",
    gallery: [
      { src: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?w=800&q=80", alt: "Smooth skim-coated walls" },
    ],
    details: [
      { label: "Location",  value: "Philadelphia, PA" },
      { label: "Scope",     value: "Full home drywall & paint" },
      { label: "Duration",  value: "2 weeks" },
      { label: "Services",  value: "Skim coat, drywall repair, priming, interior paint" },
    ],
    body: `<p>Following a major renovation that involved opening walls for plumbing and electrical work throughout the home, this 4-bedroom Philadelphia colonial needed a complete drywall and paint refresh across all rooms.</p>
<h2>The Work</h2>
<p>All patched areas were skim-coated to match the original texture. In rooms where original plaster walls met new drywall patches, we skim-coated the entire wall surface for a consistent finish. Multiple rounds of sanding between coats produced a glass-smooth surface throughout.</p>
<p>All surfaces were primed with a high-hide primer before two coats of interior paint. Trim, doors, and window casings were painted separately with semi-gloss. The project covered approximately 3,200 square feet of wall and ceiling surface.</p>
<h2>The Result</h2>
<p>A fresh, cohesive interior ready for the homeowners to move in. The skim-coat work throughout eliminated all visible patch lines — you'd never know the walls had been opened up.</p>`,
  },
  {
    id: 9,
    slug: "lvp-flooring-commercial-office",
    title: "LVP Flooring — Commercial Office",
    category: "Flooring",
    location: "Philadelphia, PA",
    desc: "1,800 sq ft of luxury vinyl plank installed in a 2-day commercial turnover with minimal business disruption.",
    tags: ["Flooring", "Commercial"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85",
    imageAlt: "Luxury vinyl plank flooring in modern commercial office space in Philadelphia PA",
    gallery: [
      { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", alt: "Commercial office LVP flooring" },
    ],
    details: [
      { label: "Location",  value: "Philadelphia, PA" },
      { label: "Area",      value: "1,800 sq ft" },
      { label: "Duration",  value: "2 days" },
      { label: "Services",  value: "Carpet removal, subfloor prep, LVP installation" },
    ],
    body: `<p>A Philadelphia property management company needed 1,800 square feet of existing commercial carpet replaced with LVP during a tenant turnover — on a tight timeline before the new tenant's move-in date.</p>
<h2>The Work</h2>
<p>Existing carpet and pad were removed and hauled off site on day one. The concrete subfloor was ground down in several areas where adhesive buildup created high spots. LVP was installed across the open office area, conference room, and hallways in a continuous run with minimal seams.</p>
<p>All transitions to adjacent spaces (tile at restrooms, carpet at one private office) were installed with proper reducer strips. The entire project was completed within the two-day window with zero disruption to adjacent occupied spaces in the building.</p>
<h2>The Result</h2>
<p>A completely refreshed office floor delivered on schedule. The property manager had the space ready for the new tenant two days ahead of lease commencement.</p>`,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
