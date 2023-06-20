import { AvalancheShape, DotGridShape, LandingPageAboutUs } from "@/ui/shapes";
import { Button, Typography } from "@/ui";
import Image from "next/image";
import landingFigure from "@assets/landing-figure.svg";
import { Square } from "@/ui/shapes/square";
import { Line } from "@/ui/shapes/line";
import homeStyles from "../../public/home.module.css";
import Link from "next/link";
import {Sidebar} from "@/app/sidebar";
import {Header} from "@/app/header";
import {PromoBanner} from "@/app/promo-banner";
import RootLayout from "@/app/layout";

export const metadata = {
  title: "GamingGG",
  description: "High quality, performance and cheap game boosting",
};

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Header />
        <PromoBanner />
        <div className="overflow-y-auto flex-1">
          <div className="relative w-full h-full overflow-hidden">
            <div className="relative left-32 top-10">
              <Typography
                variant="h1"
                weight="black"
                transform="uppercase"
                className={`${homeStyles.hero1} opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-red to-blue absolute top-14 left-6`}
              >
                high elo boost
              </Typography>
              <Typography
                variant="h3"
                weight="regular"
                transform="capitalize"
                className={`${homeStyles.hero1} opacity-0 absolute top-32 left-6`}
              >
                Fast, Cheap, Reliable
              </Typography>
              <Typography
                variant="h1"
                weight="black"
                transform="uppercase"
                className={`${homeStyles.hero2} opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-red to-blue absolute top-14 left-6`}
              >
                Coaching
              </Typography>
              <Typography
                variant="h3"
                weight="regular"
                transform="capitalize"
                className={`${homeStyles.hero2} opacity-0 absolute top-32 left-6`}
              >
                Relevant, Pin-Point
              </Typography>
              <Typography
                variant="h1"
                weight="black"
                transform="uppercase"
                className={`${homeStyles.hero3} opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-red to-blue absolute top-14 left-6`}
              >
                Packages
              </Typography>
              <Typography
                variant="h4"
                weight="regular"
                transform="capitalize"
                className={`${homeStyles.hero3} opacity-0 absolute top-32 left-6`}
              >
                Best ready-to-buy in the market
              </Typography>
              <div className="flex justify-between w-fit gap-lg absolute top-52 left-6">
                <Link href="/boosting">
                  <Button label="rank up" size="large" />
                </Link>
                <Link href="/jobs">
                  <Button variant="secondary" label="join us" size="large" />
                </Link>
              </div>
              <DotGridShape />
            </div>
            <div className="absolute right-56 bottom-10 z-10">
              <Line className="absolute top-0" size="medium" />
              <Square className="absolute top-2" />
              <Line className="absolute top-0" size="medium" />
              <Square className="absolute bottom-1/2 -left-1/3" />
              <Square size="medium" className="absolute top-2 left-10" />
              <Square size="small" className="absolute top-2/3 right-10" />
              <Image src={landingFigure} alt="Landing Figure" />
            </div>
            <Line className="absolute top-10 right-0" size="large" gradient />
            <Line className="absolute top-12 right-0" size="medium" gradient />
            <Line className="absolute top-14 right-0" size="small" gradient />
            <div className="absolute bottom-0 right-0 left-0 -z-10">
              <AvalancheShape />
              <LandingPageAboutUs />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Home.getLayout = (page: any) => {
  return <RootLayout>{page}</RootLayout>;
};
