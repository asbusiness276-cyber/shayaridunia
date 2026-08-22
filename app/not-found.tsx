import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="not-found">
        <div>
          <p className="eyebrow">404 · Lafz nahi mile</p>
          <h1>Yeh page abhi khaali hai.</h1>
          <p>Hindi, Punjabi aur English ki complete emotion collections homepage se explore karein.</p>
          <Link className="button primary" href="/">Back to Shayari Dunia</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
