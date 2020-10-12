import moment from 'moment';

export const formatDateForReview = (date) => {
  return moment(date).format(`MMMM YYYY`);
};

export const formatDateForReviewAttr = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

export const sortReviewsByTime = (a, b) => {
  const firstDate = moment(a.date);
  const secondDate = moment(b.date);

  return secondDate - firstDate;
};
