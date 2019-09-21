const choiceJson = [
    {
        "value": "1",
        "text": "Did not apply to me at all"
    },
    {
        "value": "2",
        "text": "To some degree / some of the time"
    },
    {
        "value": "3",
        "text": "To a considerable degree / good part of the time"
    },
    {
        "value": "4",
        "text": "Very much / most of the time"
    }
];

const depressionQuestionJson = (index, question) => {
    const name = "depression_index_" + index;
    return {
        "visibleIf": "{conditions.Depression}='Yes'",
        "type": "dropdown",
        "name": name,
        "title": question,
        "colCount": 0,
        "choices": choiceJson
    }
};

export const ortJson = 
{
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "radiogroup",
                    "name": "age_group",
                    "title": "Are you aged between 16-45?",
                    "choices": [
                        {
                            "value": "age_16_45_yes",
                            "text": "Yes"
                        },
                        {
                            "value": "age_16_45_no",
                            "text": "No"
                        }
                    ],
                    "colCount": 2
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "matrixdropdown",
                    "name": "family_history",
                    "title": "Does anyone in your family have substance use problems with:",
                    "columns": [
                        {}
                    ],
                    "choices": [
                        "Yes",
                        "No"
                    ],
                    "cellType": "radiogroup",
                    "rows": [
                        {
                            "value": "fh_alcohol",
                            "text": "Alcohol?"
                        },
                        {
                            "value": "fh_illicit_drugs",
                            "text": "Illicit drugs?"
                        },
                        {
                            "value": "fh_prescription_drugs",
                            "text": "Prescription drugs?"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page3",
            "elements": [
                {
                    "type": "matrixdropdown",
                    "name": "self_substance",
                    "title": "Do you currently have any substance use problems with:",
                    "columns": [
                        {}
                    ],
                    "choices": [
                        "Yes",
                        "No"
                    ],
                    "cellType": "radiogroup",
                    "rows": [
                        {
                            "value": "ss_alcohol",
                            "text": "Alcohol?",
                        },
                        {
                            "value": "ss_illicit_drugs",
                            "text": "Illicit drugs?"
                        },
                        {
                            "value": "ss_prescription_drugs",
                            "text": "Prescription drugs?"
                        }
                    ]
                }
            ]
        },
        {
            "name": "page4",
            "elements": [
                {
                    "type": "matrix",
                    "name": "conditions",
                    "title": "Do you have any of the following issues?",
                    "columns": [
                        "Yes",
                        "No"
                    ],
                    "rows": [
                        {
                            "value": "adhd",
                            "text": "Attention deficit hyperactivity disorder (ADHD)"
                        },
                        {
                            "value": "ocd",
                            "text": "Obsessive compulsive disorder (OCD)"
                        },
                        "Bipolar",
                        "Schizophrenia",
                        "Depression"
                    ]
                },
                {
                    "visibleIf": "{conditions.Depression}='Yes'",
                    type: "html",
                    name: "info",
                    html: "<p>Please read each statement below and indicate how much the statement applied to you over the PAST WEEK. There are no right or wrong answers.</p>"
                },
                depressionQuestionJson(1, "I couldn't seem to experience any positive feeling at all."),
                depressionQuestionJson(2, "I found it difficult to work up the initiative to do things."),
                depressionQuestionJson(3, "I felt that I had nothing to look forward to."),
                depressionQuestionJson(4, "I felt down-hearted and blue."),
                depressionQuestionJson(5, "I was unable to become enthusiastic about anything."),
                depressionQuestionJson(6, "I felt I wasn't worth much as a person."),
                depressionQuestionJson(7, "I felt that life was meaningless.")
            ]
        }
    ]
};