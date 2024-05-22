import AboutSection from "@/components/AboutSection";
import MainPage from "@/components/MainPage";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <MainPage />
      <AboutSection />
      <ProjectSection />
    </main>
  );
}
