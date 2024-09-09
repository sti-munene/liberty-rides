import React from "react";
import { Heading, Text } from "../typography";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What do I need to rent a car?",
    answer:
      "To rent a car, you'll need a valid driver's license, a credit or debit card in your name, and proof of insurance. You must also meet the minimum age requirement, which is typically 21 years old, but this can vary based on location and vehicle type.",
  },
  {
    id: 2,
    question: "Can I rent a car without a credit card?",
    answer:
      "Yes, some locations accept debit cards, but additional identification and proof of insurance may be required. Please check with the specific rental location for their policy on debit card rentals.",
  },
  {
    id: 3,
    question: "Are there any additional fees I should be aware of?",
    answer:
      "Additional fees may apply for things like extra drivers, GPS rental, child seats, or returning the car late. Make sure to review the rental terms and conditions for a complete list of potential charges.",
  },
  {
    id: 4,
    question: "Can I return the rental car to a different location?",
    answer:
      "Yes, one-way rentals are often available, allowing you to return the car to a different location. However, there may be an additional fee for this service, so be sure to check the terms when booking.",
  },
  {
    id: 5,
    question: "What happens if I return the car late?",
    answer:
      "If you return the car later than the scheduled return time, additional charges may apply. The late fee is typically based on the rental rate and the duration of the delay. It's recommended to inform the rental office in advance if you expect to be late.",
  },
];

export const FAQSection = () => {
  return (
    <div className="py-24">
      <Heading className="text-primary-500" size="heading3" font="display">
        Frequently Asked Questions
      </Heading>

      <div className="mt-8 flex flex-col items-start gap-2">
        {faqs.map((faq, idx) => {
          return (
            <Disclosure
              key={faq.id}
              as="div"
              className="p-6 w-full bg-white rounded-sm"
              defaultOpen={idx === 0 ? true : false}
            >
              <DisclosureButton className="group flex w-full items-start md:items-center justify-between">
                <Heading
                  as="span"
                  size="subtitle2"
                  weight="medium"
                  className="text-left group-data-[hover]:text-primary group-data-[open]:text-primary"
                >
                  {faq.question}
                </Heading>
                <ChevronDown className="size-5 stroke-current group-data-[hover]:stroke-primary group-data-[open]:stroke-primary group-data-[open]:rotate-270" />
              </DisclosureButton>
              <DisclosurePanel className="mt-2">
                <Text as="p">{faq.answer}</Text>
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};
