import Card from "./Card";
import CTAButton from "./CTAButton";
import { useLanguage } from "../context/LanguageContext";

function formatPrice(priceFrom, tx) {
  return `${tx("From")} ${priceFrom} EUR`;
}

export default function RetreatCard({ retreat }) {
  const { tx } = useLanguage();

  return (
    <Card className="retreat-card">
      <div className="media-frame">
        <img
          src={retreat.heroImage}
          alt={`${tx(retreat.title)} ${tx("retreat preview")}`}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span className="pill">{formatPrice(retreat.priceFrom, tx)}</span>
          {retreat.durationDays ? (
            <span className="pill muted">
              {retreat.durationDays}-{tx("day")}
            </span>
          ) : null}
        </div>
        <h3>{tx(retreat.title)}</h3>
        <p>{tx(retreat.shortPromise)}</p>
        <CTAButton to={`/retreats/${retreat.slug}`} variant="ghost" size="sm" className="retreat-card__cta">
          {tx("View details")}
        </CTAButton>
      </div>
    </Card>
  );
}
