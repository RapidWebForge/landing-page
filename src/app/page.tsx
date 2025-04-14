import Footer from "@components/organisms/footer";
import Header from "@components/organisms/header";
import HomeView from "@views/home";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HomeView />
      <Footer />
    </div>
  );
}
