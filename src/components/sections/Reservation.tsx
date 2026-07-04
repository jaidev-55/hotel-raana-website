"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, useReducedMotion } from "framer-motion";
import { Input, Select, DatePicker, Button, Segmented } from "antd";
import dayjs, { type Dayjs } from "dayjs";
import { siteConfig } from "@/lib/site-config";

const { TextArea } = Input;
const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

const timeSlots = [
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
  "10:00 PM",
];
const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "10+"];

type FormValues = {
  name: string;
  phone: string;
  type: "Table" | "Party Hall";
  date: Dayjs | null;
  time: string;
  guests: string;
  notes: string;
};

const Reservation = () => {
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: "",
      phone: "",
      type: "Table",
      date: null,
      time: "7:00 PM",
      guests: "2",
      notes: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    const message =
      `Hi Hotel Raana! I'd like to book a ${data.type.toLowerCase()}.\n\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Date: ${data.date ? data.date.format("DD MMM YYYY") : "—"}\n` +
      `Time: ${data.time}\n` +
      `Guests: ${data.guests}\n` +
      (data.notes ? `Note: ${data.notes}\n` : "") +
      `\nThank you!`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
    setSent(true);
  };

  const labelBase = "mb-1.5 block text-sm font-medium text-[#4A423C]";

  return (
    <section id="reserve" className="bg-[#1B1F4B] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left: invitation */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A24B]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C9A24B]">
              Save your table
            </span>
          </div>
          <h2 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Let&apos;s get you a seat at the table
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[#B7B3AC]">
            Planning a family dinner or a big celebration? Tell us a few details
            and we&apos;ll take care of the rest. For parties and hall bookings,
            we&apos;re happy to help you plan it all.
          </p>
          <div className="mt-8 space-y-3">
            <p className="text-sm text-[#8E8A83]">
              Prefer to just call? We&apos;re listening:
            </p>
            <a
              href={`tel:${whatsappNumber}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-[#C9A24B]"
            >
              {siteConfig.phone}
            </a>
          </div>
          <p className="mt-10 text-sm text-[#8E8A83]">
            Open every night till 11 · {siteConfig.city}
          </p>
        </motion.div>

        {/* Right: form card */}
        <motion.div
          initial={{ opacity: 0, y: reduce ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-3xl bg-[#FAF6EF] p-6 shadow-2xl sm:p-8"
        >
          {sent ? (
            <div className="flex min-h-105 flex-col items-center justify-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#4B8B3B]/15 text-3xl text-[#4B8B3B]">
                ✓
              </div>
              <h3 className="font-display text-2xl font-semibold text-[#1B1F4B]">
                Almost there!
              </h3>
              <p className="mt-2 max-w-xs text-[#6B635C]">
                We&apos;ve opened WhatsApp with your booking details — just hit
                send and we&apos;ll confirm your spot shortly.
              </p>
              <button
                onClick={() => {
                  setSent(false);
                  reset();
                }}
                className="mt-6 text-sm font-medium text-[#D4202A] hover:underline"
              >
                Make another booking
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Booking type */}
              <div>
                <span className={labelBase}>What are you booking?</span>
                <Controller
                  name="type"
                  control={control}
                  render={({ field }) => (
                    <Segmented
                      {...field}
                      block
                      size="medium"
                      options={["Table", "Party Hall"]}
                    />
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelBase}>Your name</label>
                  <Controller
                    name="name"
                    control={control}
                    rules={{ required: "Please tell us your name" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="e.g. Priya"
                        size="medium"
                        status={errors.name ? "error" : ""}
                      />
                    )}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-[#D4202A]">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelBase}>Phone number</label>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "We need a number to confirm",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Enter a 10-digit mobile number",
                      },
                    }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="10-digit mobile"
                        size="medium"
                        status={errors.phone ? "error" : ""}
                      />
                    )}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-[#D4202A]">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div>
                  <label className={labelBase}>Date</label>
                  <Controller
                    name="date"
                    control={control}
                    render={({ field }) => (
                      <DatePicker
                        {...field}
                        className="w-full"
                        size="medium"
                        format="DD MMM YYYY"
                        disabledDate={(d) => d && d < dayjs().startOf("day")}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className={labelBase}>Time</label>
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        className="w-full"
                        size="medium"
                        options={timeSlots.map((t) => ({ value: t, label: t }))}
                      />
                    )}
                  />
                </div>
                <div>
                  <label className={labelBase}>Guests</label>
                  <Controller
                    name="guests"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        className="w-full"
                        size="medium"
                        options={guestOptions.map((g) => ({
                          value: g,
                          label: g,
                        }))}
                      />
                    )}
                  />
                </div>
              </div>

              <div>
                <label className={labelBase}>
                  Anything we should know?{" "}
                  <span className="text-[#8E8A83]">(optional)</span>
                </label>
                <Controller
                  name="notes"
                  control={control}
                  render={({ field }) => (
                    <TextArea
                      {...field}
                      rows={2}
                      placeholder="Birthday, high chair, seating preference…"
                    />
                  )}
                />
              </div>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                block
                className="h-auto! rounded-xl! py-3! text-sm! font-semibold! sm:text-base!"
              >
                Send booking on WhatsApp
              </Button>
              <p className="text-center text-xs text-[#8E8A83]">
                We&apos;ll confirm your booking with a quick reply. No payment
                needed.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
