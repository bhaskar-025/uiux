"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Send, ShieldCheck } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  interest: string;
  scope: string;
  description: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  description?: string;
}

const interestOptions = [
  "Embedded Conversational AI",
  "AI Customer Support",
  "Enterprise Knowledge Assistants",
  "Workflow Automation",
  "AI in SaaS Products",
  "Custom AI Integration",
  "General Inquiry",
];

const scopeOptions = [
  "Proof of Concept",
  "Single Department",
  "Multi-Department",
  "Enterprise-Wide",
  "Not Sure Yet",
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    interest: "",
    scope: "",
    description: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Enter a valid work email address.";
    }
    if (!formData.company.trim()) newErrors.company = "Company name is required.";
    if (!formData.interest) newErrors.interest = "Select an area of interest.";
    if (!formData.description.trim()) {
      newErrors.description = "Briefly describe your project or requirements.";
    }
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof FormErrors];
        return next;
      });
    }
  }

  if (submitted) {
    return (
      <Card className="rounded-xl border border-zinc-700 bg-zinc-950 p-4 text-center animate-fade-in shadow-[0_0_40px_rgba(255,255,255,0.08)]">
        <CardContent className="flex flex-col items-center py-12">
          <div className="mb-5 inline-flex size-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white animate-pulse">
            <CheckCircle2 className="size-8 text-white" aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-medium text-white tracking-tight">Consultation Request Received</h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-zinc-300 font-normal">
            Thank you for exploring embedded AI integrations with Nexora AI.
            This demonstration submission validated successfully on the client side.
            In production, a team architect would review your stack within 24 business hours.
          </p>
          <div className="mt-6 flex items-center gap-2.5 rounded-full border border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-950 px-4 py-1.5 text-sm text-zinc-300 font-normal">
            <ShieldCheck className="size-4 text-white" />
            <span>Zero data stored remotely (Academic demo mode)</span>
          </div>
          <Button
            variant="outline"
            className="mt-8 border-zinc-700 hover:border-white font-medium"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                company: "",
                interest: "",
                scope: "",
                description: "",
              });
            }}
          >
            Submit Another Request
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/60 via-zinc-950/90 to-black p-0 shadow-2xl shadow-black/60">
      <CardContent className="p-6 sm:p-8">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="contact-name" className="text-base font-normal text-zinc-200">
              Full Name *
            </Label>
            <Input
              id="contact-name"
              type="text"
              placeholder="e.g. Alex Mercer"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              autoComplete="name"
              className="border-zinc-800 bg-gradient-to-b from-black to-zinc-950 text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white transition-all text-base font-normal h-11"
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-400 font-normal" role="alert">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="contact-email" className="text-base font-normal text-zinc-200">
              Work Email *
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="alex@enterprise.com"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              autoComplete="email"
              className="border-zinc-800 bg-gradient-to-b from-black to-zinc-950 text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white transition-all text-base font-normal h-11"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-400 font-normal" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* Company */}
          <div className="space-y-2">
            <Label htmlFor="contact-company" className="text-base font-normal text-zinc-200">
              Company Name *
            </Label>
            <Input
              id="contact-company"
              type="text"
              placeholder="Acme Global Inc."
              value={formData.company}
              onChange={(e) => handleChange("company", e.target.value)}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              autoComplete="organization"
              className="border-zinc-800 bg-gradient-to-b from-black to-zinc-950 text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white transition-all text-base font-normal h-11"
            />
            {errors.company && (
              <p id="company-error" className="text-sm text-red-400 font-normal" role="alert">
                {errors.company}
              </p>
            )}
          </div>

          {/* Area of Interest */}
          <div className="space-y-2">
            <Label htmlFor="contact-interest" className="text-base font-normal text-zinc-200">
              Primary Area of Interest *
            </Label>
            <Select
              value={formData.interest}
              onValueChange={(val) => handleChange("interest", val ?? "")}
            >
              <SelectTrigger
                id="contact-interest"
                aria-invalid={!!errors.interest}
                aria-describedby={errors.interest ? "interest-error" : undefined}
                className="w-full border-zinc-800 bg-gradient-to-b from-black to-zinc-950 text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white transition-all text-base font-normal h-11"
              >
                <SelectValue placeholder="Select solution area" />
              </SelectTrigger>
              <SelectContent className="border-zinc-800 bg-zinc-950 text-white">
                {interestOptions.map((option) => (
                  <SelectItem key={option} value={option} className="hover:bg-zinc-900 focus:bg-zinc-900 cursor-pointer text-base font-normal py-2.5">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.interest && (
              <p id="interest-error" className="text-sm text-red-400 font-normal" role="alert">
                {errors.interest}
              </p>
            )}
          </div>

          {/* Scope */}
          <div className="space-y-2">
            <Label htmlFor="contact-scope" className="text-base font-normal text-zinc-200">
              Approximate Project Scope
            </Label>
            <Select
              value={formData.scope}
              onValueChange={(val) => handleChange("scope", val ?? "")}
            >
              <SelectTrigger id="contact-scope" className="w-full border-zinc-800 bg-gradient-to-b from-black to-zinc-950 text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white transition-all text-base font-normal h-11">
                <SelectValue placeholder="Select scope (optional)" />
              </SelectTrigger>
              <SelectContent className="border-zinc-800 bg-zinc-950 text-white">
                {scopeOptions.map((option) => (
                  <SelectItem key={option} value={option} className="hover:bg-zinc-900 focus:bg-zinc-900 cursor-pointer text-base font-normal py-2.5">
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="contact-description" className="text-base font-normal text-zinc-200">
              Project Description & Requirements *
            </Label>
            <Textarea
              id="contact-description"
              placeholder="Describe your current software stack, workflows you want to automate, and anticipated agent capabilities..."
              rows={4}
              value={formData.description}
              onChange={(e) => handleChange("description", e.target.value)}
              aria-invalid={!!errors.description}
              aria-describedby={errors.description ? "description-error" : undefined}
              className="border-zinc-800 bg-gradient-to-b from-black to-zinc-950 text-white placeholder:text-zinc-600 focus-visible:border-white focus-visible:ring-1 focus-visible:ring-white transition-all text-base font-normal leading-relaxed"
            />
            {errors.description && (
              <p id="description-error" className="text-sm text-red-400 font-normal" role="alert">
                {errors.description}
              </p>
            )}
          </div>

          <Button type="submit" size="lg" className="w-full font-medium shadow-[0_0_25px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-all">
            <Send className="mr-2 size-5" aria-hidden="true" />
            <span>Submit Consultation Request</span>
          </Button>

          <p className="text-center text-sm text-zinc-400 font-normal">
            Client-side validation demo. No secret keys or remote storage involved.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
