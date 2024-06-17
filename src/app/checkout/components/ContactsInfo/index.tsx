"use client";
import { memo, ReactElement } from "react";
import ContactInfo from "@/app/checkout/components/ContactsInfo/components/СontactInfo";
import CityInfo from "@/app/checkout/components/ContactsInfo/components/CityInfo";

const ContactsInfo = (): ReactElement => {
  return (
    <section className="mb-16">
      <ContactInfo />
      <CityInfo />
    </section>
  );
};

export default memo(ContactsInfo);
