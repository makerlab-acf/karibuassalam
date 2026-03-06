import Section from "../components/Section";
import Card from "../components/Card";
import PartnerGrid from "../components/PartnerGrid";
import EcoVillageCards from "../components/EcoVillageCards";
import RetreatCard from "../components/RetreatCard";
import CTAButton from "../components/CTAButton";
import WhatsAppButton from "../components/WhatsAppButton";
import SEO from "../components/SEO";
import { retreats } from "../data/retreats";
import { SITE } from "../data/siteConfig";
import { useLanguage } from "../context/LanguageContext";
import heroImg from "../../pics/rooms/Image-2-edited-768x576.webp";
import storyImg1 from "../../pics/our stories/camps-1-768x1023.jpeg";
import storyImg2 from "../../pics/our stories/education-1.png";
import storyImg3 from "../../pics/our stories/Kidness-camp-2.png";

const journeyPillars = [
  {
    title: "Cultural Experiences",
    bullets: [
      "Stone Town and heritage walks",
      "Spice gardens and local markets",
      "Ocean and coastline discovery",
      "Guided cultural encounters",
    ],
  },
  {
    title: "Volunteering Pathways",
    bullets: [
      "Women vocational training schools",
      "Permaculture gardens",
      "Madrasas",
      "Mobile libraries",
      "Children's universities",
    ],
  },
  {
    title: "Wellbeing and Balance",
    bullets: [
      "Shared reflection and community time",
      "Campus-based learning sessions",
      "Active village and coastal days",
      "Comfortable halal-friendly routines",
    ],
  },
];

const trustStats = [
  { value: "Since 2017", label: "Camps and retreats with community focus" },
  { value: "Halal-friendly", label: "Travel rhythm designed with care and respect" },
  { value: "Eco-village Base", label: "Stay, learn, and gather at Assalam Ecolodge" },
];

const storyCards = [
  {
    title: "Moments of Learning",
    image: storyImg2,
    alt: "Learners gathered during an educational activity",
    text: "Shared learning and workshops create space for practical skills, reflection, and cultural exchange.",
  },
  {
    title: "Kindness in Action",
    image: storyImg3,
    alt: "Kindness camp participants during community activities",
    text: "Community-centered travel becomes more meaningful when service projects and guided activities stay balanced.",
  },
  {
    title: "Camp Life by the Coast",
    image: storyImg1,
    alt: "Participants standing together during a camp session",
    text: "Each retreat blends campus life, shared meals, and experiences across Zanzibar's villages and coastlines.",
  },
];

