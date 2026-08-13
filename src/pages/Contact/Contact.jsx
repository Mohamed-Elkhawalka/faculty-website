import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Contact.css";

function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSubmitted(false);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("errors.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t("errors.phoneRequired");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("errors.messageRequired");
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.formTitle")}</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>{t("contact.title")}</h2>

          <div className="contact-info__item">
            <p className="contact-info__label">
              {t("contact.address")}
            </p>
            <p className="contact-info__value">
              Alexandria, Egypt
            </p>
          </div>

          <div className="contact-info__item">
            <p className="contact-info__label">
              {t("contact.phone")}
            </p>
            <p className="contact-info__value">
              +20 123 456 7890
            </p>
          </div>

          <div className="contact-info__item">
            <p className="contact-info__label">
              {t("contact.email")}
            </p>
            <p className="contact-info__value">
              info@faculty.edu.eg
            </p>
          </div>
        </div>

        <div className="contact-form">
          <h2>{t("contact.formTitle")}</h2>

          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-form__group">
              <label htmlFor="name">
                {t("contact.fields.name")}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.placeholders.name")}
              />

              {errors.name && (
                <p className="contact-form__error">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="contact-form__group">
              <label htmlFor="email">
                {t("contact.fields.email")}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.placeholders.email")}
              />

              {errors.email && (
                <p className="contact-form__error">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="contact-form__group">
              <label htmlFor="phone">
                {t("contact.fields.phone")}
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.placeholders.phone")}
              />

              {errors.phone && (
                <p className="contact-form__error">
                  {errors.phone}
                </p>
              )}
            </div>

            <div className="contact-form__group">
              <label htmlFor="message">
                {t("contact.fields.message")}
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.placeholders.message")}
              />

              {errors.message && (
                <p className="contact-form__error">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="contact-form__submit"
            >
              {t("common.submit")}
            </button>

            {submitted && (
              <p className="contact-form__success">
                {t("contact.success")}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;