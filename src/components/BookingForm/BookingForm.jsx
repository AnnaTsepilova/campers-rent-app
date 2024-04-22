import { useState } from 'react';

import css from './BookingForm.module.css';
// import svgSprite from '../../img/icons.svg';

import { SubmitButton } from 'components/Button/Button';
import { validateForm } from 'helpers/BookingFormValidation';
import { successSubmit } from 'helpers/notifications';

const INITIAL_STATE = {
  name: '',
  email: '',
  bookingDate: '',
  comment: '',
};

const BookingForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const { name, email, bookingDate, comment } = formData;

  const handleChange = event => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    console.log('event :>> ', formData);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      console.log(formData);
      successSubmit('Your booking request has been successfully sent');
      reset();
    } else {
      console.log('Form is invalid', errors);
    }

    reset();
  };

  const reset = () => {
    setFormData(INITIAL_STATE);
  };

  return (
    <div className={css.bookForm_wrapper}>
      <form
        name="BookingForm"
        className={css.book_form}
        onSubmit={handleSubmit}
      >
        <div className={css.bookForm_title}>
          <h3 className="subtitle_h3">Book your campervan now</h3>
          <p className="text">
            Stay connected! We are always ready to help you.
          </p>
        </div>

        <div className={css.bookForm_inputs}>
          <label htmlFor="name">
            <input
              name="name"
              type="text"
              placeholder="Name"
              className={css.bookForm_input}
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className={css.bookForm_input}
              value={email}
              onChange={handleChange}
              required
            />
          </label>

          <label htmlFor="date" className={css.calendar_input}>
            <input
              name="bookingDate"
              type="date"
              placeholder="Booking date"
              className={css.bookForm_input}
              value={bookingDate}
              onChange={handleChange}
              required
            />
            {/* <svg className={css.calendar_svg} width={20} height={20}>
              <use href={`${svgSprite}#calendar`}></use>
            </svg> */}
          </label>

          <label htmlFor="comment">
            <textarea
              name="comment"
              placeholder="Comment"
              className={css.bookForm_textarea}
              value={comment}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
        <SubmitButton type="submit" className={css.rent_form_button}>
          Send
        </SubmitButton>
      </form>
    </div>
  );
};

export default BookingForm;
