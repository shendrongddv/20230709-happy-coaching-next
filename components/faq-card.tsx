import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: 1,
    q: "How long does the coaching process take?",
    a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    q: "What if I wanted to end my coaching engagement?",
    a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 3,
    q: "Can I change through coaching?",
    a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 4,
    q: "How often do we meet?",
    a: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];

const FAQCard = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs?.map((item) => (
        <AccordionItem
          key={item.id}
          value={`item-${item.id}`}
          className="w-full"
        >
          <AccordionTrigger className="text-start text-base font-bold text-primary">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-start text-base">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQCard;
