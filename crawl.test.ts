import {normalizeURL} from "./crawl";

describe("Crawl", () => {
    it('should "normalizeURL" strip protocol', () => {
        const input = 'https://crawl.org/path';
        const actual = normalizeURL(input);
        const expected = 'crawl.org/path';
        expect(actual).toEqual(expected);
    });

    it('should "normalizeURL" strip trailing slash', () => {
        const input = 'https://crawl.org/path/';
        const actual = normalizeURL(input);
        const expected = 'crawl.org/path';
        expect(actual).toEqual(expected);
    })

    it('should "normalizeURL" strip http', () => {
        const input = 'http://crawl.org/path/';
        const actual = normalizeURL(input);
        const expected = 'crawl.org/path';
        expect(actual).toEqual(expected);
    })
})