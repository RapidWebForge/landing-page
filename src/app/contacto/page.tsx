import Footer from "@components/organisms/footer";
import Header from "@components/organisms/header";
import ContactView from "@views/contact";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ContactView />
      <Footer />
    </div>
  );
}
