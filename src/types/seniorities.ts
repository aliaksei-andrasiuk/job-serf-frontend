export type TJustJoinItSeniorities =
    | 'all'
    | 'junior'
    | 'mid'
    | 'senior';

export type TNoFluffJobsSeniorities =
    | 'trainee'
    | 'junior'
    | 'mid'
    | 'senior'
    | 'expert';
    
export type TLinkedInSeniorities =
    | 'intern'
    | 'entry'
    | 'associate'
    | 'midSenior'
    | 'director';

export type TLinkedInSenioritiesItem = Record<TLinkedInSeniorities, string>;

export interface ILinkedInSenioritiesItems {
    intern: string;
    entry: string;
    associate: string;
    midSenior: string;
    director: string;
}
