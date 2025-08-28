// * SEO
import { Metadata } from 'next';

// * Components
import { PrivacyComponent } from './_components/privacy.component';

// * SEO
export const metadata: Metadata = {
  metadataBase: new URL('https://wod-timer.com'), // Next will use this to make complete URLs from relative paths.
  alternates: {
    canonical: '/privacy', // For the homepage, or specific path like '/articles/my-post'
  }
};

// * Page
export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background mb-8">
      <section className="relative min-h-screen bg-gradient-background flex flex-col">
        <PrivacyComponent />
      </section>
    </div>
  );
}
