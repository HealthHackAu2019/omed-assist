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

    console.log(JSON.stringify(rawQuestionnareResults));

    const data = rawQuestionnareResults;

    return {
        age: _.get(data, ["age_group"]),
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
        ]
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

    const incomplete  = features.filter(s => s === null).length > 0;

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
    return {
        score: 0,
        incomplete: true
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