export interface HeaderLink {
  id: number;
  text: string;
  url: string;
  icon: string;
  priority: number;
}

export interface Header {
  logoImage: string;
  logoHomeLink: string;
  headerLinks: HeaderLink[];
}

export interface SocialMediaLink {
  name: string;
  icon: string;
  url: string;
}

export interface PromoSpace {
  id: number
  promoTitle: string;
  promoDescription: string;
  promoButton: string;
  promoUrl: "/"
}

export interface NewsItem {
  id: number;
  date: string;
  priority: number;
  imageUrl: string;
  alt: string;
  isSoloPromo: boolean;
}

export interface MainContent {
  promoSpace?: PromoSpace;
  news: NewsItem[];
}

export interface FooterLink {
  id: number;
  text: string;
  url: string;
  priority: number;
}

export interface Address{
  address: string,
  city: string,
  state: string,
  zipCode: number,
  phoneNumber: string
}
export interface TermsAndPrivacy{
  text: string;
  url?: string;
}

export interface Footer {
  footerLinks: FooterLink[];
  logoImage: string;
  copyright: string;
  address: Address[];
  termsAndPrivacyLink: TermsAndPrivacy;
}

export interface Content {
  header: Header;
  mainContent: MainContent;
  footer: Footer;
}
