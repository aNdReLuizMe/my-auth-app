import SignInButton from "./components/SignInButton";
import "./globals.css";
import Provider from './components/Provider'
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="flex min-h-screen flex-col items-center justify-between p-20">
            <div className="flex w-full max-w-full items-center justify-center">
              <ul className="flex items-center justify-between gap-10 text-xl">
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/server'>Server</Link></li>
                <li><Link href='/client'>Client</Link></li>
                <SignInButton />
              </ul>
            </div>
            {children}
            <div className="flex items-center justify-between gap-8 place-items-center">
              <Image
                className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/authjs.png"
                alt="Auth.js Logo"
                width={180}
                height={37}
                priority
              />
              <Image
                className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
              />
              <Image
                className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                src="/next-authjs.png"
                alt="NextAuth.js Logo"
                width={180}
                height={37}
                priority
              />
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
