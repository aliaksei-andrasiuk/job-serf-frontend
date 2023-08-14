import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";

import { INoFluffJobsConfig, TNoFluffJobsCategories, TNoFluffJobsTechnologies, TNoFluffJobsSeniorities } from "../../../types";

import { noFluffJobsCategoriesList, noFluffJobsSenioritiesList } from "../../../constants";
import { noFluffJobsTechnologiesList } from "../../../constants/technologies";

interface INoFluffJobsFormProps extends INoFluffJobsConfig {
    onSearchLineChange: (value: string) => void;
    onExcludeSearchLineChange: (value: string) => void;
    onCategoriesChange: (value: TNoFluffJobsCategories[]) => void;
    onSenioritiesChange: (value: TNoFluffJobsSeniorities[]) => void;
    onTechnologiesChange: (value: TNoFluffJobsTechnologies[]) => void;
}

export function NoFluffJobsForm({
    searchLine,
    excludeSearchLine,
    categories,
    seniorities,
    technologies,
    onSearchLineChange,
    onExcludeSearchLineChange,
    onSenioritiesChange,
    onCategoriesChange,
    onTechnologiesChange,
}: INoFluffJobsFormProps) {
    const handleCategoriesChange = (category: TNoFluffJobsCategories, isChecked: boolean ) => {
        if (isChecked) {
            onCategoriesChange(categories.filter(item => item !== category));

            return
        }

        onCategoriesChange([...categories, category])
    };

    const handleTechnologiesChange = (technology: TNoFluffJobsTechnologies, isChecked: boolean ) => {
        if (isChecked) {
            onTechnologiesChange(technologies.filter(item => item !== technology));

            return
        }

        onTechnologiesChange([...technologies, technology])
    };

    const handleSenioritiesChange = (seniority: TNoFluffJobsSeniorities, isChecked: boolean ) => {
        if (isChecked) {
            onSenioritiesChange(seniorities.filter(item => item !== seniority));

            return
        }

        onSenioritiesChange([...seniorities, seniority])
    }

    return (
        <>
            <Form.Group className="mb-2">
                <Form.Text className="text-muted">
                    Enter the search line for NoFluffJobs
                </Form.Text>
                <Form.Control
                    type="text"
                    placeholder="Search line"
                    value={searchLine}
                    onChange={(event) => onSearchLineChange(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-2">
                <Form.Text className="text-muted">
                    Items with these words in the name of vacancy will be excluded from the final sample
                </Form.Text>
                <Form.Control
                    type="text"
                    placeholder="Exclude search line"
                    value={excludeSearchLine}
                    onChange={(event) => onExcludeSearchLineChange(event.target.value)}
                />
            </Form.Group>

            <div className="mb-2">
                <p className="mb-1">Select search categories</p>
                <ButtonGroup className="flex-wrap">
                    {noFluffJobsCategoriesList.map((item) => {
                        const isChecked = categories.includes(item.key)

                        return (
                            <ToggleButton
                                key={item.key}
                                type="checkbox"
                                value={item.key}
                                checked={isChecked}
                                variant={isChecked ? 'primary' : 'outline-primary'}
                                onClick={() => handleCategoriesChange(item.key, isChecked)}
                            >
                                {item.text}
                            </ToggleButton>
                        )
                    })}
                </ButtonGroup>
            </div>

            <div className="mb-2">
                <p className="mb-1">Select search technologies</p>
                <ButtonGroup className="flex-wrap">
                    {noFluffJobsTechnologiesList.map((item) => {
                        const isChecked = technologies.includes(item)

                        return (
                            <ToggleButton
                                key={item}
                                type="checkbox"
                                value={item}
                                checked={isChecked}
                                variant={isChecked ? 'primary' : 'outline-primary'}
                                onClick={() => handleTechnologiesChange(item, isChecked)}
                            >
                                {item}
                            </ToggleButton>
                        )
                    })}
                </ButtonGroup>
            </div>

            <div className="mb-2">
                <p className="mb-1">Select one or several levels</p>
                <ButtonGroup>
                    {noFluffJobsSenioritiesList.map((item) => {
                        const isChecked = seniorities.includes(item)

                        return (
                            <ToggleButton
                                key={item}
                                type="checkbox"
                                value={item}
                                checked={isChecked}
                                variant={isChecked ? 'primary' : 'outline-primary'}
                                onClick={() => handleSenioritiesChange(item, isChecked)}
                            >
                                {item}
                            </ToggleButton>
                        )
                    })}
                </ButtonGroup>
            </div>
        </>
    );
}
