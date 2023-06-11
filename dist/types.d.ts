export interface Options {
    list: WordList;
    wordCount: number;
    delimiter: string;
    seed?: string | number;
}
export type WordList = 'small' | 'medium' | 'large';
