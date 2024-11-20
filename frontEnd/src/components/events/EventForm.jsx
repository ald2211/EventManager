import { useFormik } from "formik";
import { createEvent, updateEvent } from "../../api/events";
import { eventSchema } from "../../schemas";
import BackButton from "../reUsable/BackButton";
import { Failed } from "../../helpers/popup";

export const EventForm = ({ event, onSubmit }) => {
  const initialValues = {
    title: event?.title || "",
    description: event?.description || "",
    date: event?.date ? new Date(event.date).toISOString().split("T")[0] : "",
    location: event?.location || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: eventSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = event
          ? await updateEvent(event._id, values)
          : await createEvent(values);
        onSubmit(response);
        resetForm();
      } catch (err) {
        formik.setErrors({ submit: err.message || "Submission failed" });
        Failed(err.message || "Submission failed")
      } finally {
        setSubmitting(false);
      }
    },
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <>
      <div className="card w-3/4 max-w-4xl mx-auto mt-8 shadow-lg bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-1">
            {event ? "Edit Event" : "Create Event"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {errors.submit && (
              <div className="alert alert-error">
                <span>{errors.submit}</span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <input
                  type="text"
                  name="title"
                  placeholder="Event Title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input input-bordered w-full ${
                    errors.title && touched.title ? "input-error" : ""
                  }`}
                />
                {errors.title && touched.title && (
                  <p className="text-error">{errors.title}</p>
                )}
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input input-bordered w-full ${
                    errors.location && touched.location ? "input-error" : ""
                  }`}
                />
                {errors.location && touched.location && (
                  <p className="text-error">{errors.location}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <input
                  type="date"
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input input-bordered w-full ${
                    errors.date && touched.date ? "input-error" : ""
                  }`}
                />
                {errors.date && touched.date && (
                  <p className="text-error">{errors.date}</p>
                )}
              </div>
              <div className="form-control">
                <textarea
                  name="description"
                  placeholder="Event Description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`textarea textarea-bordered w-full ${
                    errors.description && touched.description
                      ? "textarea-error"
                      : ""
                  }`}
                  rows={4}
                ></textarea>
                {errors.description && touched.description && (
                  <p className="text-error">{errors.description}</p>
                )}
              </div>
            </div>
            <button
              type="submit"
              className={`btn btn-primary w-full ${
                isSubmitting ? "loading" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "" : event ? "Update Event" : "Create Event"}
            </button>
          </form>
        </div>
      </div>
      <BackButton isSubmitting={isSubmitting} />
    </>
  );
};
