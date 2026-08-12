import { useState } from "react";
import { useTranslation } from "react-i18next";

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
    <main>
      <section>
        <h1>{t("contact.title")}</h1>

        <div>
          <h2>{t("contact.address")}</h2>
          <p>Alexandria, Egypt</p>

          <h2>{t("contact.phone")}</h2>
          <p>+20 123 456 7890</p>

          <h2>{t("contact.email")}</h2>
          <p>info@faculty.edu.eg</p>
        </div>
      </section>

      <section>
        <h2>{t("contact.formTitle")}</h2>

        <form onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name">{t("contact.fields.name")}</label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.placeholders.name")}
            />

            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email">{t("contact.fields.email")}</label>

            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.placeholders.email")}
            />

            {errors.email && <p>{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone">{t("contact.fields.phone")}</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("contact.placeholders.phone")}
            />

            {errors.phone && <p>{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="message">{t("contact.fields.message")}</label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.placeholders.message")}
            />

            {errors.message && <p>{errors.message}</p>}
          </div>

          <button type="submit">{t("common.submit")}</button>

          {submitted && <p>{t("contact.success")}</p>}
        </form>
      </section>
    </main>
  );
}

export default Contact;
