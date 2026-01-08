import { Link } from "react-router-dom";

export default function CellPowered() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <Link className="link link-hover" to="/">
              Portfolio
            </Link>
          </li>
          <li>Cell Powered</li>
        </ul>
      </div>

      <header className="mt-6">
        <h1 className="text-4xl font-bold">Cell Powered</h1>
        <p className="mt-3 text-base-content/80">
          A short, clear description of what it is and why it matters.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn btn-primary" href="#" target="_blank" rel="noreferrer">
            Open / Download
          </a>
          <a className="btn btn-outline" href="#" target="_blank" rel="noreferrer">
            Docs
          </a>
          <a className="btn btn-ghost" href="#" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <div className="divider my-10" />

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="card card-border">
          <div className="card-body">
            <h2 className="card-title">What it does</h2>
            <p className="text-base-content/80">
              2–4 sentences explaining core functionality and who it’s for.
            </p>
          </div>
        </div>

        <div className="card card-border">
          <div className="card-body">
            <h2 className="card-title">Highlights</h2>
            <ul className="list-disc pl-5 text-base-content/80">
              <li>Key feature #1</li>
              <li>Key feature #2</li>
              <li>Key feature #3</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="divider my-10" />

      <section className="space-y-3">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="cell-powered-faq" defaultChecked />
          <div className="collapse-title text-lg font-medium">Is this a portfolio project?</div>
          <div className="collapse-content text-base-content/80">
            <p>
              Yes—this is a featured project. This page exists so you can share a clean link.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-200">
          <input type="radio" name="cell-powered-faq" />
          <div className="collapse-title text-lg font-medium">How do I try it?</div>
          <div className="collapse-content text-base-content/80">
            <p>Add the correct “Open/Download” link above.</p>
          </div>
        </div>
      </section>

      <div className="mt-10">
        <Link className="btn btn-ghost" to="/">
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
