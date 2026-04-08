function App() {
  return (
    <main className="ui-shell">
      <section className="ui-panel-strong">
        <span className="ui-badge">Design System</span>
        <h1 className="font-display text-primary-900 mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          SevrEst UI
        </h1>
        <p className="text-text-muted mt-4 max-w-2xl text-base md:text-lg">
          A semantic design foundation generated from the brand color #613985. The system is ready
          for consistent surfaces, typography, and interactive states.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className="ui-button-primary" type="button">
            Primary Action
          </button>
          <button className="ui-button-secondary" type="button">
            Secondary Action
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <article className="ui-panel">
          <h2 className="font-display text-primary-800 text-lg font-semibold">Primary</h2>
          <p className="text-text-muted mt-2 text-sm">Used for actions, links, and emphasis.</p>
          <div className="bg-primary mt-4 h-12 rounded-lg" />
        </article>
        <article className="ui-panel">
          <h2 className="font-display text-primary-800 text-lg font-semibold">Surface</h2>
          <p className="text-text-muted mt-2 text-sm">Cards and containers with soft elevation.</p>
          <div className="border-border bg-surface-2 mt-4 h-12 rounded-lg border" />
        </article>
        <article className="ui-panel">
          <h2 className="font-display text-primary-800 text-lg font-semibold">Status</h2>
          <p className="text-text-muted mt-2 text-sm">Meaningful feedback colors.</p>
          <div className="mt-4 flex gap-2">
            <span className="bg-success h-12 flex-1 rounded-lg" />
            <span className="bg-warning h-12 flex-1 rounded-lg" />
            <span className="bg-danger h-12 flex-1 rounded-lg" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
