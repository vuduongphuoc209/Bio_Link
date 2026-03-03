import { useState } from "react"
import styles from "@/styles/Contact.module.scss"
import classNames from "classnames/bind"
import { useI18n } from "@/contexts/i18n"

const cx = classNames.bind(styles)

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export default function Contact() {
  const { t } = useI18n()

  const fieldLabel = (field: keyof FormState) => {
    switch (field) {
      case "name":
        return t("home_full_name")
      case "email":
        return t("home_email")
      case "phone":
        return t("home_phone")
      case "subject":
        return t("contact_subject")
      case "message":
        return t("contact_message")
      default:
        return field
    }
  }

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors: Partial<FormState> = {}

    if (!form.name.trim()) newErrors.name = t("contact_error_required", { field: fieldLabel("name") })
    if (!form.email.trim()) {
      newErrors.email = t("contact_error_required", { field: fieldLabel("email") })
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = t("contact_error_invalid_email")
    }

    if (!form.phone.trim()) newErrors.phone = t("contact_error_required", { field: fieldLabel("phone") })
    if (!form.subject.trim()) newErrors.subject = t("contact_error_required", { field: fieldLabel("subject") })
    if (!form.message.trim()) newErrors.message = t("contact_error_required", { field: fieldLabel("message") })

    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSuccess(false)

    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors({})
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
      setForm({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className={cx("wrapper")}>
      <h1 className={cx("title")}>{t("contact_title")}</h1>

      <form className={cx("form")} onSubmit={handleSubmit}>
        {["name", "email", "phone", "subject"].map((field) => (
          <div key={field} className={cx("inputGroup")}>
            <input
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={t("contact_placeholder_your", { field: fieldLabel(field as keyof FormState) })}
              value={(form as any)[field]}
              onChange={handleChange}
            />
            {errors[field as keyof FormState] && (
              <span className={cx("error")}>
                {errors[field as keyof FormState]}
              </span>
            )}
          </div>
        ))}

        <div className={cx("inputGroup")}>
          <textarea
            name="message"
            placeholder={t("contact_message_placeholder")}
            rows={5}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && (
            <span className={cx("error")}>{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className={cx("submitBtn")}
          disabled={loading}
        >
          {loading ? t("contact_sending") : t("contact_send_message")}
        </button>

        {success && (
          <p className={cx("success")}>
            {t("contact_success")}
          </p>
        )}
      </form>
    </div>
  )
}