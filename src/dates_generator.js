import moment from 'moment';

const generateDatesRange = (startDate, endDate) => {
  const dates = [];

  let currentDate = moment(startDate);
  const stopDate = moment(endDate);

  while (currentDate <= stopDate) {
    dates.push(currentDate);
    currentDate = moment(currentDate).add(1, 'days');
  }

  return dates;
};

const completeDatesRangeToStartDayOfWeek = (dates) => {
  if (dates[0].day() > 0) {
    const startMoment = moment(dates[0]);
    const additionalDatesToStart = generateDatesRange(
      moment(startMoment).subtract(startMoment.day(), 'days'),
      moment(startMoment).subtract(1, 'days'),
    );

    dates = additionalDatesToStart.concat(dates);
  }

  return dates;
};

const completeDatesRangeToLastDayOfWeek = (dates) => {
  if (dates[dates.length - 1].day() < 6) {
    const endMoment = moment(dates[dates.length - 1]);

    const additionalDatesToEnd = generateDatesRange(
      moment(endMoment).add(1, 'days'),
      moment(endMoment).add(6 - endMoment.day(), 'days'),
    );

    dates = dates.concat(additionalDatesToEnd);
  }

  return dates;
};

export const generateDatesRangeInYear = (year = moment().year(), complete = false) => {
  let dates = generateDatesRange(
    moment(`${year}-01-01 00:00 +00:00`, 'YYYY-MM-DD HH:mm Z'),
    moment().year() !== year || complete ? moment(`${year}-12-31 00:00 +00:00`, 'YYYY-MM-DD HH:mm Z') : moment(),
  );
  dates = completeDatesRangeToStartDayOfWeek(dates);
  dates = completeDatesRangeToLastDayOfWeek(dates);

  return dates;
};
