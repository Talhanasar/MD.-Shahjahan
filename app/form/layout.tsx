import type { Metadata } from "next";
import "../globals.css";
import { LanguageProvider } from "@/store/LanguageContext";

export const metadata: Metadata = {
  title: "Form - Md. Shahjahan",
  description: "Submit your information to support Md. Shahjahan",
};

export default function FormLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans text-stone-900 selection:bg-teal-100 selection:text-teal-900">
        <div className="min-h-screen flex flex-col">
          <LanguageProvider>
            <main className="flex-1">
              {children}
            </main>
          </LanguageProvider>
        </div>
      </body>
    </html>
  );
}
