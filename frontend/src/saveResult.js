import Airtable from 'airtable';

const base = new Airtable({apiKey: 'keyITZ8wed871jDWO'})
  .base('app4kNGsdOb37cKaP');

export const saveResult = () => {
  return base('Survey').create([
    {
      "fields": {
        "Q1": [
          "A1",
          "A2"
        ]
      }
    },
    {
      "fields": {
        "Q1": [
          "A1",
          "A2"
        ]
      }
    }
  ], function(err, records) {
    if (err) {
      console.error(err);
    } else {
      records.forEach(function (record) {
        console.log(record.getId());
      });
    }
  });
}