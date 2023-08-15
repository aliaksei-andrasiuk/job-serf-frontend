import { Form, Button, Tab, Tabs, ButtonGroup, ToggleButton } from "react-bootstrap";
import { FormEvent, useState } from "react";
import qs from 'query-string';

import { JustJoinItForm } from "./JustJoinItForm";
import { TJustJoinItCategories, TJustJoinItSeniorities, ISetUpSearchConfig, TNoFluffJobsSeniorities, TNoFluffJobsTechnologies } from "../../types";
import { TNoFluffJobsCategories } from "./JobSurf.types";
import { NoFluffJobsForm } from "./NoFluffJobsForm/NoFluffJobsForm";
import { companyRatingList } from "../../constants";
import { GlassdoorIcon } from "../../components";
import * as jobSurfApiProvider from "../../providers";

import './style.scss'

export function JobSurf() {
    const [jSearchLine, setJjSearchLine] = useState('');
    const [jjExcludeSearchLine, setJjExcludeSearchLine] = useState('');
    const [jjCategory, setJjCategory] = useState<TJustJoinItCategories>('all');
    const [jjSeniorities, setJjSeniorities] = useState<TJustJoinItSeniorities[]>([]);

    const [nfSearchLine, setNfSearchLine] = useState('');
    const [nfExcludeSearchLine, setNfExcludeSearchLine] = useState('');
    const [nfCategories, setNfCategories] = useState<TNoFluffJobsCategories[]>([]);
    const [nfSeniorities, setNfSeniorities] = useState<TNoFluffJobsSeniorities[]>([]);
    const [nfTechnologies, setNfTechnologies] = useState<TNoFluffJobsTechnologies[]>([]);

    const [companyRating, setCompanyRating] = useState<string>('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const { userId } = qs.parse(window.location.search);

        if (!userId) {
            // TODO when implement errors
            console.error('userId is required');
            return
        }

        const requestData: ISetUpSearchConfig = {
            justJoinIt: {
                searchLine: jSearchLine,
                excludeSearchLine: jjExcludeSearchLine,
                category: jjCategory,
                seniorities: jjSeniorities,
            },
            noFluffJobs: {
                searchLine: nfSearchLine,
                excludeSearchLine: nfExcludeSearchLine,
                categories: nfCategories,
                seniorities: nfSeniorities,
                technologies: nfTechnologies,
            },
            companyRating,
            userId: userId as string,
        };

        jobSurfApiProvider.createSearchConfig(requestData)
            .catch(error => console.log(error));
    }

    return (
        <div className="p-4">
            <h1>Let's surf the job</h1>
            <Form onSubmit={onSubmit}>
                <Tabs
                    defaultActiveKey="justJoinIt"
                    className="mt-4 mb-2"
                    >
                    <Tab eventKey="justJoinIt" title="justJoin.it">
                        <JustJoinItForm
                            searchLine={jSearchLine}
                            excludeSearchLine={jjExcludeSearchLine}
                            category={jjCategory}
                            seniorities={jjSeniorities}
                            onSearchLineChange={setJjSearchLine}
                            onExcludeSearchLineChange={setJjExcludeSearchLine}
                            onCategoryChange={setJjCategory}
                            onSeniorityChange={setJjSeniorities}
                        />
                    </Tab>
                    <Tab eventKey="noFluffJobs" title="NO FLUFF JOBS">
                        <NoFluffJobsForm
                            searchLine={nfSearchLine}
                            excludeSearchLine={nfExcludeSearchLine}
                            categories={nfCategories}
                            seniorities={nfSeniorities}
                            technologies={nfTechnologies}
                            onSearchLineChange={setNfSearchLine}
                            onExcludeSearchLineChange={setNfExcludeSearchLine}
                            onCategoriesChange={setNfCategories}
                            onSenioritiesChange={setNfSeniorities}
                            onTechnologiesChange={setNfTechnologies}
                        />
                    </Tab>
                </Tabs>

                <div className="mb-5 mt-4">
                    <p className="mb-1">
                        <GlassdoorIcon className="align-text-bottom me-1 glassdoor-icon" color="#00a264"/>
                        Select Glassdor company rating
                    </p>
                    <ButtonGroup className="flex-wrap">
                        {companyRatingList.map((item) => (
                            <ToggleButton
                                key={item}
                                type="radio"
                                value={item}
                                variant={item === companyRating ? 'primary' : 'outline-primary'}
                                onClick={() => setCompanyRating(item)}
                            >
                                {`${item}++`}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>

                <Button className="w-100 mb-5" variant="primary" type="submit" >
                    Save
                </Button>
            </Form>
        </div>
    );
}
