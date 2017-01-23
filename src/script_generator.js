import _ from 'lodash';
import { DATE_FORMAT } from './actions';

const multiplier = 5;

const createCommitOnDate = (date, number) => {
  const formattedDate = date.format();
  return (
    `echo '#${number}' >> index.md;
      git add index.md;
      git commit -m "${formattedDate}#${number}" --date="${formattedDate}";`);
};

export const generateScript = (dates, styles) => {
  const script = dates.filter(date => styles[date.format(DATE_FORMAT)])
    .reduce((state, date) => state.concat({
      date,
      activity: styles[date.format(DATE_FORMAT)] * multiplier }),
    [])
    .sort((a, b) => a.date - b.date)
    .reduce((state, dateActivity) => {
      const dayScript = _.range(dateActivity.activity)
        .map(index => index + 1)
        .map(number => createCommitOnDate(dateActivity.date, number))
        .join('\n');

      return `${state}\n${dayScript}`;
    }, '');

  return script.length > 0 ? `git init;\ntouch index.md\n${script}` : '';
};
