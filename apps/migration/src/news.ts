type News = {
    slug: string
    // TODO add all the other properties
    content: string
}

// TODO we need to make sure both the English and the german news articles are fetched and correctly assigned as such in the CMS
export async function migrateNews() {
    const newsWithoutContent = await getApiData()
    const news = await Promise.all(newsWithoutContent.map(async news => {
        const content = await getContent(news.slug)
        return { ...news, content }
    }))

    await loadNews(news)

    return news
}

async function getApiData(): Promise<Omit<News, 'content'>[]> {
    /**
     * TODO: we need to fetch all the news (use pagination until we get no more results) available from
     *   the official hita wordpress api. The data will most likely include everything we need except for
     *   the content of the page itself. We collect all the data we can and then fetch the content later
     *   in a seperate function
     */

    return []
}

async function getContent(slug: News['slug']): Promise<News['content']> {
    console.log(slug)
    // TODO fetch the content by scraping the news page
    return ''
}

async function loadNews(news: News[]) {
    // TODO load the news into the CMS
    console.log(news)
}