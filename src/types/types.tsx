import { ReactElement } from "react";

export interface HeaderLink {
    name: string;
    url: string;
    label: string;
    icon: string;
  }
  
  export interface SocialMediaLink {
    name: string;
    icon: string;
    url: string;
  }
  
  export interface FooterLink {
    name: string;
    url: string;
  }
  
  export interface Header {
    logoImage: string;
    logoHomeLink: string;
    headerLinks: HeaderLink[];
  }
  
  export interface PromoSpace {
    promoTitle: string;
    promoDescription: string;
    promoButton: string;
  }
  
  export interface CarouselItem {
    image: string;
    alt: string;
    ctaUrl?: string;
  }
  
  export interface MainContent {
    promoSpace: PromoSpace;
    carousel: CarouselItem[];
  }
  
  export interface Footer {
    footerLinks: FooterLink[];
    logoImage: string;
    address: string;
    copyright: string;
  }
  
  export interface Content {
    header: Header;
    mainContent: MainContent;
    footer: Footer;
  }
  