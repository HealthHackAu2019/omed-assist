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

const yesNo = (name, question, visibleIf) => {
    const item = {
        type: "radiogroup",
        name: name,
        title: question,
        colCount: 1,
        choices: [
            "Yes",
            "No"
        ]
    };
    
    if(visibleIf) item.visibleIf = visibleIf
    
    return item;
};

const medicationPanel = (name, index, tense, visibleIf) => {
    
    const isOrWas = tense === "past" ? "was" : "is";
    const didOrDo = tense === "past" ? "did" : "do";
    const prefix = name + "_" + index;
    
    const panel = {
        "type": "paneldynamic",
        "name": prefix + "_medications",
        "title": "Medication List",
        "templateTitle": "Medicine Details",
        "templateElements": [
            {
                name: prefix + "_medicine_name",
                title: "What " + isOrWas + " the medicine name (as per the label)?",
                type: "text"
            },
            {
                name: prefix + "_medicine_strength_in_mg",
                title: "What " + isOrWas + " medicine strength (as per the label) in mg?",
                type: "text"
            },
            {
                name: prefix + "_medicine_times_per_day",
                title: "How many times per day " + didOrDo + " you take it?",
                type: "text",
                inputType: "number"
            },
            {
                name: prefix + "_medicine_reason",
                title: "Why " + didOrDo + " you take this medication?",
                type: "text"
            },
            {
                name: prefix + "_medicine_delivery_method",
                title: "How " + didOrDo + " you take it?",
                type: "dropdown",
                colCount: 0,
                choices: [
                    "Oral",
                    "Transdermal",
                    "Parenteral (injection)",
                    "Rectal",
                    "Sublingual (Under your tongue)"
                ]
            }
        ],
        "panelCount": 1,
        "panelAddText": "Add another medication",
        "panelRemoveText": "Remove this medication"
    }
    
    if (visibleIf) panel.visibleIf = visibleIf;
    return panel;
}

export const ortJson = 
{
    "pages": [
        {
            "name": "page0",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<p>Hello. Thanks for being here.</p><p>Let's start with some basics.</p>"
                }
            ]
        },
        {
            "name": "page1",
            "elements": [
                {
                    type: "radiogroup",
                    name: "age",
                    title: "What is your age?",
                    colCount: 1,
                    choices: [
                        "Up to 20",
                        "21 to 30",
                        "31 to 40",
                        "41 to 50",
                        "51 to 60",
                        "61 to 70",
                        "71 to 80",
                        "81 and over"
                    ]
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    type: "radiogroup",
                    name: "sex",
                    title: "What is your sex?",
                    colCount: 1,
                    choices: [
                        "Male",
                        "Female",
                        "Intersex",
                        "Non-binary",
                        "Other",
                        "Prefer not to say"
                    ]
                }
            ]
        },
        {
            "name": "page3",
            "elements": [
                yesNo("ab_or_ts", "Are you Aboriginal and/or a Torres Strait Islander?")
            ]
        },
        {
            "name": "page4",
            "elements": [
                yesNo("surgery", "Are you about to have surgery or recently had surgery?")
            ]
        },
        {
            "name": "page0",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<p>Thanks for that. Now let's talk about your pain.</p>"
                }
            ]
        },
        {
            "name": "page5",
            "elements": [
                yesNo("exp_pain", "Are you currently experiencing pain?"),
                {
                    "visibleIf": "{exp_pain}='Yes'",
                    "name": "pain_period",
                    "type": "bootstrapslider",
                    "title": "For how many weeks have you been experiencing pain?",
                    "step": 1,
                    "rangeMin": 1,
                    "rangeMax": 12
                }
            ]
        },
        {
            "name": "page6",
            "elements": [
                {
                    "visibleIf": "{exp_pain}='Yes'",
                    "type": "dropdown",
                    "name": "pain_source",
                    "title": "What was the source of your pain?",
                    "colCount": 0,
                    "choices": [
                        "Injury at home",
                        "Motor Vehicle crash",
                        "Injury at work/school",
                        "Injury - other",
                        "Medical condition other than cancer",
                        "Unknown"
                    ]
                },
            ]
        },
        {
            "name": "page7",
            "elements": [
                {
                    type: "html",
                    name: "info",
                    html: "<p>The following questions refer to your past, current, and planned opioid use. If you are unsure of whether you have taken opioids before you can consult the <a target=_blank href='https://adf.org.au/drug-facts/#wheel'>ADF Drug Wheel</a></p>"
                }
            ]
        },
        {
            "name": "page8",
            "elements": [
                yesNo("ever_used_prescribed", "Have you ever used prescription opioid medications?"),
                medicationPanel("previous_opioid_pres", 1, "past", "{ever_used_prescribed}='Yes'")
            ]
        },
        {
            "name": "page9",
            "elements": [
                {
                    visibleIf: "{ever_used_prescribed}='Yes'",
                    type: "radiogroup",
                    name: "how_long_ago_prescribed",
                    title: "When was the last time you used prescription opioid medications?",
                    colCount: 1,
                    choices: [
                        "In the last week",
                        "In the last month",
                        "Over 3 months ago",
                        "Over a year ago"
                    ]
                }
            ]
        },
        {
            "name": "page10",
            "elements": [
                yesNo("currently_using_prescribed_opioid", "Do you currently use any prescribed opioid medications?"),
                medicationPanel("currently_using_prescribed_opioid", 1, "current", "{currently_using_prescribed_opioid}='Yes'")
            ]
        },
        {
            "name": "page11",
            "elements": [
                yesNo("considering_taking_opioids", "Are you currently considering using prescription opioid medications?"),
                medicationPanel("considering_taking_opioids", 1, "present", "{considering_taking_opioids}='Yes'")
            ]
        },
        {
            "name": "page12",
            "elements": [
                yesNo("uses_other_medications", "Do you currently use any other medications?"),
                medicationPanel("current_other_medications", 1, "current", "{uses_other_medications}='Yes'")
            ]
        },
        {
            "name": "page0",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<p>Lastly, let's explore your medical and family history.</p>"
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