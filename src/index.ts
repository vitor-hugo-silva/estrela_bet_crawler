import { BaseCrawler } from "./lib/rakoon/crawlers/baseCrawler";

export class CruzeiroCrawler extends BaseCrawler{
    private SELECTORS = {}
    constructor () {
        super();
        this.BASE_URL = 'https://estrelabet.com/ptb/bet/fixture-detail/48851733';
    };

    
}
