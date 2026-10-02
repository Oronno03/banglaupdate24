export interface ICategories {
  success: boolean;
  count: number;
  cachedAt: string;
  data: ICategory[];
}

export interface ICategory {
  slug: string;
  title: string;
  topicid: string | null;
  url: string;
  scrapable: boolean;
}

export interface INews {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: string;
  firstPublished: string;
  lastPublished: string;
  source: string;
}

export interface ILatestHeadlines {
  success: boolean;
  count: number;
  limit: number;
  cachedAt: string;
  total: number;
  offset: number;
  data: INews[];
}

export interface ISection {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: INews[];
}

export interface ISections {
  success: boolean;
  count: number;
  cachedAt: string;
  data: ISection[];
}

export interface IMostRead {
  success: boolean;
  count: number;
  cachedAt: string;
  generated: string;
  data: INews[];
}
