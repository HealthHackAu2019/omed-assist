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

export function defaultRawQuestionnaireResults() {
    return {
        "worst_pain_last_week": "10",
        "least_pain_last_week": "10",
        "family_history": {
            "fh_alcohol": {
                "": "Yes"
            },
            "fh_illicit_drugs": {
                "": "Yes"
            }
        },
        "self_substance": {
            "ss_alcohol": {
                "": "Yes"
            },
            "ss_illicit_drugs": {
                "": "Yes"
            }
        },
        "conditions": {
            "Depression": "Yes"
        },
        "depression_index_1": "4",
        "depression_index_2": "4"
    };
}

export function createQuestionnareResultsFromRaw(rawQuestionnaireResults) {

    console.log("RAW Q RESULTS", JSON.stringify(rawQuestionnaireResults));

    const data = rawQuestionnaireResults;

    return {
        age: nullableStringToNullableInt(_.get(data, ["age_group"])),
        sex: _.get(data, ["sex"]),
        aboriginalOrTorresStrait: _.get(data, ["ab_or_ts"]),
        hadRecentEvent: _.get(data, ["had_recent_event"]),
        recentEvent: _.get(data, ["recent_event"]),
        experiencedPain: _.get(data, ["exp_pain"]),
        painPeriod: _.get(data, ["pain_period"]),
        medicationSummary: _.get(data, ["medication_summary"]),
        familyHistory: {
            alcohol: yesNoStringToNullableBoolean(_.get(data, ["family_history", "fh_alcohol", ""], "")),
            illicitDrugs: yesNoStringToNullableBoolean(_.get(data, ["family_history", "fh_illicit_drugs", ""], "")),
            prescriptionDrugs: yesNoStringToNullableBoolean(_.get(data, ["family_history", "fh_prescription_drugs", ""], ""))
        },
        selfSubstance: {
            alcohol: yesNoStringToNullableBoolean(_.get(data, ["self_substance", "ss_alcohol", ""], "")),
            illicitDrugs: yesNoStringToNullableBoolean(_.get(data, ["self_substance", "ss_illicit_drugs", ""], "")),
            prescriptionDrugs: yesNoStringToNullableBoolean(_.get(data, ["self_substance", "ss_prescription_drugs", ""], ""))
        },
        conditions: {
            adhd: yesNoStringToNullableBoolean(_.get(data, ["conditions", "adhd"], "")),
            ocd: yesNoStringToNullableBoolean(_.get(data, ["conditions", "ocd"], "")),
            bipolar: yesNoStringToNullableBoolean(_.get(data, ["conditions", "Bipolar"], "")),
            schizophrenia: yesNoStringToNullableBoolean(_.get(data, ["conditions", "Schizophrenia"], "")),
            depression: yesNoStringToNullableBoolean(_.get(data, ["conditions", "Depression"], ""))
        },
        depression: [
            nullableStringToNullableInt(_.get(data, ["depression_index_1"])),
            nullableStringToNullableInt(_.get(data, ["depression_index_2"])),
            nullableStringToNullableInt(_.get(data, ["depression_index_3"])),
            nullableStringToNullableInt(_.get(data, ["depression_index_4"])),
            nullableStringToNullableInt(_.get(data, ["depression_index_5"])),
            nullableStringToNullableInt(_.get(data, ["depression_index_6"])),
            nullableStringToNullableInt(_.get(data, ["depression_index_7"])),
        ],
        pain: {
            worstLastWeek: nullableStringToNullableInt(_.get(data, ["worst_pain_last_week"])),
            leastLastWeek: nullableStringToNullableInt(_.get(data, ["least_pain_last_week"])),
            average: nullableStringToNullableInt(_.get(data, ["avg_pain"])),
            now: nullableStringToNullableInt(_.get(data, ["pain_now"]))
        }
    }
}
function calculateRisk(state) {
    const familyHistory = _.values(state.familyHistory);
    const selfSubstance = _.values(state.selfSubstance);
    const conditions = _.values(state.conditions);

    const features = [
        ...familyHistory,
        ...selfSubstance,
        ...conditions
    ];

    const maxScore = features.length;

    const incomplete = features.filter(s => s === null).length > 0;

    const score = _(features)
        .filter(s => s !== null)
        .map(s => s ? 1 : 0)
        .sum();

    const level = score >= 3 ? "high" : "low";

    return {
        score: score,
        maxScore: maxScore,
        level: level,
        anyFamilyHistoryOfMisuse: _.some(familyHistory),
        depression: state.conditions.depression,
        incomplete: incomplete
    };
}

function calculatePain(state) {

    const features = _.values(state.pain);
    const score = _(features).filter(x => x !== null).sum() / features.length;
    const maxScore = 10;
    const level = score > 4 ? "significant" : "non_significant";
    const incomplete = features.filter(x => x === null).length > 0;

    return {
        score: score,
        maxScore: maxScore,
        level: level,
        incomplete: incomplete
    };
}

function calculateDepression(state) {
    const incomplete = state.depression.filter(x => x === null).length > 0;

    const score = _(state.depression)
        .filter(x => x !== null)
        .map(x => x - 1)
        .sum() * 2;

    const maxScore = state.depression.length * 3 * 2;

    const level = calculateDepressionLevel(score);
    const simplifiedLevel = calculateSimplifiedDepressionLevel(level);

    return {
        score: score,
        maxScore: maxScore,
        level: level,
        simplifiedLevel: simplifiedLevel,
        anyFamilyHistoryOfMisuse: true,
        incomplete: incomplete
    };
}

function calculateDepressionLevel(score) {
    if (score <= 9) {
        return "normal";
    } else if (score <= 13) {
        return "mild";
    } else if (score <= 20) {
        return "moderate";
    } else if (score <= 27) {
        return "severe";
    } else {
        return "extremely_severe";
    }
}

function calculateSimplifiedDepressionLevel(level) {
    switch (level) {
        case "mild":
        case "moderate":
            return "mild_moderate";
        case "severe":
        case "extremely_severe":
            return "severe_extremely_severe";
        default:
            return level;
    }
}

export function calculateResults(questionnaireState) {
    return {
        risk: calculateRisk(questionnaireState.results),
        depression: calculateDepression(questionnaireState.results),
        pain: calculatePain(questionnaireState.results)
    };
}