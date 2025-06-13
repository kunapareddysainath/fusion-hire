import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const message = `Hi Sainath,

I'm interested in your services. Here are my details:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "N/A"}

Message: ${formData.message}

Looking forward to hearing from you!`;

      const recipients = ["917981252711", "919496177256"];
      const whatsappLinks = recipients.map(
        (phone) =>
          `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
      );

      whatsappLinks.forEach((url) => window.open(url, "_blank"));

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Message sending failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Full Name *"
            name="name"
            type="text"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
          />
          <FormInput
            label="Email Address *"
            name="email"
            type="email"
            required
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData.phone}
          onChange={handleChange}
        />

        <FormTextarea
          label="Message *"
          name="message"
          required
          placeholder="Tell us about your staffing needs..."
          value={formData.message}
          onChange={handleChange}
        />

        {submitStatus === "success" && (
          <Alert type="success" message="Thank you! Your message has been sent." />
        )}

        {submitStatus === "error" && (
          <Alert type="error" message="There was an error sending your message. Please try again." />
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-primary-600 to-accent-500 text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
          ) : (
            <>
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};

// Reusable Input Component
const FormInput = ({
  label,
  name,
  type,
  required = false,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      required={required}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
    />
  </div>
);

// Reusable Textarea Component
const FormTextarea = ({
  label,
  name,
  required = false,
  placeholder,
  value,
  onChange,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-neutral-700 mb-2">
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      required={required}
      rows={4}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
    />
  </div>
);

// Reusable Alert Component
const Alert = ({ type, message }: { type: "success" | "error"; message: string }) => {
  const Icon = type === "success" ? CheckCircle : AlertCircle;
  const color = type === "success" ? "green" : "red";
  return (
    <div className={`flex items-center space-x-2 text-${color}-600 bg-${color}-50 p-4 rounded-lg`}>
      <Icon className="h-5 w-5" />
      <span>{message}</span>
    </div>
  );
};

export default ContactForm;
