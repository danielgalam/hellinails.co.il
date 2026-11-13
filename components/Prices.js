const prices = [
  { name: 'מניקור ג׳ל', price: '₪140' },
  { name: 'מניקור עם מבנה אנטומי', price: '₪150' },
];

export default function Prices() {
  return (
    <section className="prices">
      <h2 className="prices-title">סוגי טיפולים</h2>
      <ul className="prices-list">
        {prices.map((p) => (
          <li key={p.name}>
            <span className="prices-name">{p.name}</span>
            <span className="prices-price" dir="ltr">
              {p.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
