import { TJustJoinItSeniorities, TJustJoinItCategories, TNoFluffJobsCategories, TNoFluffJobsSeniorities, TNoFluffJobsTechnologies } from "..";

export interface ISetUpSearchConfig {
    justJoinIt: IJustJoinItConfig;
    noFluffJobs: INoFluffJobsConfig;
    companyRating: number;
};

export interface IJustJoinItConfig {
    searchLine: string;
    excludeSearchLine: string;
    category: TJustJoinItCategories;
    seniorities: TJustJoinItSeniorities[]
};

export interface INoFluffJobsConfig {
    searchLine: string;
    excludeSearchLine: string;
    categories: TNoFluffJobsCategories[];
    seniorities: TNoFluffJobsSeniorities[];
    technologies: TNoFluffJobsTechnologies[];
};
