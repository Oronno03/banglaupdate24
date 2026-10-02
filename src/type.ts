export interface ICategories {
    success: boolean,
    count: number,
    cachedAt: string,
    data: ICategory[]
}

export interface ICategory {
    slug: string,
    title: string,
    topicid: string | null,
    url: string,
    scrapable: boolean,
}