import { SanityImage } from "types/sanity/Sanity";

export interface HeroContent {
    backgroundImage: SanityImage;
    heading: string;
}

export interface HomePage {
    title: string;
}

export interface HeaderProps {
    hero: HeroContent;
    className?: string;
    page: HomePage;
}
