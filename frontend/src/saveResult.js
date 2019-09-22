import Airtable from 'airtable';

const base = new Airtable({apiKey: 'keyITZ8wed871jDWO'})
  .base('app4kNGsdOb37cKaP');

function nullableIntToString(x) {
  return x === null ? "" : x;
}

const createPayload = (result) => {
  return {
    "fields": {
      "age": result.age || "",
      "sex": result.sex || "",
      "aboriginal_or_torres_strait": result.aboriginalOrTorresStrait || "",
      "had_recent_event": result.hadRecentEvent || "",
      "recent_event": result.recentEvent || "",
      "experienced_pain": result.experiencedPain || "",
      "pain_period": result.painPeriod || "",
      "medication_summary": result.medicationSummary || "",
      "family_history_alcohol": result.familyHistory.alcohol || "",
      "family_history_illicit_drugs": result.familyHistory.illicitDrugs || "",
      "family_history_prescription_drugs": result.familyHistory.prescriptionDrugs || "",
      "self_substance_alcohol": result.selfSubstance.alcohol || "",
      "self_substance_illicit_drugs": result.familyHistory.illicitDrugs || "",
      "self_substance_prescription_drugs": result.familyHistory.prescriptionDrugs || "",
      "conditions_adhd": result.conditions.adhd || "",
      "conditions_ocd": result.conditions.ocd || "",
      "conditions_bipolar": result.conditions.bipolar || "",
      "conditions_schizophrenia": result.conditions.schizophrenia || "",
      "conditions_depression": result.conditions.depression || "",
      "depression_1": nullableIntToString(result.depression[0]),
      "depression_2": nullableIntToString(result.depression[1]),
      "depression_3": nullableIntToString(result.depression[2]),
      "depression_4": nullableIntToString(result.depression[3]),
      "depression_5": nullableIntToString(result.depression[4]),
      "depression_6": nullableIntToString(result.depression[5]),
      "depression_7": nullableIntToString(result.depression[6]),
      "pain_worst_last_week": nullableIntToString(result.pain.worstLastWeek),
      "pain_least_last_week": nullableIntToString(result.pain.leastLastWeek),
      "pain_average": nullableIntToString(result.pain.average),
      "pain_now": nullableIntToString(result.pain.now),
    }
  };
}

export const saveResult = (result) => {
  console.log("Q RESULTS", JSON.stringify(result, null, 2));

  return base('Survey').create(
    [ createPayload(result) ], 
    { typecast: true },
    (err, records) => {
      if (err) {
        console.error(err);
      } else {
        records.forEach(function (record) {
          console.log(record.getId());
        });
      }
    });
}