export default function Home() {
  const { t, tx, language } = useLanguage();
  const heroWhatsAppPayload = {
    intent: "contact",
    language,
    message: tx("I would like to plan a meaningful stay in Zanzibar."),
  };

  return (
    <main id="main-content">
      <SEO
        title={tx("Karibu Assalam | Immersive Halal Travel & Volunteer Retreats in Zanzibar")}
        description={tx(
          "Karibu Assalam offers immersive sensory travel, volunteering, and halal-friendly retreat experiences in Zanzibar from the Assalam Ecolodge base."
        )}
        image={heroImg}
      />

      <section className="home-hero">
        <div className="home-hero-media" aria-hidden="true">
          <img
            src={heroImg}
            alt={tx("Assalam eco-village setting with open gathering spaces in Zanzibar")}
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="home-hero-overlay" />
        </div>
        <div className="container home-hero-content">
          <div className="home-hero-grid">
            <div className="home-hero-main">
              <p className="eyebrow">{tx("Karibu Assalam | Zanzibar Coast")}</p>
              <h1>{tx("Purposeful halal-friendly journeys rooted in Zanzibar hospitality")}</h1>
              <p className="lead">
                {tx(
                  "Discover retreats that blend culture, meaningful volunteering, and calm eco-village living. Karibu Assalam is designed for travelers who value impact, dignity, and genuine community connection."
                )}
              </p>
              <div className="inline-actions home-hero-actions">
                <CTAButton to="/retreats">{tx("Explore Experiences")}</CTAButton>
                <CTAButton to="/contact?intent=booking" variant="secondary">
                  {tx("Book Your Stay")}
                </CTAButton>
                <CTAButton to="/contact?intent=contact" variant="ghost">
                  {tx("Volunteer With Us")}
                </CTAButton>
                <WhatsAppButton
                  payload={heroWhatsAppPayload}
                  label={tx("Contact on WhatsApp")}
                  variant="secondary"
                  className="btn-whatsapp"
                />
              </div>
              <div className="hero-pill-list">
                <span className="pill muted">{tx("Purposeful travel")}</span>
                <span className="pill muted">{tx("Community volunteering")}</span>
                <span className="pill muted">{tx("Halal-friendly retreats")}</span>
              </div>
            </div>
            <aside className="home-hero-support" aria-label={tx("Trust highlights")}>
              <p className="home-hero-support__title">{tx("Why guests trust this journey")}</p>
              <ul className="hero-stat-list">
                {trustStats.map((item) => (
                  <li key={item.value}>
                    <strong>{tx(item.value)}</strong>
                    <span>{tx(item.label)}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <Section
        eyebrow={tx("Travel With Purpose")}
        title={tx("A welcoming path from travel to community impact")}
        subtitle={tx(
          "Our model connects immersive travel with practical service and responsible hospitality in Zanzibar."
        )}
      >
        <div className="purpose-grid">
          <Card className="purpose-card purpose-card--lead">
            <h3>{tx("What makes Karibu Assalam different")}</h3>
            <p>
              {tx(
                "Each journey is built around dignity, cultural respect, and intentional daily rhythm. Guests are invited to experience Zanzibar deeply while supporting local community initiatives through Assalam Community Foundation."
              )}
            </p>
            <ul className="check-list">
              <li>{tx("Guided activities with local context")}</li>
              <li>{tx("Structured volunteering opportunities")}</li>
              <li>{tx("Warm, service-oriented hosting style")}</li>
              <li>{tx("Balanced retreat schedules and rest")}</li>
            </ul>
          </Card>

          <Card className="purpose-card">
            <h3>{tx("Who this is for")}</h3>
            <p>
              {tx(
                "Families, student groups, and individual travelers looking for halal-friendly experiences with depth, learning, and meaningful connection."
              )}
            </p>
            <p>
              {tx(
                "Whether you come for retreat life, service activities, or coastal exploration, your visit supports a broader community mission."
              )}
            </p>
          </Card>

          <Card className="purpose-card">
            <h3>{tx("Your stay supports impact")}</h3>
            <p>
              {tx(
                `${SITE.nonprofitName} coordinates programs that connect travel with community-centered outcomes such as education, youth development, and social support initiatives.`
              )}
            </p>
            <CTAButton to="/about" variant="secondary" size="sm">
              {tx("Learn more about our approach")}
            </CTAButton>
          </Card>
        </div>
      </Section>

      <Section
        title={tx("Experiences designed around culture, service, and wellbeing")}
        subtitle={tx(
          "Choose a pathway that matches your goals, then shape your days with guided support from the team."
        )}
        className="surface-section"
      >
        <div className="grid cards-3">
          {journeyPillars.map((pillar) => (
            <Card key={pillar.title} className="feature-card purpose-feature">
              <h3>{tx(pillar.title)}</h3>
              <ul className="check-list">
                {pillar.bullets.map((bullet) => (
                  <li key={bullet}>{tx(bullet)}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        eyebrow={tx("Stay")}
        title={tx("Boutique eco-village hospitality by the Zanzibar coast")}
        subtitle={tx(
          "Explore the rooms, food, and campus spaces that support each retreat and camp at Assalam Ecolodge."
        )}
      >
        <EcoVillageCards />
        <div className="stay-highlight card plain">
          <h3>{tx("Designed for shared retreat life")}</h3>
          <p>
            {tx(
              "The eco-village combines practical comfort, halal-friendly hospitality, and communal spaces where guests can learn, rest, and connect."
            )}
          </p>
          <div className="inline-actions">
            <CTAButton to="/rooms" variant="secondary" size="sm">
              {t.nav.rooms}
            </CTAButton>
            <CTAButton to="/food" variant="secondary" size="sm">
              {t.nav.food}
            </CTAButton>
            <CTAButton to="/campus" variant="secondary" size="sm">
              {t.nav.campus}
            </CTAButton>
          </div>
        </div>
      </Section>

      <Section
        eyebrow={tx("Trust")}
        title={tx("Trusted partnerships and measurable community focus")}
        subtitle={tx(
          "Partner institutions and ongoing programs help ensure each journey is credible, safe, and community-centered."
        )}
        className="partners-section"
      >
        <PartnerGrid />
        <div className="trust-grid">
          <div className="impact-panel">
            <p className="eyebrow">{tx("Travel To Impact")}</p>
            <h3>{tx("Your visit contributes beyond tourism")}</h3>
            <p>
              {tx(
                "Karibu Assalam combines guided Zanzibar experiences with volunteer opportunities and balanced daily activities. The goal is not only to visit, but to contribute responsibly while learning through community connection."
              )}
            </p>
            <CTAButton to="/about" variant="secondary">
              {tx("Read the impact story")}
            </CTAButton>
          </div>
          <Card className="content-card trust-card">
            <h3>{tx("Booking support that feels personal")}</h3>
            <p>
              {tx(
                "From first contact to arrival planning, the team supports travelers with clear guidance on accommodation, retreat format, and logistics."
              )}
            </p>
            <div className="inline-actions">
              <CTAButton to="/contact?intent=booking" size="sm">
                {t.nav.bookNow}
              </CTAButton>
              <WhatsAppButton
                payload={heroWhatsAppPayload}
                label={tx("WhatsApp Support")}
                variant="ghost"
                size="sm"
              />
            </div>
          </Card>
        </div>
      </Section>

      <Section
        eyebrow={tx("Programs")}
        title={tx("Retreats and camps ready to explore")}
        subtitle={tx(
          "Browse curated programs with clear inclusions, duration, and booking pathways."
        )}
        className="surface-section"
      >
        <div className="grid cards-3">
          {retreats.map((retreat) => (
            <RetreatCard key={retreat.slug} retreat={retreat} />
          ))}
        </div>
        <div className="section-actions">
          <CTAButton to="/retreats">{tx("Explore All Retreats")}</CTAButton>
          <CTAButton to="/zanzibar" variant="secondary">
            {tx("Explore Zanzibar Modules")}
          </CTAButton>
        </div>
      </Section>

      <Section
        eyebrow={tx("Stories")}
        title={tx("Snapshots of travel, learning, and community")}
        subtitle={tx(
          "A curated glimpse into camp life and impact-focused travel moments. This section is informational and does not link to separate story pages yet."
        )}
      >
        <div className="grid cards-3">
          {storyCards.map((story) => (
            <Card key={story.title} className="story-card">
              <div className="media-frame tall">
                <img src={story.image} alt={story.alt} loading="lazy" decoding="async" />
              </div>
              <div className="card-body">
                <h3>{tx(story.title)}</h3>
                <p>{tx(story.text)}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="surface-section cta-band-section">
        <div className="cta-band">
          <div className="cta-band__copy">
            <p className="eyebrow">{tx("Start Planning")}</p>
            <h2>{tx("Ready to plan your purposeful Zanzibar journey?")}</h2>
            <p className="lead">
              {tx(
                "Speak with the team to choose the right retreat, arrange your stay, and prepare for a meaningful visit."
              )}
            </p>
          </div>
          <div className="cta-band__actions">
            <CTAButton to="/contact?intent=booking">{tx("Book Your Stay")}</CTAButton>
            <WhatsAppButton
              payload={heroWhatsAppPayload}
              label={tx("Contact on WhatsApp")}
              variant="secondary"
            />
          </div>
        </div>
      </Section>
    </main>
  );
}
