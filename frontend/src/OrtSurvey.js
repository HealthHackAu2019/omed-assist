import _ from "lodash";

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

export const ortJson = 
{
    "pages": [
        {
            "name": "page0",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<h2>Welcome</h2><p class='milestone'>Let's get started with some basic details.</p>"
                }
            ]
        },
        {
            "name": "page1",
            "elements": [
                {
                    type: "dropdown",
                    name: "age",
                    title: "What is your age?",
                    colCount: 1,
                    choices: _.range(18, 100, 1).map(x => x.toString())
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
            "name": "page0",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<h2>What's going on?</h2><p class='milestone'>Now let's find out a bit about what's going on in your life at the moment.</p>"
                }
            ]
        },
        {
            "name": "page5",
            "elements": [
                yesNo("had_recent_event", "Have you had a recent injury or medical procedure?"),
                {
                    "visibleIf": "{had_recent_event}='Yes'",
                    "type": "dropdown",
                    "name": "recent_event",
                    "title": "What was it?",
                    "colCount": 0,
                    "choices": [
                        "Injury at home",
                        "Motor Vehicle crash",
                        "Injury at work/school",
                        "Injury - other",
                        "Medical condition other than cancer",
                        "Unknown"
                    ]
                }
            ]
        },
        {
            "name": "page5",
            "elements": [
                yesNo("has_planned_event", "Do you have a medical procedure planned in the near future?", "{had_recent_event}='No'"),
                {
                    "visibleIf": "{has_planned_event}='Yes'",
                    "type": "text",
                    "name": "planned_event",
                    "title": "What was is?"
                }
            ]
        },
        {
            "name": "page6",
            "elements": [
                yesNo("exp_pain", "Are you in pain right now?"),
                {
                    "visibleIf": "{exp_pain}='Yes'",
                    "name": "pain_period",
                    "type": "radiogroup",
                    "title": "How long have you had this pain?",
                    "colCount": 1,
                    "choices": [
                        "Less than a week",
                        "Less than a month",
                        "Less than 3 months",
                        "Longer"
                    ]
                }
            ]
        },
        {
            "name": "page6",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<p class='inline-statement'>Please provide a score from 0 to 10 for the following. Consider 0 to be no pain at all and 10 to be the worst pain imaginable.</p>"
                },
                {
                    "name": "worst_pain_last_week",
                    "type": "dropdown",
                    "title": "You pain at its WORST in the LAST week",
                    "colCount": 1,
                    "choices": _.range(0, 11, 1).map(x => x.toString())
                },
                {
                    "name": "least_pain_last_week",
                    "type": "dropdown",
                    "title": "You pain at its LEAST in the LAST week",
                    "colCount": 1,
                    "choices": _.range(0, 11, 1).map(x => x.toString())
                },
                {
                    "name": "avg_pain",
                    "type": "dropdown",
                    "title": "Your pain on AVERAGE",
                    "colCount": 1,
                    "choices": _.range(0, 11, 1).map(x => x.toString())
                },
                {
                    "name": "pain_now",
                    "type": "dropdown",
                    "title": "How much pain do you have RIGHT NOW?",
                    "colCount": 1,
                    "choices": _.range(0, 11, 1).map(x => x.toString())
                }
            ]
        },
        {
            "name": "page0",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<h2>All about Opioids</h2><p>Now let's talk about opioids. The most commonly prescribed opioids are <ul><li>Codeine</li><li>Morphine</li></ul></p>"
                }
            ]
        },
        {
            "name": "page0",
            "elements": [
               {
                "name": "medication_summary",
                "type": "radiogroup",
                "title": "Which of the following best describes your opioid history?",
                "colCount": 1,
                "choices": [
                    "I've never used opioids",
                    "I'm currently using opioids",
                    "I'm starting my first course of opioids in the near future"
                ]
            }
            ]
        },
        {
            "name": "page0",
            "elements": [
                {
                    type: "html",
                    name: "demographic_intro",
                    html: "<h2>Almost done</h2><p>Just a few more questions about your medical and family history.</p>" 
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
                    html: "<p class='inline-statement'>Please read each statement below and indicate how much the statement applied to you over the PAST WEEK. There are no right or wrong answers.</p>"
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