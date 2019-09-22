import Airtable from 'airtable';

const base = new Airtable({apiKey: 'keyITZ8wed871jDWO'})
  .base('app4kNGsdOb37cKaP');

const createPayload = (result) => {
  return {
    "fields": {
      "age_16_to_45": result.age16To45 || "",
      "family_history_alcohol": result.familyHistory.alcohol || "",
      "self_substance_alcohol": result.selfSubstance.alcohol || "",
      "conditions_adhd": result.conditions.adhd || ""
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