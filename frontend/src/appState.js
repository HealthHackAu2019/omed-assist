export function getDefaultState() {
    return {
        questionnaire: {
            results: getDefaultQuestionnaireResults(),
            completed: false
        }
    };
}

export function getDefaultQuestionnareState() {
    return {
        "age_group": "age_16_45_yes",
        "family_history": {
            "fh_alcohol": {
                "": ""
            },
            "fh_illicit_drugs": {
                "": ""
            },
            "fh_prescription_drugs": {
                "": ""
            }
        },
        "self_substance": {
            "ss_alcohol": {
                "": ""
            },
            "ss_illicit_drugs": {
                "": ""
            },
            "ss_prescription_drugs": {
                "": ""
            }
        },
        "conditions": {
            "adhd": "",
            "ocd": "",
            "Bipolar": "",
            "Schizophrenia": "",
            "Depression": ""
        },
        "depression_index_1": "",
        "depression_index_2": "",
        "depression_index_3": "",
        "depression_index_4": "",
        "depression_index_5": "",
        "depression_index_6": "",
        "depression_index_7": ""
    };
}

export function updateQuestionnaireState(appState, questionnaireState) {

    const updatedQuestionnaireState = {
        ...appState.questionnaire,
        ...questionnaireState,
        results: {
            ...appState.questionnaire.results,
            ...questionnaireState.results
        }
    };

    return {
        ...appState,
        questionnaire: updatedQuestionnaireState,
        results: calculateResults(updatedQuestionnaireState)
    };
}

export function calculateResults(questionnaireState) {
    return questionnaireState;
}