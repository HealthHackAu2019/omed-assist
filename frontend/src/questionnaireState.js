import _ from "lodash";

function nullableStringToNullableInt(i) {
    return i == null ? null : parseInt(i);
}

function yesNoStringToNullableBoolean(s) {
    if (s == null)
        return null;

    const sLower = s.toLowerCase();
    if (sLower === "yes") {
        return true;
    } else if (sLower === "no") {
        return false;
    } else {
        return null;
    }
}

export function createQuestionnareResultsFromRaw(rawQuestionnareResults) {
    const data = rawQuestionnareResults;

    return {
        age16To45: yesNoStringToNullableBoolean(_.get(data, ["age_group"], "").replace("age_16_45_", "")),
        familyHistory: {
            alcohol: yesNoStringToNullableBoolean(_.get(data, ["family_history", "fh_alcohol", "" ], "")),
            illicitDrugs: yesNoStringToNullableBoolean(_.get(data, ["family_history", "fh_illicit_drugs", "" ], "")),
            prescriptionDrugs: yesNoStringToNullableBoolean(_.get(data, ["family_history", "fh_prescription_drugs", "" ], ""))
        },
        selfSubstance: {
            alcohol: yesNoStringToNullableBoolean(_.get(data, ["self_substance", "ss_alcohol", "" ], "")),
            illicitDrugs: yesNoStringToNullableBoolean(_.get(data, ["self_substance", "ss_illicit_drugs", "" ], "")),
            prescriptionDrugs: yesNoStringToNullableBoolean(_.get(data, ["self_substance", "ss_prescription_drugs", "" ], ""))
        },
        conditions: {
            adhd: yesNoStringToNullableBoolean(_.get(data, ["conditions", "adhd" ], "")),
            ocd: yesNoStringToNullableBoolean(_.get(data, ["conditions", "ocd" ], "")),
            bipolar: yesNoStringToNullableBoolean(_.get(data, ["conditions", "Bipolar" ], "")),
            schizophrenia: yesNoStringToNullableBoolean(_.get(data, ["conditions", "Schizophrenia" ], "")),
            depression: yesNoStringToNullableBoolean(_.get(data, ["conditions", "Depression" ], ""))
        },
        depression: [
            nullableStringToNullableInt(_.get(data, [ "depression_index_1" ])),
            nullableStringToNullableInt(_.get(data, [ "depression_index_2" ])),
            nullableStringToNullableInt(_.get(data, [ "depression_index_3" ])),
            nullableStringToNullableInt(_.get(data, [ "depression_index_4" ])),
            nullableStringToNullableInt(_.get(data, [ "depression_index_5" ])),
            nullableStringToNullableInt(_.get(data, [ "depression_index_6" ])),
            nullableStringToNullableInt(_.get(data, [ "depression_index_7" ])),
        ]
    }
}


export function calculateResults(questionnaireState) {

    return questionnaireState;
}