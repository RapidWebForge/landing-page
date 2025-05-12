import Footer from "@components/organisms/footer";
import Header from "@components/organisms/header";
import ValidationView from "@views/validation";

export default function ValidationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ValidationView />
      <Footer />
    </div>
  );
}
