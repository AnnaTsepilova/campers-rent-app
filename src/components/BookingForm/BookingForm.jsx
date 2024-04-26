import css from './BookingForm.module.css';

import { SubmitButton } from 'components/Button/Button';
import { validateForm } from 'helpers/bookingFormValidation';
import { successSubmit } from 'helpers/notifications';

const BookingForm = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const bookingData = Object.fromEntries(Array.from(formData.entries()));

    const errors = validateForm(bookingData);

    if (Object.keys(errors).length === 0) {
      console.log('form bookingData :>> ', bookingData);
      successSubmit('Your booking request has been successfully sent');
      reset(event);
    } else {
      console.log('Form is invalid :>> ', errors);
    }
  };

  const reset = event => {
    event.target.reset();
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
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="auto"
              className={css.bookForm_input}
              required
            />
          </label>
          <label htmlFor="email">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="auto"
              className={css.bookForm_input}
              required
            />
          </label>

          <label htmlFor="bookingDate" className={css.calendar_input}>
            <input
              id="bookingDate"
              name="bookingDate"
              type="date"
              placeholder="Booking date"
              className={css.bookForm_input}
              required
            />
          </label>

          <label htmlFor="comment">
            <textarea
              id="comment"
              name="comment"
              placeholder="Comment"
              className={css.bookForm_textarea}
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
