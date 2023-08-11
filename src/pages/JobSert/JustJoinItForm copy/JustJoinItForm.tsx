import React from "react";

import { ButtonGroup, Form, ToggleButton } from "react-bootstrap";

import { IJustJoinItConfig, TJustJoinItCategories, TJustJoinItSeniorities } from "../../../types";

import { justJoinItCategoriesList, justJoinItSenioritiesList } from "../../../constants";

interface IJustJoinItFormProps extends IJustJoinItConfig {
    onSearchLineChange: (value: string) => void;
    onExcludeSearchLineChange: (value: string) => void;
    onCategoryChange: (value: TJustJoinItCategories) => void;
    onSeniorityChange: (value: TJustJoinItSeniorities[]) => void;
}

export function JustJoinItForm({
    searchLine,
    excludeSearchLine,
    category,
    seniorities,
    onSearchLineChange,
    onExcludeSearchLineChange,
    onCategoryChange,
    onSeniorityChange,
}: IJustJoinItFormProps) {
    const handleSenioritiesChange = (seniority: TJustJoinItSeniorities, isChecked: boolean ) => {
        if (isChecked) {
            onSeniorityChange(seniorities.filter(item => item !== seniority));

            return
        }

        onSeniorityChange([...seniorities, seniority])
    }

    return (
        <>
            <Form.Group className="mb-3">
                <Form.Text className="text-muted">
                    Enter the search line for justjoin.it
                </Form.Text>
                <Form.Control
                    type="text"
                    placeholder="Search line"
                    value={searchLine}
                    onChange={(event) => onSearchLineChange(event.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
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
            <div className="mb-2 mt-2">
                <p className="mb-1">Select category</p>
                <ButtonGroup className="flex-wrap">
                    {justJoinItCategoriesList.map((item) => (
                        <ToggleButton
                            key={item.key}
                            type="radio"
                            value={item.key}
                            variant={item.key === category ? 'primary' : 'outline-primary'}
                            onClick={() => onCategoryChange(item.key)}
                        >
                            {item.text}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>
            
            <div className="mb-5">
                <p className="mb-1">Select one or several levels</p>
                <ButtonGroup>
                    {justJoinItSenioritiesList.map((item) => {
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
