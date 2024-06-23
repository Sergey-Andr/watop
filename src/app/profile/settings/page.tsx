"use server";
import { MdOutlineAccountCircle, MdOutlineMessage } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { dynamicImports } from "src/app/profile/settings/components/dynamicImports";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logout from "src/app/profile/settings/components/Logout";

export default async function Settings() {
  const { OrdersRecipient, Contacts, DeliveryAddress, PersonalInfo, LinkCard } =
    dynamicImports();

  return (
    <section>
      <h2 className="text-5xl mb-4">Лична информация</h2>
      <Accordion type="single" collapsible className="text-xl mb-8">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span>
              <MdOutlineAccountCircle className="mr-4" />
            </span>
            <h3>Лична информация</h3>
          </AccordionTrigger>
          <AccordionContent>
            <PersonalInfo />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <span>
              <BsBoxSeam className="mr-4" />
            </span>
            <h3>Моят получателен ред</h3>
          </AccordionTrigger>
          <AccordionContent>
            <OrdersRecipient />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <span>
              <MdOutlineMessage className="mr-4" />
            </span>
            <h3>Контакти</h3>
          </AccordionTrigger>
          <AccordionContent>
            <Contacts />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            <span>
              <TbTruckDelivery className="mr-4" />
            </span>
            <h3>Адрес за доставка</h3>
          </AccordionTrigger>
          <AccordionContent>
            <DeliveryAddress />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            <span>
              <CiCreditCard1 className="mr-4" />
            </span>
            <h3>Свързване на карта</h3>
          </AccordionTrigger>
          <AccordionContent>
            <LinkCard />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Logout />
    </section>
  );
}
