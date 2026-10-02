const PRINCIPLES = [
  { title: 'Promise only what can be delivered', text: 'Confirm stock quality and fulfillment capacity before showing availability. When confidence is low, be honest early instead of creating a failed order.' },
  { title: 'Make the everyday journey dependable', text: 'Keep product information, prices, substitutions, and delivery windows accurate. Reliability across ordinary orders earns more trust than occasional dramatic promotions.' },
  { title: 'Recover friction quickly and fairly', text: 'When an order misses its promise, explain what happened and resolve it with a clear, proportionate remedy. Remove the work of chasing support from the customer.' },
  { title: 'Use offers to complement quality', text: 'Reserve discounts for a clear customer benefit, not as a substitute for product quality or dependable operations. Keep the price transparent before checkout.' }
];

export default function Solution() {
  return (
    <>
      <header className="stack" style={{ gap: 10 }}>
        <p className="tiny strong" style={{ color: 'var(--brand-ink)' }}>SOLUTION APPROACH</p>
        <h1>Retention is built in the experience.</h1>
        <p className="strategy-lead muted">The problem is not a shortage of flashy offers. Customers leave when products disappoint, orders fail, promises slip, or fixing a problem takes too much effort. Earn the next order by making this one dependable.</p>
      </header>

      <section aria-labelledby="approach-heading" className="stack">
        <h2 id="approach-heading">Improve the reasons customers come back</h2>
        <div className="strategy-grid">
          {PRINCIPLES.map((item, index) => (
            <article className="strategy-step" key={item.title}>
              <span className="strategy-number" aria-hidden="true">0{index + 1}</span>
              <div className="stack" style={{ gap: 5 }}>
                <h3>{item.title}</h3>
                <p className="small muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stack" aria-labelledby="measure-heading">
        <h2 id="measure-heading">Measure what creates durable retention</h2>
        <p className="muted">Track the full customer outcome, not just promotion redemption.</p>
        <div className="strategy-signals">
          <span><strong>Repeat purchase</strong> <span className="muted small">by cohort</span></span>
          <span><strong>Order completion</strong> <span className="muted small">and cancellation</span></span>
          <span><strong>Promise kept</strong> <span className="muted small">for stock and delivery</span></span>
          <span><strong>Issue resolution</strong> <span className="muted small">time and satisfaction</span></span>
        </div>
        <p className="tiny muted">Use offers selectively after product quality, availability, and fulfillment reliability are healthy. Compare retention and customer outcomes against the cost of each intervention.</p>
      </section>
    </>
  );
}