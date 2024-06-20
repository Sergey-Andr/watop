import dynamic from "next/dynamic";

export const dynamicImports = () => {
  const PersonalInfo = dynamic(
    () => import("@/app/profile/settings/components/PersonalInfo"),
    {
      loading: () => <p>Loading Personal Info...</p>,
    },
  );
  const OrdersRecipient = dynamic(
    () => import("@/app/profile/settings/components/OrdersRecipient"),
    {
      loading: () => <p>Loading Orders Recipient...</p>,
    },
  );
  const Contacts = dynamic(
    () => import("@/app/profile/settings/components/Contacts"),
    {
      loading: () => <p>Loading Contacts...</p>,
    },
  );
  const DeliveryAddress = dynamic(
    () => import("@/app/profile/settings/components/DeliveryAddress"),
    {
      loading: () => <p>Loading Delivery Address...</p>,
    },
  );
  const LinkCard = dynamic(
    () => import("@/app/profile/settings/components/LinkCard"),
    {
      loading: () => <p>Loading Link Card...</p>,
    },
  );
  return {
    PersonalInfo,
    OrdersRecipient,
    Contacts,
    DeliveryAddress,
    LinkCard,
  };
};
