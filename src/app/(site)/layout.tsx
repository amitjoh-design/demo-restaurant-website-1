import { CartDrawer } from "@/components/site/CartDrawer";
import { DialogHost } from "@/components/site/DialogHost";
import { Footer } from "@/components/site/Footer";
import { ActionBar, Announcement, BackToTop, CookieBanner, Header, RevealObserver, Toasts, TrackPill } from "@/components/site/SiteChrome";
import { SiteProviders } from "@/components/site/store";

/** Public website: header, footer, cart and dialogs shared by every page. */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SiteProviders>
      <a className="skip-link" href="#main">Skip to content</a>
      <Announcement />
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CartDrawer />
      <DialogHost />
      <ActionBar />
      <TrackPill />
      <BackToTop />
      <CookieBanner />
      <Toasts />
      <RevealObserver />
    </SiteProviders>
  );
}
